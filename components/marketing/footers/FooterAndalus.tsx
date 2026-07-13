'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import { useI18n, LocaleLink } from '@/i18n';
import { LanguageSwitcher } from '@/components/marketing/LanguageSwitcher';

const WHATSAPP = '+235 68 88 80 48';
const DOUALA_PHONE = '+237 6 88 39 56 08';
const EMAIL = 'contact@alnadjah-express.com';

/**
 * Pied de page "Andalus" : mur d'émeraude couvert de girih, colophon d'or,
 * frise de zellige en clôture — la façade se referme comme elle s'est ouverte.
 */
export function FooterAndalus() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t.footer.company,
      links: [
        { href: '/about', label: t.footer.links.about },
        { href: '/agencies', label: t.nav.agencies },
        { href: '/team', label: t.footer.links.team },
        { href: '/support', label: t.footer.links.contact },
      ],
    },
    {
      title: t.footer.services,
      links: [
        { href: '/simulateur', label: t.nav.simulator },
        { href: '/track', label: t.nav.track },
        { href: '/#routes', label: t.nav.routes },
        { href: '/#gallery', label: t.nav.gallery },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { href: '/cgv', label: t.footer.links.cgv },
        { href: '/privacy', label: t.footer.links.privacy },
        { href: '/cookies', label: t.footer.links.cookies },
        { href: '/legal', label: t.footer.links.legal },
      ],
    },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'var(--skin-hero-1)', color: '#FFFCF5' }}
    >
      <div aria-hidden className="absolute inset-0 pattern-girih motif-veil" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,0.8fr)]">
          <div>
            <p
              className="text-2xl font-semibold skin-font-heading"
              style={{ color: '#FFFCF5' }}
            >
              Al-Nadjah <span style={{ color: 'var(--gold)' }}>Express</span>
            </p>
            <p
              className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em]"
              style={{ color: 'var(--gold)' }}
            >
              {t.brand.motto}
            </p>
            <p
              className="mt-6 max-w-sm text-sm leading-relaxed"
              style={{ color: 'color-mix(in oklab, #FFFCF5 68%, transparent)' }}
            >
              {t.footer.about}
            </p>
            <div className="mt-8">
              <LanguageSwitcher tone="dark" />
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: 'var(--gold)' }}
              >
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <LocaleLink
                      href={l.href}
                      className="text-sm transition-opacity hover:opacity-100"
                      style={{ color: 'color-mix(in oklab, #FFFCF5 70%, transparent)' }}
                    >
                      {l.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-12 rule-gold" />

        <div className="grid gap-6 text-sm sm:grid-cols-3">
          <p className="flex items-center gap-3">
            <MapPin className="h-4 w-4 shrink-0" style={{ color: 'var(--gold)' }} />
            <span style={{ color: 'color-mix(in oklab, #FFFCF5 75%, transparent)' }}>
              {t.footer.douala} · {t.footer.ndjamena}
            </span>
          </p>
          <p className="flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0" style={{ color: 'var(--gold)' }} />
            <span dir="ltr" style={{ color: 'color-mix(in oklab, #FFFCF5 75%, transparent)' }}>
              {WHATSAPP} · {DOUALA_PHONE}
            </span>
          </p>
          <p className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0" style={{ color: 'var(--gold)' }} />
            <a
              href={`mailto:${EMAIL}`}
              dir="ltr"
              className="transition-opacity hover:opacity-100"
              style={{ color: 'color-mix(in oklab, #FFFCF5 75%, transparent)' }}
            >
              {EMAIL}
            </a>
          </p>
        </div>

        <p
          className="mt-12 text-xs"
          style={{ color: 'color-mix(in oklab, #FFFCF5 45%, transparent)' }}
        >
          © {year} Al-Nadjah Express. {t.footer.rights}
        </p>
      </div>

      <div
        aria-hidden
        className="h-3 pattern-zellige"
        style={{ background: 'color-mix(in oklab, var(--skin-hero-1) 70%, black)' }}
      />
    </footer>
  );
}
