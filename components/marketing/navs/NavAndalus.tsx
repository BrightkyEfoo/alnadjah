'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { useI18n, LocaleLink } from '@/i18n';
import { useTenantMeta } from '@/lib/providers/TenantMetaProvider';
import { BrandLogo } from '@/components/marketing/BrandLogo';
import { LanguageSwitcher } from '@/components/marketing/LanguageSwitcher';

const WHATSAPP = '+235 68 88 80 48';
const WHATSAPP_HREF = 'https://wa.me/23568888048';

/**
 * Nav "Andalus" : bandeau de zellige doré en tête, barre ivoire, mot-symbole
 * calligraphié. Pas de glassmorphism, pas de blur — un en-tête de papier,
 * tenu par un filet d'or.
 */
export function NavAndalus() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const { meta } = useTenantMeta();
  const hasLogo = Boolean(meta?.logoUrl?.trim());

  const links = [
    { href: '/#routes', label: t.nav.routes },
    { href: '/#services', label: t.nav.services },
    { href: '/#gallery', label: t.nav.gallery },
    { href: '/agencies', label: t.nav.agencies },
    { href: '/simulateur', label: t.nav.simulator },
    { href: '/track', label: t.nav.track },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Bandeau de zellige : la frise qui court en haut d'un portail. */}
      <div
        aria-hidden
        className="h-2 pattern-zellige"
        style={{ background: 'var(--skin-hero-1)' }}
      />

      <div
        className="border-b"
        style={{
          background: 'color-mix(in oklab, var(--skin-surface) 94%, transparent)',
          backdropFilter: 'blur(6px)',
          borderColor: 'var(--skin-border)',
        }}
      >
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <LocaleLink href="/" className="flex items-center gap-3">
            {hasLogo ? (
              <BrandLogo className="h-11 w-auto max-w-[190px] object-contain" />
            ) : (
              <span className="flex flex-col leading-none">
                <span
                  className="text-xl font-semibold tracking-tight skin-font-heading sm:text-2xl"
                  style={{ color: 'var(--skin-primary)' }}
                >
                  Al-Nadjah <span style={{ color: 'var(--gold)' }}>Express</span>
                </span>
                <span
                  className="mt-1 hidden text-[0.6rem] font-semibold whitespace-nowrap uppercase tracking-[0.24em] sm:block"
                  style={{ color: 'var(--skin-muted)' }}
                >
                  {t.brand.motto}
                </span>
              </span>
            )}
          </LocaleLink>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <LocaleLink
                  href={l.href}
                  className="relative text-sm font-medium whitespace-nowrap transition-colors hover:text-(--skin-primary)"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  {l.label}
                </LocaleLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 px-3 py-2 text-sm font-medium xl:inline-flex"
              style={{ color: 'var(--skin-foreground)' }}
            >
              <Phone className="h-4 w-4" style={{ color: 'var(--gold)' }} />
              <span dir="ltr">{WHATSAPP}</span>
            </a>

            <LanguageSwitcher />

            <Link
              href="/login"
              className="hidden whitespace-nowrap px-4 py-2.5 text-sm font-medium md:inline-flex skin-btn-ghost"
            >
              {t.common.login}
            </Link>
            <LocaleLink
              href="/track"
              className="inline-flex items-center whitespace-nowrap px-4 py-2.5 text-sm font-semibold skin-btn-primary"
            >
              {t.nav.track}
            </LocaleLink>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="ms-1 inline-flex p-2.5 lg:hidden skin-btn-ghost"
              aria-label={open ? t.common.close : t.common.menu}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div
          className="border-b px-4 py-4 lg:hidden"
          style={{
            background: 'var(--skin-surface)',
            borderColor: 'var(--skin-border)',
          }}
        >
          {links.map((l) => (
            <LocaleLink
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium"
              style={{ color: 'var(--skin-foreground)' }}
            >
              {l.label}
            </LocaleLink>
          ))}
          <div className="my-3 rule-gold" />
          <Link
            href="/login"
            className="block py-2.5 text-sm font-medium"
            style={{ color: 'var(--skin-primary)' }}
          >
            {t.common.login}
          </Link>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2.5 text-sm font-medium"
            style={{ color: 'var(--skin-foreground)' }}
            dir="ltr"
          >
            {WHATSAPP}
          </a>
        </div>
      )}
    </header>
  );
}
