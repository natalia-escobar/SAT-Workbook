// proxy.js  (project root, next to package.json)
// Next.js 16 runs this before every route. It just hands off to updateSession.
 
import { updateSession } from "@/lib/supabase/proxy";
 
export async function proxy(request) {
  return await updateSession(request);
}
 
export const config = {
  matcher: [
    // Run on everything except static files and images
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2?)$).*)",
  ],
};