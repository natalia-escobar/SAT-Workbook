"use client";

import { useState, useEffect, useRef } from "react";
import MathContent from "./MathContent";
import DesmosGraph from "./DesmosGraph";
import GraphChoices from "./GraphChoices";
import ProblemNav from "./ProblemNav";
import useShowIds from "@/lib/useShowIds";
import useShowAnswers from "@/lib/useShowAnswers";
import Link from "next/link";
import { logEvent, getSavedAnswers } from "@/lib/db";
import { gradeFreeResponse } from "@/lib/questions";

export default function ClassroomView({ topic }) {
  const [problemIndex, setProblemIndex] = useState(0);
  const problem = topic.problems[problemIndex];
  const total = topic.problems.length;
  const isFirst = problemIndex === 0;
  const isLast = problemIndex === total - 1;
  const showIds = useShowIds();
  const showAnswers = useShowAnswers(); // tutor switch in the sidebar
  const boxRef = useRef(null);

  // Every answer in this lesson is logged against this id. Give each lesson file a `slug`
  // (e.g. "amuni-lesson-3") so the tutor report can group by it; falls back to the name.
  const container = topic.slug || topic.name;

  const [saved, setSaved] = useState({});     // { [questionId]: answer }
  const [typed, setTyped] = useState("");
  const [savedFlag, setSavedFlag] = useState(false);

  // Load this student's previous answers for the lesson.
  useEffect(() => {
    getSavedAnswers(container).then(setSaved);
  }, [container]);

  const isMultipleChoice = problem.problem.includes("mc-choice");

  // When the problem changes: typeset, log the view, and restore the write-in box.
  useEffect(() => {
    if (window.MathJax) window.MathJax.typesetPromise();
    logEvent({ questionId: problem.id, eventType: "viewed", context: "classroom", containerId: container });
    const prev = saved[problem.id];
    setTyped(!isMultipleChoice && prev ? prev : "");
    setSavedFlag(!isMultipleChoice && !!prev);
  }, [problemIndex, problem.id]);

  // Re-outline the saved choice after MathContent renders (DOM is rebuilt each time).
  const applySaved = () => {
    const root = boxRef.current;
    if (!root || !isMultipleChoice) return;
    const sel = saved[problem.id];
    root.querySelectorAll(".mc-choice").forEach((c) => {
      const label = c.querySelector(".mc-label")?.textContent?.trim();
      c.style.outline = sel && label === sel ? "2px solid #1a1a1a" : "";
    });
  };
  useEffect(applySaved, [saved, problemIndex]);

  const handleChoiceClick = (e) => {
    const choice = e.target.closest(".mc-choice");
    if (!choice) return;
    const letter = choice.querySelector(".mc-label")?.textContent?.trim() || null;
    if (!letter) return;
    setSaved((s) => ({ ...s, [problem.id]: letter }));
    logEvent({
      questionId: problem.id,
      eventType: "answered",
      answer: letter,
      correct: choice.classList.contains("correct"),
      context: "classroom",
      containerId: container,
    });
  };

  const submitTyped = () => {
    const value = typed.trim();
    if (!value) return;
    setSaved((s) => ({ ...s, [problem.id]: value }));
    setSavedFlag(true);
    logEvent({
      questionId: problem.id,
      eventType: "answered",
      answer: value,
      correct: gradeFreeResponse(value, problem.answer),
      context: "classroom",
      containerId: container,
    });
  };

  return (
    <main className={`page ${showAnswers ? "show-answers" : ""}`}>
      <Link href="/" className="back-link">
        <i className="ti ti-arrow-left" />
        All workbooks
      </Link>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "16px" }}>{topic.name}</h1>

      <ProblemNav problemIndex={problemIndex} total={total} setProblemIndex={setProblemIndex} isFirst={isFirst} isLast={isLast} />

      <div style={{ background: "#FCE8E8", border: "0.5px solid #E38686", borderRadius: "12px", padding: "24px" }}>
        <div style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#A62D25", marginBottom: "12px" }}>
          Problem
          {showIds && problem.id && <span className="qid">{problem.id}</span>}
        </div>
        {problem.graph && (
          <div className="classroom-graph">
            <DesmosGraph graph={problem.graph} />
          </div>
        )}
        <div ref={boxRef} onClick={isMultipleChoice ? handleChoiceClick : undefined}>
          <MathContent html={problem.problem} className="problem-text" onRendered={applySaved} />
        </div>
        {problem.graphChoices && <GraphChoices choices={problem.graphChoices} showFeedback={false} />}
        {!isMultipleChoice && !problem.graphChoices && (
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: "16px" }}>
            <input
              type="text"
              placeholder="Type your answer"
              value={typed}
              onChange={(e) => { setTyped(e.target.value); setSavedFlag(false); }}
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); submitTyped(); } }}
              style={{
                padding: "10px 14px",
                border: "1.5px solid #e0e0de",
                borderRadius: "8px",
                fontSize: "14px",
                width: "220px",
                textAlign: "center",
              }}
            />
            <button
              type="button"
              className="nav-btn"
              onClick={submitTyped}
              disabled={savedFlag}
              style={savedFlag ? { color: "#1D9E75", borderColor: "#1D9E75", opacity: 1 } : undefined}
            >
              {savedFlag ? "Saved ✓" : "Submit"}
            </button>
          </div>
        )}
        {showAnswers && problem.answer && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="show-answers-value">
              <span className="label">Answer</span>
              <span className="value">{problem.answer}</span>
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
