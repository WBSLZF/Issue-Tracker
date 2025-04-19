import { NextResponse } from "next/server";

import authConfig from "../auth.config";
import NextAuth from "next-auth";

// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  // Public paths that don't require authentication
  const publicPaths = ["/login", "/api/auth", "/issues"];
  const specialPaths = ["/issues/newIssues"];
  // Check if the current path is public
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));
  const isSpecialPath = specialPaths.some((path) => pathname.startsWith(path));

  // Redirect to login if not authenticated and trying to access protected route
  if (!isLoggedIn && (!isPublicPath || isSpecialPath)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect to issues if authenticated user tries to access login
  if (isLoggedIn && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/issues", req.url));
  }

  return NextResponse.next();
});

// 配置匹配器，排除静态资源和 API 路由
export const config = {
  matcher: [
    /*
     * 匹配所有路径，除了:
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico (浏览器图标)
     * - public 文件夹中的文件
     * - api/auth (认证 API 路由)
     */
    "/((?!_next/static|_next/image|favicon.ico|public/|api/auth).*)",
  ],
};
