import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define your public routes
const isPublicRoute = createRouteMatcher([
  "/",
  "/pricing",
  "/api/webhook",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    // Protect all routes except the ones listed above
    await auth.protect();
  }
  // Public routes proceed as normal
});



export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

