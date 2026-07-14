"use client";

import { useState, useRef } from "react";
import DesmosGraph from "./DesmosGraph";
import MathContent from "./MathContent";
import WriteInAnswer from "./WriteInAnswer";

export default function PracticeQuestion({ text, setup, screenshot, index, graph, answer }) {
  const [revealed, setRevealed] = useState(false);
  const selectedChoiceRef = useRef(null);

  const isMultipleChoice = text.includes("mc-choice");

  const handleChoiceClick = (e) => {
    const choice = e.target.closest(".mc-choice");
    if (!choice) return;

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
    <div className="practice-grid">
      <div className="practice-grid-left" onClick={isMultipleChoice ? handleChoiceClick : undefined}>
        <DesmosGraph graph={graph} />
        <div className="practice-num">Problem {index + 1}</div>
        <MathContent html={text} className="practice-text" />
        {!isMultipleChoice && (
          <WriteInAnswer correctAnswer={answer} onSubmit={() => setRevealed(true)} />
        )}
      </div>

      <div className="practice-grid-right">
        <div className={`practice-answer-panel ${revealed ? "shown" : ""}`}>
            <div style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#085041", marginBottom: "6px" }}>
                Answer
            </div>
            <MathContent text={setup} className="practice-answer-text" />
            {screenshot ? (
            <div className="practice-screenshot"><img src={screenshot} alt="Desmos setup" /></div>
        ) : (
            <div className="practice-screenshot"><div className="practice-screenshot-placeholder">Screenshot coming soon</div></div>
        )}
        </div>
        
        <button className="practice-reveal-btn-split" onClick={() => setRevealed((r) => !r)}>
            <i className={`ti ${revealed ? "ti-eye-off" : "ti-eye"}`} />
            {revealed ? " Hide answer" : " Reveal answer"}
            </button>
      </div>
    </div>
  );
}