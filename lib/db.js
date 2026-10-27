// lib/db.js
// The ONLY file that talks to the database. Every read and write goes through here.

import { createClient } from "@/lib/supabase/client";

export const supabase = createClient();

/**
 * Record one thing the logged-in student did.
 *   eventType: "answered" | "viewed" | "revealed"
 *   context:   "workbook" | "classroom" | "quiz"
 *   attemptId: (quiz only) one id per Start click, so retakes are separate attempts
 * Silently does nothing if no one is logged in.
 */
export async function logEvent({
  questionId,
  eventType,
  answer = null,
  correct = null,
  context,
  containerId,
  attemptId = null,
}) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const { error } = await supabase.from("events").insert({
    student_id: user.id,
    question_id: questionId,
    event_type: eventType,
    answer,
    correct,
    context,
    container_id: containerId,
    attempt_id: attemptId,
  });
  if (error) console.error("logEvent failed:", error.message);
}

/** Latest answer per question for the logged-in student in one container. */
export async function getSavedAnswers(containerId) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return {};

  const { data, error } = await supabase
    .from("events")
    .select("question_id, answer, created_at")
    .eq("student_id", user.id)
    .eq("container_id", containerId)
    .eq("event_type", "answered")
    .order("created_at", { ascending: true });

  if (error) { console.error("getSavedAnswers failed:", error.message); return {}; }

  const map = {};
  for (const row of data) map[row.question_id] = row.answer;   // later rows win
  return map;
}

/**
 * The logged-in student's most recent attempt at one quiz:
 *   { attemptId, takenAt, answers: { [questionId]: { answer, correct } } }
 * or null if they've never taken it.
 */
export async function getLatestQuizAttempt(quizId) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("events")
    .select("question_id, answer, correct, attempt_id, created_at")
    .eq("student_id", user.id)
    .eq("container_id", quizId)
    .eq("context", "quiz")
    .eq("event_type", "answered")
    .order("created_at", { ascending: true });

  if (error) { console.error("getLatestQuizAttempt failed:", error.message); return null; }
  if (!data?.length) return null;

  // Latest attempt = the attempt_id of the newest row (rows without one count as "legacy").
  const latestId = data[data.length - 1].attempt_id ?? "legacy";
  const rows = data.filter((r) => (r.attempt_id ?? "legacy") === latestId);

  const answers = {};
  for (const r of rows) answers[r.question_id] = { answer: r.answer, correct: !!r.correct }; // later rows win
  return { attemptId: latestId, takenAt: rows[rows.length - 1].created_at, answers };
}

/** Sign the current user out. */
export async function signOut() {
  await supabase.auth.signOut();
}