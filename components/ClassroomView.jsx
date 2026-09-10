"use client";

import { useState, useEffect, useRef } from "react";
import MathContent from "./MathContent";
import DesmosGraph from "./DesmosGraph";
import GraphChoices from "./GraphChoices";
import ProblemNav from "./ProblemNav";

export default function ClassroomView({ topic }) {
  const [problemIndex, setProblemIndex] = useState(0);
  const problem = topic.problems[problemIndex];
  const total = topic.problems.length;
  const isFirst = problemIndex === 0;
  const isLast = problemIndex === total - 1;
  const selectedRef = useRef(null);

  useEffect(() => {
    if (window.MathJax) window.MathJax.typesetPromise();
    selectedRef.current = null;
  }, [problemIndex]);

  const isMultipleChoice = problem.problem.includes("mc-choice");

  const handleChoiceClick = (e) => {
    const choice = e.target.closest(".mc-choice");
    if (!choice) return;

    if (selectedRef.current && selectedRef.current !== choice) {
      selectedRef.current.style.outline = "";
    }
    choice.style.outline = "2px solid #1a1a1a";
    selectedRef.current = choice;
  };

  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "16px" }}>{topic.name}</h1>

            <ProblemNav problemIndex={problemIndex} total={total} setProblemIndex={setProblemIndex} isFirst={isFirst} isLast={isLast} />

        <div style={{ background: "#FCE8E8", border: "0.5px solid #E38686", borderRadius: "12px", padding: "24px" }}>
        <div style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#A62D25", marginBottom: "12px" }}>Problem</div>
        {problem.graph && <DesmosGraph graph={problem.graph} />}
        <div onClick={isMultipleChoice ? handleChoiceClick : undefined}>
          <MathContent html={problem.problem} className="problem-text" />
        </div>
        {problem.graphChoices && <GraphChoices choices={problem.graphChoices} showFeedback={false} />}
        {!isMultipleChoice && !problem.graphChoices && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
            <input
              type="text"
              placeholder="Type your answer"
              style={{
                padding: "10px 14px",
                border: "1.5px solid #e0e0de",
                borderRadius: "8px",
                fontSize: "14px",
                width: "220px",
                textAlign: "center",
              }}
            />
          </div>
        )}
      </div>
    </main>
  );
}