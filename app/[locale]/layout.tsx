import { notFound } from 'next/navigation';
import { I18nProvider } from '@/i18n';
import { LOCALES, isLocale, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/**
 * Segment de langue : /fr, /en, /ar. Injecte le dictionnaire côté client.
 * Le sens de lecture (dir="rtl" pour l'arabe) est posé sur <html> par le
 * layout racine, qui lit la locale depuis l'en-tête du middleware.
 */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <I18nProvider locale={locale as Locale}>{children}</I18nProvider>;
}

export const dynamicParams = false;
