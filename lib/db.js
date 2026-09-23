// lib/db.js
// The ONLY file that talks to the database. Every read and write goes through here.
 
import { createClient } from "@/lib/supabase/client";
 
export const supabase = createClient();
 
/**
 * Record one thing the logged-in student did.
 *   eventType: "answered" | "viewed" | "revealed"
 *   context:   "workbook" | "classroom" | "quiz"
 * Silently does nothing if no one is logged in.
 */
export async function logEvent({
  questionId,
  eventType,
  answer = null,
  correct = null,
  context,
  containerId,
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
  });
  if (error) console.error("logEvent failed:", error.message);
}
 
/** Sign the current user out. */
export async function signOut() {
  await supabase.auth.signOut();
}