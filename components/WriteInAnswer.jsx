"use client";

import { useState } from "react";

export default function WriteInAnswer({ correctAnswer, onSubmit }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const isCorrect = value.trim() === correctAnswer.trim();
    setResult(isCorrect ? "correct" : "incorrect");
    onSubmit();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "16px", marginBottom: "12px" }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Type your answer"
        style={{
          padding: "10px 14px",
          border: `1.5px solid ${result === "correct" ? "#1D9E75" : result === "incorrect" ? "#b3452e" : "#e0e0de"}`,
          borderRadius: "8px",
          fontSize: "14px",
          width: "220px",
          textAlign: "center",
        }}
      />
      <button className="reveal-btn" onClick={handleSubmit} style={{ maxWidth: "220px" }}>
        Check Answer
      </button>
    </div>
  );
}