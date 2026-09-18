"use client";

import { useState } from "react";
import Link from "next/link";

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

export default function Home() {
  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "20px" }}>
        Practice Workbooks
      </h1>

      <Collapsible title="Parabola" defaultOpen={false}>
        <Collapsible title="Equivalent to" defaultOpen={false}>
          <Link
            href="/workbook/parabola/equivalent-to/simple-equivalent-to"
            style={{
              display: "block",
              padding: "16px 20px",
              border: "0.5px solid #e0e0de",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#1a1a1a",
            }}
          >
            <div style={{ fontSize: "16px", fontWeight: 600 }}>Basic Equivalent to & Evaluating a Function</div>
            <div style={{ fontSize: "13px", color: "#888", marginTop: "4px" }}>26 problems</div>
          </Link>
        </Collapsible>
        <Collapsible title="Simple Graphing, X-Intercept, & Y-Intercept" defaultOpen={false}>
          <Link
            href="/workbook/parabola/simple-graphing-x-y-intercept/simple-graphing"
            style={{
              display: "block",
              padding: "16px 20px",
              border: "0.5px solid #e0e0de",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#1a1a1a",
            }}
          >
            <div style={{ fontSize: "16px", fontWeight: 600 }}>Simple Graphing</div>
          </Link>
          <Link
            href="/workbook/parabola/simple-graphing-x-y-intercept/y-intercept"
            style={{
              display: "block",
              padding: "16px 20px",
              border: "0.5px solid #e0e0de",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#1a1a1a",
              marginTop: "8px",
            }}
          >
            <div style={{ fontSize: "16px", fontWeight: 600 }}>Y-Intercept</div>
          </Link>
          <Link
            href="/workbook/parabola/simple-graphing-x-y-intercept/vertex"
            style={{
              display: "block",
              padding: "16px 20px",
              border: "0.5px solid #e0e0de",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#1a1a1a",
              marginTop: "8px",
            }}
          >
            <div style={{ fontSize: "16px", fontWeight: 600 }}>Vertex</div>
          </Link>
          <Link
            href="/workbook/parabola/simple-graphing-x-y-intercept/x-intercept"
            style={{
              display: "block",
              padding: "16px 20px",
              border: "0.5px solid #e0e0de",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#1a1a1a",
              marginTop: "8px",
            }}
          >
            <div style={{ fontSize: "16px", fontWeight: 600 }}>X-Intercept</div>
          </Link>
        </Collapsible>
      </Collapsible>
          <Collapsible title="DDCUS-A" defaultOpen={false}>
          <Link
            href="/classroom/amuni/lesson-3"
            style={{
              display: "block",
              padding: "16px 20px",
              border: "0.5px solid #e0e0de",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#1a1a1a",
              marginTop: "8px",
            }}
          >
          <div style={{ fontSize: "16px", fontWeight: 600 }}>Lesson 3</div>
          </Link>
          <Link
            href="/classroom/amuni/lesson-4"
            style={{
              display: "block",
              padding: "16px 20px",
              border: "0.5px solid #e0e0de",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#1a1a1a",
              marginTop: "8px",
            }}
          >
          <div style={{ fontSize: "16px", fontWeight: 600 }}>Lesson 4</div>
          </Link>
      </Collapsible>
    </main>
  );
}