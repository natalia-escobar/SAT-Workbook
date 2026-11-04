"use client";

import { useState, useEffect, useRef } from "react";
import { saveNote } from "@/lib/db";

const MAX = 2000;

/**
 * One student note under a question box.
 *   questionId:  which question this note belongs to
 *   initialBody: the saved note from getNotes(), or undefined if none
 * Renders "+ note" when empty, the note as a footnote when there's text,
 * and a textarea while editing. Saves on blur and after a short pause.
 */
export default function QuestionNote({ questionId, initialBody, onSaved }) {
  const [body, setBody] = useState(initialBody ?? "");
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState("");   // "" | "saving" | "saved"
  const timer = useRef(null);
  const lastSaved = useRef(initialBody ?? "");
  const [open, setOpen] = useState(false);   

  // If the parent loads the note after first render, pick it up.
  useEffect(() => {
    if (initialBody !== undefined) {
      setBody(initialBody);
      lastSaved.current = initialBody;
    }
  }, [initialBody]);

  async function persist(text) {
    if (text === lastSaved.current) return;
    setStatus("saving");
    const { error } = await saveNote(questionId, text);
    if (!error) {
      lastSaved.current = text;
      onSaved?.(questionId, text);  
      setStatus("saved");
      setTimeout(() => setStatus(""), 1500);
    } else {
      setStatus("");
    }
  }

  function onChange(e) {
    const text = e.target.value.slice(0, MAX);
    setBody(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => persist(text), 800);
  }

  function onBlur() {
    clearTimeout(timer.current);
    persist(body);
    if (body.trim() === "") setEditing(false);
    else setEditing(false);
  }

  const link = {
    fontSize: "12px",
    color: "#999",
    cursor: "pointer",
    padding: "6px 0",
    display: "inline-block",
    userSelect: "none",
  };

  // Editing
  if (editing) {
    return (
      <div style={{ borderTop: "0.5px solid #e0e0de", marginTop: "12px", paddingTop: "8px" }}>
        <textarea
          autoFocus
          value={body}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="Write a note about this problem"
          rows={3}
          style={{
            width: "100%",
            fontSize: "13px",
            lineHeight: 1.6,
            padding: "8px 10px",
            border: "0.5px solid #b0b0ae",
            borderRadius: "8px",
            resize: "vertical",
            fontFamily: "inherit",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#999", marginTop: "4px" }}>
          <span>{status === "saving" ? "Saving…" : status === "saved" ? "Saved" : ""}</span>
          <span>{body.length}/{MAX}</span>
        </div>
      </div>
    );
  }

  // Empty
  if (body.trim() === "") {
    return (
      <div style={{ marginTop: "8px" }}>
        <span style={link} onClick={() => setEditing(true)}>+ note</span>
      </div>
    );
  }

    // Has a note
  return (
    <div style={{ borderTop: "0.5px solid #e0e0de", marginTop: "12px", paddingTop: "8px" }}>
      {open && (
        <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.6, margin: 0, whiteSpace: "pre-wrap" }}>
          {body}
        </p>
      )}
      <div style={{ display: "flex", gap: "16px" }}>
        <span style={link} onClick={() => setOpen((o) => !o)}>
          <i className={`ti ti-chevron-${open ? "up" : "down"}`} style={{ fontSize: "12px", marginRight: "4px" }} />
          {open ? "hide note" : "show note"}
        </span>
        {open && <span style={link} onClick={() => setEditing(true)}>edit note</span>}
      </div>
    </div>
  );
}