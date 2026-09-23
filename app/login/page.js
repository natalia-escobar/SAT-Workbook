// app/login/page.js
import { Suspense } from "react";
import LoginForm from "@/components/LoginForm";
 
export const metadata = { title: "Sign in" };
 
export default function LoginPage() {
  return (
    <main className="page" style={{ maxWidth: 420, margin: "80px auto" }}>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 20 }}>Sign in</h1>
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}