"use client";
 
// components/LoginForm.jsx
// Email + password sign-in. Restyle freely; keep handleSubmit as is.
 
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/db";
 
export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/";
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
 
    const { error } = await supabase.auth.signInWithPassword({ email, password });
 
    if (error) {
      setError("That email or password didn't work.");
      setBusy(false);
      return;
    }
    router.replace(next);   // back to where they were headed
    router.refresh();       // let the proxy see the new cookie
  };
 
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <label style={{ fontSize: 13, color: "#555" }}>
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
 
      <label style={{ fontSize: 13, color: "#555" }}>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          style={inputStyle}
        />
      </label>
 
      {error && <div style={{ color: "#A62D25", fontSize: 13 }}>{error}</div>}
 
      <button type="submit" disabled={busy} className="nav-btn" style={{ marginTop: 8 }}>
        {busy ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
 
const inputStyle = {
  display: "block",
  width: "100%",
  marginTop: 4,
  padding: "10px 12px",
  border: "1.5px solid #e0e0de",
  borderRadius: 8,
  fontSize: 15,
};