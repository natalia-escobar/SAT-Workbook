import equivalentToQuiz from "@/data/quizzes/equivalent-to-quiz";
import { asQuiz } from "@/lib/questions";
import QuizView from "@/components/QuizView";
 
export default function EquivalentToQuizPage() {
  return <QuizView quiz={asQuiz(equivalentToQuiz)} />;
}
 