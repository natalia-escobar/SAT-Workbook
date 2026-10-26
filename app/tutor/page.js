// app/tutor/page.js — roster of this tutor's students
import Link from "next/link";
import { getMyProfile, getMyStudents } from "@/lib/tutor";

export const dynamic = "force-dynamic";

const fmtDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—";

export default async function TutorHome() {
  const me = await getMyProfile();
  const students = await getMyStudents(me);

  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 4 }}>Students</h1>
      <p style={{ color: "#777", fontSize: 14, marginBottom: 24 }}>
        {students.length} {students.length === 1 ? "student" : "students"}
      </p>

      {students.length === 0 && (
        <p style={{ color: "#555" }}>
          No students yet. In Supabase, set a student&apos;s <code>tutor_id</code> to your id and they&apos;ll appear here.
        </p>
      )}

      {students.map((s) => (
        <Link
          key={s.id}
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
      ))}
    </main>
  );
}