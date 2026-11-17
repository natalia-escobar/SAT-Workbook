"use client";

// components/StudentTimeline.jsx
// A student's lesson work, newest first, split into blocks: each class (date and time,
// tagged "In class") and the independent work between classes. Inside a block it reads
// Topic → Lesson with the score beside it; click a lesson for each question and answer.
// The filter at the top shows everything, only in-class work, or only independent work.

import { useState } from "react";
import TutorQuestionRow from "@/components/TutorQuestionRow";

const GREEN = "#2e7d32";
const FILTERS = [
  { id: "all", label: "All" },
  { id: "class", label: "In class" },
  { id: "independent", label: "Independent" },
];

const blockCard = { border: "0.5px solid #e0e0de", borderRadius: 10, padding: "14px 20px 16px", marginTop: 12 };
const pillFor = (kind) => ({
  fontSize: 12,
  fontWeight: 600,
  padding: "2px 10px",
  borderRadius: 999,
  border: `0.5px solid ${kind === "class" ? GREEN : "#e0e0de"}`,
  color: kind === "class" ? GREEN : "#555",
  whiteSpace: "nowrap",
});

function Lesson({ lesson }) {
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
        <span style={{ fontSize: 15, fontWeight: 600, textTransform: "capitalize" }}>{lesson.title}</span>
        <span style={{ fontSize: 14, textAlign: "right" }}>
          <strong>{lesson.correct}</strong>
          <span style={{ color: "#777" }}> of {lesson.attempted} correct</span>
          {lesson.total != null && (
            <span style={{ color: "#aaa" }}> · {lesson.attempted} of {lesson.total} done</span>
          )}
        </span>
      </summary>
      <div style={{ margin: "0 0 12px 16px" }}>
        {lesson.questions.map((qq, i) => (
          <TutorQuestionRow
            key={qq.id}
            question={qq}
            left={
              qq.source === "classroom" ? (
                <span style={{ fontSize: 13, color: "#555" }}>
                  <strong style={{ marginRight: 10 }}>{i + 1}.</strong>
                  {qq.type ? `${qq.type}` : ""}
                  <span style={{ color: "#aaa", marginLeft: 8 }}>{qq.id}</span>
                </span>
              ) : (
                <span style={{ fontSize: 13, color: "#555" }}>
                  {qq.problem != null ? `Problem ${qq.problem}` : ""}{qq.type ? ` · ${qq.type}` : ""}
                  <span style={{ color: "#aaa", marginLeft: 8 }}>{qq.id}</span>
                </span>
              )
            }
            middle={qq.source === "classroom" && qq.answer ? `answered ${qq.answer}` : qq.atLabel}
          />
        ))}
      </div>
    </details>
  );
}

export default function StudentTimeline({ timeline }) {
  const [filter, setFilter] = useState("all");
  const blocks = (timeline ?? []).filter((b) => filter === "all" || b.kind === filter);

  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, margin: "32px 0 4px", flexWrap: "wrap" }}>
        <h2 style={{ fontSize: 15, fontWeight: 600 }}>Lessons</h2>
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

      {(timeline ?? []).length === 0 && <p style={{ color: "#777", fontSize: 14 }}>No lesson activity yet.</p>}
      {(timeline ?? []).length > 0 && blocks.length === 0 && (
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
              <div style={{ fontSize: 13, fontWeight: 600, color: "#777", textTransform: "capitalize", paddingBottom: 6 }}>
                {topic.name}
              </div>
              {topic.lessons.map((lesson) => <Lesson key={lesson.key} lesson={lesson} />)}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}