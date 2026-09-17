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
  level,
  questionType,
  difficulty,
  tags,
} = {}) {
  return questions.filter((q) => {
    if (topic && q.topic !== topic) return false;
    if (subtopic && q.subtopic !== subtopic) return false;
    if (level !== undefined && q.level !== level) return false;
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

export function asWorked(id) {
  const q = getQuestion(id);
  return { problem: q.text, graph: q.graph, graphChoices: q.graphChoices, steps: q.steps };
}

export function asGuided(id) {
  const q = getQuestion(id);
  return {
    guidedProblem: q.text,
    guidedGraph: q.graph,
    guidedGraphChoices: q.graphChoices,
    guidedSteps: q.steps.length ? q.steps.map((s) => s.text) : [""],
    guidedAnswer: `Answer: ${q.answer}`,
    guidedScreenshot: q.screenshot,
  };
}

export function asPractice(ids) {
  return getQuestions(ids).map((q) => ({
    text: q.text,
    graph: q.graph,
    graphChoices: q.graphChoices,
    setup: `Answer: ${q.answer}`,
    screenshot: q.screenshot,
  }));
}

export function asAdditional(ids) {
  return getQuestions(ids);
}