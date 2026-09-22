"use client";

import { useState, useEffect } from "react";
import ProblemStatement from "@/components/ProblemStatement";
import StepNavigator from "@/components/StepNavigator";
import GuidedPractice from "@/components/GuidedPractice";
import PracticeQuestion from "@/components/PracticeQuestion";
import DesmosGraph from "@/components/DesmosGraph";
import HowThisWorks from "@/components/HowThisWorks";
import MathContent from "@/components/MathContent";
import GraphChoices from "@/components/GraphChoices";
import ProblemNav from "./ProblemNav";
import Link from "next/link";
import useShowIds from "@/lib/useShowIds";
import { logEvent } from "@/lib/db";

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
        {open && children}
      </div>
    </div>
  );
}

function WorkedExampleCarousel({ problem, problemIndex, showIds }) {
  // Normalize: use workedExamples array if present, otherwise wrap the single example
  const examples = problem.workedExamples && problem.workedExamples.length > 0
    ? problem.workedExamples
    : [{ id: problem.id, problem: problem.problem, graph: problem.graph, graphChoices: problem.graphChoices, steps: problem.steps }];

  const [exampleIndex, setExampleIndex] = useState(0);
  const example = examples[exampleIndex];
  const multi = examples.length > 1;

  useEffect(() => {
    if (window.MathJax) window.MathJax.typesetPromise();
  }, [exampleIndex]);

  return (
    <>
      {multi && (
        <div className="example-carousel-nav">
          <button
            className="example-carousel-arrow"
            onClick={() => setExampleIndex((i) => Math.max(0, i - 1))}
            disabled={exampleIndex === 0}
            aria-label="Previous example"
          >
            <i className="ti ti-chevron-left" />
          </button>
          <span className="example-carousel-label">Example {exampleIndex + 1} of {examples.length}</span>
          <div className="example-carousel-dots">
            {examples.map((_, i) => (
              <button
                key={i}
                className={`example-carousel-dot ${i === exampleIndex ? "active" : ""}`}
                onClick={() => setExampleIndex(i)}
                aria-label={`Example ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="example-carousel-arrow"
            onClick={() => setExampleIndex((i) => Math.min(examples.length - 1, i + 1))}
            disabled={exampleIndex === examples.length - 1}
            aria-label="Next example"
          >
            <i className="ti ti-chevron-right" />
          </button>
        </div>
      )}

      <div className="problem-steps-grid">
        <div className="psg-left" key={`ex-left-${problemIndex}-${exampleIndex}`}>
          {example.graph && <DesmosGraph graph={example.graph} />}
          <div className="problem-label">
            {multi ? `Example ${exampleIndex + 1}` : "Example"}
            {showIds && example.id && <span className="qid">{example.id}</span>}
          </div>
          <ProblemStatement problem={example.problem} />
          {example.graphChoices && <GraphChoices choices={example.graphChoices} readOnly={true} />}
        </div>
        <div className="psg-right">
          {/* All step navigators stay mounted so each example remembers its step position */}
          {examples.map((ex, i) => (
            <div key={`ex-steps-${problemIndex}-${i}`} style={{ display: i === exampleIndex ? "block" : "none" }}>
              <StepNavigator steps={ex.steps} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function AdditionalPracticeQuestion({ text, index, graph, graphChoices, id, showIds, container }) {
  const [open, setOpen] = useState(false);
  const isMultipleChoice = text.includes("mc-choice") || graphChoices;

  const handleChoiceClick = (e) => {
    const choice = e.target.closest(".mc-choice");
    if (!choice) return;
    const parent = choice.closest(".mc-choices");
    parent.querySelectorAll(".mc-choice").forEach((c) => {
      c.style.outline = "";
    });
    choice.style.outline = "2px solid #1a1a1a";
    const letter = choice.querySelector(".mc-label")?.textContent?.trim() || null;
    logEvent({
      questionId: id,
      eventType: "answered",
      answer: letter,
      correct: choice.classList.contains("correct"),
      context: "workbook",
      containerId: container,
    });
  };

  return (
    <div className="additional-practice-card">
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="practice-num" style={{ marginBottom: 0 }}>
          Problem {index + 1}
          {showIds && id && <span className="qid" style={{ marginLeft: 12, float: "none" }}>{id}</span>}
        </div>
        <i className={`ti ti-chevron-down`} style={{ fontSize: "16px", color: "#aaa", transition: "transform .2s", transform: open ? "rotate(180deg)" : "rotate(0)" }} />
      </div>
      {open && (
        <div style={{ marginTop: "12px" }}>
          {graph && <DesmosGraph graph={graph} />}
          <div onClick={isMultipleChoice ? handleChoiceClick : undefined}>
            <MathContent html={text} className="practice-text" />
          </div>
          {graphChoices && <GraphChoices choices={graphChoices} showFeedback={false} />}
          {!isMultipleChoice && !graphChoices && (
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
  const showIds = useShowIds();

  useEffect(() => {
    if (window.MathJax) window.MathJax.typesetPromise();
    logEvent({
    questionId: problem.id || problem.workedExamples?.[0]?.id,
    eventType: "viewed",
    context: "workbook",
    containerId: topic.slug || topic.name,
  });
  }, [problemIndex]);

  return (
    <main className="page">
      <Link href="/" className="back-link">
        <i className="ti ti-arrow-left" />
        All workbooks
      </Link>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "16px" }}>{topic.name}</h1>
      <HowThisWorks />
      <ProblemNav problemIndex={problemIndex} total={total} setProblemIndex={setProblemIndex} showIds={showIds} isFirst={isFirst} isLast={isLast} />

      <SectionAccordion icon="ti-book" title="Worked example" defaultOpen={true} key={`we-${problemIndex}`}>
        <WorkedExampleCarousel problem={problem} problemIndex={problemIndex} showIds={showIds} key={`wec-${problemIndex}`} />
      </SectionAccordion>

      <SectionAccordion icon="ti-checkbox" title="Guided practice — follow the steps" defaultOpen={false} key={`gp-${problemIndex}`}>
        {showIds && problem.guidedIds && <div className="qid" style={{ float: "none", marginBottom: 8 }}>{problem.guidedIds.join("  ·  ")}</div>}
        <GuidedPractice
          key={problemIndex}
          guidedProblem={problem.guidedProblem}
          guidedSteps={problem.guidedSteps}
          guidedAnswer={problem.guidedAnswer}
          guidedAnswerValue={problem.guidedAnswerValue}
          guidedScreenshot={problem.guidedScreenshot}
          guidedGraph={problem.guidedGraph}
          guidedGraphChoices={problem.guidedGraphChoices}
          guidedProblems={problem.guidedProblems}
          guidedIds={problem.guidedIds}
          container={topic.slug || topic.name}
        />
      </SectionAccordion>

      {problem.practice && problem.practice.length > 0 && (
      <SectionAccordion icon="ti-pencil" title="In-class practice problems" defaultOpen={false} key={`pp-${problemIndex}`}>
        {problem.practice.map((p, i) => (
          <AdditionalPracticeQuestion key={`${problemIndex}-pp-${i}`} text={p.text} index={i} graph={p.graph} graphChoices={p.graphChoices} id={p.id} showIds={showIds} container={topic.slug || topic.name} />
        ))}
      </SectionAccordion>
      )}

      {problem.additionalPractice && problem.additionalPractice.length > 0 && (
        <div style={{ borderTop: "1px solid #e0e0de", margin: "20px 0" }} />
      )}
      {problem.additionalPractice && problem.additionalPractice.length > 0 && (
        <SectionAccordion icon="ti-notebook" title="Additional practice" defaultOpen={false} key={`ap-${problemIndex}`}>
          {problem.additionalPractice.map((p, i) => (
            <AdditionalPracticeQuestion key={`${problemIndex}-ap-${i}`} text={p.text} index={i} graph={p.graph} graphChoices={p.graphChoices} id={p.id} showIds={showIds} container={topic.slug || topic.name} />
          ))}
        </SectionAccordion>
      )}
    </main>
  );
}