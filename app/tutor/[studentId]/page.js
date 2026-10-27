// app/tutor/[studentId]/page.js — one student's quizzes and workbook progress.
// Click any question row to see the question, the student's answer, and the correct answer.
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStudentReport } from "@/lib/tutor";
import TutorQuestionRow from "@/components/TutorQuestionRow";

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
      {student.class_label && <p style={{ color: "#777", fontSize: 14 }}>{student.class_label}</p>}

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
            <TutorQuestionRow
              key={qq.id}
              question={qq}
              left={
                <>
                  <strong style={{ marginRight: 10 }}>Q{i + 1}</strong>
                  <span style={{ color: "#777", fontSize: 13 }}>{qq.id}</span>
                </>
              }
              middle={qq.answered ? `answered ${qq.answer}` : "no answer"}
            />
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
              <TutorQuestionRow
                key={qq.id}
                question={qq}
                left={
                  <span style={{ fontSize: 13, color: "#555" }}>
                    {qq.problem != null ? `Problem ${qq.problem}` : ""}{qq.type ? ` · ${qq.type}` : ""}
                    <span style={{ color: "#aaa", marginLeft: 8 }}>{qq.id}</span>
                  </span>
                }
                middle={fmtDate(qq.at)}
              />
            ))}
          </div>
        </details>
      ))}
    </main>
  );
}