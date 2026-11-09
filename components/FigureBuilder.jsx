"use client";
import React from "react";
import Figure from "./Figure";
import { EMPTY_FIGURE, snap, nextPointName, sameSegment, removePoint, renamePoint } from "../lib/figureGeom";
import { figureTemplates } from "../data/figureTemplates";

const MODES = [
  { id: "select", label: "Select", hint: "Click to select, drag points to move" },
  { id: "point", label: "Point", hint: "Click the canvas to add a point" },
  { id: "segment", label: "Segment", hint: "Click two points" },
  { id: "circle", label: "Circle", hint: "Click the center, then a point on the circle" },
  { id: "angle", label: "Angle mark", hint: "Click the vertex (if it has more than two sides, then click the two arms)" },
  { id: "tick", label: "Tick", hint: "Click a segment (click again for a double tick)" },
  { id: "right", label: "Right angle", hint: "Click the vertex (if it has more than two sides, then click the two arms)" },
  { id: "label", label: "Label", hint: "Click a segment to label it" },
];

const KIND_KEY = { angle: "angles", tick: "ticks", rightAngle: "rightAngles", label: "labels", segment: "segments", circle: "circles" };

/**
 * Admin-only editor. Produces a figure spec; nothing here ships to students.
 *
 * Props
 *   initial   figure spec to start from (optional)
 *   onSave    (spec) => void — called when the admin presses Save
 */
export default function FigureBuilder({ initial, onSave }) {
  const [fig, setFigRaw] = React.useState(initial || figureTemplates["Triangle"]);
  const [history, setHistory] = React.useState([]);
  const [mode, setMode] = React.useState("select");
  const [pending, setPending] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [status, setStatus] = React.useState("");

  // every edit goes through here so undo works
  const setFig = (updater) => {
    setFigRaw((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      if (next !== prev) setHistory((h) => [...h.slice(-49), prev]);
      return next;
    });
  };
  const undo = () => {
    setHistory((h) => {
      if (!h.length) return h;
      setFigRaw(h[h.length - 1]);
      return h.slice(0, -1);
    });
    setSelected(null);
    setPending([]);
  };

  const changeMode = (m) => { setMode(m); setPending([]); setSelected(null); };

  // --- click handlers ------------------------------------------------------

  const onCanvasClick = (x, y) => {
    if (mode === "point") {
      setFig((f) => {
        const name = nextPointName(f.points);
        return { ...f, points: { ...f.points, [name]: [snap(x), snap(y)] } };
      });
    } else {
      setPending([]);
      setSelected(null);
    }
  };

  const onPointClick = (name) => {
    if (mode === "select") { setSelected({ kind: "point", name }); return; }
    if (mode === "point") return;
    if (pending.includes(name)) return;
    let next = [...pending, name];

    // Angle / right-angle: if the vertex has exactly two segments attached,
    // the arms are unambiguous, so draw it on the first click.
    if ((mode === "angle" || mode === "right") && next.length === 1) {
      const arms = fig.segments
        .filter((s) => s.from === name || s.to === name)
        .map((s) => (s.from === name ? s.to : s.from));
      if (arms.length === 2) next = [name, arms[0], arms[1]];
    }

    if (mode === "segment" && next.length === 2) {
      const seg = { from: next[0], to: next[1] };
      setFig((f) => (f.segments.some((s) => sameSegment(s, seg)) ? f : { ...f, segments: [...f.segments, seg] }));
      setPending([]);
      return;
    }
    if (mode === "circle" && next.length === 2) {
      setFig((f) => ({ ...f, circles: [...f.circles, { center: next[0], through: next[1] }] }));
      setPending([]);
      return;
    }
    if (mode === "angle" && next.length === 3) {
      setFig((f) => ({ ...f, angles: [...f.angles, { at: next[0], arms: [next[1], next[2]], label: "", arcs: 1 }] }));
      setSelected({ kind: "angle", index: fig.angles.length });
      setPending([]);
      return;
    }
    if (mode === "right" && next.length === 3) {
      setFig((f) => ({ ...f, rightAngles: [...f.rightAngles, { at: next[0], arms: [next[1], next[2]] }] }));
      setPending([]);
      return;
    }
    setPending(next);
  };

  const onSegmentClick = (i) => {
    if (mode === "select") { setSelected({ kind: "segment", index: i }); return; }
    const seg = fig.segments[i];
    if (mode === "tick") {
      setFig((f) => {
        const idx = f.ticks.findIndex((t) => sameSegment({ from: t.on[0], to: t.on[1] }, seg));
        if (idx === -1) return { ...f, ticks: [...f.ticks, { on: [seg.from, seg.to], count: 1 }] };
        const ticks = f.ticks.map((t, k) => (k === idx ? { ...t, count: (t.count % 3) + 1 } : t));
        return { ...f, ticks };
      });
    }
    if (mode === "label") {
      setFig((f) => ({ ...f, labels: [...f.labels, { text: "?", on: [seg.from, seg.to] }] }));
      setSelected({ kind: "label", index: fig.labels.length });
      setMode("select");
    }
  };

  const onCircleClick = (i) => { if (mode === "select") setSelected({ kind: "circle", index: i }); };
  const onItemClick = (kind, i) => { if (mode === "select") setSelected({ kind, index: i }); };

  const onPointDrag = (name, x, y) => {
    setFigRaw((f) => ({ ...f, points: { ...f.points, [name]: [snap(x), snap(y)] } }));
  };

  // --- edits from the properties panel -----------------------------------

  const updateItem = (kind, index, patch) => {
    const key = KIND_KEY[kind];
    setFig((f) => ({ ...f, [key]: f[key].map((it, k) => (k === index ? { ...it, ...patch } : it)) }));
  };

  const deleteSelected = React.useCallback(() => {
    if (!selected) return;
    if (selected.kind === "point") {
      setFig((f) => removePoint(f, selected.name));
    } else {
      const key = KIND_KEY[selected.kind];
      setFig((f) => ({ ...f, [key]: f[key].filter((_, k) => k !== selected.index) }));
    }
    setSelected(null);
  }, [selected]);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;
      if (e.key === "Delete" || e.key === "Backspace") { e.preventDefault(); deleteSelected(); }
      if (e.key === "Escape") { setPending([]); setSelected(null); }
      if ((e.metaKey || e.ctrlKey) && e.key === "z") { e.preventDefault(); undo(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deleteSelected]);

  const loadTemplate = (name) => {
    setFig(JSON.parse(JSON.stringify(figureTemplates[name])));
    setSelected(null); setPending([]);
  };

  const copyJson = async () => {
    try { await navigator.clipboard.writeText(JSON.stringify(fig)); setStatus("JSON copied"); }
    catch { setStatus("Copy failed — select the JSON below instead"); }
    setTimeout(() => setStatus(""), 2000);
  };

  const currentMode = MODES.find((m) => m.id === mode);
  const sel = selected && (selected.kind === "point" ? { name: selected.name } : fig[KIND_KEY[selected.kind]][selected.index]);

  // --- render -------------------------------------------------------------

  const btn = (active) => ({
    padding: "6px 10px", fontSize: 13, borderRadius: 6, cursor: "pointer",
    border: active ? "1.5px solid #2563eb" : "1px solid #d1d5db",
    background: active ? "#eff6ff" : "white", color: active ? "#1d4ed8" : "#374151",
  });
  const field = { width: "100%", padding: "6px 8px", fontSize: 13, border: "1px solid #d1d5db", borderRadius: 6, boxSizing: "border-box" };
  const lbl = { display: "block", fontSize: 12, color: "#6b7280", margin: "10px 0 4px" };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", color: "#111827", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", background: "white" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: 10, borderBottom: "1px solid #e5e7eb", alignItems: "center" }}>
        {MODES.map((m) => (
          <button key={m.id} style={btn(mode === m.id)} onClick={() => changeMode(m.id)}>{m.label}</button>
        ))}
        <span style={{ flex: 1 }} />
        <button style={btn(false)} onClick={undo} disabled={!history.length}>Undo</button>
        <button style={btn(false)} onClick={copyJson}>Copy JSON</button>
        {onSave && <button style={{ ...btn(true), background: "#2563eb", color: "white" }} onClick={() => onSave(fig)}>Save to question</button>}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 220px" }}>
        <div style={{ padding: 12, borderRight: "1px solid #e5e7eb" }}>
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 8, background: "white" }}>
            <Figure
              spec={fig} editable selected={selected} pending={pending}
              onCanvasClick={onCanvasClick} onPointClick={onPointClick}
              onSegmentClick={onSegmentClick} onCircleClick={onCircleClick}
              onItemClick={onItemClick} onPointDrag={onPointDrag}
            />
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 12, color: "#6b7280" }}>
            {currentMode.label}: {currentMode.hint}
            {pending.length ? ` — selected ${pending.join(", ")}` : ""}
            {status ? ` · ${status}` : ""}
          </p>
        </div>

        <div style={{ padding: 12, fontSize: 13 }}>
          {!selected && (
            <>
              <label style={lbl}>Start from template</label>
              <select style={field} value="" onChange={(e) => e.target.value && loadTemplate(e.target.value)}>
                <option value="">Choose…</option>
                {Object.keys(figureTemplates).map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <label style={{ ...lbl, display: "flex", alignItems: "center", gap: 6, marginTop: 14 }}>
                <input type="checkbox" checked={!!fig.notToScale} onChange={(e) => setFig((f) => ({ ...f, notToScale: e.target.checked }))} />
                Figure not drawn to scale
              </label>
              <p style={{ color: "#6b7280", marginTop: 16 }}>Click something on the canvas in Select mode to edit it.</p>
            </>
          )}

          {selected?.kind === "point" && (
            <>
              <p style={{ fontWeight: 500, margin: 0 }}>Point {selected.name}</p>
              <label style={lbl}>Name</label>
              <input
                key={selected.name}
                style={field}
                defaultValue={selected.name}
                maxLength={3}
                autoFocus
                onFocus={(e) => e.target.select()}
                onKeyDown={(e) => { if (e.key === "Enter") e.target.blur(); }}
                onBlur={(e) => {
                  const to = e.target.value.trim();
                  if (!to || to === selected.name) { e.target.value = selected.name; return; }
                  if (fig.points[to]) { e.target.value = selected.name; setStatus(`${to} is already used`); setTimeout(() => setStatus(""), 2000); return; }
                  setFig((f) => renamePoint(f, selected.name, to));
                  setSelected({ kind: "point", name: to });
                }}
              />
              <label style={lbl}>Position</label>
              <p style={{ margin: 0 }}>({fig.points[selected.name]?.join(", ")})</p>
            </>
          )}

          {selected?.kind === "angle" && sel && (
            <>
              <p style={{ fontWeight: 500, margin: 0 }}>Angle at {sel.at}</p>
              <label style={lbl}>Label</label>
              <input style={field} value={sel.label} placeholder="40° or x°" autoFocus
                onChange={(e) => updateItem("angle", selected.index, { label: e.target.value })} />
              <label style={lbl}>Arcs</label>
              <select style={field} value={sel.arcs || 1} onChange={(e) => updateItem("angle", selected.index, { arcs: Number(e.target.value) })}>
                <option value={1}>1</option><option value={2}>2</option><option value={3}>3</option>
              </select>
              <label style={lbl}>Arms</label>
              <p style={{ margin: 0 }}>{sel.at}{sel.arms[0]}, {sel.at}{sel.arms[1]}</p>
            </>
          )}

          {selected?.kind === "label" && sel && (
            <>
              <p style={{ fontWeight: 500, margin: 0 }}>Label on {sel.on.join("")}</p>
              <label style={lbl}>Text</label>
              <input style={field} value={sel.text} autoFocus onChange={(e) => updateItem("label", selected.index, { text: e.target.value })} />
            </>
          )}

          {selected?.kind === "tick" && sel && (
            <>
              <p style={{ fontWeight: 500, margin: 0 }}>Ticks on {sel.on.join("")}</p>
              <label style={lbl}>Count</label>
              <select style={field} value={sel.count} onChange={(e) => updateItem("tick", selected.index, { count: Number(e.target.value) })}>
                <option value={1}>1</option><option value={2}>2</option><option value={3}>3</option>
              </select>
            </>
          )}

          {selected?.kind === "segment" && sel && <p style={{ fontWeight: 500, margin: 0 }}>Segment {sel.from}{sel.to}</p>}
          {selected?.kind === "circle" && sel && <p style={{ fontWeight: 500, margin: 0 }}>Circle, center {sel.center}</p>}
          {selected?.kind === "rightAngle" && sel && <p style={{ fontWeight: 500, margin: 0 }}>Right angle at {sel.at}</p>}

          {selected && (
            <button style={{ ...btn(false), marginTop: 16, width: "100%", color: "#b91c1c" }} onClick={deleteSelected}>
              Delete (or press Delete)
            </button>
          )}
        </div>
      </div>

      <details style={{ borderTop: "1px solid #e5e7eb", padding: "8px 12px", fontSize: 12 }}>
        <summary style={{ cursor: "pointer", color: "#6b7280" }}>Figure JSON</summary>
        <textarea readOnly value={JSON.stringify(fig, null, 2)} style={{ width: "100%", height: 160, fontFamily: "ui-monospace, monospace", fontSize: 11, marginTop: 8, boxSizing: "border-box" }} />
      </details>
    </div>
  );
}



