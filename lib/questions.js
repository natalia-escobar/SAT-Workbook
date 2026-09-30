// lib/questions.js
// Helpers for reading from the question bank. Every page, lesson, and quiz
// gets question content through these — never by importing data/questions.js
// directly and searching it.
 
import { questions } from "../data/questionBank/parabola";
 
// Build a lookup table once at load time so getQuestion is instant.
// Also catches duplicate ids the moment the app starts.
const byId = new Map();
for (const q of questions) {
  if (byId.has(q.id)) {
    throw new Error(`Duplicate question id in data/questions.js: ${q.id}`);
  }
  byId.set(q.id, q);
}
 
/** Get one question by id. Throws if the id doesn't exist. */
export function getQuestion(id) {
  const q = byId.get(id);
  if (!q) {
    throw new Error(`Unknown question id: "${id}". Check data/questions.js.`);
  }
  return q;
}
 
/** Get several questions, in the order the ids are given. */
export function getQuestions(ids) {
  return ids.map(getQuestion);
}
 
/**
 * Filter the bank by any combination of fields.
 * Every filter is optional; omit one to ignore it.
 *
 *   getQuestionsByFilter({ topic: "parabola", subtopic: "vertex" })
 *   getQuestionsByFilter({ questionType: "AQ", difficulty: 2 })
 *   getQuestionsByFilter({ tags: ["maximum"] })   // has ALL listed tags
 */
export function getQuestionsByFilter({
  topic,
  subtopic,
  problem,
  questionType,
  difficulty,
  tags,
} = {}) {
  return questions.filter((q) => {
    if (topic && q.topic !== topic) return false;
    if (subtopic && q.subtopic !== subtopic) return false;
    if (problem !== undefined && q.problem !== problem) return false;
    if (questionType && q.questionType !== questionType) return false;
    if (difficulty !== undefined && q.difficulty !== difficulty) return false;
    if (tags && !tags.every((t) => q.tags.includes(t))) return false;
    return true;
  });
}
 
/** All questions — for admin views or the validation script. */
export function getAllQuestions() {
  return questions;
}

// ---------- Slot adapters for WorkbookView ----------
// Each accepts a single id ("Par-YInt-1-E-1") or an array of ids.
// One id → the single-example shape WorkbookView renders directly.
// Several ids → the workedExamples / guidedProblems arrays it uses for the carousel.

const toList = (ids) => (Array.isArray(ids) ? ids : [ids]);

export function asWorked(ids) {
  const qs = getQuestions(toList(ids));
  const examples = qs.map((q) => ({
    id: q.id,
    problem: q.text,
    graph: q.graph,
    graphChoices: q.graphChoices,
    steps: q.steps?.length ? q.steps : [{ text: "", note: "", gif: "", video: "" }],
  }));
  return examples.length === 1 ? examples[0] : { workedExamples: examples };
}

export function asGuided(ids) {
  const qs = getQuestions(toList(ids));
  const stepsOf = (q) => (q.steps?.length ? q.steps.map((s) => s.text) : [""]);
  const guidedIds = qs.map((q) => q.id);
  if (qs.length === 1) {
    const q = qs[0];
    return {
      guidedIds,
      guidedProblem: q.text,
      guidedGraph: q.graph,
      guidedGraphChoices: q.graphChoices,
      guidedSteps: stepsOf(q),
      guidedAnswer: q.answer ? `Answer: ${q.answer}` : "",
      guidedRawAnswer: q.answer,
      guidedScreenshot: q.screenshot,
    };
  }
  return {
    guidedIds,
    guidedProblems: qs.map((q) => ({
      id: q.id,
      problem: q.text,
      graph: q.graph,
      graphChoices: q.graphChoices,
      steps: stepsOf(q),
      answer: q.answer ? `Answer: ${q.answer}` : "",
      rawAnswer: q.answer,
      screenshot: q.screenshot,
    })),
  };
}

export function asPractice(ids) {
  return getQuestions(toList(ids)).map((q) => ({
    id: q.id,
    text: q.text,
    graph: q.graph,
    graphChoices: q.graphChoices,
    setup: q.answer ? `Answer: ${q.answer}` : "",
    screenshot: q.screenshot,
    answer: q.answer,
  }));
}

export function asAdditional(ids) {
  return getQuestions(toList(ids));
}

export function asClassroom(ids) {
  return getQuestions(toList(ids)).map((q) => ({
    id: q.id,
    problem: q.text,
    graph: q.graph,
    graphChoices: q.graphChoices,
    answer: q.answer,
  }));
}

/** True if a typed free-response value matches the bank answer (any "or" alternative; fractions vs decimals). */
export function gradeFreeResponse(typed, answer) {
  if (!typed || !answer) return null;
  const toNum = (s) => {
    const t = String(s).replace(/\s+/g, "").replace(/,/g, "");
    if (/^-?\d+\/\d+$/.test(t)) { const [a, b] = t.split("/"); return Number(a) / Number(b); }
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
  };
  const typedNum = toNum(typed);
  return String(answer).split(/\s+or\s+/i).some((opt) => {
    const optNum = toNum(opt);
    if (typedNum !== null && optNum !== null) return Math.abs(typedNum - optNum) < 1e-6;
    return String(typed).trim().toLowerCase() === opt.trim().toLowerCase();
  });
}