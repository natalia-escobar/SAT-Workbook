
// data/quizzes/equivalent-to-quiz.js
// One file per quiz. A quiz is just an ordered list of bank ids plus where it
// sits in the workbook sequence. Time limit = minutesPerQuestion × number of ids.

const equivalentToQuiz = {
  id: "par-eq-quiz-1",
  title: "Equivalent To Quiz",
  minutesPerQuestion: 2,
 
  // Where this quiz sits in the sequence (used for the "Continue" link on the results screen).
  after: {
    title: "Basic Equivalent to",
    href: "/workbook/parabola/equivalent-to/simple-equivalent-to",
  },
  next: {
    title: "Evaluating a Function",
    href: "/workbook/parabola/equivalent-to/evaluating-a-function",
  },
 
  // Served in exactly this order.
  questionIds: [
    "Par52592",
    "Par71803",
    "Par97039",
    "Par88361",
  ],
};
 
export default equivalentToQuiz;