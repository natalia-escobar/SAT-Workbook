// app/tutor/[studentId]/page.js — one student's quizzes and workbook progress
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStudentReport } from "@/lib/tutor";

export const dynamic = "force-dynamic";

const fmtDate = (iso) =>
  iso
    ? new Date(iso).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })
    : "—";

const card = {
  border: "0.5px solid #e0e0de",
  borderRadius: 10,
  padding: "16px 20px",
  marginTop: 8,
};

const Check = ({ ok }) => (
  <i className={`ti ${ok ? "ti-check" : "ti-x"}`} style={{ color: ok ? "#2e7d32" : "#c0392b" }} />
);

export default async function StudentPage({ params }) {
  const { studentId } = await params;
  const report = await getStudentReport(studentId);
  if (!report) notFound();

  const { student, quizzes, workbook } = report;

  return (
    <main className="page">
      <Link href="/tutor" style={{ fontSize: 13, color: "#777", textDecoration: "none" }}>
        &larr; All students
      </Link>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, margin: "8px 0 4px" }}>{student.full_name}</h1>
      {student.class_label && <p style={{ color: "#777", fontSize: 14, marginBottom: 24 }}>{student.class_label}</p>}

      {/* ── Quizzes ── */}
      <h2 style={{ fontSize: 15, fontWeight: 600, margin: "28px 0 4px" }}>Quizzes</h2>
      {quizzes.length === 0 && <p style={{ color: "#777", fontSize: 14 }}>No quizzes taken yet.</p>}
      {quizzes.map((q) => (
        <div key={q.id} style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{q.title}</div>
              <div style={{ fontSize: 13, color: "#777", marginTop: 2 }}>
                {fmtDate(q.takenAt)}
                {q.attemptCount > 1 ? ` · attempt ${q.attemptCount} (latest shown)` : ""}
              </div>
            </div>
            <div style={{ fontSize: 22, fontWeight: 600 }}>
              {q.score}<span style={{ fontSize: 14, color: "#777", fontWeight: 400 }}> / {q.total}</span>
            </div>
          </div>

          {q.questions.map((qq, i) => (
            <div
              key={qq.id}
              style={{
                display: "grid",
                gridTemplateColumns: "36px 1fr auto 24px",
                gap: 12,
                alignItems: "center",
                padding: "6px 0",
                borderTop: i === 0 ? "none" : "0.5px solid #f0f0ee",
                fontSize: 14,
              }}
            >
              <span style={{ fontWeight: 600 }}>Q{i + 1}</span>
              <span style={{ color: "#777", fontSize: 13 }}>{qq.id}</span>
              <span style={{ color: "#555", fontSize: 13 }}>
                {qq.answered ? `answered ${qq.answer}` : "no answer"}
              </span>
              <Check ok={qq.correct} />
            </div>
          ))}
        </div>
      ))}

      {/* ── Workbook ── */}
      <h2 style={{ fontSize: 15, fontWeight: 600, margin: "32px 0 4px" }}>Workbook</h2>
      {workbook.length === 0 && <p style={{ color: "#777", fontSize: 14 }}>No workbook activity yet.</p>}
      {workbook.map((b) => (
        <details key={b.subtopic} style={card}>
          <summary style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "baseline", listStyle: "none" }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, textTransform: "capitalize" }}>
                {b.subtopic.replace(/-/g, " ")}
              </div>
              <div style={{ fontSize: 13, color: "#777", marginTop: 2 }}>last active {fmtDate(b.lastActive)}</div>
            </div>
            <div style={{ fontSize: 14 }}>
              <strong>{b.correct}</strong>
              <span style={{ color: "#777" }}> / {b.attempted} correct</span>
            </div>
          </summary>
          <div style={{ marginTop: 12 }}>
            {b.questions.map((qq) => (
              <div
                key={qq.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto 24px",
                  gap: 12,
                  alignItems: "center",
                  padding: "6px 0",
                  borderTop: "0.5px solid #f0f0ee",
                  fontSize: 13,
                }}
              >
                <span style={{ color: "#555" }}>
                  {qq.problem != null ? `Problem ${qq.problem}` : ""}{qq.type ? ` · ${qq.type}` : ""}
                  <span style={{ color: "#aaa", marginLeft: 8 }}>{qq.id}</span>
                </span>
                <span style={{ color: "#777" }}>{fmtDate(qq.at)}</span>
                <Check ok={qq.correct} />
              </div>
            ))}
          </div>
        </details>
      ))}
    </main>
  );
}