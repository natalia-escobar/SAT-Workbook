"use client";

import { useState, useEffect } from "react";
import parabola from "@/data/parabola";
import ProblemStatement from "@/components/ProblemStatement";
import StepNavigator from "@/components/StepNavigator";
import GuidedPractice from "@/components/GuidedPractice";
import PracticeQuestion from "@/components/PracticeQuestion";
import DesmosGraph from "@/components/DesmosGraph";
import HowThisWorks from "@/components/HowThisWorks";

export default function Home() {
  const [problemIndex, setProblemIndex] = useState(0);
  const problem = parabola.workedProblems[problemIndex];
  const total = parabola.workedProblems.length;
  const isFirst = problemIndex === 0;
  const isLast = problemIndex === total - 1;

  useEffect(() => {
  if (window.MathJax) {
    window.MathJax.typesetPromise();
  }
  }, [problemIndex]);

  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "16px" }}>
        {parabola.name}
      </h1>
      <HowThisWorks />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <span style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#888" }}>
          Problem {problemIndex + 1} of {total}
        </span>
        <div style={{ display: "flex", gap: "6px" }}>
          <button className="nav-btn" onClick={() => setProblemIndex((i) => i - 1)} disabled={isFirst}>
            &larr; Prev
          </button>
          <button className="nav-btn" onClick={() => setProblemIndex((i) => i + 1)} disabled={isLast}>
            Next &rarr;
          </button>
        </div>
      </div>

      <div className="problem-steps-grid">
        <div className="psg-left">
          <DesmosGraph graph={problem.graph} />
          <div className="problem-label">Worked Example</div>
          <ProblemStatement problem={problem.problem} />
        </div>
        <div className="psg-right">
          <StepNavigator key={problemIndex} steps={problem.steps} />
        </div>
      </div>

      <div className="section-block">
        <div className="block-title"><i className="ti ti-checkbox" /> Guided practice — follow the steps</div>
        <GuidedPractice
          key={problemIndex}
          guidedProblem={problem.guidedProblem}
          guidedSteps={problem.guidedSteps}
          guidedAnswer={problem.guidedAnswer}
          guidedAnswerValue={problem.guidedAnswerValue}
          guidedScreenshot={problem.guidedScreenshot}
        />
      </div>

      <div className="section-block">
        <div className="block-title"><i className="ti ti-pencil" /> Practice problems — try on your own</div>
        {problem.practice.map((p, i) => (
          <PracticeQuestion
            key={`${problemIndex}-${i}`}
            text={p.text}
            setup={p.setup}
            screenshot={p.screenshot}
            index={i}
            graph={p.graph}
            answer={p.answer}
          />
        ))}
      </div>
    </main>
  );
}
