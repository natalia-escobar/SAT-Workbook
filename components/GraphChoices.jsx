"use client";

import { useRef, useEffect, useState } from "react";

function MiniGraph({ graphDef, label, isCorrect, isSelected, onSelect, showFeedback }) {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);

    useEffect(() => {
    if (!containerRef.current || !window.Desmos) return;
    const timer = setTimeout(() => {
      if (!containerRef.current) return;
      if (instanceRef.current) { instanceRef.current.destroy(); instanceRef.current = null; }
      const calc = window.Desmos.GraphingCalculator(containerRef.current, {
        expressions: false,
        keypad: false,
        settingsMenu: false,
        zoomButtons: false,
        border: false,
        lockViewport: true,
        expressionsTopbar: false,
      });
      if (graphDef.bounds) {
        calc.setMathBounds({
          left: graphDef.bounds.left,
          right: graphDef.bounds.right,
          bottom: graphDef.bounds.bottom,
          top: graphDef.bounds.top,
        });
      }
      graphDef.expressions.forEach((expr) => {
        calc.setExpression(expr);
      });
      instanceRef.current = calc;
    }, 150);
    return () => {
      clearTimeout(timer);
      if (instanceRef.current) { instanceRef.current.destroy(); instanceRef.current = null; }
    };
  }, [graphDef]);

  let borderColor = "#e0e0de";
  if (isSelected && showFeedback && isCorrect) borderColor = "#1D9E75";
  if (isSelected && showFeedback && !isCorrect) borderColor = "#b3452e";
  if (isSelected && !showFeedback) borderColor = "#1a1a1a";

  return (
    <div
      onClick={onSelect}
      style={{
        border: `2px solid ${borderColor}`,
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#fff",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 10px", borderBottom: "0.5px solid #e0e0de" }}>
        <div style={{
          width: "22px", height: "22px", borderRadius: "50%",
          border: isSelected && showFeedback && isCorrect ? "1.5px solid #1D9E75" : "1.5px solid #ccc",
          background: isSelected && showFeedback && isCorrect ? "#9FE1CB" : "#fff",
          color: isSelected && showFeedback && isCorrect ? "#085041" : "#888",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "12px", fontWeight: 500,
        }}>
          {label}
        </div>
        {isSelected && showFeedback && isCorrect && (
          <div style={{ marginLeft: "auto", width: "20px", height: "20px", borderRadius: "50%", background: "#1D9E75", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 600 }}>✓</div>
        )}
      </div>
      <div ref={containerRef} style={{ width: "100%", height: "180px", pointerEvents: "none" }} />
    </div>
  );
}

export default function GraphChoices({ choices, onAnswer, showFeedback = true, readOnly = false }) {
  const correctIndex = readOnly ? choices.findIndex((c) => c.correct) : null;
  const [selected, setSelected] = useState(readOnly ? correctIndex : null);
  const [answered, setAnswered] = useState(readOnly);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px" }}>
      {choices.map((c, i) => (
        <MiniGraph
          key={i}
          graphDef={c.graph}
          label={c.label}
          isCorrect={c.correct}
          isSelected={selected === i}
          onSelect={() => handleSelect(i)}
          showFeedback={showFeedback}
        />
      ))}
    </div>
  );
}