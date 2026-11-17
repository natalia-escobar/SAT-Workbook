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

// ── Admin sidebar ──────────────────────────────────────────────────────
// Admins get a grouped menu. A group (has `children`) only opens and closes;
// a link (has `href`) goes to a page. To add a section later, add an entry
// here — e.g. another topic next to Parabola, or ACT next to SAT.
const isLessonPath = (p) =>
  !p.startsWith("/tutor") && !p.startsWith("/progress") && !p.startsWith("/admin");

const ADMIN_NAV = [
  {
    id: "curriculum", label: "Curriculum", icon: "ti-books",
    children: [
      { label: "Figure builder", href: "/admin/figures", match: (p) => p.startsWith("/admin/figures") },
    ],
  },
  {
    id: "lessons", label: "Lessons", icon: "ti-book",
    children: [
      {
        id: "sat", label: "SAT",
        children: [
          {
            id: "sat-math", label: "Math",
            children: [
              { label: "Parabola", href: "/", match: isLessonPath },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "management", label: "Management", icon: "ti-users",
    children: [
      { label: "Students", href: "/tutor", match: (p) => p.startsWith("/tutor") },
      { label: "Tutors", href: "/admin/classes", match: (p) => p.startsWith("/admin/classes") },
    ],
  },
];
const TOP_IDS = ADMIN_NAV.map((n) => n.id);

// ids of the groups that contain the link for the current page
function groupsForPath(nodes, pathname, trail = []) {
  for (const n of nodes) {
    if (n.children) {
      const found = groupsForPath(n.children, pathname, [...trail, n.id]);
      if (found) return found;
    } else if (n.match(pathname)) {
      return trail;
    }
  }
  return null;
}

export default function AppShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [me, setMe] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const showAnswers = useShowAnswers();
  // which admin groups are open. Everything starts closed on the home page;
  // on any other page the groups holding that page start open.
  const [openIds, setOpenIds] = useState(() =>
    pathname === "/" ? [] : groupsForPath(ADMIN_NAV, pathname) ?? []
  );

  const toggleGroup = (id) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      // only one top-level section open at a time
      const kept = TOP_IDS.includes(id) ? prev.filter((x) => !TOP_IDS.includes(x)) : prev;
      return [...kept, id];
    });
  };

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
  const inProgress = pathname.startsWith("/progress");
  const isAdmin = me.role === "admin";

  const renderAdminNav = (nodes, depth = 0) =>
    nodes.map((n) => {
      if (!n.children) {
        return (
          <Link
            key={n.href}
            href={n.href}
            className={`app-nav-link app-nav-sub ${n.match(pathname) ? "active" : ""}`}
            title={n.label}
          >
            <span>{n.label}</span>
          </Link>
        );
      }
      const open = openIds.includes(n.id);
      return (
        <div key={n.id} className="app-nav-section">
          <button
            type="button"
            className={`app-nav-link app-nav-group ${depth > 0 ? "app-nav-sub" : ""} ${open ? "open" : ""}`}
            onClick={() => toggleGroup(n.id)}
            aria-expanded={open}
            title={n.label}
          >
            {n.icon && <i className={`ti ${n.icon}`} />}
            <span>{n.label}</span>
            <i className="ti ti-chevron-right app-nav-chevron" />
          </button>
          {open && (
            <div className={`app-nav-children ${depth > 0 ? "nested" : ""}`}>
              {renderAdminNav(n.children, depth + 1)}
            </div>
          )}
        </div>
      );
    });

  const handleSignOut = async () => {
    await signOut();
    router.replace("/login");
    router.refresh();
  };

  return (
    <div className={`app-shell ${collapsed ? "collapsed" : ""}`}>
      <aside className={`app-sidebar ${isAdmin ? "has-tree" : ""}`}>
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

        {isAdmin ? (
          <nav className="app-nav app-nav-tree">{renderAdminNav(ADMIN_NAV)}</nav>
        ) : (
          <nav className="app-nav">
            <Link href="/" className={`app-nav-link ${!inTutorView && !inProgress ? "active" : ""}`} title="Workbooks">
              <i className="ti ti-book" />
              <span>Workbooks</span>
            </Link>
            {!isTutor && (
              <Link href="/progress" className={`app-nav-link ${inProgress ? "active" : ""}`} title="My progress">
                <i className="ti ti-chart-bar" />
                <span>My progress</span>
              </Link>
            )}
            {isTutor && (
              <Link href="/tutor" className={`app-nav-link ${inTutorView ? "active" : ""}`} title="My students">
                <i className="ti ti-users" />
                <span>My students</span>
              </Link>
            )}
          </nav>
        )}

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