// app/tutor/[studentId]/page.js — one student's quizzes, then their lesson work as a
// timeline split into in-class and independent work (components/StudentTimeline.jsx).
// Click any question row to see the question, the student's answer, and the correct answer.
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStudentReport } from "@/lib/tutor";
import TutorQuestionRow from "@/components/TutorQuestionRow";
import StudentTimeline from "@/components/StudentTimeline";

export const dynamic = "force-dynamic";

const fmtDate = (iso) =>
  iso
    ? new Date(iso).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZone: "America/New_York", // server runs in UTC; show Eastern time
      })
    : "—";

const card = {
  border: "0.5px solid #e0e0de",
  borderRadius: 10,
  padding: "16px 20px",
  marginTop: 8,
};

const whenPill = (when) => {
  if (when !== "class" && when !== "independent") return null;
  const inClass = when === "class";
  return (
    <span
      style={{
        fontSize: 12,
        fontWeight: 600,
        marginLeft: 10,
        padding: "2px 10px",
        borderRadius: 999,
        verticalAlign: "middle",
        border: `0.5px solid ${inClass ? "#2e7d32" : "#e0e0de"}`,
        color: inClass ? "#2e7d32" : "#555",
      }}
    >
      {inClass ? "In class" : "Independent"}
    </span>
  );
};

export default async function StudentPage({ params }) {
  const { studentId } = await params;
  const report = await getStudentReport(studentId);
  if (!report) notFound();

  const { student, quizzes, timeline } = report;

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
              <div style={{ fontSize: 16, fontWeight: 600 }}>{q.title}{whenPill(q.when)}</div>
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

      {/* ── Lessons: in class vs independent, newest first ── */}
      <StudentTimeline timeline={timeline} />
    </main>
  );
}