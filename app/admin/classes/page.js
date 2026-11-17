// app/admin/classes/page.js
// Admin-only "Tutors" screen: turn DDCUS on/off per tutor, group each tutor's students,
// move students between tutors, and delete students.

import { redirect } from "next/navigation";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { isAdmin } from "@/lib/access";
import AdminClasses from "@/components/AdminClasses";
import { fetchAllRows, countQuestionsAttempted } from "@/lib/tutor";

export default async function AdminClassesPage() {
  if (!(await isAdmin())) redirect("/");

  const supabase = await createClient();
  const { data: people, error } = await supabase
    .from("profiles")
    .select("id, full_name, role, tutor_id, signup_code, ddcus_access")
    .order("full_name");
  if (error) console.error("admin/classes:", error.message);

  const all = people ?? [];
  const owners = all.filter((p) => p.role === "tutor" || p.role === "admin");
  const students = all.filter((p) => p.role === "student");

  // Email and questions-attempted count per student (same count as My students), so two accounts with the same name can be
  // told apart before one is deleted. Uses the service-role key; this page is admin-only
  // (checked above) and the key never reaches the browser.
  const db = createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
  const studentIds = students.map((s) => s.id);
  const [userList, groupList, events] = await Promise.all([
    db.auth.admin.listUsers({ page: 1, perPage: 1000 }),
    db.from("groups").select("id, name, tutor_id, group_members(student_id)").order("name"),
    studentIds.length
      ? fetchAllRows(() =>
          db
            .from("events")
            .select("student_id, question_id, context")
            .in("student_id", studentIds)
            .eq("event_type", "answered")
            .order("created_at", { ascending: true })
        )
      : [],
  ]);
  if (userList.error) console.error("admin/classes emails:", userList.error.message);
  if (groupList.error) console.error("admin/classes groups:", groupList.error.message);
  const groups = (groupList.data ?? []).map((g) => ({
    id: g.id,
    name: g.name,
    tutor_id: g.tutor_id,
    studentIds: (g.group_members ?? []).map((m) => m.student_id),
  }));
  const emailById = new Map((userList.data?.users ?? []).map((u) => [u.id, u.email]));
  const rowsById = new Map();
  for (const e of events) {
    if (!rowsById.has(e.student_id)) rowsById.set(e.student_id, []);
    rowsById.get(e.student_id).push(e);
  }

  const studentRows = students.map((s) => ({
    ...s,
    email: emailById.get(s.id) ?? null,
    attempted: countQuestionsAttempted(rowsById.get(s.id) ?? []),
  }));

  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "20px" }}>Tutors</h1>
      <AdminClasses owners={owners} students={studentRows} groups={groups} />
    </main>
  );
}