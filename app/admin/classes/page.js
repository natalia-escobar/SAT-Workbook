// app/admin/classes/page.js
// Admin-only: turn DDCUS on/off per tutor, and move students between tutors.

import { redirect } from "next/navigation";
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

  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "20px" }}>Classes</h1>
      <AdminClasses owners={owners} students={students} />
    </main>
  );
}
