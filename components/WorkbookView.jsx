"use client";

import { useState, useEffect } from "react";
import ProblemStatement from "@/components/ProblemStatement";
import StepNavigator from "@/components/StepNavigator";
import GuidedPractice from "@/components/GuidedPractice";
import PracticeQuestion from "@/components/PracticeQuestion";
import DesmosGraph from "@/components/DesmosGraph";
import HowThisWorks from "@/components/HowThisWorks";
import MathContent from "@/components/MathContent";

function SectionAccordion({ icon, title, defaultOpen, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`section-accordion ${open ? "open" : ""}`}>
      <div className="section-accordion-header" onClick={() => setOpen((o) => !o)}>
        <span className="section-accordion-title">
          <i className={`ti ${icon}`} />
          {title}
        </span>
        <i className="ti ti-chevron-down section-accordion-chevron" />
      </div>
      <div className="section-accordion-body">
        {children}
      </div>
    </div>
  );
}

function AdditionalPracticeQuestion({ text, index }) {
  const [open, setOpen] = useState(false);
  const isMultipleChoice = text.includes("mc-choice");

  const handleChoiceClick = (e) => {
    const choice = e.target.closest(".mc-choice");
    if (!choice) return;
    const parent = choice.closest(".mc-choices");
    parent.querySelectorAll(".mc-choice").forEach((c) => {
      c.style.outline = "";
    });
    choice.style.outline = "2px solid #1a1a1a";
  };

  return (
    <div className="additional-practice-card">
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="practice-num" style={{ marginBottom: 0 }}>Problem {index + 1}</div>
        <i className={`ti ti-chevron-down`} style={{ fontSize: "16px", color: "#aaa", transition: "transform .2s", transform: open ? "rotate(180deg)" : "rotate(0)" }} />
      </div>
      {open && (
        <div style={{ marginTop: "12px" }}>
          <div onClick={isMultipleChoice ? handleChoiceClick : undefined}>
            <MathContent html={text} className="practice-text" />
          </div>
          {!isMultipleChoice && (
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
      )}
    </div>
  );
}

export default function WorkbookView({ topic }) {
  const [problemIndex, setProblemIndex] = useState(0);
  const problem = topic.workedProblems[problemIndex];
  const total = topic.workedProblems.length;
  const isFirst = problemIndex === 0;
  const isLast = problemIndex === total - 1;

  useEffect(() => {
    if (window.MathJax) window.MathJax.typesetPromise();
  }, [problemIndex]);

  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "16px" }}>{topic.name}</h1>
      <HowThisWorks />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <span style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#888" }}>
          Problem {problemIndex + 1} of {total}
        </span>
        <div style={{ display: "flex", gap: "6px" }}>
          <button className="nav-btn" onClick={() => setProblemIndex((i) => i - 1)} disabled={isFirst}>&larr; Prev</button>
          <button className="nav-btn" onClick={() => setProblemIndex((i) => i + 1)} disabled={isLast}>Next &rarr;</button>
        </div>
      </div>

      <SectionAccordion icon="ti-book" title="Worked example" defaultOpen={true} key={`we-${problemIndex}`}>
        <div className="problem-steps-grid">
          <div className="psg-left">
            <DesmosGraph graph={problem.graph} />
            <div className="problem-label">Example</div>
            <ProblemStatement problem={problem.problem} />
          </div>
          <div className="psg-right">
            <StepNavigator key={problemIndex} steps={problem.steps} />
          </div>
        </div>
      </SectionAccordion>

      <SectionAccordion icon="ti-checkbox" title="Guided practice — follow the steps" defaultOpen={false} key={`gp-${problemIndex}`}>
        <GuidedPractice
          key={problemIndex}
          guidedProblem={problem.guidedProblem}
          guidedSteps={problem.guidedSteps}
          guidedAnswer={problem.guidedAnswer}
          guidedAnswerValue={problem.guidedAnswerValue}
          guidedScreenshot={problem.guidedScreenshot}
        />
      </SectionAccordion>

      {problem.practice && problem.practice.length > 0 && (
      <SectionAccordion icon="ti-pencil" title="In-class practice problems" defaultOpen={false} key={`pp-${problemIndex}`}>
        {problem.practice.map((p, i) => (
          <AdditionalPracticeQuestion key={`${problemIndex}-pp-${i}`} text={p.text} index={i} />
        ))}
      </SectionAccordion>
      )}

      {problem.additionalPractice && problem.additionalPractice.length > 0 && (
        <div style={{ borderTop: "1px solid #e0e0de", margin: "20px 0" }} />
      )}
      {problem.additionalPractice && problem.additionalPractice.length > 0 && (
        <SectionAccordion icon="ti-notebook" title="Additional practice" defaultOpen={false} key={`ap-${problemIndex}`}>
          {problem.additionalPractice.map((p, i) => (
            <AdditionalPracticeQuestion key={`${problemIndex}-ap-${i}`} text={p.text} index={i} />
          ))}
        </SectionAccordion>
      )}
    </main>
  );
}