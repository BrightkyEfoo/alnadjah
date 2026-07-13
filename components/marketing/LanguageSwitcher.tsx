'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, Check } from 'lucide-react';
import { useI18n } from '@/i18n';
import { LOCALES, LOCALE_LABELS, isLocale, type Locale } from '@/i18n/config';

/**
 * Sélecteur de langue FR / EN / AR. Change la locale du chemin courant
 * (/fr/agencies -> /ar/agencies) : le middleware mémorise le choix dans un
 * cookie, et le layout racine bascule <html lang dir> — l'arabe passe donc
 * tout le site en RTL.
 */
export function LanguageSwitcher({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const { locale } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const switchTo = (next: Locale) => {
    const segments = pathname.split('/');
    // segments[0] est vide (chemin absolu), segments[1] est la locale courante.
    if (isLocale(segments[1] ?? '')) segments[1] = next;
    else segments.splice(1, 0, next);
    setOpen(false);
    router.push(segments.join('/') || `/${next}`);
    router.refresh();
  };

  const color = tone === 'dark' ? '#FFFCF5' : 'var(--skin-foreground)';

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-semibold tracking-wider uppercase transition-opacity hover:opacity-70"
        style={{ color }}
      >
        <Globe className="h-4 w-4" />
        {LOCALE_LABELS[locale].short}
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />
          <ul
            role="listbox"
            className="absolute end-0 z-50 mt-2 min-w-[11rem] overflow-hidden py-1 cartouche"
            style={{ boxShadow: 'var(--skin-shadow)' }}
          >
            {LOCALES.map((l) => (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l === locale}
                  onClick={() => switchTo(l)}
                  lang={l}
                  dir={l === 'ar' ? 'rtl' : 'ltr'}
                  className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-[color-mix(in_oklab,var(--skin-primary)_8%,transparent)]"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  <span>{LOCALE_LABELS[l].native}</span>
                  {l === locale ? (
                    <Check className="h-3.5 w-3.5" style={{ color: 'var(--gold)' }} />
                  ) : (
                    <span
                      className="text-[0.65rem] font-bold tracking-widest"
                      style={{ color: 'var(--skin-muted)' }}
                    >
                      {LOCALE_LABELS[l].short}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
