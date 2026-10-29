// app/tutor/page.js — roster.
// Tutors see their own students. Admins see every student, grouped by tutor.
import Link from "next/link";
import { getMyProfile, getMyStudents } from "@/lib/tutor";

export const dynamic = "force-dynamic";

const fmtDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—";

function StudentCard({ s }) {
  return (
    <Link
      href={`/tutor/${s.id}`}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto auto",
        gap: 16,
        alignItems: "center",
        padding: "16px 20px",
        border: "0.5px solid #e0e0de",
        borderRadius: 10,
        textDecoration: "none",
        color: "#1a1a1a",
        marginTop: 8,
      }}
    >
      <div>
        <div style={{ fontSize: 16, fontWeight: 600 }}>{s.full_name}</div>
        <div style={{ fontSize: 13, color: "#777", marginTop: 2 }}>
          {s.class_label ? `${s.class_label} · ` : ""}
          {s.workbookAttempted} workbook question{s.workbookAttempted === 1 ? "" : "s"} attempted
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
        {s.quizResults.length === 0 ? (
          <span style={{ fontSize: 13, color: "#aaa" }}>No quizzes yet</span>
        ) : (
          s.quizResults.map((q) => (
            <span
              key={q.id}
              title={q.title}
              style={{
                fontSize: 13,
                padding: "4px 10px",
                borderRadius: 999,
                border: "0.5px solid #e0e0de",
                color: q.score / q.total >= 0.8 ? "#2e7d32" : q.score / q.total >= 0.5 ? "#1a1a1a" : "#c0392b",
              }}
            >
              {q.score}/{q.total}
            </span>
          ))
        )}
      </div>

      <div style={{ fontSize: 13, color: "#777", minWidth: 60, textAlign: "right" }}>
        {fmtDate(s.lastActive)}
      </div>
    </Link>
  );
}

export default async function TutorHome() {
  const me = await getMyProfile();
  const students = await getMyStudents(me);
  const isAdmin = me.role === "admin";

  // Admin: group by tutor. Unassigned students go in their own section at the end.
  let groups = null;
  if (isAdmin) {
    const map = new Map();
    for (const s of students) {
      const key = s.tutor_id ?? "none";
      if (!map.has(key)) map.set(key, { key, name: s.tutor?.name ?? "No tutor assigned", code: s.tutor?.code ?? null, students: [] });
      map.get(key).students.push(s);
    }
    groups = [...map.values()].sort((a, b) =>
      a.key === "none" ? 1 : b.key === "none" ? -1 : a.name.localeCompare(b.name)
    );
  }

  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 4 }}>
        {isAdmin ? "All students" : "Students"}
      </h1>
      <p style={{ color: "#777", fontSize: 14, marginBottom: 24 }}>
        {students.length} {students.length === 1 ? "student" : "students"}
        {isAdmin && groups ? ` · ${groups.filter((g) => g.key !== "none").length} tutors` : ""}
      </p>

      {students.length === 0 && (
        <p style={{ color: "#555" }}>
          No students yet. In Supabase, set a student&apos;s <code>tutor_id</code> to your id and they&apos;ll appear here.
        </p>
      )}

            {isAdmin &&
        groups.map((g) => (
          <details key={g.key} open={g.students.length <= 3} style={{ marginTop: 16 }}>
            <summary
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 12,
                padding: "10px 16px",
                borderRadius: 8,
                cursor: "pointer",
                listStyle: "none",
                userSelect: "none",
              }}
            >
              <i className="ti ti-chevron-right tutor-chevron" style={{ color: "#aaa", fontSize: 16 }} />
              <h2 style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>{g.name}</h2>
              <span style={{ fontSize: 13, color: "#777" }}>
                {g.students.length} {g.students.length === 1 ? "student" : "students"}
              </span>
              {g.code && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: ".06em",
                    padding: "2px 10px",
                    border: "0.5px solid #e0e0de",
                    borderRadius: 999,
                    color: "#555",
                  }}
                  title="Sign-up code"
                >
                  {g.code}
                </span>
              )}
            </summary>
            <div style={{ paddingLeft: 16 }}>
              {g.students.map((s) => <StudentCard key={s.id} s={s} />)}
            </div>
          </details>
        ))}
    </main>
  );
}