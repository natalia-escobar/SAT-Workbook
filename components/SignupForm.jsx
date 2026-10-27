"use client";

// components/SignupForm.jsx
// Student sign-up. The class code is checked on the server (app/api/signup/route.js),
// which creates the account and links it to the tutor who owns the code.

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/db";

export default function SignupForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [classCode, setClassCode] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");

    const cleanEmail = email.trim().toLowerCase();

    // 1. Ask the server to create the account (validates the class code).
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName: fullName.trim(), email: cleanEmail, password, classCode: classCode.trim() }),
    });
    const body = await res.json().catch(() => ({}));

    if (!res.ok) {
      setError(body.error || "Something went wrong. Please try again.");
      setBusy(false);
      return;
    }

    // 2. Sign them straight in.
    const { error: signInError } = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
    if (signInError) {
      // Account exists; just send them to the login page.
      router.replace("/login");
      return;
    }
    router.replace("/");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <label style={labelStyle}>
        Full name
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          autoComplete="name"
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
          autoComplete="new-password"
          style={inputStyle}
        />
        <span style={{ fontSize: 12, color: "#999" }}>At least 8 characters</span>
      </label>

      <label style={labelStyle}>
        Class code
        <input
          type="text"
          value={classCode}
          onChange={(e) => setClassCode(e.target.value.toUpperCase())}
          required
          autoComplete="off"
          autoCapitalize="characters"
          placeholder="From your tutor"
          style={{ ...inputStyle, letterSpacing: ".08em", textTransform: "uppercase" }}
        />
      </label>

      {error && <div style={{ color: "#A62D25", fontSize: 13 }}>{error}</div>}

      <button type="submit" disabled={busy} className="quiz-start-btn" style={{ marginTop: 8 }}>
        {busy ? "Creating account…" : "Create account"}
      </button>

      <p style={{ fontSize: 13, color: "#777", textAlign: "center", marginTop: 8 }}>
        Already have an account?{" "}
        <Link href="/login" style={{ color: "#1a1a1a", fontWeight: 600 }}>
          Sign in
        </Link>
      </p>
    </form>
  );
}

const labelStyle = { fontSize: 13, color: "#555", display: "flex", flexDirection: "column", gap: 4 };

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px 12px",
  border: "1.5px solid #e0e0de",
  borderRadius: 8,
  fontSize: 15,
};
