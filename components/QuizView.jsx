"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import MathContent from "./MathContent";
import DesmosGraph from "./DesmosGraph";
import QuestionCard from "./QuestionCard";
import { gradeFreeResponse } from "@/lib/questions";
import { logEvent, getLatestQuizAttempt } from "@/lib/db";

/**
 * QuizView — a fixed-order, timed checkpoint quiz.
 *
 * Props: { quiz } as returned by asQuiz():
 *   { id, title, timeMinutes, questions: [{ id, problem, graph, graphChoices, answer, kind }], next, after }
 *
 * Flow: start screen → questions (answers can be changed freely, no feedback)
 *       → results on Finish or when the timer runs out (score + right/wrong per question;
 *         each row expands to show the question with the student's answer marked).
 * The start screen also offers "Review last attempt" if the student has taken it before.
 */
export default function QuizView({ quiz }) {
  const { questions, timeMinutes } = quiz;
  const totalSeconds = timeMinutes * 60;

  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [index]: "B" | "10" }
  const [results, setResults] = useState([]); // [{ id, answered, correct }]
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [openRow, setOpenRow] = useState(null);         // which results row is expanded
  const [reviewing, setReviewing] = useState(false);    // results screen reached via "Review", not a fresh run
  const [lastAttempt, setLastAttempt] = useState(undefined); // undefined = loading, null = none

  // Look up the student's last attempt for the "Review" button.
  useEffect(() => {
    let cancelled = false;
    getLatestQuizAttempt(quiz.id).then((a) => { if (!cancelled) setLastAttempt(a); });
    return () => { cancelled = true; };
  }, [quiz.id]);

  const review = () => {
    if (!lastAttempt) return;
    const graded = questions.map((q) => {
      const r = lastAttempt.answers[q.id];
      return { id: q.id, answered: !!r, correct: r?.correct ?? false };
    });
    const idxAnswers = {};
    questions.forEach((q, i) => { if (lastAttempt.answers[q.id]) idxAnswers[i] = lastAttempt.answers[q.id].answer; });
    setAnswers(idxAnswers);
    setResults(graded);
    setReviewing(true);
    setStarted(true);
    setFinished(true);
  };

  const deadlineRef = useRef(null);
  const problemRef = useRef(null);
  const attemptRef = useRef(null); // one id per Start click, so retakes are separate attempts

  // ── Grading ──
  const grade = useCallback(
    (q, value) => {
      if (value === undefined || value === null || String(value).trim() === "") return false;
      if (q.kind === "mc") return String(value).trim().toUpperCase() === String(q.answer).trim().toUpperCase();
      return gradeFreeResponse(value, q.answer) === true;
    },
    []
  );

  const finish = useCallback(() => {
    if (finished) return;
    const graded = questions.map((q, i) => {
      const value = answers[i];
      const answered = value !== undefined && String(value).trim() !== "";
      return { id: q.id, answered, correct: grade(q, value) };
    });
    setResults(graded);
    setFinished(true);

    // One "answered" row per attempted question (final answer only). No-op when not logged in.
    graded.forEach((r, i) => {
      if (!r.answered) return;
      logEvent({
        questionId: r.id,
        eventType: "answered",
        answer: String(answers[i]),
        correct: r.correct,
        context: "quiz",
        containerId: quiz.id,
        attemptId: attemptRef.current,
      });
    });
  }, [answers, finished, grade, questions, quiz.id]);

  // ── Timer (deadline-based so it doesn't drift; auto-finishes at zero) ──
  useEffect(() => {
    if (!started || finished) return;
    if (!deadlineRef.current) deadlineRef.current = Date.now() + totalSeconds * 1000;

    const tick = () => {
      const remaining = Math.max(0, Math.ceil((deadlineRef.current - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) finish();
    };
    tick();
    const timer = setInterval(tick, 500);
    return () => clearInterval(timer);
  }, [started, finished, totalSeconds, finish]);

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  // ── Multiple choice: delegated click inside the rendered HTML ──
  const handleChoiceClick = (e) => {
    const choice = e.target.closest(".mc-choice");
    if (!choice) return;
    const label = choice.querySelector(".mc-label")?.textContent?.trim();
    if (!label) return;
    setAnswers((prev) => ({ ...prev, [currentIndex]: label }));
  };

  // Re-apply the selected outline whenever the question or answer changes
  // (MathContent re-renders its HTML, so the outline can't live in the DOM alone).
  useEffect(() => {
    const root = problemRef.current;
    if (!root) return;
    const selected = answers[currentIndex];
    root.querySelectorAll(".mc-choice").forEach((c) => {
      const label = c.querySelector(".mc-label")?.textContent?.trim();
      const isSelected = label && label === selected;
      c.classList.toggle("selected", !!isSelected);
      c.style.outline = isSelected ? "2px solid #1a1a1a" : "";
    });
  }, [currentIndex, answers, started]);

  const start = () => {
    attemptRef.current = crypto.randomUUID();
    setStarted(true);
  };

  const reset = () => {
    deadlineRef.current = null;
    attemptRef.current = null;
    setAnswers({});
    setResults([]);
    setCurrentIndex(0);
    setTimeLeft(totalSeconds);
    setFinished(false);
    setStarted(false);
    setOpenRow(null);
    setReviewing(false);
  };

  const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });

  const answeredCount = Object.values(answers).filter((v) => String(v).trim() !== "").length;
  const score = results.filter((r) => r.correct).length;

  // ── START SCREEN ──
  if (!started) {
    return (
      <main className="page">
        <div className="quiz-start">
          <h1 className="quiz-start-title">{quiz.title}</h1>
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
            You can move between questions and change answers until you finish.
            The quiz closes automatically when the time is up.
          </p>
          <div className="quiz-results-actions">
            <button className="quiz-start-btn" onClick={start}>
              Start quiz
            </button>
            {lastAttempt && (
              <button className="nav-btn" onClick={review}>
                Review last attempt ({fmtDate(lastAttempt.takenAt)})
              </button>
            )}
          </div>
        </div>
      </main>
    );
  }

  // ── RESULTS SCREEN ──
  if (finished) {
    return (
      <main className="page">
        <div className="quiz-results">
          <h1 className="quiz-results-title">
            {reviewing ? "Your last attempt" : timeLeft <= 0 ? "Time's up" : "Quiz complete"}
          </h1>
          {reviewing && lastAttempt && (
            <p style={{ color: "#777", fontSize: 13, marginTop: -16, marginBottom: 16 }}>
              Taken {fmtDate(lastAttempt.takenAt)}
            </p>
          )}
          <div className="quiz-results-score">
            <span className="quiz-results-num">{score}</span>
            <span className="quiz-results-of">/ {questions.length}</span>
          </div>
          <p className="quiz-results-pct">
            {Math.round((score / questions.length) * 100)}% correct
          </p>

          <p style={{ color: "#777", fontSize: 13, marginBottom: 8 }}>
            Tap a question to see it again.
          </p>
          <div className="quiz-results-breakdown">
            {results.map((r, i) => {
              const isOpen = openRow === i;
              return (
                <div key={r.id}>
                  <button
                    type="button"
                    className={`quiz-results-row ${r.correct ? "correct" : "incorrect"} ${isOpen ? "open" : ""}`}
                    onClick={() => setOpenRow(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="quiz-results-qnum">Q{i + 1}</span>
                    <span className="quiz-results-qid">{r.id}</span>
                    <span className="quiz-results-status">
                      {r.correct ? "Correct" : r.answered ? "Incorrect" : "No answer"}
                    </span>
                    <i className={`ti ${r.correct ? "ti-check" : "ti-x"}`} />
                  </button>
                  {isOpen && (
                    <div className="quiz-results-detail">
                      <QuestionCard
                        question={questions[i]}
                        selected={answers[i] ?? null}
                        correct={r.correct}
                        showCorrect={false}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="quiz-results-actions">
            <button className="nav-btn" onClick={reset}>
              Try again
            </button>
            {quiz.next && (
              <Link href={quiz.next.href} className="quiz-start-btn">
                Continue to {quiz.next.title} &rarr;
              </Link>
            )}
          </div>
        </div>
      </main>
    );
  }

  // ── QUIZ SCREEN ──
  const q = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  return (
    <main className="page">
      <div className="quiz-header">
        <span className="quiz-header-title">{quiz.title}</span>
        <div className="quiz-header-right">
          <span className="quiz-header-count">
            {currentIndex + 1} / {questions.length}
          </span>
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
            type="button"
            aria-label={`Question ${i + 1}`}
            className={`quiz-dot ${i === currentIndex ? "active" : ""} ${
              answers[i] !== undefined && String(answers[i]).trim() !== "" ? "answered" : ""
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

      <div className="quiz-question" key={q.id}>
        {q.graph && <DesmosGraph graph={q.graph} />}
        <div ref={problemRef} onClick={q.kind === "mc" ? handleChoiceClick : undefined}>
          <MathContent html={q.problem} className="quiz-problem-text" />
        </div>
        {q.kind === "writein" && (
          <div className="quiz-writein">
            <input
              type="text"
              inputMode="decimal"
              placeholder="Type your answer"
              value={answers[currentIndex] ?? ""}
              onChange={(e) =>
                setAnswers((prev) => ({ ...prev, [currentIndex]: e.target.value }))
              }
            />
          </div>
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
        {isLast ? (
          <button
            className="quiz-finish-btn"
            onClick={() => {
              if (
                answeredCount < questions.length &&
                !window.confirm(
                  `You have ${questions.length - answeredCount} unanswered question(s). Finish anyway?`
                )
              )
                return;
              finish();
            }}
          >
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
