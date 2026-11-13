// app/page.js
// Home page. Checks DDCUS access on the server, then hands the menu to HomeMenu.

import HomeMenu from "@/components/HomeMenu";
import { hasDdcusAccess } from "@/lib/access";

export default async function Home() {
  const showDdcus = await hasDdcusAccess();
  return <HomeMenu showDdcus={showDdcus} />;
}
