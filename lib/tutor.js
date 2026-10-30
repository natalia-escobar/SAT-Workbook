// lib/tutor.js
// Server-only reads for the tutor view. Runs with the logged-in tutor's session,
// so row-level security limits results to that tutor's own students (admins see all).

import { createClient } from "@/lib/supabase/server";
import { getAllQuestions } from "@/lib/questions";
import quizzes from "@/data/quizzes";

/** The logged-in user's profile, or null if not logged in. */
export async function getMyProfile() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data } = await supabase
    .from("profiles")
    .select("id, full_name, role, class_label")
    .eq("id", user.id)
    .single();
  return data ?? null;
}

/** Students this tutor can see, each with last activity and latest quiz scores. */
export async function getMyStudents(me) {
  const supabase = await createClient();

  let query = supabase
    .from("profiles")
    .select("id, full_name, class_label, tutor_id")
    .eq("role", "student")
    .order("full_name");
  if (me.role !== "admin") query = query.eq("tutor_id", me.id);

  const { data: students, error } = await query;
  if (error) { console.error("getMyStudents:", error.message); return []; }
  if (!students?.length) return [];

  // Admins see everyone, so attach each student's tutor name for grouping.
  let tutorName = {};
  if (me.role === "admin") {
    const { data: tutors } = await supabase
      .from("profiles")
      .select("id, full_name, signup_code")
      .in("role", ["tutor", "admin"]);
    for (const t of tutors ?? []) tutorName[t.id] = { name: t.full_name, code: t.signup_code };
  }

  const { data: events } = await supabase
    .from("events")
    .select("student_id, question_id, correct, context, container_id, attempt_id, created_at")
    .in("student_id", students.map((s) => s.id))
    .eq("event_type", "answered")
    .order("created_at", { ascending: true });

  const byStudent = groupBy(events ?? [], (e) => e.student_id);

  return students.map((s) => {
    const rows = byStudent[s.id] ?? [];
    const lastActive = rows.length ? rows[rows.length - 1].created_at : null;
    const quizResults = summarizeQuizzes(rows);
    const workbookAttempted = new Set(rows.filter((r) => r.context === "workbook" || r.context === "classroom").map((r) => r.question_id)).size;
    const tutor = tutorName[s.tutor_id] ?? null;
    return { ...s, lastActive, quizResults, workbookAttempted, tutor };
  });
}

/** Everything the tutor page shows for one student. */
export async function getStudentReport(studentId) {
  const supabase = await createClient();

  const { data: student } = await supabase
    .from("profiles")
    .select("id, full_name, class_label")
    .eq("id", studentId)
    .single();
  if (!student) return null; // not found, or not one of this tutor's students (RLS)

  const { data: events } = await supabase
    .from("events")
    .select("question_id, answer, correct, context, container_id, attempt_id, created_at")
    .eq("student_id", studentId)
    .eq("event_type", "answered")
    .order("created_at", { ascending: true });

  const rows = events ?? [];
  return {
    student,
    quizzes: summarizeQuizzes(rows, { withQuestions: true }),
    workbook: summarizeWorkbook(rows),
    classroom: summarizeClassroom(rows),
  };
}

// ── helpers ──────────────────────────────────────────────────────────────

function groupBy(list, keyFn) {
  const out = {};
  for (const item of list) (out[keyFn(item)] ??= []).push(item);
  return out;
}

/** Bank entry → what QuestionCard needs (null if the id isn't in the bank). */
function cardContent(q) {
  if (!q) return null;
  return {
    id: q.id,
    problem: q.text,
    graph: q.graph ?? null,
    graphChoices: q.graphChoices ?? null,
    answer: q.answer,
    kind: q.text?.includes("mc-choice") ? "mc" : "writein",
  };
}

/**
 * Per quiz: the LATEST attempt only (last click wins per question).
 * Rows with no attempt_id (logged before attempts existed) are treated as one attempt per quiz.
 */
function summarizeQuizzes(rows, { withQuestions = false } = {}) {
  const quizRows = rows.filter((r) => r.context === "quiz");
  const byQuiz = groupBy(quizRows, (r) => r.container_id);

  return Object.entries(byQuiz).map(([quizId, qRows]) => {
    const byAttempt = groupBy(qRows, (r) => r.attempt_id ?? "legacy");
    // latest attempt = the one whose last row is newest
    const attempts = Object.entries(byAttempt).sort(
      (a, b) => new Date(a[1].at(-1).created_at) - new Date(b[1].at(-1).created_at)
    );
    const [, latest] = attempts.at(-1);

    const latestPerQuestion = {};
    for (const r of latest) latestPerQuestion[r.question_id] = r; // later rows win

    const def = quizzes[quizId];
    const order = def?.questionIds ?? Object.keys(latestPerQuestion);
    const meta = withQuestions ? new Map(getAllQuestions().map((q) => [q.id, q])) : null;
    const questions = order.map((qid) => {
      const r = latestPerQuestion[qid];
      return {
        id: qid,
        answered: !!r,
        answer: r?.answer ?? null,
        correct: r?.correct ?? false,
        content: withQuestions ? cardContent(meta.get(qid)) : undefined,
      };
    });

    const summary = {
      id: quizId,
      title: def?.title ?? quizId,
      total: order.length,
      score: questions.filter((q) => q.correct).length,
      takenAt: latest.at(-1).created_at,
      attemptCount: attempts.length,
    };
    return withQuestions ? { ...summary, questions } : summary;
  }).sort((a, b) => new Date(b.takenAt) - new Date(a.takenAt));
}

/**
 * Workbook work grouped by subtopic (from the bank, not the container),
 * latest answer per question.
 */
function summarizeWorkbook(rows) {
  const meta = new Map(getAllQuestions().map((q) => [q.id, q]));
  const wbRows = rows.filter((r) => r.context === "workbook");

  const latestPerQuestion = {};
  for (const r of wbRows) latestPerQuestion[r.question_id] = r;

  const bySubtopic = {};
  for (const [qid, r] of Object.entries(latestPerQuestion)) {
    const q = meta.get(qid);
    const key = q ? `${q.topic} / ${q.subtopic}` : "other";
    const bucket = (bySubtopic[key] ??= { subtopic: key, attempted: 0, correct: 0, lastActive: null, questions: [] });
    bucket.attempted += 1;
    if (r.correct) bucket.correct += 1;
    if (!bucket.lastActive || r.created_at > bucket.lastActive) bucket.lastActive = r.created_at;
    bucket.questions.push({
      id: qid,
      problem: q?.problem ?? null,
      type: q?.questionType ?? null,
      answer: r.answer ?? null,
      correct: !!r.correct,
      at: r.created_at,
      content: cardContent(q),
    });
  }

  return Object.values(bySubtopic)
    .map((b) => ({ ...b, questions: b.questions.sort((x, y) => (x.problem ?? 0) - (y.problem ?? 0)) }))
    .sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive));
}

/**
 * Classroom work grouped by lesson (the container id), latest answer per question,
 * in the order the student answered them.
 */
function summarizeClassroom(rows) {
  const meta = new Map(getAllQuestions().map((q) => [q.id, q]));
  const crRows = rows.filter((r) => r.context === "classroom");

  const byLesson = groupBy(crRows, (r) => r.container_id);

  return Object.entries(byLesson).map(([lessonId, lRows]) => {
    const latestPerQuestion = {};
    for (const r of lRows) latestPerQuestion[r.question_id] = r; // later rows win

    const questions = Object.values(latestPerQuestion)
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      .map((r) => {
        const q = meta.get(r.question_id);
        return {
          id: r.question_id,
          problem: q?.problem ?? null,
          type: q?.questionType ?? null,
          answer: r.answer ?? null,
          correct: !!r.correct,
          at: r.created_at,
          content: cardContent(q),
        };
      });

    return {
      lesson: lessonId,
      attempted: questions.length,
      correct: questions.filter((q) => q.correct).length,
      lastActive: lRows.at(-1).created_at,
      questions,
    };
  }).sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive));
}