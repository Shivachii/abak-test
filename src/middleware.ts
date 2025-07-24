import { type Locale, locales } from "./lib/locales/locales";
import createMiddleware from "next-intl/middleware";
import { type NextRequest, type NextResponse } from "next/server";

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en" satisfies Locale,
  localePrefix: "never",
});

function intlMiddlewareHandler(req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export default intlMiddlewareHandler;

export const config = {
  matcher: ["/((?!api|_next|_vercel|studio|.*\\..*).*)"],
};
