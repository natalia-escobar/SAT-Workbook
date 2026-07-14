"use client";

import { useEffect, useRef } from "react";

// Renders raw text or HTML that may contain math, and keeps it
// safe from being reset by unrelated re-renders elsewhere on the page.
export default function MathContent({ html, text, className }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = html ?? text ?? "";

    if (window.MathJax) {
      window.MathJax.typesetPromise([ref.current]);
    }
  }, [html, text]);

  return <div ref={ref} className={className} />;
}