"use server";

// app/admin/classes/actions.js
// The changes an admin can make from /admin/classes. Each one re-checks that the
// caller is an admin, then writes with the service-role key (which never reaches the browser).

import { revalidatePath } from "next/cache";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { isAdmin } from "@/lib/access";

function serviceClient() {
  return createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}

async function getRole(db, id) {
  const { data } = await db.from("profiles").select("role").eq("id", id).single();
  return data?.role ?? null;
}

const isOwnerRole = (role) => role === "tutor" || role === "admin";

/** Turn DDCUS on or off for one tutor's (or admin's) class. */
export async function setDdcusAccess(ownerId, on) {
  if (!(await isAdmin())) return { ok: false, error: "Admins only." };
  const db = serviceClient();

  if (!isOwnerRole(await getRole(db, ownerId))) return { ok: false, error: "That account isn't a tutor." };

  const { error } = await db.from("profiles").update({ ddcus_access: on === true }).eq("id", ownerId);
  if (error) return { ok: false, error: error.message };

  revalidatePath("/admin/classes");
  return { ok: true };
}

/** Move one student to a different tutor. Their DDCUS access follows the new tutor. */
export async function moveStudent(studentId, newTutorId) {
  if (!(await isAdmin())) return { ok: false, error: "Admins only." };
  const db = serviceClient();

  if ((await getRole(db, studentId)) !== "student") return { ok: false, error: "That account isn't a student." };
  if (!isOwnerRole(await getRole(db, newTutorId))) return { ok: false, error: "That account isn't a tutor." };

  const { error } = await db.from("profiles").update({ tutor_id: newTutorId }).eq("id", studentId);
  if (error) return { ok: false, error: error.message };

  revalidatePath("/admin/classes");
  return { ok: true };
}
/** Permanently delete one student: their saved answers, their notes, their profile, and their login. */
export async function deleteStudent(studentId) {
  if (!(await isAdmin())) return { ok: false, error: "Admins only." };
  const db = serviceClient();

  if ((await getRole(db, studentId)) !== "student") {
    return { ok: false, error: "Only student accounts can be deleted here." };
  }

  // Answers and notes are stored under the student's id as text, so nothing removes
  // them automatically. Clear them first, then the profile, then the login itself.
  for (const table of ["events", "notes"]) {
    const { error } = await db.from(table).delete().eq("student_id", studentId);
    if (error) {
      return { ok: false, error: `Couldn't clear this student's ${table}, so the account was left in place. (${error.message})` };
    }
  }

  const { error: profileError } = await db.from("profiles").delete().eq("id", studentId);
  if (profileError) {
    return { ok: false, error: `Couldn't remove the profile, so the login was left in place. (${profileError.message})` };
  }

  const { error: authError } = await db.auth.admin.deleteUser(studentId);
  if (authError) {
    return {
      ok: false,
      error: `The student's work and profile were removed, but the login itself couldn't be deleted. Remove it in Supabase under Authentication > Users. (${authError.message})`,
    };
  }

  revalidatePath("/admin/classes");
  revalidatePath("/tutor");
  return { ok: true };
}