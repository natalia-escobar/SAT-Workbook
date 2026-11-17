// app/api/signup/route.js
// Server-only sign-up. Validates the class code, creates the auth user, and
// writes the profile linked to the tutor who owns that code.
//
// Uses the SERVICE ROLE key (bypasses row-level security) — it must only ever
// live in .env.local / Vercel env vars as SUPABASE_SERVICE_ROLE_KEY, never with
// a NEXT_PUBLIC_ prefix.

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const admin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

const bad = (message, status = 400) => NextResponse.json({ error: message }, { status });

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return bad("Invalid request.");
  }

  const clean = (v) => String(v ?? "").trim().replace(/\s+/g, " ");
  const firstName = clean(body.firstName);
  const lastName = clean(body.lastName);
  const fullName = `${firstName} ${lastName}`;
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");
  const classCode = String(body.classCode ?? "").trim().toUpperCase();

  if (!firstName) return bad("Please enter your first name.");
  if (!lastName) return bad("Please enter your last name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Please enter a valid email.");
  if (password.length < 8) return bad("Password must be at least 8 characters.");
  if (!classCode) return bad("Please enter your class code.");

  // 1. Find the tutor who owns this code.
  const { data: tutor } = await admin
    .from("profiles")
    .select("id")
    .eq("signup_code", classCode)
    .in("role", ["tutor", "admin"])
    .maybeSingle();
  if (!tutor) return bad("That class code isn't valid. Check with your tutor.");

  // 2. Stop a second account for the same student: same name, same class.
  const sameName = (a, b) =>
    String(a ?? "").trim().replace(/\s+/g, " ").toLowerCase() ===
    String(b ?? "").trim().replace(/\s+/g, " ").toLowerCase();
  const { data: classmates, error: classError } = await admin
    .from("profiles")
    .select("full_name")
    .eq("tutor_id", tutor.id)
    .eq("role", "student");
  if (classError) {
    console.error("signup duplicate check failed:", classError.message);
    return bad("Couldn't create the account. Please try again.", 500);
  }
  if ((classmates ?? []).some((c) => sameName(c.full_name, fullName))) {
    return bad("It looks like you already have an account in this class. Try signing in, or ask your tutor for help.", 409);
  }

  // 3. Create the auth user (auto-confirmed, no verification email).
  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName },
  });
  if (createError) {
    const msg = /already|exists|registered/i.test(createError.message)
      ? "An account with that email already exists. Try signing in."
      : "Couldn't create the account. Please try again.";
    return bad(msg, 409);
  }

  // 4. Create the profile, linked to the tutor. Always a student — roles are never self-chosen.
  const { error: profileError } = await admin.from("profiles").upsert({
    id: created.user.id,
    full_name: fullName,
    role: "student",
    tutor_id: tutor.id,
  });
  if (profileError) {
    // Don't leave a half-made account behind.
    await admin.auth.admin.deleteUser(created.user.id);
    console.error("signup profile insert failed:", profileError.message);
    return bad("Couldn't finish creating the account. Please try again.", 500);
  }

  return NextResponse.json({ ok: true });
}