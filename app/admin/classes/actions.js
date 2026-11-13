"use server";

// app/admin/classes/actions.js
// The two changes an admin can make from /admin/classes. Each one re-checks that the
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