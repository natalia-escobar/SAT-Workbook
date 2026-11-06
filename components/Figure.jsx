"use client";
import React from "react";
import {
  anglePath,
  rightAnglePath,
  tickLines,
  pointLabelPos,
  segmentLabelPos,
  centroid,
  dist,
  GRID,
} from "../lib/figureGeom";

/**
 * Renders a figure spec as inline SVG.
 *
 * Student/exam views use it with just `spec`.
 * The builder passes `editable`, `selected`, `pending` and the handlers to draw overlays.
 *
 * Props
 *   spec        figure object (see EMPTY_FIGURE in lib/figureGeom.js)
 *   width       CSS width (default "100%")
 *   editable    show grid, hit areas, larger handles
 *   selected    { kind, index|name } currently selected in the builder
 *   pending     array of point names clicked so far in a multi-click mode
 *   onCanvasClick(x, y)        click on empty canvas (figure coordinates)
 *   onPointClick(name)
 *   onSegmentClick(index)
 *   onCircleClick(index)
 *   onItemClick(kind, index)   angle / tick / rightAngle / label
 *   onPointDrag(name, x, y)    pointer drag of a point
 */
export default function Figure({
  spec,
  width = "100%",
  editable = false,
  selected = null,
  pending = [],
  onCanvasClick,
  onPointClick,
  onSegmentClick,
  onCircleClick,
  onItemClick,
  onPointDrag,
  style,
}) {
  const svgRef = React.useRef(null);
  const [w, h] = spec.size;
  const center = centroid(spec.points);
  const P = (name) => spec.points[name];

  const stroke = "currentColor";
  const accent = "#2563eb";

  const toFigureCoords = (evt) => {
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    const inv = svg.getScreenCTM().inverse();
    const p = pt.matrixTransform(inv);
    return [p.x, p.y];
  };

  const stop = (fn) => (e) => {
    e.stopPropagation();
    fn && fn(e);
  };

  // drag handling
  const dragRef = React.useRef(null);
  const startDrag = (name) => (e) => {
    if (!editable || !onPointDrag) return;
    e.stopPropagation();
    dragRef.current = { name, moved: false };
    e.target.setPointerCapture && e.target.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    if (!dragRef.current) return;
    const [x, y] = toFigureCoords(e);
    dragRef.current.moved = true;
    onPointDrag(dragRef.current.name, x, y);
  };
  const endDrag = (e) => {
    if (!dragRef.current) return;
    const { name, moved } = dragRef.current;
    dragRef.current = null;
    if (!moved && onPointClick) onPointClick(name);
  };

  const isSel = (kind, key) =>
    selected && selected.kind === kind && (selected.index === key || selected.name === key);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${w} ${h}`}
      width={width}
      style={{ display: "block", touchAction: "none", userSelect: "none", ...style }}
      onClick={(e) => {
        if (!editable || !onCanvasClick) return;
        const [x, y] = toFigureCoords(e);
        onCanvasClick(x, y);
      }}
      onPointerMove={onMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      {editable && (
        <>
          <defs>
            <pattern id="fig-grid" width={GRID} height={GRID} patternUnits="userSpaceOnUse">
              <path d={`M ${GRID} 0 H 0 V ${GRID}`} fill="none" stroke="#9ca3af" strokeOpacity="0.35" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width={w} height={h} fill="url(#fig-grid)" />
        </>
      )}

      {/* circles */}
      {spec.circles.map((c, i) => {
        const O = P(c.center), T = P(c.through);
        if (!O || !T) return null;
        const r = dist(O, T);
        const sel = isSel("circle", i);
        return (
          <g key={"c" + i} onClick={stop(() => onCircleClick && onCircleClick(i))}>
            {editable && <circle cx={O[0]} cy={O[1]} r={r} fill="none" stroke="transparent" strokeWidth="14" style={{ cursor: "pointer" }} />}
            <circle cx={O[0]} cy={O[1]} r={r} fill="none" stroke={sel ? accent : stroke} strokeWidth={sel ? 2.5 : 1.8} />
          </g>
        );
      })}

      {/* segments */}
      {spec.segments.map((s, i) => {
        const A = P(s.from), B = P(s.to);
        if (!A || !B) return null;
        const sel = isSel("segment", i);
        return (
          <g key={"s" + i} onClick={stop(() => onSegmentClick && onSegmentClick(i))}>
            {editable && <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke="transparent" strokeWidth="14" style={{ cursor: "pointer" }} />}
            <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={sel ? accent : stroke} strokeWidth={sel ? 2.5 : 1.8} strokeLinecap="round" />
          </g>
        );
      })}

      {/* ticks */}
      {spec.ticks.map((t, i) => {
        const A = P(t.on[0]), B = P(t.on[1]);
        if (!A || !B) return null;
        const sel = isSel("tick", i);
        return (
          <g key={"t" + i} stroke={sel ? accent : stroke} strokeWidth="1.8" style={{ cursor: editable ? "pointer" : "default" }} onClick={stop(() => onItemClick && onItemClick("tick", i))}>
            {tickLines(A, B, t.count).map((l, j) => (
              <line key={j} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} />
            ))}
          </g>
        );
      })}

      {/* right-angle markers */}
      {spec.rightAngles.map((r, i) => {
        const V = P(r.at), A = P(r.arms[0]), B = P(r.arms[1]);
        if (!V || !A || !B) return null;
        const sel = isSel("rightAngle", i);
        return (
          <path key={"r" + i} d={rightAnglePath(V, A, B)} fill="none" stroke={sel ? accent : stroke} strokeWidth="1.5" style={{ cursor: editable ? "pointer" : "default" }} onClick={stop(() => onItemClick && onItemClick("rightAngle", i))} />
        );
      })}

      {/* angle marks */}
      {spec.angles.map((a, i) => {
        const V = P(a.at), A = P(a.arms[0]), B = P(a.arms[1]);
        if (!V || !A || !B) return null;
        const sel = isSel("angle", i);
        const arcs = a.arcs || 1;
        const base = anglePath(V, A, B, 26);
        return (
          <g key={"a" + i} style={{ cursor: editable ? "pointer" : "default" }} onClick={stop(() => onItemClick && onItemClick("angle", i))}>
            {Array.from({ length: arcs }).map((_, k) => (
              <path key={k} d={anglePath(V, A, B, 26 + k * 6).d} fill="none" stroke={sel ? accent : stroke} strokeWidth="1.5" />
            ))}
            {a.label && (
              <text x={base.labelAt[0]} y={base.labelAt[1]} fontSize="14" textAnchor="middle" dominantBaseline="middle" fill={sel ? accent : stroke}>
                {a.label}
              </text>
            )}
          </g>
        );
      })}

      {/* segment labels */}
      {spec.labels.map((l, i) => {
        const A = P(l.on[0]), B = P(l.on[1]);
        if (!A || !B) return null;
        const pos = segmentLabelPos(A, B, center);
        const sel = isSel("label", i);
        return (
          <text key={"l" + i} x={pos[0]} y={pos[1]} fontSize="14" textAnchor="middle" dominantBaseline="middle" fill={sel ? accent : stroke} style={{ cursor: editable ? "pointer" : "default" }} onClick={stop(() => onItemClick && onItemClick("label", i))}>
            {l.text}
          </text>
        );
      })}

      {/* points */}
      {Object.entries(spec.points).map(([name, p]) => {
        const lp = pointLabelPos(p, center);
        const sel = isSel("point", name);
        const pend = pending.includes(name);
        return (
          <g key={"p" + name}>
            <text x={lp[0]} y={lp[1]} fontSize="15" textAnchor="middle" dominantBaseline="middle" fill={sel || pend ? accent : stroke} fontStyle="italic">
              {name}
            </text>
            <circle
              cx={p[0]} cy={p[1]} r={editable ? 6 : 3}
              fill={sel || pend ? accent : stroke}
              stroke={editable ? "white" : "none"} strokeWidth="1.5"
              style={{ cursor: editable ? "grab" : "default" }}
              onPointerDown={startDrag(name)}
              onClick={(e) => e.stopPropagation()}
            />
          </g>
        );
      })}

      {spec.notToScale && (
        <text x={w - 8} y={h - 8} fontSize="12" textAnchor="end" fill={stroke} fillOpacity="0.7">
          Note: Figure not drawn to scale.
        </text>
      )}
    </svg>
  );
}
