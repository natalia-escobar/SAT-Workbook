"use client";
import React from "react";
import {
  anglePath,
  rightAnglePath,
  tickLines,
  pointLabelPos,
  pointTextPos,
  segmentLabelPos,
  centroid,
  dist,
  GRID,
  ICONS,
  arrowHead,
  isHelperPoint,
  midpoint,
  unit,
  AXIS_UNIT,
  toPx,
  axesBounds,
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
 *   background  fill color behind the figure (default "white"); null for transparent
 *   radius      corner radius of that background in px (default 8, matches .desmos-container)
 *   border      hairline color around it (default "#e0e0de", matches .desmos-container); null for none
 *   fit         crop the view to the drawing plus `margin` (default: on when not editable)
 *   margin      space around the drawing when fitting, in figure units (default 44)
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
  background = "white",   // fill behind the figure; pass null for transparent
  radius = 8,             // corner radius of the background, in px
  border = "#e0e0de",     // hairline around the background; pass null for none
  fit = !editable,        // crop the view to the drawing (+ margin) instead of the full canvas
  margin = 44,            // space around the drawing when fit is on, in figure units
}) {
  const svgRef = React.useRef(null);
  const center = centroid(spec.points);
  const P = (name) => spec.points[name];

  // Visible area: the whole canvas while editing, or a box around the drawing when showing.
  const box = React.useMemo(() => {
    const [cw, ch] = spec.size;
    const pts = Object.values(spec.points);
    if (!fit || (!pts.length && !spec.axes)) return { x: 0, y: 0, w: cw, h: ch };
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    const grow = (x, y, r = 0) => {
      minX = Math.min(minX, x - r); maxX = Math.max(maxX, x + r);
      minY = Math.min(minY, y - r); maxY = Math.max(maxY, y + r);
    };
    pts.forEach((p) => grow(p[0], p[1]));
    if (spec.axes) {
      const b = axesBounds(spec);
      // room for the arrowheads and the x / y labels past the ends
      grow(b.x0 - 18, b.y0 - 26); grow(b.x1 + 30, b.y1 + 18);
    }
    spec.circles.forEach((c) => {
      const O = spec.points[c.center], T = spec.points[c.through];
      if (O && T) grow(O[0], O[1], dist(O, T));
    });
    (spec.icons || []).forEach((ic) => {
      const p = spec.points[ic.at];
      if (!p) return;
      const size = ic.size || 44, off = size * 0.6, place = ic.place || "above";
      const cx = p[0] + (place === "left" ? -off : place === "right" ? off : 0);
      const cy = p[1] + (place === "above" ? -off : place === "below" ? off : 0);
      grow(cx, cy, size / 2);
    });
    Object.entries(spec.pointText || {}).forEach(([name, pt]) => {
      const p = spec.points[name];
      if (!p || !pt?.text) return;
      const pos = pointTextPos(p, centroid(spec.points), pt.side || "auto");
      const wText = pt.text.length * 14 * 0.58;
      const x0 = pos.anchor === "end" ? pos.x - wText : pos.anchor === "start" ? pos.x : pos.x - wText / 2;
      grow(x0, pos.y - 8); grow(x0 + wText, pos.y + 8);
    });
    const extra = spec.notToScale ? 22 : 0; // room for the note under the drawing
    return { x: minX - margin, y: minY - margin, w: maxX - minX + 2 * margin, h: maxY - minY + 2 * margin + extra };
  }, [spec, fit, margin]);
  const { x: bx, y: by, w, h } = box;

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
      viewBox={`${bx} ${by} ${w} ${h}`}
      width={width}
      style={{
        display: "block", touchAction: "none", userSelect: "none",
        borderRadius: radius, overflow: "hidden",
        border: border ? `0.5px solid ${border}` : "none",
        ...style,
      }}
      onClick={(e) => {
        if (!editable || !onCanvasClick) return;
        const [x, y] = toFigureCoords(e);
        onCanvasClick(x, y);
      }}
      onPointerMove={onMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      {background && <rect x={bx} y={by} width={w} height={h} rx={radius} ry={radius} fill={background} />}
      {editable && (
        <>
          <defs>
            <pattern id="fig-grid" width={GRID} height={GRID} patternUnits="userSpaceOnUse">
              <path d={`M ${GRID} 0 H 0 V ${GRID}`} fill="none" stroke="#9ca3af" strokeOpacity="0.35" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x={bx} y={by} width={w} height={h} fill="url(#fig-grid)" />
        </>
      )}

      {/* coordinate plane */}
      {spec.axes && (() => {
        const a = spec.axes;
        const every = a.labelEvery || 2;
        const b = axesBounds(spec);
        const [ox, oy] = toPx(spec, [0, 0]);
        const gridCol = "#b8b8b4";
        const lines = [];
        for (let xi = a.xMin; xi <= a.xMax; xi++) {
          const [x] = toPx(spec, [xi, 0]);
          lines.push(<line key={"gx" + xi} x1={x} y1={b.y0} x2={x} y2={b.y1} stroke={gridCol} strokeWidth="0.8" />);
        }
        for (let yi = a.yMin; yi <= a.yMax; yi++) {
          const [, y] = toPx(spec, [0, yi]);
          lines.push(<line key={"gy" + yi} x1={b.x0} y1={y} x2={b.x1} y2={y} stroke={gridCol} strokeWidth="0.8" />);
        }
        const ticks = [];
        for (let xi = a.xMin; xi <= a.xMax; xi++) {
          if (xi === 0 || xi % every !== 0) continue;
          const [x] = toPx(spec, [xi, 0]);
          ticks.push(<text key={"tx" + xi} x={x} y={oy + 14} fontSize="12" textAnchor="middle" fill={stroke}>{xi < 0 ? "−" + -xi : xi}</text>);
        }
        for (let yi = a.yMin; yi <= a.yMax; yi++) {
          if (yi === 0 || yi % every !== 0) continue;
          const [, y] = toPx(spec, [0, yi]);
          ticks.push(<text key={"ty" + yi} x={ox - 5} y={y + 4} fontSize="12" textAnchor="end" fill={stroke}>{yi < 0 ? "−" + -yi : yi}</text>);
        }
        const xAxisOn = a.yMin <= 0 && a.yMax >= 0;
        const yAxisOn = a.xMin <= 0 && a.xMax >= 0;
        return (
          <g>
            {lines}
            {xAxisOn && (
              <>
                <line x1={b.x0} y1={oy} x2={b.x1 + 14} y2={oy} stroke={stroke} strokeWidth="1.6" />
                <polygon points={arrowHead([b.x0, oy], [b.x1 + 18, oy], 9)} fill={stroke} />
                <text x={b.x1 + 26} y={oy + 4} fontSize="15" fontStyle="italic" fill={stroke}>x</text>
              </>
            )}
            {yAxisOn && (
              <>
                <line x1={ox} y1={b.y1} x2={ox} y2={b.y0 - 14} stroke={stroke} strokeWidth="1.6" />
                <polygon points={arrowHead([ox, b.y1], [ox, b.y0 - 18], 9)} fill={stroke} />
                <text x={ox} y={b.y0 - 24} fontSize="15" fontStyle="italic" textAnchor="middle" fill={stroke}>y</text>
              </>
            )}
            {xAxisOn && yAxisOn && (
              <text x={ox - 6} y={oy + 14} fontSize="12" fontStyle="italic" textAnchor="end" fill={stroke}>O</text>
            )}
            {ticks}
          </g>
        );
      })()}

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
            <line
              x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]}
              stroke={sel ? accent : stroke} strokeWidth={sel ? 2.5 : 1.8}
              strokeLinecap={s.style === "dashed" ? "butt" : "round"}
              strokeDasharray={s.style === "dashed" ? "8 6" : s.style === "dotted" ? "2 5" : undefined}
            />
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
        const pos = segmentLabelPos(A, B, center, l.text, l.side || "auto");
        const sel = isSel("label", i);
        return (
          <text key={"l" + i} x={pos[0]} y={pos[1]} fontSize="14" textAnchor="middle" dominantBaseline="middle" fill={sel ? accent : stroke} fontStyle={l.italic ? "italic" : "normal"} style={{ cursor: editable ? "pointer" : "default" }} onClick={stop(() => onItemClick && onItemClick("label", i))}>
            {l.text}
          </text>
        );
      })}

      {/* arrows */}
      {(spec.arrows || []).map((a, i) => {
        const A = P(a.from), B = P(a.to);
        if (!A || !B) return null;
        const sel = isSel("arrow", i);
        const col = sel ? accent : stroke;
        const u = unit(A, B);
        // shorten the shaft so it doesn't poke through the head
        const end = [B[0] - u[0] * 8, B[1] - u[1] * 8];
        const lp = segmentLabelPos(A, B, center, a.label || "", a.side || "auto");
        return (
          <g key={"ar" + i} style={{ cursor: editable ? "pointer" : "default" }} onClick={stop(() => onItemClick && onItemClick("arrow", i))}>
            {editable && <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke="transparent" strokeWidth="14" />}
            <line x1={A[0]} y1={A[1]} x2={end[0]} y2={end[1]} stroke={col} strokeWidth="1.8" />
            <polygon points={arrowHead(A, B)} fill={col} />
            {a.label && (
              <text x={lp[0]} y={lp[1]} fontSize="14" textAnchor="middle" dominantBaseline="middle" fill={col}>{a.label}</text>
            )}
          </g>
        );
      })}

      {/* icons */}
      {(spec.icons || []).map((ic, i) => {
        const p = P(ic.at);
        const d = ICONS[ic.kind];
        if (!p || !d) return null;
        const sel = isSel("icon", i);
        const size = ic.size || 44;
        const off = size * 0.6;
        const place = ic.place || "above";
        const cx = p[0] + (place === "left" ? -off : place === "right" ? off : 0);
        const cy = p[1] + (place === "above" ? -off : place === "below" ? off : 0);
        const scale = size / 40;
        return (
          <g
            key={"ic" + i}
            transform={`translate(${cx} ${cy}) scale(${ic.flip ? -scale : scale} ${scale})`}
            style={{ cursor: editable ? "pointer" : "default" }}
            onClick={stop(() => onItemClick && onItemClick("icon", i))}
          >
            {editable && <rect x={-20} y={-20} width={40} height={40} fill="transparent" />}
            <path d={d} fill="none" stroke={sel ? accent : stroke} strokeWidth={1.8 / scale} strokeLinejoin="round" strokeLinecap="round" />
          </g>
        );
      })}

      {/* points */}
      {Object.entries(spec.points).map(([name, p]) => {
        const lp = pointLabelPos(p, center);
        const sel = isSel("point", name);
        const pend = pending.includes(name);
        const helper = isHelperPoint(spec, name);
        const hidden = helper || spec.showPointLabels === false || (spec.hiddenLabels || []).includes(name);
        if (helper && !editable) return null;
        if (hidden && !editable) {
          return <circle key={"p" + name} cx={p[0]} cy={p[1]} r={3} fill={stroke} />;
        }
        if (helper) {
          // builder only: a small hollow handle, no letter, so it reads as "not part of the figure"
          return (
            <circle
              key={"p" + name}
              cx={p[0]} cy={p[1]} r={4}
              fill="white" stroke={sel || pend ? accent : "#9ca3af"} strokeWidth="1.5"
              style={{ cursor: "grab" }}
              onPointerDown={startDrag(name)}
              onClick={(e) => e.stopPropagation()}
            />
          );
        }
        return (
          <g key={"p" + name}>
            {(() => {
              const pt = (spec.pointText || {})[name];
              if (pt && pt.text) {
                const pos = pointTextPos(p, center, pt.side || "auto");
                return (
                  <text
                    x={pos.x} y={pos.y} fontSize="14" textAnchor={pos.anchor} dominantBaseline="middle"
                    fill={sel || pend ? accent : stroke} fillOpacity={hidden ? 0.3 : 1}
                  >
                    {pt.text}
                  </text>
                );
              }
              return (
                <text
                  x={lp[0]} y={lp[1]} fontSize="15" textAnchor="middle" dominantBaseline="middle"
                  fill={sel || pend ? accent : stroke} fillOpacity={hidden ? 0.3 : 1} fontStyle="italic"
                >
                  {name}
                </text>
              );
            })()}
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
        <text x={bx + w - 10} y={by + h - 10} fontSize="12" textAnchor="end" fill={stroke} fillOpacity="0.7">
          Note: Figure not drawn to scale.
        </text>
      )}
    </svg>
  );
}


