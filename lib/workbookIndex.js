// lib/workbookIndex.js
// Where does each question id appear in the workbooks, and as what?
// Built from the workbook files (not the bank), so a question reused as Problem 1
// in one workbook and Problem 7 in another is labeled correctly in each.

import workbooks from "@/data/workbooks";

const ROLE_ORDER = { WE: 0, GP: 1, PR: 2, AQ: 3 };

/**
 * placements: Map<id, [{ slug, title, problem, role, order }]>
 * totals:     { [slug]: number of PR + AQ questions }
 * titles:     { [slug]: "Parabola / Evaluating a Function" }
 * aliases:    { [name-or-lesson]: slug }  — for events logged before slugs existed
 */
function build() {
  const placements = new Map();
  const totals = {};
  const titles = {};
  const aliases = {};

  const add = (id, p) => {
    if (!id) return;
    if (!placements.has(id)) placements.set(id, []);
    placements.get(id).push(p);
  };

  for (const [slug, wb] of Object.entries(workbooks)) {
    const title = [wb.name, wb.lesson].filter(Boolean).join(" / ");
    titles[slug] = title;
    totals[slug] = 0;
    if (wb.name) aliases[wb.name] = aliases[wb.name] ?? slug;
    if (wb.lesson) aliases[wb.lesson] = slug;

    (wb.workedProblems || []).forEach((prob, i) => {
      const problem = i + 1;
      let order = 0;
      const put = (id, role) => add(id, { slug, title, problem, role, order: order++ });

      // worked examples: single or carousel
      if (prob.workedExamples?.length) prob.workedExamples.forEach((ex) => put(ex.id, "WE"));
      else put(prob.id, "WE");

      // guided practice
      (prob.guidedIds || []).forEach((id) => put(id, "GP"));

      // in-class practice & additional practice (these are what students answer)
      (prob.practice || []).forEach((p) => { put(p.id, "PR"); totals[slug] += 1; });
      (prob.additionalPractice || []).forEach((p) => { put(p.id, "AQ"); totals[slug] += 1; });
    });
  }

  return { placements, totals, titles, aliases };
}

let cache = null;
export function getWorkbookIndex() {
  return (cache ??= build());
}

/**
 * Best placement for an id given the container it was logged under.
 * Prefers the workbook matching the container; falls back to the first place the id appears.
 */
export function placeQuestion(id, container) {
  const { placements, aliases } = getWorkbookIndex();
  const list = placements.get(id);
  if (!list?.length) return null;
  const slug = aliases[container] ?? container;
  return list.find((p) => p.slug === slug) ?? list[0];
}

export function roleRank(role) {
  return ROLE_ORDER[role] ?? 9;
}