"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [ended, setEnded] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    v.currentTime = 0;
    v.play();
    setPlaying(true);
    setEnded(false);
  };

  const handleEnded = () => {
    setPlaying(false);
    setEnded(true);
  };

  return (
    <div className={`video-player ${ended ? "ended" : ""}`} onClick={handlePlay}>
      <video ref={videoRef} src={src} onEnded={handleEnded} />
      <div className={`video-overlay ${playing ? "hidden" : ""}`}>
        <button
          className="video-overlay-btn"
          onClick={(e) => {
            e.stopPropagation();
            handlePlay();
          }}
        >
          <i className={`ti ${ended ? "ti-refresh" : "ti-player-play-filled"}`} />
        </button>
      </div>
    </div>
  );
}