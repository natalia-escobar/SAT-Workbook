"use client";

import { useEffect, useRef } from "react";

// Renders raw text or HTML that may contain math, and keeps it
// safe from being reset by unrelated re-renders elsewhere on the page.
export default function MathContent({ html, text, className, onRendered }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = html ?? text ?? "";

    const typeset = (tries = 0) => {
    if (!ref.current) return; // the problem was closed before MathJax loaded
    if (typeof window.MathJax?.typesetPromise === "function") {
        window.MathJax.typesetPromise([ref.current]).then(() => onRendered?.());
    } else if (tries < 50) {
      setTimeout(() => typeset(tries + 1), 100); // MathJax still loading: check again shortly
    } else {
      onRendered?.(); // gave up after 5 seconds; show the page without typeset math
    }
    };
    typeset();
  }, [html, text]);

  return <div ref={ref} className={className} />;
}