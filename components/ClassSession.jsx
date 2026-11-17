"use client";

// components/ClassSession.jsx
// Tutor "class in session" controls.
//   default export  ClassBar          — mounted once in AppShell. Shows the floating
//                                        "In class … End class" bar on every page while a
//                                        class is running, and owns the student picker.
//   named export    StartClassButton  — the button on the home page.

import { useEffect, useState, useTransition } from "react";
import { startClass, updateClassStudents, endClass } from "@/lib/classSession";
import useClassSession, { refreshClassState, openClassPicker, closeClassPicker } from "@/lib/useClassSession";

const GREEN = "#2e7d32";
const smallButton = {
  fontSize: "14px",
  padding: "6px 12px",
  border: "0.5px solid #b0b0ae",
  borderRadius: "8px",
  background: "#fff",
  color: "#1a1a1a",
  cursor: "pointer",
  fontFamily: "inherit",
};
const solidButton = { ...smallButton, border: "0.5px solid #1a1a1a", background: "#1a1a1a", color: "#fff", fontWeight: 600 };
const dangerSolid = { ...smallButton, border: "0.5px solid #b3261e", background: "#b3261e", color: "#fff", fontWeight: 600 };
const muted = { fontSize: "13px", color: "#777" };

// "Alexandra Hanono" → "Alexandra H."
const shortName = (name) => {
  const parts = String(name ?? "").trim().split(/\s+/);
  return parts.length > 1 ? `${parts[0]} ${parts[parts.length - 1][0]}.` : parts[0] || "Unnamed";
};
const nameList = (students, max = 3) => {
  const names = students.map((s) => shortName(s.name));
  return names.length <= max ? names.join(", ") : `${names.slice(0, max - 1).join(", ")} +${names.length - (max - 1)} more`;
};
const duration = (startedAt, now) => {
  const mins = Math.max(0, Math.floor((now - new Date(startedAt).getTime()) / 60000));
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return h ? `${h} h ${String(m).padStart(2, "0")} min` : `${m} min`;
};

/** Home page button. Hidden for students. */
export function StartClassButton() {
  const { loaded, canTeach, session } = useClassSession();
  if (!loaded || !canTeach) return null;
  if (session) {
    return (
      <span style={{ ...muted, display: "inline-flex", alignItems: "center", gap: "8px" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: GREEN }} />
        Class in progress
      </span>
    );
  }
  return (
    <button type="button" style={solidButton} onClick={() => openClassPicker("start")}>
      <i className="ti ti-player-play" style={{ marginRight: "6px" }} />
      Start class
    </button>
  );
}

/** The window where the tutor ticks who is in class. */
function Picker({ mode, roster, session }) {
  const [selected, setSelected] = useState(() => (mode === "edit" && session ? session.students.map((s) => s.id) : []));
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const has = (id) => selected.includes(id);
  const toggle = (id) => setSelected((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  const groupOn = (g) => g.studentIds.every(has);
  const toggleGroup = (g) =>
    setSelected((cur) =>
      g.studentIds.every((id) => cur.includes(id))
        ? cur.filter((id) => !g.studentIds.includes(id))
        : [...new Set([...cur, ...g.studentIds])]
    );

  const submit = () => {
    setError("");
    startTransition(async () => {
      const result = mode === "edit" ? await updateClassStudents(selected) : await startClass(selected);
      if (!result?.ok) { setError(result?.error || "Something went wrong."); return; }
      await refreshClassState();
      closeClassPicker();
    });
  };

  const chip = (on) => ({
    ...smallButton,
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    border: on ? "0.5px solid #1a1a1a" : smallButton.border,
    background: on ? "#f5f5f3" : "#fff",
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={mode === "edit" ? "Who's in class" : "Start class"}
      onClick={(e) => { if (e.target === e.currentTarget && !pending) closeClassPicker(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 1100, background: "rgba(0,0,0,.35)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "16px",
      }}
    >
      <div
        style={{
          background: "#fff", borderRadius: "14px", padding: "24px", width: "100%", maxWidth: "520px",
          maxHeight: "calc(100vh - 32px)", overflowY: "auto", boxShadow: "0 12px 40px rgba(0,0,0,.18)",
        }}
      >
        <h2 style={{ fontSize: "18px", fontWeight: 600 }}>{mode === "edit" ? "Who's in class?" : "Start class"}</h2>
        <p style={{ ...muted, marginTop: "4px" }}>
          {mode === "edit"
            ? "Tick anyone who has arrived and untick anyone who has left."
            : "Tick the students who are in this class. Everything they answer until you end the class is saved as classwork."}
        </p>

        {roster.students.length === 0 && (
          <p style={{ ...muted, marginTop: "16px" }}>You don&apos;t have any students yet.</p>
        )}

        {roster.groups.length > 0 && (
          <>
            <div style={{ ...muted, fontWeight: 600, marginTop: "20px" }}>Groups</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
              {roster.groups.map((g) => (
                <label key={g.id} style={chip(groupOn(g))}>
                  <input type="checkbox" checked={groupOn(g)} onChange={() => toggleGroup(g)} />
                  {g.name}
                  <span style={{ color: "#777" }}>({g.studentIds.length})</span>
                </label>
              ))}
            </div>
          </>
        )}

        {roster.students.length > 0 && (
          <>
            <div style={{ ...muted, fontWeight: 600, marginTop: "20px" }}>
              Students ({selected.length} selected)
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
              {roster.students.map((s) => (
                <label key={s.id} style={chip(has(s.id))}>
                  <input type="checkbox" checked={has(s.id)} onChange={() => toggle(s.id)} />
                  {s.name}
                </label>
              ))}
            </div>
          </>
        )}

        {error && <div role="alert" style={{ fontSize: "14px", color: "#b3261e", marginTop: "16px" }}>{error}</div>}

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "24px" }}>
          <button type="button" style={smallButton} disabled={pending} onClick={closeClassPicker}>
            Cancel
          </button>
          <button
            type="button"
            style={{ ...solidButton, opacity: pending || selected.length === 0 ? 0.5 : 1 }}
            disabled={pending || selected.length === 0}
            onClick={submit}
          >
            {pending ? "Saving…" : mode === "edit" ? "Save" : `Start class${selected.length ? ` (${selected.length})` : ""}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ClassBar() {
  const { session, roster, picker } = useClassSession();
  const [now, setNow] = useState(() => Date.now());
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  // Load on arrival, then keep in step: every minute, and whenever the tab is looked at again
  // (so a class ended on another device, or closed automatically, disappears here too).
  useEffect(() => {
    refreshClassState();
    const tick = setInterval(() => setNow(Date.now()), 20000);
    const poll = setInterval(refreshClassState, 60000);
    const onFocus = () => { setNow(Date.now()); refreshClassState(); };
    window.addEventListener("focus", onFocus);
    return () => { clearInterval(tick); clearInterval(poll); window.removeEventListener("focus", onFocus); };
  }, []);

  const end = () => {
    setError("");
    startTransition(async () => {
      const result = await endClass();
      if (!result?.ok) { setError(result?.error || "Couldn't end the class."); return; }
      await refreshClassState();
      setConfirming(false);
    });
  };

  return (
    <>
      {picker && <Picker key={picker} mode={picker} roster={roster} session={session} />}

      {session && (
        <div
          style={{
            position: "fixed", bottom: "24px", left: "50%", transform: "translateX(-50%)", zIndex: 900,
            maxWidth: "calc(100vw - 32px)", display: "flex", alignItems: "center", flexWrap: "wrap",
            justifyContent: "center", gap: "12px", padding: "10px 12px 10px 18px",
            background: "#fff", border: `1.5px solid ${confirming ? "#b3261e" : GREEN}`, borderRadius: "999px",
            boxShadow: "0 6px 24px rgba(0,0,0,.12)", fontSize: "14px",
          }}
        >
          {confirming ? (
            <>
              <span style={{ color: "#b3261e" }}>
                End class for {nameList(session.students)}? ({duration(session.startedAt, now)})
                {error ? ` ${error}` : ""}
              </span>
              <button type="button" style={smallButton} disabled={pending} onClick={() => { setConfirming(false); setError(""); }}>
                Cancel
              </button>
              <button type="button" style={{ ...dangerSolid, opacity: pending ? 0.6 : 1 }} disabled={pending} onClick={end}>
                {pending ? "Ending…" : "End class"}
              </button>
            </>
          ) : (
            <>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: GREEN, flexShrink: 0 }} />
              <span style={{ fontWeight: 600, color: GREEN }}>In class</span>
              <button
                type="button"
                onClick={() => openClassPicker("edit")}
                title="Change who's in class"
                style={{ background: "none", border: "none", padding: 0, fontFamily: "inherit", fontSize: "14px", color: "#1a1a1a", cursor: "pointer", textDecoration: "underline", textDecorationColor: "#ccc", textUnderlineOffset: "3px" }}
              >
                {nameList(session.students)}
              </button>
              <span style={{ color: "#777" }}>{duration(session.startedAt, now)}</span>
              <button type="button" style={{ ...smallButton, borderRadius: "999px" }} onClick={() => setConfirming(true)}>
                End class
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}