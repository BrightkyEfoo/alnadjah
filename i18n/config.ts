/**
 * Configuration i18n du site public Al-Nadjah Express.
 *
 * Trois langues : français (défaut), anglais, arabe. L'arabe passe la page
 * entière en RTL (`dir="rtl"` sur <html>), avec ses propres polices.
 *
 * Les URL sont préfixées par la locale : /fr/agencies, /en/agencies,
 * /ar/agencies. Le middleware redirige `/` -> `/fr`. Les routes applicatives
 * (login, dashboard) restent hors i18n — voir NON_LOCALIZED_PREFIXES.
 */

export const LOCALES = ['fr', 'en', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

/** Locales dont le sens de lecture est droite-à-gauche. */
export const RTL_LOCALES: readonly Locale[] = ['ar'];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function dirOf(locale: Locale): 'ltr' | 'rtl' {
  return RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
}

export const LOCALE_LABELS: Record<Locale, { native: string; short: string }> = {
  fr: { native: 'Français', short: 'FR' },
  en: { native: 'English', short: 'EN' },
  ar: { native: 'العربية', short: 'AR' },
};

/**
 * Préfixes de routes qui NE reçoivent PAS de locale (espace client et admin :
 * ils restent en français). `LocaleLink` les laisse passer tels quels et le
 * middleware ne les touche pas.
 */
export const NON_LOCALIZED_PREFIXES = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/app',
  '/studio',
] as const;

export function isNonLocalizedPath(pathname: string): boolean {
  return NON_LOCALIZED_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
}
