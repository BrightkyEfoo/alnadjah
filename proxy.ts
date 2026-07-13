import { NextResponse, type NextRequest } from 'next/server';
import {
  DEFAULT_LOCALE,
  LOCALES,
  isLocale,
  isNonLocalizedPath,
  type Locale,
} from '@/i18n/config';

const LOCALE_COOKIE = 'alnadjah_locale';

/** En-tête interne lu par le layout racine pour rendre <html lang dir>. */
export const LOCALE_HEADER = 'x-alnadjah-locale';

/**
 * Routage i18n du site public (convention `proxy` de Next 16, ex-middleware) :
 * toute page marketing vit sous /<locale>/… ; `/` et `/agencies` sont
 * redirigés vers la locale préférée (cookie, puis Accept-Language, sinon
 * français). L'espace client (/app, /login…) et les assets ne sont pas touchés.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isNonLocalizedPath(pathname)) return NextResponse.next();

  const first = pathname.split('/')[1] ?? '';
  if (isLocale(first)) {
    // Déjà localisé : on expose la locale au layout racine (qui rend <html
    // lang dir> côté serveur) et on mémorise la langue choisie.
    const headers = new Headers(request.headers);
    headers.set(LOCALE_HEADER, first);
    const res = NextResponse.next({ request: { headers } });
    if (request.cookies.get(LOCALE_COOKIE)?.value !== first) {
      res.cookies.set(LOCALE_COOKIE, first, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
      });
    }
    return res;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

function preferredLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const header = request.headers.get('accept-language') ?? '';
  const wanted = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { tag: (tag ?? '').slice(0, 2).toLowerCase(), q: Number(q ?? 1) };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of wanted) {
    if ((LOCALES as readonly string[]).includes(tag)) return tag as Locale;
  }
  return DEFAULT_LOCALE;
}

export const config = {
  // Tout sauf les assets Next, l'API et les fichiers statiques (avec extension).
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
