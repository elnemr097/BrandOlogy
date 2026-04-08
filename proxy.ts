import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const locale = request.cookies.get("locale")?.value ?? "ar";
  const validLocale = ["ar", "en"].includes(locale) ? locale : "ar";

  // Clone the request headers and add the locale header so server components can read it
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-next-intl-locale", validLocale);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("x-next-intl-locale", validLocale);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
