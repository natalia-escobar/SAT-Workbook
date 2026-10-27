"use client";

// components/QuestionCard.jsx
// Renders one question read-only, with the student's answer marked.
// Used by the quiz review (student) and the tutor's report (tutor).
//
// Props:
//   question    { id, problem, graph, graphChoices, answer, kind }  — from asQuiz() or similar
//   selected    the student's answer ("B" or "10"), or null/undefined if unanswered
//   correct     boolean — was `selected` right?
//   showCorrect if true, also highlight the keyed answer (tutor only)

import { useEffect, useRef } from "react";
import MathContent from "./MathContent";
import DesmosGraph from "./DesmosGraph";

export default function QuestionCard({ question, selected, correct, showCorrect = false }) {
  const ref = useRef(null);
  const q = question;
  const isMc = q.kind === "mc";

  // Mark the choices after MathContent has rendered the HTML.
  useEffect(() => {
    const root = ref.current;
    if (!root || !isMc) return;
    root.querySelectorAll(".mc-choice").forEach((c) => {
      const label = c.querySelector(".mc-label")?.textContent?.trim();
      c.classList.remove("qc-selected", "qc-right", "qc-wrong", "qc-key");
      if (label && label === selected) {
        c.classList.add("qc-selected", correct ? "qc-right" : "qc-wrong");
      }
      if (showCorrect && label && label === String(q.answer).trim().toUpperCase()) {
        c.classList.add("qc-key");
      }
    });
  }, [q, selected, correct, showCorrect, isMc]);

  return (
    <div className="question-card">
      {q.graph && <DesmosGraph graph={q.graph} />}
      <div ref={ref} className={`question-card-body ${showCorrect ? "show-key" : ""}`}>
        <MathContent html={q.problem} className="quiz-problem-text" />
      </div>

      {!isMc && (
        <div className="question-card-writein">
          <div className={`qc-answer ${selected == null || selected === "" ? "" : correct ? "qc-right" : "qc-wrong"}`}>
            <span className="qc-answer-label">Your answer</span>
            <span className="qc-answer-value">{selected == null || selected === "" ? "—" : selected}</span>
            {selected != null && selected !== "" && (
              <i className={`ti ${correct ? "ti-check" : "ti-x"}`} />
            )}
          </div>
          {showCorrect && (
            <div className="qc-answer qc-key">
              <span className="qc-answer-label">Correct answer</span>
              <span className="qc-answer-value">{q.answer}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
