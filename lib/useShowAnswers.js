// lib/useShowAnswers.js
// Tutor-only "Show answers" switch. Stored in localStorage so it persists across pages;
// any component using the hook re-renders when it changes.
"use client";

import { useEffect, useState } from "react";

const KEY = "show-answers";
const EVENT = "show-answers-change";

export function readShowAnswers() {
  try { return localStorage.getItem(KEY) === "1"; } catch { return false; }
}

export function setShowAnswers(on) {
  try { localStorage.setItem(KEY, on ? "1" : "0"); } catch {}
  window.dispatchEvent(new Event(EVENT));
}

export default function useShowAnswers() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const sync = () => setOn(readShowAnswers());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return on;
}