"use server";

// lib/classSession.js
// "Start class" / "End class" for tutors (and admins who teach).
// A class session is a start time, an end time, and the students who were in it. Anything a
// student answers while they're in a running session counts as classwork.
//
// Everything here runs on the server with the SERVICE ROLE key, after checking who is
// signed in. A tutor can only start a class for their own students, and can only have one
// class running at a time.

import { createClient as createServiceClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";

// A class left running is closed automatically this long after it started.
const AUTO_END_HOURS = 4;
const AUTO_END_MS = AUTO_END_HOURS * 60 * 60 * 1000;

const service = () =>
  createServiceClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

const fail = (error) => ({ ok: false, error });

/** The signed-in tutor/admin, or null for students and signed-out visitors. */
async function getTeacher(db) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data } = await db.from("profiles").select("id, full_name, role").eq("id", user.id).maybeSingle();
  return data && (data.role === "tutor" || data.role === "admin") ? data : null;
}

/** This tutor's running session, or null. Closes it first if it has run past the auto-end limit. */
async function getRunningSession(db, tutorId) {
  const { data: session, error } = await db
    .from("class_sessions")
    .select("id, started_at")
    .eq("tutor_id", tutorId)
    .is("ended_at", null)
    .maybeSingle();
  if (error) { console.error("class session:", error.message); return null; }
  if (!session) return null;

  const startedMs = new Date(session.started_at).getTime();
  if (Date.now() - startedMs > AUTO_END_MS) {
    await db
      .from("class_sessions")
      .update({ ended_at: new Date(startedMs + AUTO_END_MS).toISOString(), auto_ended: true })
      .eq("id", session.id);
    return null;
  }
  return session;
}

/** Ids from `ids` that really are this tutor's students. */
async function ownStudents(db, tutorId, ids) {
  if (!ids.length) return [];
  const { data } = await db
    .from("profiles").select("id").in("id", ids).eq("role", "student").eq("tutor_id", tutorId);
  return (data ?? []).map((r) => r.id);
}

/**
 * Everything the Start class button, the picker and the floating bar need:
 *   { canTeach, session: { id, startedAt, students: [{ id, name }] } | null,
 *     roster: { groups: [{ id, name, studentIds }], students: [{ id, name }] } }
 */
export async function getClassState() {
  const db = service();
  const me = await getTeacher(db);
  if (!me) return { canTeach: false, session: null, roster: { groups: [], students: [] } };

  const [{ data: students }, { data: groups, error: groupError }] = await Promise.all([
    db.from("profiles").select("id, full_name").eq("role", "student").eq("tutor_id", me.id).order("full_name"),
    db.from("groups").select("id, name, group_members(student_id)").eq("tutor_id", me.id).order("name"),
  ]);
  if (groupError) console.error("class roster groups:", groupError.message);

  const roster = {
    students: (students ?? []).map((s) => ({ id: s.id, name: s.full_name || "Unnamed" })),
    groups: (groups ?? [])
      .map((g) => ({ id: g.id, name: g.name, studentIds: (g.group_members ?? []).map((m) => m.student_id) }))
      .filter((g) => g.studentIds.length > 0),
  };

  let session = null;
  const running = await getRunningSession(db, me.id);
  if (running) {
    const { data: members } = await db
      .from("class_session_students")
      .select("student_id, profiles(full_name)")
      .eq("session_id", running.id)
      .is("left_at", null);
    session = {
      id: running.id,
      startedAt: running.started_at,
      students: (members ?? [])
        .map((m) => ({ id: m.student_id, name: m.profiles?.full_name || "Unnamed" }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    };
  }

  return { canTeach: true, session, roster };
}

/** Start a class for these students. */
export async function startClass(studentIds) {
  const db = service();
  const me = await getTeacher(db);
  if (!me) return fail("Only tutors can start a class.");

  const ids = [...new Set((studentIds ?? []).map(String))];
  if (!ids.length) return fail("Pick at least one student.");
  if ((await ownStudents(db, me.id, ids)).length !== ids.length) {
    return fail("Some of those students aren't yours any more. Refresh the page and try again.");
  }
  if (await getRunningSession(db, me.id)) return fail("You already have a class running. End it first.");

  // A student can only be in one running class at a time.
  const cutoff = new Date(Date.now() - AUTO_END_MS).toISOString();
  const { data: busy, error: busyError } = await db
    .from("class_session_students")
    .select("student_id, class_sessions!inner(ended_at, started_at)")
    .in("student_id", ids)
    .is("left_at", null)
    .is("class_sessions.ended_at", null)
    .gt("class_sessions.started_at", cutoff);
  if (busyError) {
    console.error("startClass:", busyError.message);
    return fail("Couldn't start the class. Check that the class sessions SQL has been run in Supabase.");
  }
  if ((busy ?? []).length) return fail("One of those students is already in another running class.");

  const { data: created, error } = await db
    .from("class_sessions").insert({ tutor_id: me.id }).select("id, started_at").single();
  if (error) { console.error("startClass:", error.message); return fail("Couldn't start the class."); }

  const { error: memberError } = await db
    .from("class_session_students")
    .insert(ids.map((student_id) => ({ session_id: created.id, student_id, joined_at: created.started_at })));
  if (memberError) {
    await db.from("class_sessions").delete().eq("id", created.id); // don't leave an empty class running
    console.error("startClass:", memberError.message);
    return fail("Couldn't start the class.");
  }
  return { ok: true };
}

/** Change who is in the running class: late arrivals join now, anyone removed leaves now. */
export async function updateClassStudents(studentIds) {
  const db = service();
  const me = await getTeacher(db);
  if (!me) return fail("Only tutors can change a class.");
  const session = await getRunningSession(db, me.id);
  if (!session) return fail("That class has already ended.");

  const ids = [...new Set((studentIds ?? []).map(String))];
  if (!ids.length) return fail("Keep at least one student, or end the class instead.");
  if ((await ownStudents(db, me.id, ids)).length !== ids.length) {
    return fail("Some of those students aren't yours any more. Refresh the page and try again.");
  }

  const { data: rows, error } = await db
    .from("class_session_students").select("student_id, left_at").eq("session_id", session.id);
  if (error) { console.error("updateClassStudents:", error.message); return fail("Couldn't update the class."); }

  const known = new Map((rows ?? []).map((r) => [r.student_id, r]));
  const now = new Date().toISOString();
  const brandNew = ids.filter((id) => !known.has(id));
  const returning = ids.filter((id) => known.get(id)?.left_at);
  const leaving = [...known.keys()].filter((id) => !ids.includes(id) && !known.get(id).left_at);

  const steps = [];
  if (brandNew.length) {
    steps.push(db.from("class_session_students")
      .insert(brandNew.map((student_id) => ({ session_id: session.id, student_id, joined_at: now }))));
  }
  if (returning.length) {
    steps.push(db.from("class_session_students")
      .update({ left_at: null }).eq("session_id", session.id).in("student_id", returning));
  }
  if (leaving.length) {
    steps.push(db.from("class_session_students")
      .update({ left_at: now }).eq("session_id", session.id).in("student_id", leaving));
  }
  const results = await Promise.all(steps);
  const failed = results.find((r) => r.error);
  if (failed) { console.error("updateClassStudents:", failed.error.message); return fail("Couldn't update everyone. Check the list and try again."); }
  return { ok: true };
}

/** End the running class. */
export async function endClass() {
  const db = service();
  const me = await getTeacher(db);
  if (!me) return fail("Only tutors can end a class.");
  const { error } = await db
    .from("class_sessions")
    .update({ ended_at: new Date().toISOString() })
    .eq("tutor_id", me.id)
    .is("ended_at", null);
  if (error) { console.error("endClass:", error.message); return fail("Couldn't end the class. Try again."); }
  return { ok: true };
}