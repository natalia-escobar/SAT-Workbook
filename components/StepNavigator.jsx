"use client";

import { useState, useEffect } from "react";
import MathContent from "./MathContent";

export default function StepNavigator({ steps }) {
  const isMultiApproach = !Array.isArray(steps);
  const approachNames = isMultiApproach ? Object.keys(steps) : null;

  const [approach, setApproach] = useState(isMultiApproach ? approachNames[0] : null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // if the steps prop changes (new problem selected), reset back to the first approach/step
  useEffect(() => {
    setApproach(isMultiApproach ? approachNames[0] : null);
    setCurrentIndex(0);
  }, [steps]);

  const currentSteps = isMultiApproach ? steps[approach] : steps;
  const step = currentSteps[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === currentSteps.length - 1;

  const switchApproach = (name) => {
    setApproach(name);
    setCurrentIndex(0); // different approaches can have different step counts
  };

  return (
    <div className="step-navigator">
      {isMultiApproach && (
        <div className="approach-tabs">
          {approachNames.map((name) => (
            <button
              key={name}
              className={`approach-tab ${name === approach ? "active" : ""}`}
              onClick={() => switchApproach(name)}
            >
              {name}
            </button>
          ))}
        </div>
      )}

      <div className="step-nav">
        <span className="step-nav-label">Step {currentIndex + 1} of {currentSteps.length}</span>
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
      {step.note && <MathContent text={step.note} className="step-note" />}

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