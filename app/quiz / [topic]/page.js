"use client";

import { use } from "react";
import QuizView from "@/components/QuizView";
import quizBank from "@/data/quizBank";
import quizTemplates from "@/data/quizTemplates";

export default function QuizPage({ params }) {
  const { topic } = use(params);
  const template = quizTemplates[topic];

  if (!template) {
    return (
      <main className="page">
        <h1>Quiz not found</h1>
        <p>No quiz template exists for "{topic}".</p>
      </main>
    );
  }

  const topicQuestions = quizBank.filter((q) => q.topic === topic);

  function buildQuiz(questions, distribution) {
    const selected = [];
    for (const [difficulty, count] of Object.entries(distribution)) {
      const pool = questions.filter((q) => q.difficulty === difficulty);
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      selected.push(...shuffled.slice(0, count));
    }
    return selected.sort(() => Math.random() - 0.5);
  }

  const questions = buildQuiz(topicQuestions, template.distribution);

  return (
    <QuizView
      title={template.title}
      timeMinutes={template.timeMinutes}
      questions={questions}
    />
  );
}