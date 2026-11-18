"use client";

// components/StudentTimeline.jsx
// A student's work, newest first, split into blocks: each class (date and time, tagged
// "In class") and the independent work between classes. Inside a block it reads
// Topic → Lesson with the score beside it, then any quizzes taken in that stretch.
// Click a lesson or quiz for each question. The filter shows everything, only in-class
// work, or only independent work.
//
// Used on two pages:
//   viewer="tutor"    the tutor's page for one student — rows reveal the correct answer.
//   viewer="student"  the student's own My progress — rows show right/wrong only; the
//                     correct answer is never shown.

import { useState } from "react";
import TutorQuestionRow from "@/components/TutorQuestionRow";
import ProgressQuestionRow from "@/components/ProgressQuestionRow";

const GREEN = "#2e7d32";
const FILTERS = [
  { id: "all", label: "All" },
  { id: "class", label: "In class" },
  { id: "independent", label: "Independent" },
];

const blockCard = { border: "0.5px solid #e0e0de", borderRadius: 10, padding: "14px 20px 16px", marginTop: 12 };
const heading = { fontSize: 13, fontWeight: 600, color: "#777", textTransform: "capitalize", paddingBottom: 6 };
const pillFor = (kind) => ({
  fontSize: 12,
  fontWeight: 600,
  padding: "2px 10px",
  borderRadius: 999,
  border: `0.5px solid ${kind === "class" ? GREEN : "#e0e0de"}`,
  color: kind === "class" ? GREEN : "#555",
  whiteSpace: "nowrap",
});

// One expandable line: title on the left, score on the right, question rows inside.
function Expandable({ title, score, children }) {
  return (
    <details style={{ borderTop: "0.5px solid #eeeeec" }}>
      <summary
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 16,
          listStyle: "none",
          padding: "10px 0 10px 16px",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, textTransform: "capitalize" }}>{title}</span>
        <span style={{ fontSize: 14, textAlign: "right" }}>{score}</span>
      </summary>
      <div style={{ margin: "0 0 12px 16px" }}>{children}</div>
    </details>
  );
}

function Lesson({ lesson, viewer }) {
  const student = viewer === "student";
  const Row = student ? ProgressQuestionRow : TutorQuestionRow;
  return (
    <Expandable
      title={lesson.title}
      score={
        <>
          <strong>{lesson.correct}</strong>
          <span style={{ color: "#777" }}> of {lesson.attempted} correct</span>
          {lesson.total != null && <span style={{ color: "#aaa" }}> · {lesson.attempted} of {lesson.total} done</span>}
        </>
      }
    >
      {lesson.questions.map((qq, i) => {
        const classroom = qq.source === "classroom";
        return (
          <Row
            key={qq.id}
            question={qq}
            left={
              <span style={{ fontSize: 13, color: "#555" }}>
                {classroom ? (
                  <>
                    <strong style={{ marginRight: 10 }}>{i + 1}.</strong>
                    {qq.type ?? ""}
                  </>
                ) : (
                  <>
                    {qq.problem != null ? `Problem ${qq.problem}` : ""}
                    {qq.type ? ` · ${qq.type}` : ""}
                  </>
                )}
                {!student && <span style={{ color: "#aaa", marginLeft: 8 }}>{qq.id}</span>}
              </span>
            }
            middle={classroom && qq.answer ? `${student ? "you answered" : "answered"} ${qq.answer}` : qq.atLabel}
          />
        );
      })}
    </Expandable>
  );
}

function Quiz({ quiz, viewer }) {
  const student = viewer === "student";
  const Row = student ? ProgressQuestionRow : TutorQuestionRow;
  return (
    <Expandable
      title={quiz.title}
      score={
        <>
          <strong>{quiz.score}</strong>
          <span style={{ color: "#777" }}> of {quiz.total} correct</span>
          <span style={{ color: "#aaa" }}> · {quiz.takenLabel}</span>
        </>
      }
    >
      {quiz.questions.map((qq, i) => (
        <Row
          key={qq.id}
          question={qq}
          left={
            <>
              <strong style={{ marginRight: 10 }}>Q{i + 1}</strong>
              {!student && <span style={{ color: "#777", fontSize: 13 }}>{qq.id}</span>}
            </>
          }
          middle={qq.answered ? `${student ? "you answered" : "answered"} ${qq.answer}` : "no answer"}
        />
      ))}
    </Expandable>
  );
}

export default function StudentTimeline({ timeline, viewer = "tutor" }) {
  const [filter, setFilter] = useState("all");
  const all = timeline ?? [];
  const blocks = all.filter((b) => filter === "all" || b.kind === filter);
  const student = viewer === "student";

  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, margin: "28px 0 4px", flexWrap: "wrap" }}>
        <h2 style={{ fontSize: 15, fontWeight: 600 }}>Timeline</h2>
        <div role="group" aria-label="Show" style={{ display: "flex", gap: 6 }}>
          {FILTERS.map((f) => {
            const on = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(f.id)}
                style={{
                  fontFamily: "inherit",
                  fontSize: 13,
                  fontWeight: on ? 600 : 400,
                  padding: "5px 12px",
                  borderRadius: 999,
                  cursor: "pointer",
                  border: `0.5px solid ${on ? "#1a1a1a" : "#e0e0de"}`,
                  background: on ? "#1a1a1a" : "#fff",
                  color: on ? "#fff" : "#555",
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {all.length === 0 && (
        <p style={{ color: "#777", fontSize: 14 }}>
          {student ? "You haven't answered any questions yet." : "No activity yet."}
        </p>
      )}
      {all.length > 0 && blocks.length === 0 && (
        <p style={{ color: "#777", fontSize: 14 }}>
          {filter === "class" ? "No in-class work recorded yet." : "No independent work recorded yet."}
        </p>
      )}

      {blocks.map((block) => (
        <div key={block.key} style={blockCard}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{block.title}</div>
            {block.kind !== "earlier" && (
              <span style={pillFor(block.kind)}>{block.kind === "class" ? "In class" : "Independent"}</span>
            )}
          </div>

          {block.topics.map((topic) => (
            <div key={topic.name} style={{ marginTop: 12 }}>
              <div style={heading}>{topic.name}</div>
              {topic.lessons.map((lesson) => <Lesson key={lesson.key} lesson={lesson} viewer={viewer} />)}
            </div>
          ))}

          {(block.quizzes ?? []).length > 0 && (
            <div style={{ marginTop: 12 }}>
              <div style={heading}>Quizzes</div>
              {block.quizzes.map((quiz) => <Quiz key={quiz.key} quiz={quiz} viewer={viewer} />)}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}