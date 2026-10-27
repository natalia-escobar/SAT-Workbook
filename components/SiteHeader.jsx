"use client";

// components/SiteHeader.jsx
// Top bar on every page once logged in: name on the left, links + Sign out on the right.
// Tutors and admins also get a "My students" link. Hidden on /login and /signup.

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase, signOut } from "@/lib/db";

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [me, setMe] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { if (!cancelled) setMe(null); return; }
      const { data } = await supabase
        .from("profiles")
        .select("full_name, role")
        .eq("id", user.id)
        .single();
      if (!cancelled) setMe(data ?? { full_name: user.email, role: "student" });
    })();
    return () => { cancelled = true; };
  }, [pathname]);

  if (pathname === "/login" || pathname === "/signup" || !me) return null;

  const isTutor = me.role === "tutor" || me.role === "admin";
  const inTutorView = pathname.startsWith("/tutor");

  const handleSignOut = async () => {
    await signOut();
    router.replace("/login");
    router.refresh();
  };

  return (
    <header style={bar}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Link href="/" style={brand}>Beck Workbook</Link>
        {isTutor && (
          <nav style={{ display: "flex", gap: 16, fontSize: 14 }}>
            <Link href="/" style={navLink(!inTutorView)}>Workbooks</Link>
            <Link href="/tutor" style={navLink(inTutorView)}>My students</Link>
          </nav>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 14 }}>
        <span style={{ color: "#777" }}>
          {me.full_name}
          {isTutor && <span style={rolePill}>{me.role}</span>}
        </span>
        <button type="button" onClick={handleSignOut} style={signOutBtn}>
          Sign out
        </button>
      </div>
    </header>
  );
}

const bar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 20px",
  borderBottom: "0.5px solid #e0e0de",
  background: "#fff",
  position: "sticky",
  top: 0,
  zIndex: 50,
};

const brand = { fontWeight: 600, fontSize: 15, color: "#1a1a1a", textDecoration: "none" };

const navLink = (active) => ({
  color: active ? "#1a1a1a" : "#777",
  fontWeight: active ? 600 : 400,
  textDecoration: "none",
});

const rolePill = {
  marginLeft: 8,
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: ".04em",
  textTransform: "uppercase",
  padding: "2px 8px",
  borderRadius: 999,
  border: "0.5px solid #e0e0de",
  color: "#555",
};

const signOutBtn = {
  background: "none",
  border: "1.5px solid #e0e0de",
  borderRadius: 8,
  padding: "6px 14px",
  fontSize: 14,
  fontWeight: 600,
  color: "#1a1a1a",
  cursor: "pointer",
};
