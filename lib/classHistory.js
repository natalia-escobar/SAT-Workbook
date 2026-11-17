"use server";

// lib/classHistory.js
// Class history: list past classes, add one that already happened, correct a class's start
// and end time, or delete one. Tutors can do this for their own classes; admins for anyone's.
// A student's work is never changed here. The student page decides "in class" or
// "independent" by comparing each answer's time with these class times, so editing a class
// simply re-sorts the work.
//
// Runs on the server with the SERVICE ROLE key, after checking who is signed in.

import { revalidatePath } from "next/cache";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";

const TZ = "America/New_York"; // times are typed and shown in Eastern time
const AUTO_END_MS = 4 * 60 * 60 * 1000; // keep in step with lib/classSession.js
const MAX_CLASS_MS = 8 * 60 * 60 * 1000;

const service = () =>
  createServiceClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
const fail = (error) => ({ ok: false, error });
const refresh = () => revalidatePath("/tutor", "layout");

async function getTeacher(db) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data } = await db.from("profiles").select("id, full_name, role").eq("id", user.id).maybeSingle();
  return data && (data.role === "tutor" || data.role === "admin") ? data : null;
}

// ── Eastern-time helpers ─────────────────────────────────────────────────
const fmt = (ms, opts) => new Date(ms).toLocaleString("en-US", { timeZone: TZ, ...opts }).replace(/ /g, " ");
const longDay = (ms) => fmt(ms, { weekday: "short", month: "short", day: "numeric", year: "numeric" }).replace(",", "");
const clock = (ms) => fmt(ms, { hour: "numeric", minute: "2-digit" });
const parts = (ms) =>
  Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: TZ, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
    }).formatToParts(new Date(ms)).map((p) => [p.type, p.value])
  );
const dateInput = (ms) => { const p = parts(ms); return `${p.year}-${p.month}-${p.day}`; };
const timeInput = (ms) => { const p = parts(ms); return `${p.hour}:${p.minute}`; };
const offsetMs = (ms) => {
  const p = parts(ms);
  return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second) - ms;
};
/** "2026-11-17" + "16:00" typed in Eastern time → a moment in time (ms), or null if unreadable. */
function easternToMs(date, time) {
  const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(date ?? ""));
  const t = /^(\d{2}):(\d{2})$/.exec(String(time ?? ""));
  if (!d || !t) return null;
  const wall = Date.UTC(+d[1], +d[2] - 1, +d[3], +t[1], +t[2]);
  const first = wall - offsetMs(wall);
  return wall - offsetMs(first);
}
function timeRange(start, end, running) {
  let from = clock(start);
  const to = running ? "now" : clock(end);
  if (!running && from.slice(-2) === to.slice(-2)) from = from.slice(0, -3);
  return `${from} – ${to}`;
}

/** Read the three form fields into { start, end } (ms), or { error }. */
function readTimes({ date, start, end }) {
  const s = easternToMs(date, start);
  const e = easternToMs(date, end);
  if (s == null || e == null) return { error: "Fill in the date, start time and end time." };
  if (e <= s) return { error: "The end time has to be after the start time." };
  if (e - s > MAX_CLASS_MS) return { error: "That's longer than 8 hours. Check the times." };
  if (e > Date.now() + 60000) return { error: "A past class can't end in the future." };
  return { start: s, end: e };
}

/** Another class that overlaps this one for the same tutor or any of the same students. */
async function findConflict(db, { start, end, tutorId, studentIds, excludeId = null }) {
  const { data, error } = await db
    .from("class_sessions")
    .select("id, tutor_id, started_at, ended_at, class_session_students(student_id)")
    .lt("started_at", new Date(end).toISOString())
    .gt("started_at", new Date(start - 24 * 60 * 60 * 1000).toISOString());
  if (error) { console.error("class history:", error.message); return "Couldn't check for overlapping classes."; }

  const now = Date.now();
  for (const s of data ?? []) {
    if (s.id === excludeId) continue;
    const sStart = new Date(s.started_at).getTime();
    const sEnd = s.ended_at ? new Date(s.ended_at).getTime() : Math.min(now, sStart + AUTO_END_MS);
    if (sEnd <= start) continue; // finished before this one begins
    if (s.tutor_id === tutorId) return `That overlaps another class of this tutor's on ${longDay(sStart)} (${timeRange(sStart, sEnd, false)}).`;
    if ((s.class_session_students ?? []).some((m) => studentIds.includes(m.student_id))) {
      return `One of those students was in another class at that time (${longDay(sStart)}, ${timeRange(sStart, sEnd, false)}).`;
    }
  }
  return null;
}

/**
 * Everything the Class history page shows, or null for students and signed-out visitors.
 * Tutors get their own classes and students; admins get everyone's.
 */
export async function getClassHistory() {
  const db = service();
  const me = await getTeacher(db);
  if (!me) return null;
  const isAdmin = me.role === "admin";

  let sessionQuery = db
    .from("class_sessions")
    .select("id, tutor_id, started_at, ended_at, auto_ended, class_session_students(student_id)")
    .order("started_at", { ascending: false })
    .limit(300);
  if (!isAdmin) sessionQuery = sessionQuery.eq("tutor_id", me.id);

  let studentQuery = db.from("profiles").select("id, full_name, tutor_id").eq("role", "student").order("full_name");
  if (!isAdmin) studentQuery = studentQuery.eq("tutor_id", me.id);

  let groupQuery = db.from("groups").select("id, name, tutor_id, group_members(student_id)").order("name");
  if (!isAdmin) groupQuery = groupQuery.eq("tutor_id", me.id);

  const [sessionRes, studentRes, groupRes, ownerRes] = await Promise.all([
    sessionQuery,
    studentQuery,
    groupQuery,
    db.from("profiles").select("id, full_name").in("role", ["tutor", "admin"]).order("full_name"),
  ]);
  if (sessionRes.error) console.error("getClassHistory:", sessionRes.error.message);

  const owners = (ownerRes.data ?? []).map((o) => ({ id: o.id, name: o.full_name || "Unnamed" }));
  const ownerName = new Map(owners.map((o) => [o.id, o.name]));
  const students = (studentRes.data ?? []).map((s) => ({ id: s.id, name: s.full_name || "Unnamed", tutorId: s.tutor_id }));
  const studentName = new Map(students.map((s) => [s.id, s.name]));

  // Names of students who were in a class but aren't in the list above (moved to another tutor).
  const missing = [...new Set(
    (sessionRes.data ?? []).flatMap((s) => (s.class_session_students ?? []).map((m) => m.student_id))
  )].filter((id) => !studentName.has(id));
  if (missing.length) {
    const { data } = await db.from("profiles").select("id, full_name").in("id", missing);
    for (const p of data ?? []) studentName.set(p.id, p.full_name || "Unnamed");
  }

  const now = Date.now();
  const sessions = (sessionRes.data ?? []).map((s) => {
    const start = new Date(s.started_at).getTime();
    const running = !s.ended_at && now - start <= AUTO_END_MS;
    const end = s.ended_at ? new Date(s.ended_at).getTime() : Math.min(now, start + AUTO_END_MS);
    return {
      id: s.id,
      tutorId: s.tutor_id,
      tutorName: ownerName.get(s.tutor_id) ?? "No tutor",
      running,
      autoEnded: !!s.auto_ended || (!s.ended_at && !running),
      dayLabel: longDay(start),
      timeLabel: timeRange(start, end, running),
      date: dateInput(start),
      start: timeInput(start),
      end: timeInput(end),
      students: (s.class_session_students ?? [])
        .map((m) => studentName.get(m.student_id) ?? "Former student")
        .sort(),
    };
  });

  return {
    me: { id: me.id, isAdmin },
    today: dateInput(now),
    sessions,
    owners: isAdmin ? owners : owners.filter((o) => o.id === me.id),
    students,
    groups: (groupRes.data ?? [])
      .map((g) => ({ id: g.id, name: g.name, tutorId: g.tutor_id, studentIds: (g.group_members ?? []).map((m) => m.student_id) }))
      .filter((g) => g.studentIds.length > 0),
  };
}

/** Record a class that already happened. */
export async function addPastClass({ tutorId = null, date, start, end, studentIds = [] }) {
  const db = service();
  const me = await getTeacher(db);
  if (!me) return fail("Only tutors and administrators can add a class.");
  const ownerId = me.role === "admin" && tutorId ? tutorId : me.id;

  const times = readTimes({ date, start, end });
  if (times.error) return fail(times.error);

  const ids = [...new Set((studentIds ?? []).map(String))];
  if (!ids.length) return fail("Pick at least one student.");
  const { data: valid } = await db
    .from("profiles").select("id").in("id", ids).eq("role", "student").eq("tutor_id", ownerId);
  if ((valid ?? []).length !== ids.length) return fail("Some of those students aren't with this tutor. Refresh the page and try again.");

  const conflict = await findConflict(db, { ...times, tutorId: ownerId, studentIds: ids });
  if (conflict) return fail(conflict);

  const startIso = new Date(times.start).toISOString();
  const { data: created, error } = await db
    .from("class_sessions")
    .insert({ tutor_id: ownerId, started_at: startIso, ended_at: new Date(times.end).toISOString() })
    .select("id")
    .single();
  if (error) { console.error("addPastClass:", error.message); return fail("Couldn't add the class."); }

  const { error: memberError } = await db
    .from("class_session_students")
    .insert(ids.map((student_id) => ({ session_id: created.id, student_id, joined_at: startIso })));
  if (memberError) {
    await db.from("class_sessions").delete().eq("id", created.id);
    console.error("addPastClass:", memberError.message);
    return fail("Couldn't add the class.");
  }
  refresh();
  return { ok: true };
}

/** The class with this id, if the signed-in person may change it. */
async function editableSession(db, me, id) {
  const { data } = await db
    .from("class_sessions")
    .select("id, tutor_id, started_at, ended_at, class_session_students(student_id)")
    .eq("id", id)
    .maybeSingle();
  if (!data) return null;
  if (me.role !== "admin" && data.tutor_id !== me.id) return null;
  return data;
}

/** Correct when a finished class started and ended. Everyone in it counts for the whole class. */
export async function saveClassTimes({ id, date, start, end }) {
  const db = service();
  const me = await getTeacher(db);
  if (!me) return fail("Only tutors and administrators can change a class.");
  const session = await editableSession(db, me, id);
  if (!session) return fail("That class couldn't be found.");
  if (!session.ended_at && Date.now() - new Date(session.started_at).getTime() <= AUTO_END_MS) {
    return fail("That class is still running. End it first, then fix the times.");
  }

  const times = readTimes({ date, start, end });
  if (times.error) return fail(times.error);

  const studentIds = (session.class_session_students ?? []).map((m) => m.student_id);
  const conflict = await findConflict(db, { ...times, tutorId: session.tutor_id, studentIds, excludeId: id });
  if (conflict) return fail(conflict);

  const startIso = new Date(times.start).toISOString();
  const { error } = await db
    .from("class_sessions")
    .update({ started_at: startIso, ended_at: new Date(times.end).toISOString(), auto_ended: false })
    .eq("id", id);
  if (error) { console.error("saveClassTimes:", error.message); return fail("Couldn't save the times. Nothing was changed."); }

  const { error: memberError } = await db
    .from("class_session_students").update({ joined_at: startIso, left_at: null }).eq("session_id", id);
  if (memberError) console.error("saveClassTimes members:", memberError.message);

  refresh();
  return { ok: true };
}

/** Delete a class. The students' work stays; it just stops counting as in-class. */
export async function deleteClass(id) {
  const db = service();
  const me = await getTeacher(db);
  if (!me) return fail("Only tutors and administrators can delete a class.");
  const session = await editableSession(db, me, id);
  if (!session) return fail("That class couldn't be found.");
  const { error } = await db.from("class_sessions").delete().eq("id", id);
  if (error) { console.error("deleteClass:", error.message); return fail("Couldn't delete the class."); }
  refresh();
  return { ok: true };
}