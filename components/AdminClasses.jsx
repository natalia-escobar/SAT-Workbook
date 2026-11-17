"use client";

// components/AdminClasses.jsx
// The admin Classes screen: a DDCUS switch per tutor, and per student a "move to" menu
// and a Delete button (with a confirmation step).

import { useState, useTransition } from "react";
import { setDdcusAccess, moveStudent, deleteStudent } from "@/app/admin/classes/actions";

const row = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  padding: "14px 20px",
  border: "0.5px solid #e0e0de",
  borderRadius: "10px",
  marginTop: "8px",
};
const sectionTitle = { fontSize: "15px", fontWeight: 600, margin: "28px 0 4px" };
const muted = { fontSize: "13px", color: "#777" };
const smallButton = {
  fontSize: "14px",
  padding: "6px 12px",
  border: "0.5px solid #b0b0ae",
  borderRadius: "8px",
  background: "#fff",
  color: "#1a1a1a",
  cursor: "pointer",
};
const dangerButton = { ...smallButton, border: "0.5px solid #d9534f", color: "#b3261e" };
const dangerSolid = { ...smallButton, border: "0.5px solid #b3261e", background: "#b3261e", color: "#fff" };
const pill = {
  fontSize: "12px",
  fontWeight: 500,
  marginLeft: "8px",
  padding: "2px 8px",
  borderRadius: "10px",
  background: "#fdf1d8",
  color: "#7a5200",
  verticalAlign: "middle",
};

const nameKey = (name) => String(name ?? "").trim().replace(/\s+/g, " ").toLowerCase();
const answersLabel = (n) => (n == null ? "saved answers unknown" : `${n} saved answer${n === 1 ? "" : "s"}`);

function Switch({ on, disabled, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!on)}
      style={{
        width: "42px",
        height: "24px",
        borderRadius: "12px",
        border: "none",
        padding: 0,
        flexShrink: 0,
        position: "relative",
        cursor: disabled ? "default" : "pointer",
        background: on ? "#1a1a1a" : "#d5d5d2",
        opacity: disabled ? 0.5 : 1,
        transition: "background .15s",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "3px",
          left: on ? "21px" : "3px",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "#fff",
          transition: "left .15s",
        }}
      />
    </button>
  );
}

export default function AdminClasses({ owners, students }) {
  const [pending, startTransition] = useTransition();
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState("");
  const [confirmId, setConfirmId] = useState(null);

  function run(id, action) {
    setError("");
    setBusyId(id);
    startTransition(async () => {
      const result = await action();
      if (!result?.ok) setError(result?.error || "Something went wrong. Nothing was changed.");
      setBusyId(null);
      setConfirmId(null);
    });
  }

  // Names that appear on more than one student account.
  const nameCounts = new Map();
  for (const s of students) {
    const k = nameKey(s.full_name);
    if (k) nameCounts.set(k, (nameCounts.get(k) ?? 0) + 1);
  }
  const isDuplicate = (s) => (nameCounts.get(nameKey(s.full_name)) ?? 0) > 1;

  const countFor = (ownerId) => students.filter((s) => s.tutor_id === ownerId).length;
  const ownerIds = new Set(owners.map((o) => o.id));
  const unassigned = students.filter((s) => !ownerIds.has(s.tutor_id));
  const groups = [
    ...owners.map((o) => ({ id: o.id, name: o.full_name || "Unnamed", list: students.filter((s) => s.tutor_id === o.id) })),
    { id: "none", name: "No tutor", list: unassigned },
  ].filter((g) => g.list.length > 0);

  return (
    <div>
      {error && (
        <div role="alert" style={{ ...row, border: "0.5px solid #d9534f", color: "#b3261e", marginTop: 0 }}>
          {error}
        </div>
      )}

      <h2 style={{ ...sectionTitle, marginTop: 0 }}>DDCUS access</h2>
      <p style={muted}>
        Switch on to show the DDCUS section to this tutor and all of their students. Admins always see it.
      </p>
      {owners.map((o) => (
        <div key={o.id} style={row}>
          <div>
            <div style={{ fontSize: "16px", fontWeight: 600 }}>{o.full_name || "Unnamed"}</div>
            <div style={muted}>
              {o.role === "admin" ? "Admin" : "Tutor"}
              {o.signup_code ? ` · code ${o.signup_code}` : " · no class code"}
              {` · ${countFor(o.id)} student${countFor(o.id) === 1 ? "" : "s"}`}
            </div>
          </div>
          <Switch
            on={!!o.ddcus_access}
            disabled={pending && busyId === o.id}
            label={`DDCUS access for ${o.full_name || "this tutor"}`}
            onChange={(next) => run(o.id, () => setDdcusAccess(o.id, next))}
          />
        </div>
      ))}

      <h2 style={sectionTitle}>Students</h2>
      <p style={muted}>
        Pick a different tutor to move a student. Their DDCUS access follows the new tutor. Deleting a student
        permanently removes their login, saved answers, and notes.
      </p>
      {groups.length === 0 && <div style={{ ...muted, marginTop: "8px" }}>No students yet.</div>}
      {groups.map((g) => (
        <div key={g.id}>
          <div style={{ ...muted, fontWeight: 600, margin: "16px 0 0 4px" }}>{g.name}</div>
          {g.list.map((s) => {
            const busy = pending && busyId === s.id;
            const confirming = confirmId === s.id;
            return (
              <div key={s.id} style={{ ...row, border: confirming ? "0.5px solid #d9534f" : row.border }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "16px", fontWeight: 600 }}>
                    {s.full_name || "Unnamed"}
                    {isDuplicate(s) && <span style={pill}>Possible duplicate</span>}
                  </div>
                  <div style={muted}>
                    {s.email || "no email on file"} · {answersLabel(s.answers)}
                  </div>
                </div>

                {confirming ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                    <span style={{ fontSize: "14px", color: "#b3261e" }}>
                      Delete this account and its {answersLabel(s.answers)}? This can't be undone.
                    </span>
                    <button type="button" style={smallButton} disabled={busy} onClick={() => setConfirmId(null)}>
                      Cancel
                    </button>
                    <button
                      type="button"
                      style={{ ...dangerSolid, opacity: busy ? 0.6 : 1 }}
                      disabled={busy}
                      onClick={() => run(s.id, () => deleteStudent(s.id))}
                    >
                      {busy ? "Deleting…" : "Delete permanently"}
                    </button>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                    <select
                      aria-label={`Tutor for ${s.full_name || "this student"}`}
                      value={ownerIds.has(s.tutor_id) ? s.tutor_id : ""}
                      disabled={busy}
                      onChange={(e) => {
                        const next = e.target.value;
                        if (next) run(s.id, () => moveStudent(s.id, next));
                      }}
                      style={{ ...smallButton, cursor: "default" }}
                    >
                      {!ownerIds.has(s.tutor_id) && <option value="">Choose a tutor…</option>}
                      {owners.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.full_name || "Unnamed"}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      aria-label={`Delete ${s.full_name || "this student"}`}
                      style={dangerButton}
                      disabled={busy}
                      onClick={() => {
                        setError("");
                        setConfirmId(s.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}