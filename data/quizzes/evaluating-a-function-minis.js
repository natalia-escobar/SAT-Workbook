// data/quizzes/evaluating-a-function-minis.js
// The four mini quizzes embedded in the Evaluating a Function workbook.
// Each one is a normal quiz (shows up in the tutor report and My Progress like any other).
// Question ids are prefilled from the additional-practice sets they cover — swap freely.

const base = {
  minutesPerQuestion: 2,
  covers: "Evaluating a Function",
};

export const evalMini1 = {
  ...base,
  id: "eval-mini-1",
  title: "Quiz · Problems 1–4",
  questionIds: ["Par27418", "Par37365", "Par63493", "Par94360"],
};

export const evalMini2 = {
  ...base,
  id: "eval-mini-2",
  title: "Quiz · Problems 5–6",
  questionIds: ["Par77978", "Par16622", "Par32392"],
};

export const evalMini3 = {
  ...base,
  id: "eval-mini-3",
  title: "Quiz · Problems 7–8",
  questionIds: ["Par42701", "Par81973", "Par67383"],
};

export const evalMini4 = {
  ...base,
  id: "eval-mini-4",
  title: "Quiz · Problems 9–11",
  questionIds: ["Par61753", "Par78949", "Par40944", "Par31218"],
};

const evaluatingAFunctionMinis = [evalMini1, evalMini2, evalMini3, evalMini4];
export default evaluatingAFunctionMinis;