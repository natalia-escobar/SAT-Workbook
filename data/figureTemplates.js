// Starting shapes for the builder. Pick one, drag points, type labels, save.

export const figureTemplates = {
  "Blank": {
    size: [600, 400],
    points: {}, segments: [], circles: [], angles: [], ticks: [], rightAngles: [], labels: [],
    notToScale: true,
  },

  "Triangle": {
    size: [600, 400],
    points: { A: [100, 320], B: [500, 320], C: [220, 80] },
    segments: [{ from: "A", to: "B" }, { from: "B", to: "C" }, { from: "C", to: "A" }],
    circles: [], angles: [], ticks: [], rightAngles: [], labels: [],
    notToScale: true,
  },

  "Right triangle": {
    size: [600, 400],
    points: { A: [120, 320], B: [460, 320], C: [120, 80] },
    segments: [{ from: "A", to: "B" }, { from: "B", to: "C" }, { from: "C", to: "A" }],
    circles: [], angles: [], ticks: [],
    rightAngles: [{ at: "A", arms: ["B", "C"] }],
    labels: [],
    notToScale: true,
  },

  "Isosceles triangle": {
    size: [600, 400],
    points: { A: [140, 320], B: [460, 320], C: [300, 80] },
    segments: [{ from: "A", to: "B" }, { from: "B", to: "C" }, { from: "C", to: "A" }],
    circles: [], angles: [],
    ticks: [{ on: ["A", "C"], count: 1 }, { on: ["B", "C"], count: 1 }],
    rightAngles: [], labels: [],
    notToScale: true,
  },

  "Circle with inscribed angle": {
    size: [600, 400],
    points: { O: [300, 200], A: [300, 60], B: [180, 290], C: [440, 260] },
    segments: [{ from: "A", to: "B" }, { from: "A", to: "C" }, { from: "B", to: "C" }],
    circles: [{ center: "O", through: "A" }],
    angles: [], ticks: [], rightAngles: [], labels: [],
    notToScale: true,
  },

  "Parallel lines + transversal": {
    size: [600, 400],
    points: { A: [80, 120], B: [520, 120], C: [80, 280], D: [520, 280], E: [180, 40], F: [420, 360] },
    segments: [{ from: "A", to: "B" }, { from: "C", to: "D" }, { from: "E", to: "F" }],
    circles: [], angles: [], ticks: [], rightAngles: [], labels: [],
    notToScale: true,
  },

  "Rectangle with diagonal": {
    size: [600, 400],
    points: { A: [120, 300], B: [480, 300], C: [480, 100], D: [120, 100] },
    segments: [
      { from: "A", to: "B" }, { from: "B", to: "C" }, { from: "C", to: "D" }, { from: "D", to: "A" },
      { from: "A", to: "C" },
    ],
    circles: [], angles: [], ticks: [],
    rightAngles: [{ at: "A", arms: ["B", "D"] }],
    labels: [],
    notToScale: true,
  },
};
