// Pure geometry helpers for rendering test-style figures.
// No React here — the same functions power the student renderer and the admin builder.

export const EMPTY_FIGURE = {
  size: [600, 400],
  points: {},        // { A: [x, y] }
  segments: [],      // [{ from: "A", to: "B" }]
  circles: [],       // [{ center: "O", through: "P" }]
  angles: [],        // [{ at: "A", arms: ["B", "C"], label: "40°", arcs: 1 }]
  ticks: [],         // [{ on: ["A", "B"], count: 1 }]
  rightAngles: [],   // [{ at: "B", arms: ["A", "C"] }]
  labels: [],        // [{ text: "12", on: ["A", "B"] }]  (segment labels)
  notToScale: true,
  showPointLabels: true, // false hides every point's letter in the student view
  hiddenLabels: [],      // point names whose letter is hidden individually
  arrows: [],            // [{ from: "E", to: "F", label: "200 ft/s" }]  endpoints draw no dot/letter
  icons: [],             // [{ at: "C", kind: "helicopter", place: "above", flip: false, size: 44 }]
  pointText: {},         // { A: { text: "Warehouse", side: "below" } } display text instead of the letter
  axes: null,            // { xMin, xMax, yMin, yMax, labelEvery } — draws a coordinate plane; null = none
};

// Coordinate plane: one math unit = AXIS_UNIT px. Points are still stored in px;
// these convert. The origin is placed so the plane is centered on the canvas.
export const AXIS_UNIT = 40;

export function axisOrigin(fig) {
  const a = fig.axes;
  const [w, h] = fig.size;
  return [
    w / 2 - ((a.xMin + a.xMax) / 2) * AXIS_UNIT,
    h / 2 + ((a.yMin + a.yMax) / 2) * AXIS_UNIT,
  ];
}

export function toMath(fig, p) {
  const [ox, oy] = axisOrigin(fig);
  return [(p[0] - ox) / AXIS_UNIT, (oy - p[1]) / AXIS_UNIT];
}

export function toPx(fig, m) {
  const [ox, oy] = axisOrigin(fig);
  return [ox + m[0] * AXIS_UNIT, oy - m[1] * AXIS_UNIT];
}

// Snap a canvas click to the right lattice: integer coordinates when a plane is on,
// the builder grid otherwise.
export function snapPoint(fig, x, y) {
  if (!fig.axes) return [snap(x), snap(y)];
  const m = toMath(fig, [x, y]);
  return toPx(fig, [Math.round(m[0]), Math.round(m[1])]);
}

// Pixel extents of the plane (for fitting the view).
export function axesBounds(fig) {
  const a = fig.axes;
  const tl = toPx(fig, [a.xMin, a.yMax]);
  const br = toPx(fig, [a.xMax, a.yMin]);
  return { x0: tl[0], y0: tl[1], x1: br[0], y1: br[1] };
}

// Built-in pictograms, each drawn in a box from -20..20 (40 units), facing right.
// Stroke-only silhouettes so they match the line weight of the figure.
export const ICONS = {
  plane: "M -18 2 L 10 2 L 18 -2 L 10 -5 L -8 -5 L -14 -12 L -17 -12 L -13 -5 L -18 -5 Z M -4 -5 L 2 -16 L 6 -16 L 2 -5 M -4 2 L 2 12 L 6 12 L 2 2",
  helicopter: "M -8 -2 A 9 7 0 1 0 10 -2 A 9 7 0 1 0 -8 -2 Z M -8 -2 L -20 -4 L -20 0 L -8 2 M 1 -9 L 1 -13 M -16 -13 L 18 -13 M -2 6 L 4 6 M -5 9 L 7 9 M -3 6 L -3 9 M 5 6 L 5 9",
  boat: "M -18 4 L -12 14 L 12 14 L 18 4 Z M 0 4 L 0 -16 M 0 -14 L 14 -2 L 0 -2 Z",
  car: "M -18 6 L -18 -2 L -10 -2 L -5 -10 L 8 -10 L 14 -2 L 18 -2 L 18 6 Z M -10 10 A 4 4 0 1 0 -2 10 A 4 4 0 1 0 -10 10 Z M 6 10 A 4 4 0 1 0 14 10 A 4 4 0 1 0 6 10 Z",
  person: "M 0 -11 A 4 4 0 1 0 0 -19 A 4 4 0 1 0 0 -11 Z M 0 -11 L 0 4 M -8 -6 L 8 -6 M 0 4 L -7 18 M 0 4 L 7 18",
  tree: "M 0 -18 L -12 0 L 12 0 Z M 0 -8 L -14 10 L 14 10 Z M -3 10 L -3 18 L 3 18 L 3 10",
  building: "M -12 18 L -12 -16 L 12 -16 L 12 18 Z M -7 -10 L -3 -10 M 3 -10 L 7 -10 M -7 -2 L -3 -2 M 3 -2 L 7 -2 M -7 6 L -3 6 M 3 6 L 7 6 M -2 18 L -2 12 L 2 12 L 2 18",
  lighthouse: "M -7 18 L -5 -10 L 5 -10 L 7 18 Z M -7 -10 L 7 -10 L 7 -16 L -7 -16 Z M -4 -16 L 0 -20 L 4 -16 M -12 -14 L -9 -13 M 12 -14 L 9 -13",
};

// Arrowhead polygon at B pointing along A→B. Returns "x,y x,y x,y" for <polygon points>.
export function arrowHead(A, B, size = 10) {
  const u = unit(A, B);
  const n = [-u[1], u[0]];
  const base = [B[0] - u[0] * size, B[1] - u[1] * size];
  const p1 = [base[0] + n[0] * size * 0.45, base[1] + n[1] * size * 0.45];
  const p2 = [base[0] - n[0] * size * 0.45, base[1] - n[1] * size * 0.45];
  return `${B[0]},${B[1]} ${p1[0]},${p1[1]} ${p2[0]},${p2[1]}`;
}

// Points that only anchor arrows or icons draw no dot or letter.
export function isHelperPoint(fig, name) {
  const inArrow = (fig.arrows || []).some((a) => a.from === name || a.to === name);
  const inIcon = (fig.icons || []).some((i) => i.at === name);
  if (!inArrow && !inIcon) return false;
  const inGeometry =
    fig.segments.some((s) => s.from === name || s.to === name) ||
    fig.circles.some((c) => c.center === name || c.through === name) ||
    fig.angles.some((a) => a.at === name || a.arms.includes(name)) ||
    fig.rightAngles.some((a) => a.at === name || a.arms.includes(name));
  return !inGeometry;
}

export const GRID = 20;

export function snap(v, grid = GRID) {
  return Math.round(v / grid) * grid;
}

export function dist(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

export function midpoint(a, b) {
  return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
}

export function unit(from, to) {
  const d = dist(from, to) || 1;
  return [(to[0] - from[0]) / d, (to[1] - from[1]) / d];
}

// Center of all points; used to push labels "outward".
export function centroid(points) {
  const ps = Object.values(points);
  if (!ps.length) return [0, 0];
  const s = ps.reduce((acc, p) => [acc[0] + p[0], acc[1] + p[1]], [0, 0]);
  return [s[0] / ps.length, s[1] / ps.length];
}

// Next unused point name: A, B, ... Z, then A1, B1, ...
export function nextPointName(points) {
  const used = new Set(Object.keys(points));
  for (let round = 0; round < 10; round++) {
    for (let i = 0; i < 26; i++) {
      const name = String.fromCharCode(65 + i) + (round ? round : "");
      if (!used.has(name)) return name;
    }
  }
  return "P" + Date.now();
}

// Arc for an angle mark at vertex V between arms toward P and Q.
// Always draws the smaller angle. Returns the SVG path `d` plus the label anchor.
export function anglePath(V, P, Q, r) {
  const a1 = Math.atan2(P[1] - V[1], P[0] - V[0]);
  const a2 = Math.atan2(Q[1] - V[1], Q[0] - V[0]);
  let delta = a2 - a1;
  while (delta > Math.PI) delta -= 2 * Math.PI;
  while (delta < -Math.PI) delta += 2 * Math.PI;
  const sweep = delta > 0 ? 1 : 0;
  const start = [V[0] + r * Math.cos(a1), V[1] + r * Math.sin(a1)];
  const end = [V[0] + r * Math.cos(a2), V[1] + r * Math.sin(a2)];
  const mid = a1 + delta / 2;
  const labelAt = [V[0] + (r + 16) * Math.cos(mid), V[1] + (r + 16) * Math.sin(mid)];
  const d = `M ${start[0]} ${start[1]} A ${r} ${r} 0 0 ${sweep} ${end[0]} ${end[1]}`;
  return { d, labelAt, degrees: Math.abs((delta * 180) / Math.PI) };
}

// Small square for a right-angle marker at V, along arms toward P and Q.
export function rightAnglePath(V, P, Q, s = 12) {
  const u = unit(V, P);
  const v = unit(V, Q);
  const p1 = [V[0] + u[0] * s, V[1] + u[1] * s];
  const p2 = [p1[0] + v[0] * s, p1[1] + v[1] * s];
  const p3 = [V[0] + v[0] * s, V[1] + v[1] * s];
  return `M ${p1[0]} ${p1[1]} L ${p2[0]} ${p2[1]} L ${p3[0]} ${p3[1]}`;
}

// Tick marks across the midpoint of segment AB. Returns an array of [x1,y1,x2,y2].
export function tickLines(A, B, count = 1, len = 7, gap = 5) {
  const m = midpoint(A, B);
  const u = unit(A, B);
  const n = [-u[1], u[0]];
  const lines = [];
  for (let i = 0; i < count; i++) {
    const off = (i - (count - 1) / 2) * gap;
    const c = [m[0] + u[0] * off, m[1] + u[1] * off];
    lines.push([c[0] - n[0] * len, c[1] - n[1] * len, c[0] + n[0] * len, c[1] + n[1] * len]);
  }
  return lines;
}

// Where to put a point's letter: pushed away from the figure's centroid.
export function pointLabelPos(p, center, offset = 16) {
  let u = unit(center, p);
  if (!u[0] && !u[1]) u = [0, -1];
  return [p[0] + u[0] * offset, p[1] + u[1] * offset];
}

// Placement for a point's display text (which may be several words).
// Returns { x, y, anchor } where anchor is an SVG text-anchor so the text
// extends away from the point instead of across it.
export function pointTextPos(p, center, side = "auto", gap = 10) {
  if (side === "auto") {
    let u = unit(center, p);
    if (!u[0] && !u[1]) u = [0, -1];
    side = Math.abs(u[0]) > Math.abs(u[1]) ? (u[0] < 0 ? "left" : "right") : (u[1] < 0 ? "above" : "below");
  }
  if (side === "left") return { x: p[0] - gap, y: p[1], anchor: "end" };
  if (side === "right") return { x: p[0] + gap, y: p[1], anchor: "start" };
  if (side === "above") return { x: p[0], y: p[1] - gap - 6, anchor: "middle" };
  return { x: p[0], y: p[1] + gap + 8, anchor: "middle" };
}

// Where to put a segment label (e.g. side length): midpoint pushed off the line.
//   text  — the label text; the push grows with its width so it clears the line
//   side  — "auto" (away from the figure's center), or "left" / "right" / "above" / "below"
export function segmentLabelPos(A, B, center, text = "", side = "auto", fontSize = 14) {
  const m = midpoint(A, B);
  const u = unit(A, B);
  let n = [-u[1], u[0]];

  if (side === "left") n = n[0] < 0 ? n : [-n[0], -n[1]];
  else if (side === "right") n = n[0] > 0 ? n : [-n[0], -n[1]];
  else if (side === "above") n = n[1] < 0 ? n : [-n[0], -n[1]];
  else if (side === "below") n = n[1] > 0 ? n : [-n[0], -n[1]];
  else {
    // auto: away from the centroid
    const toCenter = [center[0] - m[0], center[1] - m[1]];
    if (n[0] * toCenter[0] + n[1] * toCenter[1] > 0) n = [-n[0], -n[1]];
  }

  // The text box is roughly (chars * 0.58em) wide and 1em tall. Push far enough
  // that its half-extent along the normal clears the line, plus a small gap.
  const halfW = (String(text).length * fontSize * 0.58) / 2;
  const halfH = fontSize / 2;
  const offset = 6 + Math.abs(n[0]) * halfW + Math.abs(n[1]) * halfH;
  return [m[0] + n[0] * offset, m[1] + n[1] * offset];
}

export function sameSegment(a, b) {
  return (a.from === b.from && a.to === b.to) || (a.from === b.to && a.to === b.from);
}

// Remove a point and everything that references it.
export function removePoint(fig, name) {
  const points = { ...fig.points };
  delete points[name];
  return {
    ...fig,
    points,
    segments: fig.segments.filter((s) => s.from !== name && s.to !== name),
    circles: fig.circles.filter((c) => c.center !== name && c.through !== name),
    angles: fig.angles.filter((a) => a.at !== name && !a.arms.includes(name)),
    rightAngles: fig.rightAngles.filter((a) => a.at !== name && !a.arms.includes(name)),
    ticks: fig.ticks.filter((t) => !t.on.includes(name)),
    labels: fig.labels.filter((l) => !l.on.includes(name)),
    hiddenLabels: (fig.hiddenLabels || []).filter((n) => n !== name),
    arrows: (fig.arrows || []).filter((a) => a.from !== name && a.to !== name),
    icons: (fig.icons || []).filter((i) => i.at !== name),
    pointText: Object.fromEntries(Object.entries(fig.pointText || {}).filter(([k]) => k !== name)),
  };
}

// Rename a point and update everything that references it.
// Returns the figure unchanged if the new name is empty or already taken.
export function renamePoint(fig, from, to) {
  to = (to || "").trim();
  if (!to || to === from || fig.points[to]) return fig;
  const r = (n) => (n === from ? to : n);
  const points = {};
  for (const [k, v] of Object.entries(fig.points)) points[r(k)] = v;
  return {
    ...fig,
    points,
    segments: fig.segments.map((s) => ({ ...s, from: r(s.from), to: r(s.to) })),
    circles: fig.circles.map((c) => ({ ...c, center: r(c.center), through: r(c.through) })),
    angles: fig.angles.map((a) => ({ ...a, at: r(a.at), arms: a.arms.map(r) })),
    rightAngles: fig.rightAngles.map((a) => ({ ...a, at: r(a.at), arms: a.arms.map(r) })),
    ticks: fig.ticks.map((t) => ({ ...t, on: t.on.map(r) })),
    labels: fig.labels.map((l) => ({ ...l, on: l.on.map(r) })),
    hiddenLabels: (fig.hiddenLabels || []).map(r),
    arrows: (fig.arrows || []).map((a) => ({ ...a, from: r(a.from), to: r(a.to) })),
    icons: (fig.icons || []).map((i) => ({ ...i, at: r(i.at) })),
    pointText: Object.fromEntries(Object.entries(fig.pointText || {}).map(([k, v]) => [r(k), v])),
  };
}