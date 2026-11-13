// lib/access.js
// Server-only permission checks. Both ask the database, so they can't be faked from the browser.

import { createClient } from "@/lib/supabase/server";

/** True for admins, tutors marked DDCUS, and students of a DDCUS tutor. */
export async function hasDdcusAccess() {
  const supabase = await createClient();
  const { data, error } = await supabase.rpc("has_ddcus_access");
  if (error) { console.error("hasDdcusAccess:", error.message); return false; }
  return data === true;
}

/** True only if the logged-in user's profile role is admin. */
export async function isAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  const { data } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  return data?.role === "admin";
}
