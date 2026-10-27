// app/tutor/layout.js
// Gate for everything under /tutor: must be logged in AND be a tutor or admin.
// Navigation lives in SiteHeader, so this only checks the role.
import { redirect } from "next/navigation";
import { getMyProfile } from "@/lib/tutor";

export const dynamic = "force-dynamic";

export default async function TutorLayout({ children }) {
  const me = await getMyProfile();
  if (!me) redirect("/login?next=/tutor");
  if (me.role !== "tutor" && me.role !== "admin") redirect("/");
  return children;
}