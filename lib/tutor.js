// lib/tutor.js
// Server-only reads for the tutor view. Runs with the logged-in tutor's session,
// so row-level security limits results to that tutor's own students (admins see all).

import { createClient as createServiceClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { getAllQuestions } from "@/lib/questions";
import quizzes from "@/data/quizzes";
import { getWorkbookIndex, placeQuestion, roleRank } from "@/lib/workbookIndex";

/**
 * Supabase returns at most 1,000 rows per request. This asks for page after page until
 * everything has arrived. `makeQuery` must build a fresh, ordered query each time.
 */
export async function fetchAllRows(makeQuery, pageSize = 1000) {
  const out = [];
  for (let from = 0; ; from += pageSize) {
    const { data, error } = await makeQuery().range(from, from + pageSize - 1);
    if (error) { console.error("fetchAllRows:", error.message); break; }
    out.push(...(data ?? []));
    if (!data || data.length < pageSize) break;
  }
  return out;
}

/** Distinct workbook + classroom questions in a set of "answered" rows. Used by My students and Classes. */
export function countQuestionsAttempted(rows) {
  return new Set(
    rows.filter((r) => r.context === "workbook" || r.context === "classroom").map((r) => r.question_id)
  ).size;
}

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

  // Groups each student is in (set up by an admin on the Tutors screen). Row-level
  // security returns only this tutor's groups; admins get all of them.
  const groupsByStudent = {};
  const { data: groupRows, error: groupError } = await supabase
    .from("groups")
    .select("id, name, tutor_id, group_members(student_id)")
    .order("name");
  if (groupError) console.error("getMyStudents groups:", groupError.message);
  for (const g of groupRows ?? []) {
    for (const m of g.group_members ?? []) {
      (groupsByStudent[m.student_id] ??= []).push({ id: g.id, name: g.name, tutor_id: g.tutor_id });
    }
  }

  const studentIds = students.map((s) => s.id);
  const events = await fetchAllRows(() =>
    supabase
      .from("events")
      .select("student_id, question_id, correct, context, container_id, attempt_id, created_at")
      .in("student_id", studentIds)
      .eq("event_type", "answered")
      .order("created_at", { ascending: true })
  );

  const byStudent = groupBy(events, (e) => e.student_id);

  return students.map((s) => {
    const rows = byStudent[s.id] ?? [];
    const lastActive = rows.length ? rows[rows.length - 1].created_at : null;
    const quizResults = summarizeQuizzes(rows);
    const workbookAttempted = countQuestionsAttempted(rows);
    const tutor = tutorName[s.tutor_id] ?? null;
    const groups = (groupsByStudent[s.id] ?? []).filter((g) => g.tutor_id === s.tutor_id);
    return { ...s, lastActive, quizResults, workbookAttempted, tutor, groups };
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

  const rows = await fetchAllRows(() =>
    supabase
      .from("events")
      .select("question_id, answer, correct, context, container_id, attempt_id, created_at")
      .eq("student_id", studentId)
      .eq("event_type", "answered")
      .order("created_at", { ascending: true })
  );
  const windows = await getClassWindows(studentId);
  return {
    student,
    quizzes: summarizeQuizzes(rows, { withQuestions: true }).map((q) => ({
      ...q,
      when: classify(new Date(q.takenAt).getTime(), windows),
    })),
    workbook: summarizeWorkbook(rows),
    classroom: summarizeClassroom(rows),
    timeline: summarizeTimeline(rows, windows),
  };
}

// ── In class vs independent ──────────────────────────────────────────────
// A tutor presses Start class / End class (lib/classSession.js). Each class a student was
// in gives a time window; work answered inside a window is "in class", everything after
// the student's first recorded class is "independent", and anything older is "earlier work"
// (no classes were being recorded yet, so it can't be sorted).

const TZ = "America/New_York"; // server runs in UTC; show Eastern time
const AUTO_END_MS = 4 * 60 * 60 * 1000; // keep in step with lib/classSession.js
const fmt = (ms, opts) => new Date(ms).toLocaleString("en-US", { timeZone: TZ, ...opts }).replace(/\u202f/g, " ");
const shortDay = (ms) => fmt(ms, { month: "short", day: "numeric" });
const longDay = (ms) => fmt(ms, { weekday: "short", month: "short", day: "numeric" }).replace(",", "");
const clock = (ms) => fmt(ms, { hour: "numeric", minute: "2-digit" });
const stamp = (iso) => fmt(new Date(iso).getTime(), { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

/**
 * The classes this student was in, oldest first: [{ id, start, end, running }] (times in ms).
 * Read with the service-role key so a student's classes with a previous tutor still count;
 * the caller has already checked that the viewer is allowed to see this student.
 */
async function getClassWindows(studentId) {
  const db = createServiceClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await db
    .from("class_session_students")
    .select("joined_at, left_at, class_sessions(id, started_at, ended_at)")
    .eq("student_id", studentId);
  if (error) { console.error("getClassWindows:", error.message); return []; }

  const now = Date.now();
  return (data ?? [])
    .filter((m) => m.class_sessions)
    .map((m) => {
      const s = m.class_sessions;
      const sessionStart = new Date(s.started_at).getTime();
      const running = !s.ended_at && now - sessionStart <= AUTO_END_MS;
      const sessionEnd = s.ended_at ? new Date(s.ended_at).getTime() : Math.min(now, sessionStart + AUTO_END_MS);
      return {
        id: s.id,
        start: new Date(m.joined_at).getTime(),
        end: m.left_at ? new Date(m.left_at).getTime() : sessionEnd,
        running: running && !m.left_at,
      };
    })
    .sort((a, b) => a.start - b.start);
}

/** "class" | "independent" | "earlier" for one moment in time. */
function classify(t, windows) {
  if (windows.some((w) => t >= w.start && t <= w.end)) return "class";
  if (!windows.length || t < windows[0].start) return "earlier";
  return "independent";
}

function classTitle(w) {
  let from = clock(w.start);
  const to = w.running ? "now" : clock(w.end);
  if (!w.running && from.slice(-2) === to.slice(-2)) from = from.slice(0, -3); // "4:00 – 4:52 PM"
  return `${longDay(w.start)} · ${from} – ${to}`;
}

/**
 * Workbook + classroom work as a timeline, newest first. Each block is one class, or the
 * stretch of independent work between two classes, or "Earlier work". Inside a block:
 * topic → lesson → questions (latest answer per question within that block).
 * Classroom-lesson (DDCUS) answers always count as in class, even with no class started.
 */
function summarizeTimeline(rows, windows) {
  const meta = new Map(getAllQuestions().map((q) => [q.id, q]));
  const { totals, titles } = getWorkbookIndex();
  const now = Date.now();
  const blocks = new Map();
  const blockFor = (key, make) => {
    if (!blocks.has(key)) blocks.set(key, { key, rows: [], ...make() });
    return blocks.get(key);
  };

  for (const r of rows) {
    if (r.context !== "workbook" && r.context !== "classroom") continue;
    const t = new Date(r.created_at).getTime();
    const inside = windows.find((w) => t >= w.start && t <= w.end);
    let block;
    if (inside) {
      block = blockFor(`class:${inside.id}`, () => ({ kind: "class", title: classTitle(inside), sort: inside.start }));
    } else if (r.context === "classroom") {
      block = blockFor(`day:${longDay(t)}:${new Date(t).getUTCFullYear()}`, () => ({ kind: "class", title: longDay(t), sort: t }));
    } else if (!windows.length || t < windows[0].start) {
      block = blockFor("earlier", () => ({ kind: "earlier", title: "Earlier work", sort: -Infinity }));
    } else {
      let i = 0;
      while (i + 1 < windows.length && windows[i + 1].start <= t) i += 1;
      const prev = windows[i];
      const next = windows[i + 1];
      block = blockFor(`gap:${prev.id}`, () => {
        const from = shortDay(prev.end);
        const to = next ? shortDay(next.start) : "today";
        const title = !next && from === shortDay(now) ? "Today" : from === to ? from : `${from} – ${to}`;
        return { kind: "independent", title, sort: prev.end };
      });
    }
    block.rows.push(r);
  }

  const pretty = (id) => String(id ?? "").replace(/[-_/]+/g, " ").replace(/([a-zA-Z])(\d)/g, "$1 $2");

  return [...blocks.values()]
    .sort((a, b) => b.sort - a.sort)
    .map((block) => {
      const lessons = new Map();
      for (const r of block.rows) {
        const q = meta.get(r.question_id);
        let key, topic, title, total, place = null;
        if (r.context === "workbook") {
          place = placeQuestion(r.question_id, r.container_id);
          const slug = place?.slug ?? r.container_id ?? "other";
          key = `wb:${slug}`;
          topic = q?.topic ?? "Workbook";
          title = place?.title ?? titles[slug] ?? q?.subtopic ?? slug;
          total = totals[slug] ?? null;
        } else {
          key = `cr:${r.container_id}`;
          topic = "DDCUS";
          title = pretty(r.container_id);
          total = null;
        }
        if (!lessons.has(key)) lessons.set(key, { key, topic, title, total, source: r.context, latest: new Map() });
        lessons.get(key).latest.set(r.question_id, { r, place, q }); // later rows win
      }

      const topics = new Map();
      for (const l of lessons.values()) {
        const questions = [...l.latest.values()].map(({ r, place, q }) => ({
          id: r.question_id,
          source: l.source,
          problem: place?.problem ?? q?.problem ?? null,
          type: place?.role ?? q?.questionType ?? null,
          order: place?.order ?? 0,
          answer: r.answer ?? null,
          correct: !!r.correct,
          at: r.created_at,
          atLabel: stamp(r.created_at),
          content: cardContent(q),
        }));
        if (l.source === "workbook") {
          questions.sort(
            (x, y) => (x.problem ?? 0) - (y.problem ?? 0) || roleRank(x.type) - roleRank(y.type) || x.order - y.order
          );
        } else {
          questions.sort((x, y) => new Date(x.at) - new Date(y.at));
        }
        if (!topics.has(l.topic)) topics.set(l.topic, { name: l.topic, lessons: [] });
        topics.get(l.topic).lessons.push({
          key: l.key,
          title: String(l.title).replace(/-/g, " "),
          attempted: questions.length,
          correct: questions.filter((x) => x.correct).length,
          total: l.total,
          questions,
        });
      }

      return { key: block.key, kind: block.kind, title: block.title, topics: [...topics.values()] };
    });
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
 * Workbook work grouped by workbook (the subtopic file the student was in), with each
 * question labeled by its position THERE — not by the bank's original problem number.
 * Latest answer per question.
 */
function summarizeWorkbook(rows) {
  const meta = new Map(getAllQuestions().map((q) => [q.id, q]));
  const { totals, titles } = getWorkbookIndex();
  const wbRows = rows.filter((r) => r.context === "workbook");

   // latest row per (workbook, question) — old and new container names for the same
  // workbook collapse together here, so a question appears once per workbook.
  const latest = {};
  for (const r of wbRows) {
    const place = placeQuestion(r.question_id, r.container_id);
    const slug = place?.slug ?? r.container_id ?? "other";
    latest[`${slug}::${r.question_id}`] = { r, place, slug };
  }

  const byWorkbook = {};
  for (const { r, place, slug } of Object.values(latest)) {
    const q = meta.get(r.question_id);
    const title = place?.title ?? titles[slug] ?? (q ? `${q.topic} / ${q.subtopic}` : slug);

    const bucket = (byWorkbook[slug] ??= { slug, subtopic: title, attempted: 0, correct: 0, lastActive: null, questions: [] });
    bucket.attempted += 1;
    if (r.correct) bucket.correct += 1;
    if (!bucket.lastActive || r.created_at > bucket.lastActive) bucket.lastActive = r.created_at;
    bucket.questions.push({
      id: r.question_id,
      problem: place?.problem ?? q?.problem ?? null,
      type: place?.role ?? q?.questionType ?? null,
      order: place?.order ?? 0,
      answer: r.answer ?? null,
      correct: !!r.correct,
      at: r.created_at,
      content: cardContent(q),
    });
  }

  return Object.values(byWorkbook)
    .map((b) => ({
      ...b,
      total: totals[b.slug] ?? b.attempted,
      questions: b.questions.sort(
        (x, y) => (x.problem ?? 0) - (y.problem ?? 0) || roleRank(x.type) - roleRank(y.type) || x.order - y.order
      ),
    }))
    .sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive));
}

/** The logged-in user's own report (student "My progress" page). */
export async function getMyReport() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  return getStudentReport(user.id);
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