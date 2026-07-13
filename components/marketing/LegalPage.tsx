import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { LocaleLink } from '@/i18n';

export interface LegalSection {
  heading: string;
  body: string;
  /** Puces facultatives : objets interdits, données collectées, cookies… */
  items?: readonly string[];
  /** Paragraphe de clôture, affiché après les puces et plus appuyé. */
  note?: string;
}

interface Props {
  eyebrow: string;
  title: string;
  intro: string;
  updatedLabel: string;
  updatedValue: string;
  sections: readonly LegalSection[];
  linksTitle?: string;
  links?: readonly { href: string; label: string }[];
  /** Bloc libre inséré avant les renvois (coordonnées, encarts…). */
  children?: ReactNode;
}

/**
 * Coquille des pages légales (CGV, confidentialité, cookies, mentions).
 *
 * Mise en page éditoriale "Andalus" : bandeau sombre au girih en filigrane,
 * puis un texte de loi en colonne étroite, chaque article séparé par un filet
 * d'or. Aucune classe physique (ml/pl/left…) : tout est logique pour que la
 * page se retourne telle quelle en arabe.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  updatedLabel,
  updatedValue,
  sections,
  linksTitle,
  links,
  children,
}: Props) {
  return (
    <article>
      <header
        className="relative overflow-hidden"
        style={{ background: 'var(--skin-hero-1)', color: '#FFFCF5' }}
      >
        <div aria-hidden className="absolute inset-0 pattern-girih motif-veil" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>
            {eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-light leading-[1.1] skin-font-heading sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p
            className="mt-6 max-w-2xl text-base leading-relaxed"
            style={{ color: 'color-mix(in oklab, #FFFCF5 72%, transparent)' }}
          >
            {intro}
          </p>

          <p
            className="mt-10 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: 'color-mix(in oklab, #FFFCF5 50%, transparent)' }}
          >
            {updatedLabel} · {updatedValue}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {sections.map((section, index) => (
          <section key={section.heading}>
            {index > 0 && <div aria-hidden className="my-14 rule-gold" />}

            <h2
              className="flex items-baseline gap-4 text-2xl font-light skin-font-heading sm:text-3xl"
              style={{ color: 'var(--skin-foreground)' }}
            >
              <span
                aria-hidden
                className="text-sm font-semibold tabular-nums"
                style={{ color: 'var(--gold)' }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{section.heading}</span>
            </h2>

            <p
              className="mt-5 max-w-2xl text-base leading-relaxed"
              style={{ color: 'var(--skin-muted)' }}
            >
              {section.body}
            </p>

            {section.items && (
              <ul className="mt-5 max-w-2xl space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-relaxed"
                    style={{ color: 'var(--skin-muted)' }}
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45"
                      style={{ background: 'var(--gold)' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.note && (
              <p
                className="mt-5 max-w-2xl text-base leading-relaxed"
                style={{ color: 'var(--skin-foreground)' }}
              >
                {section.note}
              </p>
            )}
          </section>
        ))}

        {children && <div className="mt-16">{children}</div>}

        {links && links.length > 0 && (
          <nav className="cartouche mt-16 p-6 sm:p-8">
            {linksTitle && <p className="eyebrow">{linksTitle}</p>}
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <LocaleLink
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-base"
                    style={{ color: 'var(--skin-primary)' }}
                  >
                    <ArrowRight className="h-4 w-4 shrink-0 flip-rtl" />
                    <span className="underline-offset-4 group-hover:underline">
                      {link.label}
                    </span>
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </article>
  );
}
