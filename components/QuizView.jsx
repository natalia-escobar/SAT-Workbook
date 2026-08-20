"use client";

import { useState, useEffect, useRef } from "react";
import MathContent from "./MathContent";
import DesmosGraph from "./DesmosGraph";
import WriteInAnswer from "./WriteInAnswer";

export default function QuizView({ title, timeMinutes, questions }) {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeMinutes * 60);
  const selectedRefs = useRef({});

  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [started, finished, timeLeft]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const isMultipleChoice = (q) => q.problem.includes("mc-choice");

const handleChoiceClick = (e, qIndex) => {
    if (answers[qIndex]) return;
    const choice = e.target.closest(".mc-choice");
    if (!choice) return;

    const parent = choice.closest(".mc-choices");
    const choices = parent.querySelectorAll(".mc-choice");
    const labels = ["A", "B", "C", "D"];
    let clickedLabel = "";
    choices.forEach((c, i) => {
      if (c === choice) clickedLabel = labels[i];
    });

    // highlight selected choice in neutral color
    choices.forEach((c) => {
      c.style.borderColor = "";
      c.style.background = "";
    });
    choice.style.borderColor = "#D13B31";
    choice.style.background = "#FCE8E8";

    const q = questions[qIndex];
    const isCorrect = clickedLabel === q.correctChoice;
    setAnswers((prev) => ({ ...prev, [qIndex]: { selected: clickedLabel, correct: isCorrect } }));
};

  const handleWriteInCorrect = (qIndex) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: { correct: true } }));
  };

  const score = Object.values(answers).filter((a) => a.correct).length;

  // ── START SCREEN ──
  if (!started) {
    return (
      <main className="page">
        <div className="quiz-start">
          <h1 className="quiz-start-title">{title}</h1>
          <div className="quiz-start-stats">
            <div className="quiz-stat">
              <span className="quiz-stat-num">{questions.length}</span>
              <span className="quiz-stat-label">Questions</span>
            </div>
            <div className="quiz-stat">
              <span className="quiz-stat-num">{timeMinutes}</span>
              <span className="quiz-stat-label">Minutes</span>
            </div>
          </div>
          <p className="quiz-start-desc">
            Questions are randomized from a bank of problems. Use the Desmos calculator to help solve them. Your results will be shown at the end.
          </p>
          <button className="quiz-start-btn" onClick={() => setStarted(true)}>
            Start quiz
          </button>
        </div>
      </main>
    );
  }

  // ── RESULTS SCREEN ──
  if (finished) {
    return (
      <main className="page">
        <div className="quiz-results">
          <h1 className="quiz-results-title">Quiz complete</h1>
          <div className="quiz-results-score">
            <span className="quiz-results-num">{score}</span>
            <span className="quiz-results-of">/ {questions.length}</span>
          </div>
          <p className="quiz-results-pct">
            {Math.round((score / questions.length) * 100)}% correct
          </p>
          <div className="quiz-results-breakdown">
            {questions.map((q, i) => (
              <div key={q.id} className={`quiz-results-row ${answers[i]?.correct ? "correct" : "incorrect"}`}>
                <span className="quiz-results-qnum">Q{i + 1}</span>
                <span className="quiz-results-qid">{q.id}</span>
                <span className="quiz-results-diff">{q.difficulty}</span>
                <i className={`ti ${answers[i]?.correct ? "ti-check" : "ti-x"}`} />
              </div>
            ))}
          </div>
          <button className="quiz-start-btn" onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      </main>
    );
  }

  // ── QUIZ SCREEN ──
  const q = questions[currentIndex];

  return (
    <main className="page">
      <div className="quiz-header">
        <span className="quiz-header-title">{title}</span>
        <div className="quiz-header-right">
          <span className="quiz-header-count">{currentIndex + 1} / {questions.length}</span>
          <span className={`quiz-timer ${timeLeft <= 60 ? "warning" : ""}`}>
            <i className="ti ti-clock" style={{ marginRight: "4px" }} />
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      <div className="quiz-dots">
        {questions.map((_, i) => (
          <button
            key={i}
            className={`quiz-dot ${i === currentIndex ? "active" : ""} ${answers[i] ? "answered" : ""}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

      <div className="quiz-question">
        <DesmosGraph graph={q.graph} />
        <div onClick={(e) => isMultipleChoice(q) && handleChoiceClick(e, currentIndex)}>
          <MathContent html={q.problem} className="quiz-problem-text" />
        </div>
        {!isMultipleChoice(q) && (
          <WriteInAnswer
            correctAnswer={q.correctAnswer}
            onSubmit={() => handleWriteInCorrect(currentIndex)}
          />
        )}
      </div>

      <div className="quiz-nav">
        <button
          className="nav-btn"
          onClick={() => setCurrentIndex((i) => i - 1)}
          disabled={currentIndex === 0}
        >
          &larr; Prev
        </button>
        {currentIndex === questions.length - 1 ? (
          <button className="quiz-finish-btn" onClick={() => setFinished(true)}>
            Finish quiz
          </button>
        ) : (
          <button className="nav-btn" onClick={() => setCurrentIndex((i) => i + 1)}>
            Next &rarr;
          </button>
        )}
      </div>
    </main>
  );
}