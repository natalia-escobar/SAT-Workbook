// lib/supabase/proxy.js
// Runs on every request (see /proxy.js). Refreshes the login cookie so
// sessions don't silently expire, and bounces logged-out visitors to /login.

import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

// Pages anyone can see without logging in. Everything else requires a login.
const PUBLIC_PATHS = ["/login", "/signup"];
const PUBLIC_PREFIXES = ["/api/signup"];

// Everything under these paths is DDCUS-only: admins, tutors marked DDCUS, and their students.
// Any new page added under /classroom is locked automatically.
const DDCUS_PREFIXES = ["/classroom"];

export async function updateSession(request) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Do not remove: this call is what refreshes the session cookie.
  const { data: { user } } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const isPublic =
    PUBLIC_PATHS.includes(path) || PUBLIC_PREFIXES.some((p) => path.startsWith(p));

  // Logged out and trying to see anything private (including the home page) → login
  if (!isPublic && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = "";
    if (path !== "/") url.searchParams.set("next", path); // send them back after login
    return NextResponse.redirect(url);
  }

  // DDCUS pages: ask the database whether this person is allowed. Anyone else goes home.
  // If the check itself fails, we block (safer than letting everyone in).
  const isDdcus = DDCUS_PREFIXES.some((p) => path === p || path.startsWith(p + "/"));
  if (isDdcus && user) {
    const { data: allowed, error } = await supabase.rpc("has_ddcus_access");
    if (error) console.error("has_ddcus_access:", error.message);
    if (error || allowed !== true) {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      url.search = "";
      const redirect = NextResponse.redirect(url);
      response.cookies.getAll().forEach((c) => redirect.cookies.set(c)); // keep the refreshed session
      return redirect;
    }
  }

  // Logged in and visiting login/signup → home
  if (PUBLIC_PATHS.includes(path) && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return response;
}