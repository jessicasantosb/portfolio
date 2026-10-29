import { NextRequest, NextResponse } from "next/server";

const locales = ["pt", "en"];
const defaultLocale = "pt";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return NextResponse.next();

  const localizedUrl = request.nextUrl.clone();
  localizedUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(localizedUrl);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
