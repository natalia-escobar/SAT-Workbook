// app/tutor/[studentId]/page.js — one student's lessons and quizzes as a timeline split
// into in-class and independent work (components/StudentTimeline.jsx).
// Click any question row to see the question, the student's answer, and the correct answer.
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStudentReport } from "@/lib/tutor";
import StudentTimeline from "@/components/StudentTimeline";

export const dynamic = "force-dynamic";

export default async function StudentPage({ params }) {
  const { studentId } = await params;
  const report = await getStudentReport(studentId);
  if (!report) notFound();

  const { student, timeline } = report;

  return (
    <main className="page">
      <Link href="/tutor" style={{ fontSize: 13, color: "#777", textDecoration: "none" }}>
        &larr; All students
      </Link>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, margin: "8px 0 4px" }}>{student.full_name}</h1>
      {student.class_label && <p style={{ color: "#777", fontSize: 14 }}>{student.class_label}</p>}

      {/* ── Lessons and quizzes: in class vs independent, newest first ── */}
      <StudentTimeline timeline={timeline} viewer="tutor" />
    </main>
  );
}