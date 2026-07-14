"use client";

import { useEffect, useRef } from "react";

export default function DesmosGraph({ graph }) {
  const containerRef = useRef(null);
  const calculatorRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !window.Desmos || !graph) return;

    const calc = window.Desmos.GraphingCalculator(containerRef.current, {
      expressions: false,
      settingsMenu: false,
      zoomButtons: false,
      lockViewport: true,
      border: false,
      keypad: false,
      pointsOfInterest: false,
      trace: false,
    });

    if (graph.bounds) calc.setMathBounds(graph.bounds);

    (graph.expressions || []).forEach((expr, i) => {
      calc.setExpression({ id: "e" + i, latex: expr.latex, color: expr.color || "#534AB7" });
    });

    calculatorRef.current = calc;

    // cleanup: runs automatically when this component leaves the screen
    return () => {
      calc.destroy();
      calculatorRef.current = null;
    };
  }, [graph]);

  if (!graph) return null;

  return <div ref={containerRef} className="desmos-container" />;
}