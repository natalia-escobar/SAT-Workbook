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
    if (!allChecked) return;

    if (selectedChoiceRef.current && selectedChoiceRef.current !== choice) {
      selectedChoiceRef.current.style.borderColor = "";
      selectedChoiceRef.current.style.background = "";
    }

    const isCorrect = choice.classList.contains("correct");
    choice.style.borderColor = isCorrect ? "#1D9E75" : "#b3452e";
    choice.style.background = isCorrect ? "#E1F5EE" : "#FBEAE5";
    selectedChoiceRef.current = choice;

    setRevealed(true);
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
        <div style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#3C3489", marginBottom: "12px" }}>
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
        
        <div className={`guided-answer-panel ${revealed ? "shown" : ""}`}>
            <div style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#085041", marginBottom: "6px" }}>
                Answer
            </div>
            <MathContent text={guidedAnswer} className="guided-answer-text" />
            {guidedScreenshot ? (
                <div className="guided-screenshot"><img src={guidedScreenshot} alt="Desmos setup" /></div>
            ) : (
                <div className="guided-screenshot"><div className="guided-screenshot-placeholder">Screenshot coming soon</div></div>
            )}
        </div>
        
        <button
            className="reveal-btn"
            onClick={handleReveal}
            disabled={!allChecked}
            title={!allChecked ? "Check off every step first" : undefined}
            style={{ marginTop: "12px" }}
        >
            <i className={`ti ${revealed ? "ti-eye-off" : "ti-eye"}`} />
            {revealed ? " Hide answer" : " Reveal answer"}
        </button>
    </div>
    </div>
  );
}