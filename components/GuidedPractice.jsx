"use client";

import { useState, useRef, useEffect } from "react";
import MathContent from "./MathContent";
import DesmosGraph from "./DesmosGraph";
import GraphChoices from "./GraphChoices";
import { logEvent } from "@/lib/db";

function GuidedPracticeCard({ gp, handleChoiceClick, selectedChoiceRef, container, savedAnswer, onAnswered }) {
  const [checked, setChecked] = useState(() => gp.steps.map(() => false));
  const isMultipleChoice = gp.problem.includes("mc-choice") || gp.graphChoices;
  const leftRef = useRef(null);

  const toggleStep = (i) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

    const styleChoice = (choice) => {
    if (selectedChoiceRef.current && selectedChoiceRef.current !== choice) {
      selectedChoiceRef.current.style.borderColor = "";
      selectedChoiceRef.current.style.background = "";
      const oldCheck = selectedChoiceRef.current.querySelector(".gp-checkmark");
      if (oldCheck) oldCheck.remove();
      const oldLabel = selectedChoiceRef.current.querySelector(".mc-label");
      if (oldLabel) { oldLabel.style.borderColor = ""; oldLabel.style.color = ""; oldLabel.style.background = ""; }
    }
    const isCorrect = choice.classList.contains("correct");
    choice.style.borderColor = isCorrect ? "#1D9E75" : "#b3452e";
    choice.style.background = "#fff";
    if (isCorrect) {
      const label = choice.querySelector(".mc-label");
      if (label) { label.style.borderColor = "#1D9E75"; label.style.color = "#085041"; label.style.background = "#9FE1CB"; }
      if (!choice.querySelector(".gp-checkmark")) {
        const check = document.createElement("div");
        check.className = "gp-checkmark";
        check.style.cssText = "width:22px;height:22px;border-radius:50%;background:#1D9E75;color:#fff;font-size:13px;font-weight:600;display:flex;align-items:center;justify-content:center;margin-left:auto;flex-shrink:0";
        check.textContent = "✓";
        choice.appendChild(check);
      }
    }
    selectedChoiceRef.current = choice;
    return isCorrect;
  };

  const onChoiceClick = (e) => {
    const choice = e.target.closest(".mc-choice");
    if (!choice) return;
    const isCorrect = styleChoice(choice);
    const letter = choice.querySelector(".mc-label")?.textContent?.trim() || null;
    logEvent({
      questionId: gp.id,
      eventType: "answered",
      answer: letter,
      correct: isCorrect,
      context: "workbook",
      containerId: container,
    });
    onAnswered?.(gp.id, letter);
  };

  const restoreSaved = () => {
    if (!savedAnswer || !leftRef.current) return;
    const choice = [...leftRef.current.querySelectorAll(".mc-choice")]
      .find((c) => c.querySelector(".mc-label")?.textContent?.trim() === savedAnswer);
    if (choice) styleChoice(choice);
  };

  return (
    <div className="guided-grid">
      <div ref={leftRef} className="guided-grid-left" onClick={isMultipleChoice && !gp.graphChoices ? onChoiceClick : undefined}>
        {gp.graph && <DesmosGraph graph={gp.graph} />}
        <div className="guided-label">Problem</div>
        <MathContent html={gp.problem} className="guided-text" onRendered={restoreSaved} />
        {gp.graphChoices && <GraphChoices choices={gp.graphChoices} />}
      </div>

      <div className="guided-grid-right">
        <div style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#A62D25", marginBottom: "12px" }}>
          Follow these steps in Desmos
        </div>

        <div className="steps-list">
          {gp.steps.map((step, i) => (
            <div key={i} className={`step-row ${checked[i] ? "checked" : ""}`} onClick={() => toggleStep(i)}>
              <div className="step-check">
                {checked[i] && <i className="ti ti-check step-check-icon" />}
              </div>
              <MathContent text={step} className="step-text" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GuidedPractice({ guidedProblem, guidedSteps, guidedAnswer, guidedAnswerValue, guidedScreenshot, guidedGraph, guidedGraphChoices, guidedProblems, guidedIds, container, savedAnswers = {}, onAnswered }) {
  const selectedChoiceRef = useRef(null);

  // Build array of guided problems
  let problems;
  if (guidedProblems && guidedProblems.length > 0) {
    problems = guidedProblems;
  } else {
    problems = [{
      id: guidedIds?.[0],
      problem: guidedProblem,
      steps: guidedSteps,
      answer: guidedAnswer,
      screenshot: guidedScreenshot,
      graph: guidedGraph,
      graphChoices: guidedGraphChoices,
    }];
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const isMultiple = problems.length > 1;
  const gp = problems[currentIndex];

  return (
    <div>
      {isMultiple && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
          <span style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#888" }}>
            Guided practice {currentIndex + 1} of {problems.length}
          </span>
          <div style={{ display: "flex", gap: "6px" }}>
            <button className="nav-btn" onClick={() => setCurrentIndex((i) => i - 1)} disabled={currentIndex === 0}>&larr; Prev</button>
            <button className="nav-btn" onClick={() => setCurrentIndex((i) => i + 1)} disabled={currentIndex === problems.length - 1}>Next &rarr;</button>
          </div>
        </div>
      )}
      <GuidedPracticeCard key={currentIndex} gp={gp} handleChoiceClick={() => {}} selectedChoiceRef={selectedChoiceRef} container={container} savedAnswer={savedAnswers[gp.id]} onAnswered={onAnswered} />
    </div>
  );
}