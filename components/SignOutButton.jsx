"use client";
 
// components/SignOutButton.jsx
// Drop <SignOutButton /> anywhere (e.g. next to the back link in WorkbookView).
 
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/db";
 
export default function SignOutButton() {
  const router = useRouter();
  return (
    <button
      className="back-link"
      style={{ background: "none", border: 0, cursor: "pointer", float: "right" }}
      onClick={async () => {
        await signOut();
        router.replace("/login");
        router.refresh();
      }}
    >
      Sign out
    </button>
  );
}
