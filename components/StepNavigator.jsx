"use client";

import { useState } from "react";
import MathContent from "./MathContent";

export default function StepNavigator({ steps }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const step = steps[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === steps.length - 1;

  return (
    <div className="step-navigator">
      <div className="step-nav">
        <span className="step-nav-label">Step {currentIndex + 1} of {steps.length}</span>
        <div className="step-nav-btns">
          <button className="step-nav-btn" onClick={() => setCurrentIndex((i) => i - 1)} disabled={isFirst}>
            &larr;
          </button>
          <button className="step-nav-btn" onClick={() => setCurrentIndex((i) => i + 1)} disabled={isLast}>
            &rarr;
          </button>
        </div>
      </div>

      <MathContent text={step.text} className="step-text" />
      {step.note && <p className="step-note">{step.note}</p>}

      {step.video ? (
        <video controls className="video-player" src={step.video} />
      ) : (
        <div className="media-slot">
          <span className="media-slot-icon">🎬</span>
          <span className="media-slot-label">Video coming soon</span>
        </div>
      )}
    </div>
  );
}