// data/quizzes/index.js
// Registry of every quiz, keyed by id. Add a line here each time you create a quiz file,
// so the tutor view and My Progress can show its title and question order.

import equivalentToQuiz from "./equivalent-to-quiz";
import evaluatingAFunctionMinis from "./evaluating-a-function-minis";

const quizzes = {
  [equivalentToQuiz.id]: equivalentToQuiz,
};
for (const q of evaluatingAFunctionMinis) quizzes[q.id] = q;

export default quizzes;