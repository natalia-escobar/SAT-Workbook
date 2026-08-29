"use client";

import { useState, useRef } from "react";
import MathContent from "./MathContent";
import WriteInAnswer from "./WriteInAnswer";

export default function GuidedPractice({ guidedProblem, guidedSteps, guidedAnswer, guidedAnswerValue, guidedScreenshot }) {
  const [checked, setChecked] = useState(() => guidedSteps.map(() => false));
  const [revealed, setRevealed] = useState(false);

  const allChecked = checked.every(Boolean);
  const isMultipleChoice = guidedProblem.includes("mc-choice");

  const toggleStep = (i) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  const handleReveal = () => {
    if (!allChecked) return;
    setRevealed((r) => !r);
  };

  const selectedChoiceRef = useRef(null);

    const handleChoiceClick = (e) => {
    const choice = e.target.closest(".mc-choice");
    if (!choice) return;

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
  };

  return (
    <div className="guided-grid">
      <div className="guided-grid-left" onClick={isMultipleChoice ? handleChoiceClick : undefined}>
        <div className="guided-label">Problem</div>
        <MathContent html={guidedProblem} className="guided-text" />
        {!isMultipleChoice && guidedProblem && (
          <WriteInAnswer
            correctAnswer={guidedAnswerValue}
            onSubmit={() => allChecked && setRevealed(true)}
          />
        )}
      </div>

      <div className="guided-grid-right">
        <div style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#A62D25", marginBottom: "12px" }}>
            Follow these steps in Desmos
        </div>
        
        <div className="steps-list">
            {guidedSteps.map((step, i) => (
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