"use client";

import { useState, useRef, useEffect } from "react";

export default function DesmosCalculator() {
  const [open, setOpen] = useState(false);
  const calcRef = useRef(null);
  const instanceRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (open && !instanceRef.current && calcRef.current && window.Desmos) {
      instanceRef.current = window.Desmos.GraphingCalculator(calcRef.current, {
        keypad: true,
        expressions: true,
        settingsMenu: false,
        zoomButtons: true,
        border: false,
      });
    }
  }, [open]);

  // drag logic
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const handle = overlay.querySelector(".calc-drag");
    if (!handle) return;

    let dragging = false, startX, startY, origX, origY;

    const onDown = (e) => {
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      const rect = overlay.getBoundingClientRect();
      origX = rect.left;
      origY = rect.top;
      overlay.style.right = "auto";
      overlay.style.bottom = "auto";
      overlay.style.left = origX + "px";
      overlay.style.top = origY + "px";
      e.preventDefault();
    };

    const onMove = (e) => {
      if (!dragging) return;
      overlay.style.left = (origX + e.clientX - startX) + "px";
      overlay.style.top = (origY + e.clientY - startY) + "px";
    };

    const onUp = () => { dragging = false; };

    handle.addEventListener("mousedown", onDown);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);

    return () => {
      handle.removeEventListener("mousedown", onDown);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <button className="calc-fab" onClick={() => setOpen((o) => !o)} title="Open Desmos calculator">
        <i className={`ti ${open ? "ti-x" : "ti-calculator"}`} />
      </button>
      <div ref={overlayRef} className={`calc-overlay ${open ? "open" : ""}`}>
        <div className="calc-drag">
          <div className="calc-drag-left">
            <i className="ti ti-grip-horizontal" />
            <span>Desmos calculator</span>
          </div>
          <button className="calc-close" onClick={() => setOpen(false)}>
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="calc-body" ref={calcRef} />
      </div>
    </>
  );
}