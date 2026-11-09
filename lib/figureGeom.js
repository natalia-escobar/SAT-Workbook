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
};

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

// Where to put a segment label (e.g. side length): midpoint pushed away from the centroid.
export function segmentLabelPos(A, B, center, offset = 14) {
  const m = midpoint(A, B);
  const u = unit(A, B);
  let n = [-u[1], u[0]];
  // flip so the normal points away from the centroid
  const toCenter = [center[0] - m[0], center[1] - m[1]];
  if (n[0] * toCenter[0] + n[1] * toCenter[1] > 0) n = [-n[0], -n[1]];
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
  };
}