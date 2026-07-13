import type { Metadata } from 'next';
import { headers } from 'next/headers';
import {
  Cormorant_Garamond,
  Manrope,
  Amiri,
  IBM_Plex_Sans_Arabic,
} from 'next/font/google';
import { Toaster } from 'sonner';
import NextTopLoader from 'nextjs-toploader';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { QueryProvider } from '@/lib/providers/QueryProvider';
import { SkinProvider } from '@/lib/providers/SkinProvider';
import { TenantMetaProvider } from '@/lib/providers/TenantMetaProvider';
import { DynamicFavicon } from '@/components/DynamicFavicon';
import { DEFAULT_LOCALE, dirOf, isLocale, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';
import './globals.css';

/**
 * Polices de la direction artistique "Andalus".
 *  - Cormorant Garamond   : titres latins (esprit calligraphié, contraste fort)
 *  - Manrope              : texte courant latin
 *  - Amiri                : titres arabes (naskh classique)
 *  - IBM Plex Sans Arabic : texte courant arabe
 * globals.css bascule automatiquement sur les polices arabes sous [dir='rtl'].
 */
const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display-latin',
});
const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body-latin',
});
const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-display-arabic',
});
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body-arabic',
});

export const metadata: Metadata = {
  title: 'Al-Nadjah Express — Envoi de colis express Douala · N’Djamena · Abidjan',
  description:
    'Rapidité, sécurité, fidélité. Al-Nadjah Express achemine vos colis entre le Cameroun, le Tchad et la Côte d’Ivoire. Douala → N’Djamena en 24 h, 2 500 F/kg.',
};

/** En-tête posé par le middleware : donne la langue au rendu serveur. */
const LOCALE_HEADER = 'x-alnadjah-locale';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerLocale = (await headers()).get(LOCALE_HEADER) ?? '';
  const locale: Locale = isLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;
  const dir = dirOf(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={cn(
        'skin-font-body',
        cormorant.variable,
        manrope.variable,
        amiri.variable,
        plexArabic.variable,
      )}
    >
      <body>
        <NextTopLoader
          color="var(--skin-primary)"
          height={3}
          showSpinner={false}
          shadow="0 0 12px var(--skin-glow)"
        />
        <NuqsAdapter>
          <QueryProvider>
            <TenantMetaProvider>
              <DynamicFavicon />
              <SkinProvider>{children}</SkinProvider>
            </TenantMetaProvider>
          </QueryProvider>
        </NuqsAdapter>
        <Toaster position={dir === 'rtl' ? 'top-left' : 'top-right'} richColors />
      </body>
    </html>
  );
}
