// app/progress/page.js — the logged-in student's own progress.
// Shows completion per workbook subtopic, quiz scores, and classroom work,
// each question marked right or wrong. Correct answers are never shown here.
import Link from "next/link";
import { redirect } from "next/navigation";
import { getMyReport } from "@/lib/tutor";
import quizzes from "@/data/quizzes";
import ProgressQuestionRow from "@/components/ProgressQuestionRow";

export const dynamic = "force-dynamic";

const fmtDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—";

const card = { border: "0.5px solid #e0e0de", borderRadius: 10, padding: "16px 20px", marginTop: 8 };
const h2 = { fontSize: 15, fontWeight: 600, margin: "32px 0 4px" };
const sub = { fontSize: 13, color: "#777", marginTop: 2 };

function Bar({ value, total }) {
  const pct = total ? Math.round((value / total) * 100) : 0;
  return (
    <div style={{ height: 6, borderRadius: 999, background: "#eeeeec", marginTop: 10, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: "#1a1a1a", transition: "width .3s" }} />
    </div>
  );
}

export default async function ProgressPage() {
  const report = await getMyReport();
  if (!report) redirect("/login?next=/progress");

  const { quizzes: taken, workbook, classroom } = report;

  // overall numbers
  const allAnswered = [...workbook, ...classroom].reduce((n, b) => n + b.attempted, 0)
    + taken.reduce((n, q) => n + q.questions.filter((x) => x.answered).length, 0);
  const allCorrect = [...workbook, ...classroom].reduce((n, b) => n + b.correct, 0)
    + taken.reduce((n, q) => n + q.score, 0);
  const pct = allAnswered ? Math.round((allCorrect / allAnswered) * 100) : 0;

  // every quiz that exists, whether taken or not
  const takenById = Object.fromEntries(taken.map((q) => [q.id, q]));
  const quizList = Object.values(quizzes).map((def) => ({ def, result: takenById[def.id] ?? null }));

  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 4 }}>My progress</h1>
      <p style={{ color: "#777", fontSize: 14 }}>
        {allAnswered} question{allAnswered === 1 ? "" : "s"} answered
        {allAnswered ? ` · ${pct}% correct` : ""}
      </p>

      {/* ── Quizzes ── */}
      <h2 style={h2}>Quizzes</h2>
      {quizList.length === 0 && <p style={{ color: "#777", fontSize: 14 }}>No quizzes yet.</p>}
      {quizList.map(({ def, result }) => (
        <div key={def.id} style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{def.title}</div>
              <div style={sub}>
                {result
                  ? `Taken ${fmtDate(result.takenAt)}${result.attemptCount > 1 ? ` · ${result.attemptCount} attempts` : ""}`
                  : "Not taken yet"}
              </div>
            </div>
            {result ? (
              <div style={{ fontSize: 22, fontWeight: 600 }}>
                {result.score}<span style={{ fontSize: 14, color: "#777", fontWeight: 400 }}> / {result.total}</span>
              </div>
            ) : (
              def.after && (
                <Link href={def.after.href.replace(/\/[^/]+$/, "/quiz")} className="nav-btn" style={{ textDecoration: "none" }}>
                  Take quiz
                </Link>
              )
            )}
          </div>
          {result && (
            <div style={{ marginTop: 10 }}>
              {result.questions.map((qq, i) => (
                <ProgressQuestionRow
                  key={qq.id}
                  question={qq}
                  left={<strong>Q{i + 1}</strong>}
                  middle={qq.answered ? `you answered ${qq.answer}` : "no answer"}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* ── Workbooks ── */}
      <h2 style={h2}>Workbooks</h2>
      {workbook.length === 0 && <p style={{ color: "#777", fontSize: 14 }}>You haven&apos;t answered any workbook questions yet.</p>}
      {workbook.map((b) => (
        <details key={b.subtopic} style={card}>
          <summary style={{ cursor: "pointer", listStyle: "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, textTransform: "capitalize" }}>
                  {b.subtopic.replace(/-/g, " ")}
                </div>
                <div style={sub}>
                  {b.attempted} of {b.total} answered · {b.correct} correct
                </div>
              </div>
              <div style={{ fontSize: 14, color: "#777" }}>{Math.round((b.attempted / b.total) * 100)}%</div>
            </div>
            <Bar value={b.attempted} total={b.total} />
          </summary>
          <div style={{ marginTop: 14 }}>
            {b.questions.map((qq) => (
              <ProgressQuestionRow
                key={qq.id}
                question={qq}
                left={
                  <span style={{ fontSize: 13, color: "#555" }}>
                    {qq.problem != null ? `Problem ${qq.problem}` : ""}{qq.type ? ` · ${qq.type}` : ""}
                  </span>
                }
                middle={fmtDate(qq.at)}
              />
            ))}
          </div>
        </details>
      ))}

      {/* ── Classroom ── */}
      <h2 style={h2}>Classroom</h2>
      {classroom.length === 0 && <p style={{ color: "#777", fontSize: 14 }}>No classroom activity yet.</p>}
      {classroom.map((l) => (
        <details key={l.lesson} style={card}>
          <summary style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "baseline", listStyle: "none" }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{l.lesson}</div>
              <div style={sub}>last active {fmtDate(l.lastActive)}</div>
            </div>
            <div style={{ fontSize: 14 }}>
              <strong>{l.correct}</strong><span style={{ color: "#777" }}> / {l.attempted} correct</span>
            </div>
          </summary>
          <div style={{ marginTop: 12 }}>
            {l.questions.map((qq, i) => (
              <ProgressQuestionRow
                key={qq.id}
                question={qq}
                left={<span style={{ fontSize: 13, color: "#555" }}><strong style={{ marginRight: 10 }}>{i + 1}.</strong>{qq.type ?? ""}</span>}
                middle={qq.answer ? `you answered ${qq.answer}` : fmtDate(qq.at)}
              />
            ))}
          </div>
        </details>
      ))}
    </main>
  );
}