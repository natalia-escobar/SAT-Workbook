// app/signup/page.js
import SignupForm from "@/components/SignupForm";

export const metadata = { title: "Sign up" };

export default function SignupPage() {
  return (
    <main className="page" style={{ maxWidth: 420, margin: "80px auto" }}>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 4 }}>Create your account</h1>
      <p style={{ color: "#777", fontSize: 14, marginBottom: 20 }}>
        You&apos;ll need the class code from your tutor.
      </p>
      <SignupForm />
    </main>
  );
}