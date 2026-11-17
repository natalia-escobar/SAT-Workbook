// app/admin/classes/page.js
// Admin-only: turn DDCUS on/off per tutor, move students between tutors, and delete students.

import { redirect } from "next/navigation";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { isAdmin } from "@/lib/access";
import AdminClasses from "@/components/AdminClasses";

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

  // Email and saved-answer count per student, so two accounts with the same name can be
  // told apart before one is deleted. Uses the service-role key; this page is admin-only
  // (checked above) and the key never reaches the browser.
  const db = createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
  const [userList, counts] = await Promise.all([
    db.auth.admin.listUsers({ page: 1, perPage: 1000 }),
    Promise.all(
      students.map(async (s) => {
        const { count, error: countError } = await db
          .from("events")
          .select("*", { count: "exact", head: true })
          .eq("student_id", s.id);
        return [s.id, countError ? null : count ?? 0];
      })
    ),
  ]);
  if (userList.error) console.error("admin/classes emails:", userList.error.message);
  const emailById = new Map((userList.data?.users ?? []).map((u) => [u.id, u.email]));
  const answersById = new Map(counts);

  const studentRows = students.map((s) => ({
    ...s,
    email: emailById.get(s.id) ?? null,
    answers: answersById.get(s.id) ?? null,
  }));

  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "20px" }}>Classes</h1>
      <AdminClasses owners={owners} students={studentRows} />
    </main>
  );
}