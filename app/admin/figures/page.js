"use client";

// app/admin/figures/page.js
// Admin-only figure builder. Non-admins are sent back to the home page.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/db";
import FigureBuilder from "@/components/FigureBuilder";

export default function FiguresPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(null); // null = checking

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.replace("/login"); return; }
      const { data } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();
      const ok = data?.role === "admin";
      if (cancelled) return;
      if (!ok) { router.replace("/"); return; }
      setAllowed(true);
    })();
    return () => { cancelled = true; };
  }, [router]);

  if (!allowed) return null;

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 12px" }}>Figure builder</h1>
      <FigureBuilder onSave={(spec) => console.log(JSON.stringify(spec))} />
    </main>
  );
}