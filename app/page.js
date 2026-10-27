"use client";

import { useState } from "react";
import Link from "next/link";
import TutorLink from "@/components/TutorLink";

function Collapsible({ title, defaultOpen, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ marginBottom: "8px" }}>
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          padding: "10px 16px",
          borderRadius: "8px",
          userSelect: "none",
        }}
      >
        <span style={{ fontSize: "15px", fontWeight: 600 }}>{title}</span>
        <i
          className={`ti ti-chevron-down`}
          style={{
            fontSize: "16px",
            color: "#aaa",
            transition: "transform .2s",
            transform: open ? "rotate(180deg)" : "rotate(0)",
          }}
        />
      </div>
      {open && <div style={{ paddingLeft: "16px", marginTop: "4px" }}>{children}</div>}
    </div>
  );
}

// One menu card. `kind="quiz"` gives it a small label so checkpoints stand out in the sequence.
function Card({ href, title, kind }) {
  const isQuiz = kind === "quiz";
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px",
        border: isQuiz ? "0.5px dashed #b0b0ae" : "0.5px solid #e0e0de",
        borderRadius: "10px",
        textDecoration: "none",
        color: "#1a1a1a",
        marginTop: "8px",
      }}
    >
      <div style={{ fontSize: "16px", fontWeight: 600 }}>{title}</div>
      {isQuiz && (
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            color: "#777",
          }}
        >
          <i className="ti ti-clock" style={{ marginRight: "4px" }} />
          Quiz
        </span>
      )}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "20px" }}>
        Practice Workbooks
      </h1>
      <TutorLink />

      <Collapsible title="Parabola" defaultOpen={false}>
        <Collapsible title="Equivalent Forms & Evaluating a Function" defaultOpen={false}>
          <Card href="/workbook/parabola/equivalent-to/simple-equivalent-to" title="Equivalent Forms" />
          <Card href="/workbook/parabola/equivalent-to/quiz" title="Equivalent Forms Quiz" kind="quiz" />
          <Card href="/workbook/parabola/equivalent-to/evaluating-a-function" title="Evaluating a Function" />
        </Collapsible>
        <Collapsible title="Simple Graphing, X-Intercept, & Y-Intercept" defaultOpen={false}>
          <Card href="/workbook/parabola/simple-graphing-x-y-intercept/simple-graphing" title="Simple Graphing" />
          <Card href="/workbook/parabola/simple-graphing-x-y-intercept/graphing-functions" title="Graphing Functions" />
          <Card href="/workbook/parabola/simple-graphing-x-y-intercept/y-intercept" title="Y-Intercept" />
          <Card href="/workbook/parabola/simple-graphing-x-y-intercept/vertex" title="Vertex" />
          <Card href="/workbook/parabola/simple-graphing-x-y-intercept/x-intercept" title="X-Intercept" />
          <Card href="/workbook/parabola/simple-graphing-x-y-intercept/discriminant-theory" title="Discriminant Theory" />
        </Collapsible>
      </Collapsible>

      <Collapsible title="DDCUS-A" defaultOpen={false}>
        <Card href="/classroom/amuni/lesson-3" title="Lesson 3" />
        <Card href="/classroom/amuni/lesson-4" title="Lesson 4" />
        <Card href="/classroom/amuni/lesson-5" title="Lesson 5" />
        <Card href="/classroom/amuni/lesson-6" title="Lesson 6" />
      </Collapsible>
    </main>
  );
}