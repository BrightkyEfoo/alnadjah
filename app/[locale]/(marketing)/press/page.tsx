import type { Metadata } from 'next';
import { Mail, MessageCircle } from 'lucide-react';
import { MarketingContentPage } from '@/components/marketing/MarketingContentPage';
import type { Locale } from '@/i18n/config';
import { pressCopy } from '@/i18n/messages/pages/press';

const WHATSAPP_HREF = 'https://wa.me/23568888048';
const EMAIL = 'contact@alnadjah-express.com';

// `params` est typé `string` (contrat Next), puis restreint à `Locale` :
// la locale layout a déjà rejeté toute valeur inconnue via notFound().
type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const c = pressCopy[locale as Locale];
  return { title: c.meta.title, description: c.meta.description };
}

export default async function PressPage({ params }: Params) {
  const { locale } = await params;
  const c = pressCopy[locale as Locale];

  return (
    <MarketingContentPage eyebrow={c.eyebrow} title={c.title} intro={c.intro} wide>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden p-8 skin-card">
          <div
            aria-hidden
            className="absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil-strong"
            style={{ background: 'var(--skin-primary)' }}
          />
          <div className="relative">
            <h2
              className="text-2xl font-light tracking-tight skin-font-heading"
              style={{ color: 'var(--skin-foreground)' }}
            >
              {c.contactTitle}
            </h2>
            <div className="my-6 rule-gold" />
            <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
              {c.contactBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold skin-btn-primary"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {c.contactCta}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors"
                style={{
                  color: 'var(--skin-foreground)',
                  border: '1px solid var(--skin-border)',
                  borderRadius: 'var(--skin-radius)',
                }}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {c.contactWhatsapp}
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 cartouche">
          <h2
            className="text-2xl font-light tracking-tight skin-font-heading"
            style={{ color: 'var(--skin-foreground)' }}
          >
            {c.kitTitle}
          </h2>
          <div className="my-6 rule-gold" />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
            {c.kitBody}
          </p>
        </div>
      </section>

      <section className="mt-24">
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.factsTitle}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {c.facts.map((fact) => (
            <li key={fact} className="flex gap-4 p-6 cartouche">
              <span
                aria-hidden
                className="mt-2 h-2 w-2 shrink-0 rotate-45"
                style={{ background: 'var(--gold)' }}
              />
              <span className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                {fact}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-24">
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.releasesTitle}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {c.releases.map((release) => (
            <article key={release.title} className="relative overflow-hidden p-7 skin-card">
              {/* Chaque communiqué est une porte ouverte sur une ligne. */}
              <div
                aria-hidden
                className="absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil-strong"
                style={{ background: 'var(--skin-primary)' }}
              />
              <div className="relative">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: 'var(--gold)' }}
                >
                  {release.date}
                </p>
                <h3
                  className="mt-4 text-lg font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  {release.title}
                </h3>
                <div className="my-6 rule-gold" />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                  {release.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </MarketingContentPage>
  );
}
