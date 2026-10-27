"use client";

// components/TutorQuestionRow.jsx
// One row in the tutor's student report. Click to expand the question inline
// with the student's answer marked AND the correct answer highlighted.

import { useState } from "react";
import QuestionCard from "./QuestionCard";

export default function TutorQuestionRow({ left, middle, right, question }) {
  const [open, setOpen] = useState(false);
  const canOpen = !!question.content;

  return (
    <div>
      <button
        type="button"
        onClick={() => canOpen && setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 24px 16px",
          gap: 12,
          alignItems: "center",
          width: "100%",
          padding: "8px 4px",
          borderTop: "0.5px solid #f0f0ee",
          background: open ? "#f8f8f6" : "none",
          border: "none",
          borderRadius: 6,
          font: "inherit",
          color: "inherit",
          textAlign: "left",
          cursor: canOpen ? "pointer" : "default",
        }}
      >
        <span>{left}</span>
        <span style={{ color: "#777", fontSize: 13 }}>{middle}</span>
        <i
          className={`ti ${question.correct ? "ti-check" : "ti-x"}`}
          style={{ color: question.correct ? "#2e7d32" : "#c0392b" }}
        />
        <i
          className="ti ti-chevron-down"
          style={{
            fontSize: 14,
            color: "#aaa",
            visibility: canOpen ? "visible" : "hidden",
            transition: "transform .2s",
            transform: open ? "rotate(180deg)" : "rotate(0)",
          }}
        />
      </button>

      {open && (
        <div
          style={{
            margin: "4px 0 12px",
            padding: 16,
            border: "0.5px solid #e0e0de",
            borderRadius: 8,
            background: "#fafaf8",
          }}
        >
          <QuestionCard
            question={question.content}
            selected={question.answer}
            correct={question.correct}
            showCorrect
          />
          {right && <div style={{ marginTop: 10, fontSize: 13, color: "#777" }}>{right}</div>}
        </div>
      )}
    </div>
  );
}
