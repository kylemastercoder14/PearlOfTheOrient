import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Routes that must work without sign-in (e.g. chatbot)
const isPublicApiRoute = createRouteMatcher(["/api/chat"]);

export default clerkMiddleware(async (auth, req) => {
  // Allow /api/chat without auth so the Pearl Assistant works for all visitors
  if (isPublicApiRoute(req)) return;
  // Add auth.protect() here only for routes you want to require sign-in
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
