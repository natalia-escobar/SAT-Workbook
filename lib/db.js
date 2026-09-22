// lib/db.js
// The ONLY file that talks to Supabase. Every read and write goes through here,
// so switching providers later means editing this one file.

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Placeholder until logins exist (Milestone 2). Every row is tagged with this
// so you can find and delete the test rows later.
const TEMP_STUDENT_ID = "test-user";

/**
 * Record one thing a student did.
 *   eventType: "answered" | "viewed" | "revealed"
 *   context:   "workbook" | "classroom" | "quiz"
 */
export async function logEvent({
  questionId,
  eventType,
  answer = null,
  correct = null,
  context,
  containerId,
}) {
  const { error } = await supabase.from("events").insert({
    student_id: TEMP_STUDENT_ID,
    question_id: questionId,
    event_type: eventType,
    answer,
    correct,
    context,
    container_id: containerId,
  });
  if (error) console.error("logEvent failed:", error.message);
}