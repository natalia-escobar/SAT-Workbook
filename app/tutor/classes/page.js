// app/tutor/classes/page.js — Class history.
// Tutors see and fix their own classes; admins see everyone's.
import Link from "next/link";
import { redirect } from "next/navigation";
import { getClassHistory } from "@/lib/classHistory";
import ClassHistory from "@/components/ClassHistory";

export const dynamic = "force-dynamic";

export default async function ClassHistoryPage() {
  const history = await getClassHistory();
  if (!history) redirect("/");

  return (
    <main className="page">
      <Link href="/tutor" style={{ fontSize: 13, color: "#777", textDecoration: "none" }}>
        &larr; {history.me.isAdmin ? "All students" : "Students"}
      </Link>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, margin: "8px 0 12px" }}>Class history</h1>
      <ClassHistory {...history} />
    </main>
  );
}