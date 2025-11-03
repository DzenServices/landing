import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = pathname.replace(/^\/en(\/)?/, "/");
    if (newUrl.pathname === "") newUrl.pathname = "/";
    const params = new URLSearchParams(newUrl.search);
    params.set("lang", "en");
    newUrl.search = params.toString();
    const res = NextResponse.rewrite(newUrl);
    res.cookies.set("lang", "en", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  // For all non-/en paths, ensure cookie is set to ru for SSR html lang
  const res = NextResponse.next();
  res.cookies.set("lang", "ru", { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  // Run on all non-static asset paths to manage locale cookies and /en rewrites
  matcher: ["/((?!_next|.*\\..*).*)"],
};
