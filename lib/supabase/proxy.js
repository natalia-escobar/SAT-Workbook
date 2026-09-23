// lib/supabase/proxy.js
// Runs on every request (see /proxy.js). Refreshes the login cookie so
// sessions don't silently expire, and bounces logged-out visitors to /login.
 
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
 
// Paths that require a login. Everything else stays public.
const PROTECTED_PREFIXES = ["/workbook", "/dashboard", "/admin"];
 
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
  const isProtected = PROTECTED_PREFIXES.some((p) => path.startsWith(p));
 
  if (isProtected && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", path);   // so we can send them back after login
    return NextResponse.redirect(url);
  }
 
  if (path === "/login" && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }
 
  return response;
}