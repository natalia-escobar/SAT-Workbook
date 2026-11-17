"use client";

// components/ClassHistory.jsx
// The Class history screen: every recorded class, newest first, with Edit times and Delete,
// plus "Add a past class" for one that was never started in the app.
// Times are typed and shown in Eastern time.

import { useState, useTransition } from "react";
import { addPastClass, saveClassTimes, deleteClass } from "@/lib/classHistory";

const row = {
  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
  padding: "14px 20px", border: "0.5px solid #e0e0de", borderRadius: "10px", marginTop: "8px",
};
const muted = { fontSize: "13px", color: "#777" };
const smallButton = {
  fontSize: "14px", padding: "6px 12px", border: "0.5px solid #b0b0ae", borderRadius: "8px",
  background: "#fff", color: "#1a1a1a", cursor: "pointer", fontFamily: "inherit",
};
const solidButton = { ...smallButton, border: "0.5px solid #1a1a1a", background: "#1a1a1a", color: "#fff", fontWeight: 600 };
const dangerButton = { ...smallButton, border: "0.5px solid #d9534f", color: "#b3261e" };
const dangerSolid = { ...smallButton, border: "0.5px solid #b3261e", background: "#b3261e", color: "#fff" };
const buttons = { display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 };
const field = { ...smallButton, cursor: "text" };
const label = { ...muted, fontWeight: 600, display: "block", marginBottom: "6px" };
const pill = {
  fontSize: "12px", fontWeight: 500, marginLeft: "8px", padding: "2px 8px", borderRadius: "10px",
  background: "#fdf1d8", color: "#7a5200", verticalAlign: "middle",
};
const chip = (on) => ({
  ...smallButton, display: "inline-flex", alignItems: "center", gap: "8px",
  border: on ? "0.5px solid #1a1a1a" : smallButton.border, background: on ? "#f5f5f3" : "#fff",
});

function TimeFields({ value, onChange, max }) {
  const set = (key) => (e) => onChange({ ...value, [key]: e.target.value });
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
      <label>
        <span style={label}>Date</span>
        <input type="date" style={field} value={value.date} max={max} onChange={set("date")} />
      </label>
      <label>
        <span style={label}>Start</span>
        <input type="time" style={field} value={value.start} onChange={set("start")} />
      </label>
      <label>
        <span style={label}>End</span>
        <input type="time" style={field} value={value.end} onChange={set("end")} />
      </label>
    </div>
  );
}

export default function ClassHistory({ me, today, sessions, owners, students, groups }) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [adding, setAdding] = useState(null); // { tutorId, date, start, end, studentIds }
  const [editing, setEditing] = useState(null); // { id, date, start, end }
  const [confirmId, setConfirmId] = useState(null);

  function run(action) {
    setError("");
    startTransition(async () => {
      const result = await action();
      if (!result?.ok) { setError(result?.error || "Something went wrong. Nothing was changed."); return; }
      setAdding(null);
      setEditing(null);
      setConfirmId(null);
    });
  }
  const reset = () => { setError(""); setAdding(null); setEditing(null); setConfirmId(null); };

  const rosterFor = (tutorId) => students.filter((s) => s.tutorId === tutorId);
  const groupsFor = (tutorId) => groups.filter((g) => g.tutorId === tutorId);
  const toggleStudent = (id) =>
    setAdding((a) => ({ ...a, studentIds: a.studentIds.includes(id) ? a.studentIds.filter((x) => x !== id) : [...a.studentIds, id] }));
  const toggleGroup = (g) =>
    setAdding((a) => ({
      ...a,
      studentIds: g.studentIds.every((id) => a.studentIds.includes(id))
        ? a.studentIds.filter((id) => !g.studentIds.includes(id))
        : [...new Set([...a.studentIds, ...g.studentIds])],
    }));

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
        <p style={muted}>
          Work a student answers during a class shows as &ldquo;In class&rdquo; on their page. Fix a class that was
          started late or left running, or add one that was never started. Times are Eastern.
        </p>
        {!adding && (
          <button
            type="button"
            style={{ ...solidButton, flexShrink: 0 }}
            disabled={pending}
            onClick={() => { reset(); setAdding({ tutorId: me.id, date: today, start: "", end: "", studentIds: [] }); }}
          >
            Add a past class
          </button>
        )}
      </div>

      {error && (
        <div role="alert" style={{ ...row, border: "0.5px solid #d9534f", color: "#b3261e" }}>{error}</div>
      )}

      {adding && (
        <div style={{ ...row, display: "block", border: "0.5px solid #1a1a1a", marginTop: "16px" }}>
          <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "14px" }}>Add a past class</div>

          {me.isAdmin && owners.length > 1 && (
            <label style={{ display: "block", marginBottom: "14px" }}>
              <span style={label}>Tutor</span>
              <select
                style={field}
                value={adding.tutorId}
                onChange={(e) => setAdding((a) => ({ ...a, tutorId: e.target.value, studentIds: [] }))}
              >
                {owners.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
              </select>
            </label>
          )}

          <TimeFields value={adding} max={today} onChange={setAdding} />

          {groupsFor(adding.tutorId).length > 0 && (
            <>
              <div style={{ ...label, marginTop: "16px" }}>Groups</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {groupsFor(adding.tutorId).map((g) => {
                  const on = g.studentIds.every((id) => adding.studentIds.includes(id));
                  return (
                    <label key={g.id} style={chip(on)}>
                      <input type="checkbox" checked={on} onChange={() => toggleGroup(g)} />
                      {g.name} <span style={{ color: "#777" }}>({g.studentIds.length})</span>
                    </label>
                  );
                })}
              </div>
            </>
          )}

          <div style={{ ...label, marginTop: "16px" }}>Students ({adding.studentIds.length} selected)</div>
          {rosterFor(adding.tutorId).length === 0 && <div style={muted}>This tutor has no students.</div>}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {rosterFor(adding.tutorId).map((s) => {
              const on = adding.studentIds.includes(s.id);
              return (
                <label key={s.id} style={chip(on)}>
                  <input type="checkbox" checked={on} onChange={() => toggleStudent(s.id)} />
                  {s.name}
                </label>
              );
            })}
          </div>

          <div style={{ ...buttons, marginTop: "18px" }}>
            <button
              type="button"
              style={{ ...solidButton, opacity: pending ? 0.6 : 1 }}
              disabled={pending}
              onClick={() => run(() => addPastClass(adding))}
            >
              {pending ? "Saving…" : "Add class"}
            </button>
            <button type="button" style={smallButton} disabled={pending} onClick={reset}>Cancel</button>
          </div>
        </div>
      )}

      {sessions.length === 0 && <div style={{ ...muted, marginTop: "20px" }}>No classes recorded yet.</div>}

      <div style={{ marginTop: "12px" }}>
        {sessions.map((s) => {
          const isEditing = editing?.id === s.id;
          const confirming = confirmId === s.id;
          if (isEditing) {
            return (
              <div key={s.id} style={{ ...row, display: "block", border: "0.5px solid #1a1a1a" }}>
                <div style={{ ...muted, marginBottom: "12px" }}>{s.students.join(", ")}</div>
                <TimeFields value={editing} max={today} onChange={setEditing} />
                <div style={{ ...buttons, marginTop: "16px" }}>
                  <button
                    type="button"
                    style={{ ...solidButton, opacity: pending ? 0.6 : 1 }}
                    disabled={pending}
                    onClick={() => run(() => saveClassTimes(editing))}
                  >
                    {pending ? "Saving…" : "Save times"}
                  </button>
                  <button type="button" style={smallButton} disabled={pending} onClick={reset}>Cancel</button>
                </div>
              </div>
            );
          }
          return (
            <div key={s.id} style={{ ...row, border: confirming ? "0.5px solid #d9534f" : row.border }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>
                  {s.dayLabel} · {s.timeLabel}
                  {s.running && <span style={{ ...pill, background: "#e6f2e6", color: "#2e7d32" }}>In progress</span>}
                  {s.autoEnded && <span style={pill}>Ended automatically</span>}
                </div>
                <div style={muted}>
                  {me.isAdmin ? `${s.tutorName} · ` : ""}
                  {s.students.length ? s.students.join(", ") : "No students"}
                </div>
              </div>

              {s.running ? (
                <span style={muted}>End the class to edit it</span>
              ) : confirming ? (
                <div style={buttons}>
                  <span style={{ fontSize: "14px", color: "#b3261e" }}>
                    Delete this class? The students&apos; work stays, but stops counting as in class.
                  </span>
                  <button type="button" style={smallButton} disabled={pending} onClick={() => setConfirmId(null)}>Cancel</button>
                  <button
                    type="button"
                    style={{ ...dangerSolid, opacity: pending ? 0.6 : 1 }}
                    disabled={pending}
                    onClick={() => run(() => deleteClass(s.id))}
                  >
                    {pending ? "Deleting…" : "Delete class"}
                  </button>
                </div>
              ) : (
                <div style={buttons}>
                  <button
                    type="button"
                    style={smallButton}
                    disabled={pending}
                    onClick={() => { reset(); setEditing({ id: s.id, date: s.date, start: s.start, end: s.end }); }}
                  >
                    Edit times
                  </button>
                  <button
                    type="button"
                    style={dangerButton}
                    disabled={pending}
                    onClick={() => { reset(); setConfirmId(s.id); }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}