"use client";

import { useState, useRef, useEffect } from "react";

export default function DesmosCalculator() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const dragHandle = overlay.querySelector(".calc-drag");
    const resizeHandle = overlay.querySelector(".calc-resize-grip");
    if (!dragHandle || !resizeHandle) return;

    // ── DRAG LOGIC ──
    let dragging = false, startX, startY, origX, origY;

    const onDragDown = (e) => {
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

    const onDragMove = (e) => {
      if (!dragging) return;
      let newX = origX + e.clientX - startX;
      let newY = origY + e.clientY - startY;
      newX = Math.max(-overlay.offsetWidth + 100, Math.min(window.innerWidth - 100, newX));
      newY = Math.max(0, Math.min(window.innerHeight - 50, newY));
      overlay.style.left = newX + "px";
      overlay.style.top = newY + "px";
    };

    const onDragUp = () => { dragging = false; };

    // ── RESIZE LOGIC ──
    let resizing = false, rStartX, rStartY, rOrigW, rOrigH;
    const shield = document.createElement("div");
    shield.style.cssText = "position:absolute;inset:0;z-index:10;cursor:se-resize;display:none";

    overlay.appendChild(shield);

    const onResizeDown = (e) => {
      resizing = true;
      rStartX = e.clientX;
      rStartY = e.clientY;
      rOrigW = overlay.offsetWidth;
      rOrigH = overlay.offsetHeight;
      shield.style.display = "block";
      e.preventDefault();
      e.stopPropagation();
    };

    const onResizeMove = (e) => {
      if (!resizing) return;
      const newW = Math.max(400, rOrigW + (e.clientX - rStartX));
      const newH = Math.max(350, rOrigH + (e.clientY - rStartY));
      overlay.style.width = newW + "px";
      overlay.style.height = newH + "px";
    };

    const onResizeUp = () => {
      if (resizing) {
        resizing = false;
        shield.style.display = "none";
      }
    };

    dragHandle.addEventListener("mousedown", onDragDown);
    document.addEventListener("mousemove", (e) => { onDragMove(e); onResizeMove(e); });
    document.addEventListener("mouseup", (e) => { onDragUp(e); onResizeUp(e); });
    resizeHandle.addEventListener("mousedown", onResizeDown);

    return () => {
      dragHandle.removeEventListener("mousedown", onDragDown);
      resizeHandle.removeEventListener("mousedown", onResizeDown);
      if (shield.parentNode) shield.remove();
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
          <button className="calc-close" onClick={() => setOpen(false)}>
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="calc-body">
          {open && (
            <iframe
              src="https://www.desmos.com/calculator"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Desmos Calculator"
            />
          )}
        </div>
        <div className="calc-resize-grip">
          <i className="ti ti-arrows-diagonal-2" />
        </div>
      </div>
    </>
  );
}