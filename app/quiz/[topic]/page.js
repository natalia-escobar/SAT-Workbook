import QuizPageClient from "./QuizPageClient";

export default async function QuizPage({ params }) {
  const { topic } = await params;
  return <QuizPageClient topic={topic} />;
}