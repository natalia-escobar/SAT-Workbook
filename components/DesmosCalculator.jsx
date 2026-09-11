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

    const onDragStart = (x, y) => {
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

    const onDragEnd = () => { dragging = false; };

    dragHandle.addEventListener("mousedown", (e) => { onDragStart(e.clientX, e.clientY); e.preventDefault(); });
    dragHandle.addEventListener("touchstart", (e) => { onDragStart(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault(); }, { passive: false });

    // ── RESIZE LOGIC ──
    let resizing = false, rStartX, rStartY, rOrigW, rOrigH;
    const shield = document.createElement("div");
    shield.style.cssText = "position:absolute;inset:0;z-index:10;cursor:se-resize;display:none";
    overlay.appendChild(shield);

    const onResizeStart = (x, y) => {
      resizing = true;
      rStartX = x;
      rStartY = y;
      rOrigW = overlay.offsetWidth;
      rOrigH = overlay.offsetHeight;
      shield.style.display = "block";
    };

    const onResizeMove = (x, y) => {
      if (!resizing) return;
      const newW = Math.max(400, rOrigW + (x - rStartX));
      const newH = Math.max(350, rOrigH + (y - rStartY));
      overlay.style.width = newW + "px";
      overlay.style.height = newH + "px";
    };

    const onResizeEnd = () => {
      if (resizing) {
        resizing = false;
        shield.style.display = "none";
      }
    };

    resizeHandle.addEventListener("mousedown", (e) => { onResizeStart(e.clientX, e.clientY); e.preventDefault(); e.stopPropagation(); });
    resizeHandle.addEventListener("touchstart", (e) => { onResizeStart(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault(); e.stopPropagation(); }, { passive: false });

    // ── SHARED MOVE/END LISTENERS ──
    const onMouseMove = (e) => { onDragMove(e.clientX, e.clientY); onResizeMove(e.clientX, e.clientY); };
    const onMouseUp = () => { onDragEnd(); onResizeEnd(); };
    const onTouchMove = (e) => { onDragMove(e.touches[0].clientX, e.touches[0].clientY); onResizeMove(e.touches[0].clientX, e.touches[0].clientY); };
    const onTouchEnd = () => { onDragEnd(); onResizeEnd(); };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd);

    return () => {
      dragHandle.removeEventListener("mousedown", onDragStart);
      resizeHandle.removeEventListener("mousedown", onResizeStart);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
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