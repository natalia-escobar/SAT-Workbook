// app/tutor/layout.js
// Gate for everything under /tutor: must be logged in AND be a tutor or admin.
import { redirect } from "next/navigation";
import Link from "next/link";
import { getMyProfile } from "@/lib/tutor";

export const dynamic = "force-dynamic";

export default async function TutorLayout({ children }) {
  const me = await getMyProfile();
  if (!me) redirect("/login?next=/tutor");
  if (me.role !== "tutor" && me.role !== "admin") redirect("/");

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          borderBottom: "0.5px solid #e0e0de",
          fontSize: "14px",
        }}
      >
        <Link href="/tutor" style={{ fontWeight: 600, color: "#1a1a1a", textDecoration: "none" }}>
          Tutor view
        </Link>
        <span style={{ color: "#777" }}>
          {me.full_name} · {me.role}
        </span>
      </div>
      {children}
    </>
  );
}