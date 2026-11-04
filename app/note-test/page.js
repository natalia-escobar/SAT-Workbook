"use client";
import { useEffect, useState } from "react";
import { getNotes } from "@/lib/db";
import QuestionNote from "@/components/QuestionNote";

export default function NoteTestPage() {
  const [notes, setNotes] = useState({});
  useEffect(() => { getNotes(["Par60053", "Par43269"]).then(setNotes); }, []);

  return (
    <main className="page" style={{ maxWidth: 600 }}>
      {["Par60053", "Par43269"].map((id) => (
        <div key={id} style={{ border: "0.5px solid #e0e0de", borderRadius: 10, padding: 16, marginBottom: 16 }}>
          <div>Fake question {id}</div>
          <QuestionNote questionId={id} initialBody={notes[id]?.body} />
        </div>
      ))}
    </main>
  );
}