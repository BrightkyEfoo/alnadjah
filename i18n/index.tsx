'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import NextLink from 'next/link';
import type { ComponentProps } from 'react';
import {
  DEFAULT_LOCALE,
  dirOf,
  isNonLocalizedPath,
  type Locale,
} from './config';
import { fr, type Messages } from './messages/fr';
import { en } from './messages/en';
import { ar } from './messages/ar';

const DICTIONARIES: Record<Locale, Messages> = { fr, en, ar };

interface I18nValue {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  t: Messages;
  /** Préfixe une route interne avec la locale courante (sauf routes app/auth). */
  href: (path: string) => string;
}

const I18nContext = createContext<I18nValue | undefined>(undefined);

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value = useMemo<I18nValue>(() => {
    const t = DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
    return {
      locale,
      dir: dirOf(locale),
      t,
      href: (path: string) => localizeHref(path, locale),
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n doit être utilisé dans <I18nProvider>');
  return ctx;
}

/** Raccourci : le dictionnaire de la langue courante. */
export function useT(): Messages {
  return useI18n().t;
}

export function useLocale(): Locale {
  return useI18n().locale;
}

/** `/agencies` -> `/ar/agencies`. Laisse intactes les URL externes, ancres et routes app. */
export function localizeHref(path: string, locale: Locale): string {
  if (!path.startsWith('/')) return path; // externe, mailto:, tel:, #ancre
  if (isNonLocalizedPath(path)) return path;
  return `/${locale}${path === '/' ? '' : path}`;
}

/**
 * `<Link>` conscient de la locale. À utiliser partout dans le site public à la
 * place de `next/link` : il préfixe automatiquement `/fr`, `/en` ou `/ar`.
 */
export function LocaleLink({
  href,
  ...props
}: Omit<ComponentProps<typeof NextLink>, 'href'> & { href: string }) {
  const { locale } = useI18n();
  return <NextLink href={localizeHref(href, locale)} {...props} />;
}

export type { Locale, Messages };
