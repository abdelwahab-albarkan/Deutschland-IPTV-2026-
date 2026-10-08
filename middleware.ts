import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "./data/i18n/types";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, next internals, api, images, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".") || // files like favicon.ico, sitemap.xml, robots.txt, txt verification files
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  // Wrong-case locale (/DE, /En/preise) -> canonical lowercase locale
  const firstSeg = pathname.split("/")[1] || "";
  const lowerSeg = firstSeg.toLowerCase();
  if (firstSeg !== lowerSeg && SUPPORTED_LOCALES.some((l) => l === lowerSeg)) {
    const fixed = request.nextUrl.clone();
    fixed.pathname = `/${lowerSeg}${pathname.slice(firstSeg.length + 1)}`;
    return NextResponse.redirect(fixed, 308);
  }

  // Check if pathname starts with any supported locale
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to default locale (/de/...)
  const targetUrl = new URL(`/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`, request.url);
  targetUrl.search = request.nextUrl.search;
  return NextResponse.redirect(targetUrl, 308); // 308 permanent redirect for SEO preservation
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
