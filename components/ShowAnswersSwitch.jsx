"use client";

// components/ShowAnswersSwitch.jsx
// The tutor's "Show answers" switch, placed inside workbook and classroom pages.
// Renders nothing for students.

import { useEffect, useState } from "react";
import { supabase } from "@/lib/db";
import useShowAnswers, { setShowAnswers } from "@/lib/useShowAnswers";

export default function ShowAnswersSwitch() {
  const on = useShowAnswers();
  const [isTutor, setIsTutor] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from("profiles").select("role").eq("id", user.id).single();
      if (!cancelled) setIsTutor(data?.role === "tutor" || data?.role === "admin");
    })();
    return () => { cancelled = true; };
  }, []);

  if (!isTutor) return null;

  return (
    <button
      type="button"
      className={`app-switch inline-switch ${on ? "on" : ""}`}
      onClick={() => setShowAnswers(!on)}
      role="switch"
      aria-checked={on}
      title={on ? "Answers shown — click to hide" : "Show correct answers"}
    >
      <i className={`ti ${on ? "ti-eye" : "ti-eye-off"}`} />
      <span className="app-switch-label">Show answers</span>
      <span className="app-switch-track"><span className="app-switch-knob" /></span>
    </button>
  );
}
