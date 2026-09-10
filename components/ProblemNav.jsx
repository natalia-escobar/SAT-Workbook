"use client";

import { useState } from "react";

export default function ProblemNav({ problemIndex, total, setProblemIndex, isFirst, isLast }) {
  const [editing, setEditing] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const handleClick = () => {
    setInputVal(String(problemIndex + 1));
    setEditing(true);
  };

  const handleSubmit = () => {
    const num = parseInt(inputVal, 10);
    if (num >= 1 && num <= total) {
      setProblemIndex(num - 1);
    }
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") setEditing(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
      <span style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#888" }}>
        Problem{" "}
        {editing ? (
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSubmit}
            autoFocus
            style={{
              width: "28px",
              padding: "1px 4px",
              border: "1.5px solid #D13B31",
              borderRadius: "4px",
              fontSize: "11px",
              fontWeight: 500,
              textAlign: "center",
              outline: "none",
              lineHeight: "16px",
            }}
          />
        ) : (
          <span onClick={handleClick} style={{ cursor: "pointer" }}>
            {problemIndex + 1}
          </span>
        )}{" "}
        of {total}
      </span>
      <div style={{ display: "flex", gap: "6px" }}>
        <button className="nav-btn" onClick={() => setProblemIndex((i) => i - 1)} disabled={isFirst}>&larr; Prev</button>
        <button className="nav-btn" onClick={() => setProblemIndex((i) => i + 1)} disabled={isLast}>Next &rarr;</button>
      </div>
    </div>
  );
}