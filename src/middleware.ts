import { NextResponse, NextRequest } from "next/server";
import { fallbackLng, languages } from "./app/i18n/settings";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  // Check if the default locale is in the pathname
  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    // e.g. incoming request is /en/about
    // The new URL is now /about
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${fallbackLng}`,
          pathname === `/${fallbackLng}` ? "/" : ""
        ),
        request.url
      )
    );
  }

  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming request is /about
    // Tell Next.js it should pretend it's /en/about
    return NextResponse.rewrite(
      new URL(`/${fallbackLng}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Do not run the middleware on the following paths

  matcher:
    "/((?!api|_next/static|_next/image|manifest.json|assets|favicon.ico).*)",
};

// // NOT DISPLAYING AR AND ENG LANG, ONLY FR
// import { NextResponse, NextRequest } from "next/server";
// import { fallbackLng, languages } from "./app/i18n/settings";

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   // Check if the default locale is in the pathname
//   if (
//     languages.some((lang) => pathname.startsWith(`/${lang}/`)) ||
//     languages.some((lang) => pathname === `/${lang}`)
//   ) {
//     // Redirect to the same URL without the language prefix
//     return NextResponse.redirect(
//       new URL(
//         languages.reduce((acc, lang) => acc.replace(`/${lang}`, ""), pathname),
//         request.url
//       )
//     );
//   }

//   const pathnameIsMissingLocale = languages.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );

//   if (pathnameIsMissingLocale) {
//     // Rewrite URL to include the default language prefix
//     return NextResponse.rewrite(
//       new URL(`/${fallbackLng}${pathname}`, request.url)
//     );
//   }
// }

// export const config = {
//   // Do not run the middleware on the following paths
//   matcher:
//     "/((?!api|_next/static|_next/image|manifest.json|assets|favicon.ico).*)",
// };
