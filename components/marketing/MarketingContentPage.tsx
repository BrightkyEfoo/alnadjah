import type { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Élargit la colonne de contenu (grilles de cartes). Par défaut : colonne de lecture. */
  wide?: boolean;
  children?: ReactNode;
}

/**
 * Coquille commune des pages de contenu (blog, careers, press, docs,
 * api-docs) — habillage Andalus : bandeau d'émeraude couvert de girih, filet
 * d'or, frise de zellige en clôture, puis le contenu sur papier ivoire.
 *
 * Sans hook ni état : la coquille reste utilisable depuis un composant serveur.
 * Elle n'impose aucun style typographique à ses enfants (le projet n'a pas le
 * plugin `typography` de Tailwind) — chaque page habille son propre contenu.
 */
export function MarketingContentPage({ eyebrow, title, intro, wide, children }: Props) {
  return (
    <div className="pb-24">
      <header
        className="relative overflow-hidden"
        style={{ background: 'var(--skin-hero-1)' }}
      >
        <div aria-hidden className="absolute inset-0 pattern-girih motif-veil" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          {eyebrow && (
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>
              {eyebrow}
            </span>
          )}
          <h1
            className="mt-5 text-4xl font-light tracking-tight skin-font-heading sm:text-5xl"
            style={{ color: '#FFFCF5' }}
          >
            {title}
          </h1>
          <div className="mx-auto mt-7 max-w-[16rem] rule-gold" />
          {intro && (
            <p
              className="mx-auto mt-7 max-w-2xl text-base leading-relaxed"
              style={{ color: 'color-mix(in oklab, #FFFCF5 76%, transparent)' }}
            >
              {intro}
            </p>
          )}
        </div>

        <div
          aria-hidden
          className="h-2 pattern-zellige"
          style={{ background: 'color-mix(in oklab, var(--skin-hero-1) 70%, black)' }}
        />
      </header>

      <div
        className={`mx-auto px-4 pt-16 text-start sm:px-6 sm:pt-20 lg:px-8 ${
          wide ? 'max-w-6xl' : 'max-w-4xl'
        }`}
        style={{ color: 'var(--skin-foreground)' }}
      >
        {children}
      </div>
    </div>
  );
}
