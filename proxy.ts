import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale } from '@/i18n/config';
import { isValidLocale } from '@/lib/i18n';

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = pathname.split('/').some((segment) =>
    isValidLocale(segment)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale =
    request.headers.get('accept-language')?.split(',')[0]?.split('-')[0] ||
    defaultLocale;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;

  const newUrl = new URL(`/${validLocale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

