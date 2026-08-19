"use client";

import { useState, useEffect } from "react";
import MathContent from "./MathContent";
import VideoPlayer from "./VideoPlayer";

export default function StepNavigator({ steps }) {
  const isMultiApproach = !Array.isArray(steps);
  const approachNames = isMultiApproach ? Object.keys(steps) : null;

  const [approach, setApproach] = useState(isMultiApproach ? approachNames[0] : null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    setCurrentIndex(0);
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
        <div className="step-dots">
          {currentSteps.map((_, i) => (
            <button
              key={i}
              className={`step-dot ${i === currentIndex ? "active" : ""} ${i < currentIndex ? "done" : ""}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>

      <MathContent text={step.text} className="step-text" />
      {step.note && <MathContent text={step.note} className="step-note" />}

      {step.video ? (
        <VideoPlayer src={step.video} />
      ) : (
        <div className="media-slot">
          <span className="media-slot-icon">🎬</span>
          <span className="media-slot-label">Video coming soon</span>
        </div>
      )}

      {!isLast && (
        <button className="next-step-btn" onClick={() => setCurrentIndex((i) => i + 1)}>
          Next step <span style={{ marginLeft: "4px" }}>→</span>
        </button>
      )}
    </div>
  );
}