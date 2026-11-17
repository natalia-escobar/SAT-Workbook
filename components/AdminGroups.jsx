"use client";

// components/AdminGroups.jsx
// The Groups section of the admin Tutors screen. Per tutor: their groups, with
// New group / Edit / Delete. A group is a name plus some of that tutor's students.

import { useState, useTransition } from "react";
import { saveGroup, deleteGroup } from "@/app/admin/classes/groupActions";

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
const solidButton = { ...smallButton, border: "0.5px solid #1a1a1a", background: "#1a1a1a", color: "#fff" };
const dangerButton = { ...smallButton, border: "0.5px solid #d9534f", color: "#b3261e" };
const dangerSolid = { ...smallButton, border: "0.5px solid #b3261e", background: "#b3261e", color: "#fff" };
const buttons = { display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 };

export default function AdminGroups({ owners, students, groups }) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");
  // editor: null, or { id (null = new), tutorId, name, studentIds: [] }
  const [editor, setEditor] = useState(null);
  const [confirmId, setConfirmId] = useState(null);

  const studentsOf = (ownerId) => students.filter((s) => s.tutor_id === ownerId);
  const groupsOf = (ownerId) => groups.filter((g) => g.tutor_id === ownerId);
  const nameOf = new Map(students.map((s) => [s.id, s.full_name || "Unnamed"]));

  // Same-named students get their email shown so they can be told apart.
  const nameCounts = new Map();
  for (const s of students) {
    const k = (s.full_name ?? "").trim().toLowerCase();
    nameCounts.set(k, (nameCounts.get(k) ?? 0) + 1);
  }
  const pickLabel = (s) =>
    (nameCounts.get((s.full_name ?? "").trim().toLowerCase()) ?? 0) > 1 && s.email
      ? `${s.full_name || "Unnamed"} (${s.email})`
      : s.full_name || "Unnamed";

  const shown = owners.filter((o) => studentsOf(o.id).length > 0 || groupsOf(o.id).length > 0);

  function run(action) {
    setError("");
    startTransition(async () => {
      const result = await action();
      if (!result?.ok) {
        setError(result?.error || "Something went wrong. Nothing was changed.");
        return; // keep the editor open so nothing typed is lost
      }
      setEditor(null);
      setConfirmId(null);
    });
  }

  const open = (next) => { setError(""); setConfirmId(null); setEditor(next); };
  const toggleStudent = (id) =>
    setEditor((e) => ({
      ...e,
      studentIds: e.studentIds.includes(id) ? e.studentIds.filter((x) => x !== id) : [...e.studentIds, id],
    }));

  function Editor({ ownerId }) {
    const roster = studentsOf(ownerId);
    return (
      <div style={{ ...row, display: "block", border: "0.5px solid #1a1a1a" }}>
        <label style={{ ...muted, display: "block", fontWeight: 600 }} htmlFor="group-name">
          Group name
        </label>
        <input
          id="group-name"
          type="text"
          autoFocus
          maxLength={60}
          placeholder="e.g. Tuesday 4pm"
          value={editor.name}
          onChange={(e) => setEditor((ed) => ({ ...ed, name: e.target.value }))}
          style={{ ...smallButton, cursor: "text", width: "100%", maxWidth: "360px", marginTop: "6px" }}
        />

        <div style={{ ...muted, fontWeight: 600, marginTop: "16px" }}>
          Students ({editor.studentIds.length} selected)
        </div>
        {roster.length === 0 && <div style={{ ...muted, marginTop: "6px" }}>This tutor has no students yet.</div>}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
          {roster.map((s) => {
            const on = editor.studentIds.includes(s.id);
            return (
              <label
                key={s.id}
                style={{
                  ...smallButton,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: on ? "0.5px solid #1a1a1a" : smallButton.border,
                  background: on ? "#f5f5f3" : "#fff",
                }}
              >
                <input type="checkbox" checked={on} onChange={() => toggleStudent(s.id)} />
                {pickLabel(s)}
              </label>
            );
          })}
        </div>

        <div style={{ ...buttons, marginTop: "16px" }}>
          <button
            type="button"
            style={{ ...solidButton, opacity: pending ? 0.6 : 1 }}
            disabled={pending}
            onClick={() =>
              run(() =>
                saveGroup({ id: editor.id, tutorId: editor.tutorId, name: editor.name, studentIds: editor.studentIds })
              )
            }
          >
            {pending ? "Saving…" : editor.id ? "Save changes" : "Create group"}
          </button>
          <button type="button" style={smallButton} disabled={pending} onClick={() => open(null)}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 style={sectionTitle}>Groups</h2>
      <p style={muted}>
        Group a tutor&apos;s students into the classes they attend together. A student can be in more than one
        group. Deleting a group never deletes students or their work.
      </p>

      {error && (
        <div role="alert" style={{ ...row, border: "0.5px solid #d9534f", color: "#b3261e" }}>
          {error}
        </div>
      )}

      {shown.length === 0 && <div style={{ ...muted, marginTop: "8px" }}>No tutors with students yet.</div>}

      {shown.map((o) => {
        const list = groupsOf(o.id);
        const creatingHere = editor && editor.id === null && editor.tutorId === o.id;
        return (
          <div key={o.id}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "16px 0 0 4px" }}>
              <div style={{ ...muted, fontWeight: 600 }}>{o.full_name || "Unnamed"}</div>
              {!creatingHere && (
                <button
                  type="button"
                  style={smallButton}
                  disabled={pending}
                  onClick={() => open({ id: null, tutorId: o.id, name: "", studentIds: [] })}
                >
                  New group
                </button>
              )}
            </div>

            {list.length === 0 && !creatingHere && (
              <div style={{ ...muted, margin: "6px 0 0 4px" }}>No groups yet.</div>
            )}

            {list.map((g) => {
              if (editor && editor.id === g.id) return <div key={g.id}>{Editor({ ownerId: o.id })}</div>;
              const confirming = confirmId === g.id;
              const names = g.studentIds.map((id) => nameOf.get(id)).filter(Boolean).sort();
              return (
                <div key={g.id} style={{ ...row, border: confirming ? "0.5px solid #d9534f" : row.border }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "16px", fontWeight: 600 }}>{g.name}</div>
                    <div style={muted}>{names.length ? names.join(", ") : "No students in this group yet"}</div>
                  </div>
                  {confirming ? (
                    <div style={buttons}>
                      <span style={{ fontSize: "14px", color: "#b3261e" }}>
                        Delete this group? Students and their work stay.
                      </span>
                      <button type="button" style={smallButton} disabled={pending} onClick={() => setConfirmId(null)}>
                        Cancel
                      </button>
                      <button
                        type="button"
                        style={{ ...dangerSolid, opacity: pending ? 0.6 : 1 }}
                        disabled={pending}
                        onClick={() => run(() => deleteGroup(g.id))}
                      >
                        {pending ? "Deleting…" : "Delete group"}
                      </button>
                    </div>
                  ) : (
                    <div style={buttons}>
                      <button
                        type="button"
                        style={smallButton}
                        disabled={pending}
                        onClick={() => open({ id: g.id, tutorId: o.id, name: g.name, studentIds: [...g.studentIds] })}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        aria-label={`Delete group ${g.name}`}
                        style={dangerButton}
                        disabled={pending}
                        onClick={() => { setError(""); setEditor(null); setConfirmId(g.id); }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {creatingHere && Editor({ ownerId: o.id })}
          </div>
        );
      })}
    </div>
  );
}