"use client";

// components/AppShell.jsx
// Wraps every page. When logged in, shows a left sidebar (brand, nav, account, sign out)
// and the page content beside it. The sidebar can collapse to an icon rail; the choice is
// remembered per browser. On /login and /signup (or logged out) it's just the content.

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase, signOut } from "@/lib/db";
import useShowAnswers, { setShowAnswers } from "@/lib/useShowAnswers";

const STORAGE_KEY = "sidebar-collapsed";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [me, setMe] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const showAnswers = useShowAnswers();

  // who's logged in
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

  // remembered collapse state
  useEffect(() => {
    try { setCollapsed(localStorage.getItem(STORAGE_KEY) === "1"); } catch {}
  }, []);

  const toggle = () => {
    setCollapsed((c) => {
      try { localStorage.setItem(STORAGE_KEY, c ? "0" : "1"); } catch {}
      return !c;
    });
  };

  const bare = pathname === "/login" || pathname === "/signup" || !me;
  if (bare) return <>{children}</>;

  const isTutor = me.role === "tutor" || me.role === "admin";
  const inTutorView = pathname.startsWith("/tutor");

  const handleSignOut = async () => {
    await signOut();
    router.replace("/login");
    router.refresh();
  };

  return (
    <div className={`app-shell ${collapsed ? "collapsed" : ""}`}>
      <aside className="app-sidebar">
        <div className="app-sidebar-top">
          <Link href="/" className="app-brand" title="Beck Workbook">
            <span className="app-brand-full">Beck Workbook</span>
            <span className="app-brand-short">B</span>
          </Link>
          <button
            type="button"
            className="app-toggle"
            onClick={toggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand" : "Collapse"}
          >
            <i className={`ti ${collapsed ? "ti-layout-sidebar-left-expand" : "ti-layout-sidebar-left-collapse"}`} />
          </button>
        </div>

        <nav className="app-nav">
          <Link href="/" className={`app-nav-link ${!inTutorView ? "active" : ""}`} title="Workbooks">
            <i className="ti ti-book" />
            <span>Workbooks</span>
          </Link>
          {isTutor && (
            <Link href="/tutor" className={`app-nav-link ${inTutorView ? "active" : ""}`} title="My students">
              <i className="ti ti-users" />
              <span>My students</span>
            </Link>
          )}
        </nav>

        {isTutor && (
          <button
            type="button"
            className={`app-switch ${showAnswers ? "on" : ""}`}
            onClick={() => setShowAnswers(!showAnswers)}
            role="switch"
            aria-checked={showAnswers}
            title={showAnswers ? "Answers shown — click to hide" : "Show answers in workbooks"}
          >
            <i className={`ti ${showAnswers ? "ti-eye" : "ti-eye-off"}`} />
            <span className="app-switch-label">Show answers</span>
            <span className="app-switch-track"><span className="app-switch-knob" /></span>
          </button>
        )}

        <div className="app-account">
          <div className="app-account-text">
            <div className="app-account-name">{me.full_name}</div>
            {isTutor && <div className="app-account-role">{me.role}</div>}
          </div>
          <button type="button" onClick={handleSignOut} className="app-signout" title="Sign out">
            <i className="ti ti-logout" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      <div className="app-main">{children}</div>
    </div>
  );
}
