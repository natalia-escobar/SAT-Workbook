"use server";

// app/admin/classes/groupActions.js
// Admin-only changes to groups: create, rename, change who's in one, delete.
// A group belongs to one tutor and holds some of that tutor's students; a student can be
// in more than one group. Runs on the server with the SERVICE ROLE key, after checking
// the caller is an admin. The database has no browser-side write access to groups at all.

import { revalidatePath } from "next/cache";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { isAdmin } from "@/lib/access";

const service = () =>
  createServiceClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

const fail = (error) => ({ ok: false, error });
const refresh = () => {
  revalidatePath("/admin/classes");
  revalidatePath("/tutor");
};

/** Create a group (no id) or update one (id). `studentIds` is the full member list. */
export async function saveGroup({ id = null, tutorId = null, name, studentIds = [] }) {
  if (!(await isAdmin())) return fail("Only administrators can change groups.");

  const cleanName = String(name ?? "").trim().replace(/\s+/g, " ");
  if (!cleanName) return fail("Give the group a name.");
  if (cleanName.length > 60) return fail("Keep the group name under 60 characters.");
  const ids = [...new Set((studentIds ?? []).map(String))];

  const db = service();

  // Which tutor owns it. An existing group keeps its tutor.
  let ownerId = tutorId;
  if (id) {
    const { data: existing, error } = await db.from("groups").select("id, tutor_id").eq("id", id).maybeSingle();
    if (error) { console.error("saveGroup:", error.message); return fail("Couldn't read that group. Nothing was changed."); }
    if (!existing) return fail("That group no longer exists. Refresh the page.");
    ownerId = existing.tutor_id;
  }
  const { data: tutor } = await db
    .from("profiles").select("id").eq("id", ownerId).in("role", ["tutor", "admin"]).maybeSingle();
  if (!tutor) return fail("That tutor couldn't be found.");

  // One name per tutor, so two groups can't be confused.
  const { data: siblings, error: siblingError } = await db.from("groups").select("id, name").eq("tutor_id", ownerId);
  if (siblingError) {
    console.error("saveGroup:", siblingError.message);
    return fail("Couldn't read groups. Check that the groups SQL has been run in Supabase.");
  }
  if ((siblings ?? []).some((g) => g.id !== id && g.name.trim().toLowerCase() === cleanName.toLowerCase())) {
    return fail("This tutor already has a group with that name.");
  }

  // Every member must be one of this tutor's students.
  if (ids.length) {
    const { data: valid } = await db
      .from("profiles").select("id").in("id", ids).eq("role", "student").eq("tutor_id", ownerId);
    if ((valid ?? []).length !== ids.length) {
      return fail("Some of those students aren't with this tutor any more. Refresh the page and try again.");
    }
  }

  let groupId = id;
  if (id) {
    const { error } = await db.from("groups").update({ name: cleanName }).eq("id", id);
    if (error) { console.error("saveGroup:", error.message); return fail("Couldn't save the group. Nothing was changed."); }
  } else {
    const { data: created, error } = await db
      .from("groups").insert({ name: cleanName, tutor_id: ownerId }).select("id").single();
    if (error) { console.error("saveGroup:", error.message); return fail("Couldn't create the group."); }
    groupId = created.id;
  }

  // Add and remove only what changed, so existing members keep their original join date.
  const { data: current, error: currentError } = await db
    .from("group_members").select("student_id").eq("group_id", groupId);
  if (currentError) { console.error("saveGroup:", currentError.message); return fail("The group was saved, but its students couldn't be updated."); }
  const have = new Set((current ?? []).map((r) => r.student_id));
  const toAdd = ids.filter((x) => !have.has(x));
  const toRemove = [...have].filter((x) => !ids.includes(x));

  if (toRemove.length) {
    const { error } = await db.from("group_members").delete().eq("group_id", groupId).in("student_id", toRemove);
    if (error) { console.error("saveGroup:", error.message); refresh(); return fail("The group was saved, but some students couldn't be removed."); }
  }
  if (toAdd.length) {
    const { error } = await db
      .from("group_members").insert(toAdd.map((student_id) => ({ group_id: groupId, student_id })));
    if (error) { console.error("saveGroup:", error.message); refresh(); return fail("The group was saved, but some students couldn't be added."); }
  }

  refresh();
  return { ok: true };
}

/** Delete a group. Students and their saved work are not touched. */
export async function deleteGroup(id) {
  if (!(await isAdmin())) return fail("Only administrators can change groups.");
  const { error } = await service().from("groups").delete().eq("id", id);
  if (error) { console.error("deleteGroup:", error.message); return fail("Couldn't delete the group."); }
  refresh();
  return { ok: true };
}