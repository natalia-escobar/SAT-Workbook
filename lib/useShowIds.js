// lib/useShowIds.js
// Press Shift+I on any page to toggle question-id stamps on/off.
// The setting persists in localStorage so it stays on across pages and reloads.
 
"use client";
 
import { useState, useEffect } from "react";
 
const KEY = "showQuestionIds";
 
export default function useShowIds() {
  const [show, setShow] = useState(false);
 
  useEffect(() => {
    try {
      setShow(localStorage.getItem(KEY) === "1");
    } catch {}
 
    const onKey = (e) => {
      // Shift+I, but not while typing in an input or textarea
      const tag = (e.target?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.shiftKey && (e.key === "I" || e.key === "i")) {
        setShow((prev) => {
          const next = !prev;
          try { localStorage.setItem(KEY, next ? "1" : "0"); } catch {}
          return next;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
 
  return show;
}