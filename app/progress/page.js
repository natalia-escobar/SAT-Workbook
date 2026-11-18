// app/progress/page.js — the logged-in student's own progress.
// Everything they've done as a timeline, newest first, split into in-class and independent
// work (components/StudentTimeline.jsx), with quizzes inside the block where they were
// taken. Each question is marked right or wrong. Correct answers are never shown here.
import { redirect } from "next/navigation";
import { getMyReport } from "@/lib/tutor";
import StudentTimeline from "@/components/StudentTimeline";

export const dynamic = "force-dynamic";

export default async function ProgressPage() {
  const report = await getMyReport();
  if (!report) redirect("/login?next=/progress");

  const { quizzes: taken, workbook, classroom, timeline } = report;

  // overall numbers (latest answer per question; latest attempt per quiz)
  const allAnswered = [...workbook, ...classroom].reduce((n, b) => n + b.attempted, 0)
    + taken.reduce((n, q) => n + q.questions.filter((x) => x.answered).length, 0);
  const allCorrect = [...workbook, ...classroom].reduce((n, b) => n + b.correct, 0)
    + taken.reduce((n, q) => n + q.score, 0);
  const pct = allAnswered ? Math.round((allCorrect / allAnswered) * 100) : 0;

  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 4 }}>My progress</h1>
      <p style={{ color: "#777", fontSize: 14 }}>
        {allAnswered} question{allAnswered === 1 ? "" : "s"} answered
        {allAnswered ? ` · ${pct}% correct` : ""}
      </p>

      <StudentTimeline timeline={timeline} viewer="student" />
    </main>
  );
}