"use client";

// components/ProblemNav.jsx
// Prev/Next through a workbook. Accepts either the old (problemIndex, total) props or,
// when `slots` is given, a sequence mixing problems and mini quizzes:
//   slots: [{ type: "problem", problemIndex }, { type: "quiz", quizId, afterProblem }, ...]
//   slotIndex / setSlotIndex: position in that sequence

import { useState } from "react";
import ShowAnswersSwitch from "./ShowAnswersSwitch";

export default function ProblemNav({
  problemIndex, total, setProblemIndex, isFirst, isLast,
  slots, slotIndex, setSlotIndex, showIds,
}) {
  const hasSlots = Array.isArray(slots);
  const [editing, setEditing] = useState(false);
  const [inputVal, setInputVal] = useState("");

  // ── derive what to display ──
  const current = hasSlots ? slots[slotIndex] : { type: "problem", problemIndex };
  const problemCount = hasSlots ? slots.filter((s) => s.type === "problem").length : total;
  const first = hasSlots ? slotIndex === 0 : isFirst;
  const last = hasSlots ? slotIndex === slots.length - 1 : isLast;

  const go = (delta) => (hasSlots ? setSlotIndex((i) => i + delta) : setProblemIndex((i) => i + delta));
  const goToProblem = (n) => {
    if (hasSlots) {
      const i = slots.findIndex((s) => s.type === "problem" && s.problemIndex === n - 1);
      if (i >= 0) setSlotIndex(i);
    } else {
      setProblemIndex(n - 1);
    }
  };

  const handleClick = () => {
    setInputVal(current.type === "problem" ? String(current.problemIndex + 1) : "");
    setEditing(true);
  };
  const handleSubmit = () => {
    const num = parseInt(inputVal, 10);
    if (num >= 1 && num <= problemCount) goToProblem(num);
    setEditing(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") setEditing(false);
  };

  const label = { fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em", color: "#888" };

  return (
    <div style={{ marginBottom: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={label}>
          {current.type === "quiz" ? (
            <>
              <i className="ti ti-clock" style={{ marginRight: 4 }} />
              Mini quiz · after problem {current.afterProblem}
            </>
          ) : (
            <>
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
                    width: "28px", padding: "1px 4px", border: "1.5px solid #D13B31", borderRadius: "4px",
                    fontSize: "11px", fontWeight: 500, textAlign: "center", outline: "none", lineHeight: "16px",
                  }}
                />
              ) : (
                <span onClick={handleClick} style={{ cursor: "pointer" }}>{current.problemIndex + 1}</span>
              )}{" "}
              of {problemCount}
            </>
          )}
        </span>
        <div style={{ display: "flex", gap: "6px" }}>
          <button className="nav-btn" onClick={() => go(-1)} disabled={first}>&larr; Prev</button>
          <button className="nav-btn" onClick={() => go(1)} disabled={last}>Next &rarr;</button>
        </div>
      </div>

      {/* second row: stop strip on the left (workbooks), tutor Show-answers switch on the right */}
      <div className="nav-row2">
        {hasSlots ? (
        <div className="stop-strip">
          {slots.map((s, i) => (
            <button
              key={i}
              type="button"
              className={`stop ${s.type} ${i === slotIndex ? "active" : ""}`}
              onClick={() => setSlotIndex(i)}
              title={s.type === "quiz" ? `Mini quiz after problem ${s.afterProblem}` : `Problem ${s.problemIndex + 1}`}
              aria-label={s.type === "quiz" ? `Mini quiz after problem ${s.afterProblem}` : `Problem ${s.problemIndex + 1}`}
            >
              {s.type === "quiz" && <i className="ti ti-clock" />}
            </button>
          ))}
        </div>
        ) : <span />}
        <ShowAnswersSwitch />
      </div>
    </div>
  );
}
