import { clerkMiddleware } from '@clerk/nextjs/server';
 
export default clerkMiddleware();

// {
//   publicRoutes:['/browse'],
// }

// export default authMiddleware({
//   publicRoutes:['/browse'],
// });
 
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    '/(api|trpc)(.*)'], // Run middleware on API routes
};