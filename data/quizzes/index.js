// data/quizzes/index.js
// Registry of every quiz, keyed by id. Add a line here each time you create a quiz file,
// so the tutor view can show its title and question order.
 
import equivalentToQuiz from "./equivalent-to-quiz";
 
const quizzes = {
  [equivalentToQuiz.id]: equivalentToQuiz,
};
 
export default quizzes;
 