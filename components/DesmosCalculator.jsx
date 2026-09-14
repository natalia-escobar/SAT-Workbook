"use client";

import { useState, useRef, useEffect } from "react";

export default function DesmosCalculator() {
  const [open, setOpen] = useState(false);
  const [moveMode, setMoveMode] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const dragHandle = overlay.querySelector(".calc-drag");
    const resizeHandle = overlay.querySelector(".calc-resize-grip");
    if (!dragHandle || !resizeHandle) return;

    let dragging = false, startX, startY, origX, origY;
    let resizing = false, rStartX, rStartY, rOrigW, rOrigH;

    const getXY = (e) => {
      if (e.touches && e.touches.length > 0) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      return { x: e.clientX, y: e.clientY };
    };

    // ── DRAG ──
    const onDragStart = (e) => {
      const { x, y } = getXY(e);
      dragging = true;
      startX = x;
      startY = y;
      const rect = overlay.getBoundingClientRect();
      origX = rect.left;
      origY = rect.top;
      overlay.style.right = "auto";
      overlay.style.bottom = "auto";
      overlay.style.left = origX + "px";
      overlay.style.top = origY + "px";
      e.preventDefault();
    };

    const onDragMove = (x, y) => {
      if (!dragging) return;
      let newX = origX + x - startX;
      let newY = origY + y - startY;
      newX = Math.max(-overlay.offsetWidth + 100, Math.min(window.innerWidth - 100, newX));
      newY = Math.max(0, Math.min(window.innerHeight - 50, newY));
      overlay.style.left = newX + "px";
      overlay.style.top = newY + "px";
    };

    // ── RESIZE ──
    const onResizeStart = (e) => {
      const { x, y } = getXY(e);
      resizing = true;
      rStartX = x;
      rStartY = y;
      rOrigW = overlay.offsetWidth;
      rOrigH = overlay.offsetHeight;
      e.preventDefault();
      e.stopPropagation();
    };

    const onResizeMove = (x, y) => {
      if (!resizing) return;
      const newW = Math.max(350, rOrigW + (x - rStartX));
      const newH = Math.max(300, rOrigH + (y - rStartY));
      overlay.style.width = newW + "px";
      overlay.style.height = newH + "px";
    };

    // ── SHARED MOVE/END ──
    const onMove = (e) => {
      const { x, y } = getXY(e);
      onDragMove(x, y);
      onResizeMove(x, y);
    };

    const onEnd = () => {
      dragging = false;
      resizing = false;
    };

    // Mouse events
    dragHandle.addEventListener("mousedown", onDragStart);
    resizeHandle.addEventListener("mousedown", onResizeStart);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onEnd);

    // Touch events
    dragHandle.addEventListener("touchstart", onDragStart, { passive: false });
    resizeHandle.addEventListener("touchstart", onResizeStart, { passive: false });
    document.addEventListener("touchmove", onMove, { passive: false });
    document.addEventListener("touchend", onEnd);

    return () => {
      dragHandle.removeEventListener("mousedown", onDragStart);
      dragHandle.removeEventListener("touchstart", onDragStart);
      resizeHandle.removeEventListener("mousedown", onResizeStart);
      resizeHandle.removeEventListener("touchstart", onResizeStart);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
    };
  }, [open]);

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
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <button
              className={`calc-move-toggle ${moveMode ? "active" : ""}`}
              onClick={() => setMoveMode((m) => !m)}
              title={moveMode ? "Unlock — use calculator" : "Lock — drag to move"}
            >
              <i className={`ti ${moveMode ? "ti-lock-open" : "ti-lock"}`} />
              <span className="calc-move-label">{moveMode ? "Unlock" : "Move"}</span>
            </button>
            <button className="calc-close" onClick={() => { setOpen(false); setMoveMode(false); }}>
              <i className="ti ti-x" />
            </button>
          </div>
        </div>
        <div className="calc-body" style={{ position: "relative" }}>
          {open && (
            <iframe
              src="https://www.desmos.com/calculator"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Desmos Calculator"
            />
          )}
          {moveMode && (
            <div className="calc-move-shield">
              <div className="calc-move-hint">
                <i className="ti ti-arrows-move" />
                <span>Drag the top bar to move</span>
              </div>
            </div>
          )}
        </div>
        <div className="calc-resize-grip">
          <i className="ti ti-arrows-diagonal-2" />
        </div>
      </div>
    </>
  );
}