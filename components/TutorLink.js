// components/TutorLink.js
// Shows a "My students" card on the home page, only for tutors and admins.
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/db";

export default function TutorLink() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from("profiles").select("role").eq("id", user.id).single();
      if (!cancelled) setRole(data?.role ?? null);
    })();
    return () => { cancelled = true; };
  }, []);

  if (role !== "tutor" && role !== "admin") return null;

  return (
    <Link
      href="/tutor"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px",
        border: "0.5px solid #1a1a1a",
        borderRadius: "10px",
        textDecoration: "none",
        color: "#1a1a1a",
        marginBottom: "24px",
      }}
    >
      <div>
        <div style={{ fontSize: "16px", fontWeight: 600 }}>My students</div>
        <div style={{ fontSize: "13px", color: "#777", marginTop: "2px" }}>
          Quiz results and workbook progress
        </div>
      </div>
      <i className="ti ti-arrow-right" style={{ fontSize: "18px" }} />
    </Link>
  );
}