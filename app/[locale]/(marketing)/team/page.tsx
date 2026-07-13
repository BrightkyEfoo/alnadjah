import type { Metadata } from 'next';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { LocaleLink } from '@/i18n';
import type { Locale } from '@/i18n/config';
import { teamCopy } from '@/i18n/messages/pages/team';

const WHATSAPP_HREF = 'https://wa.me/23568888048';

// `params` est typé `string` (contrat Next), puis restreint à `Locale` :
// la locale layout a déjà rejeté toute valeur inconnue via notFound().
type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const c = teamCopy[locale as Locale];
  return { title: c.meta.title, description: c.meta.description };
}

export default async function TeamPage({ params }: Params) {
  const { locale } = await params;
  const c = teamCopy[locale as Locale];

  return (
    <div className="pb-24">
      <header
        className="relative overflow-hidden py-20 sm:py-28"
        style={{ background: 'var(--skin-hero-1)' }}
      >
        <div aria-hidden className="absolute inset-0 pattern-girih motif-veil" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>
            {c.eyebrow}
          </span>
          <h1
            className="mt-5 text-4xl font-light tracking-tight skin-font-heading sm:text-5xl"
            style={{ color: '#FFFCF5' }}
          >
            {c.title}
          </h1>
          <div className="mx-auto mt-7 max-w-[16rem] rule-gold" />
          <p
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed"
            style={{ color: 'color-mix(in oklab, #FFFCF5 76%, transparent)' }}
          >
            {c.intro}
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.membersTitle}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {c.members.map((m) => (
            <article key={m.role} className="relative overflow-hidden p-7 skin-card">
              {/* Chaque poste est une porte du réseau : arc en filigrane. */}
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
                  {m.role}
                </p>
                <h3
                  className="mt-3 text-xl font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  {m.title}
                </h3>
                <div className="my-6 rule-gold" />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                  {m.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="relative overflow-hidden py-20 sm:py-24"
        style={{ background: 'var(--skin-hero-1)' }}
      >
        <div aria-hidden className="absolute inset-0 pattern-zellige motif-veil" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>
            {c.values.eyebrow}
          </span>
          <h2
            className="mt-5 text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
            style={{ color: '#FFFCF5' }}
          >
            {c.values.title}
          </h2>
          <div className="mx-auto mt-7 max-w-[16rem] rule-gold" />
          <p
            className="mt-7 text-base leading-relaxed"
            style={{ color: 'color-mix(in oklab, #FFFCF5 76%, transparent)' }}
          >
            {c.values.body}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.cta.title}
        </h2>
        <div className="mx-auto my-8 max-w-[16rem] rule-gold" />
        <p
          className="mx-auto max-w-xl text-base leading-relaxed"
          style={{ color: 'var(--skin-muted)' }}
        >
          {c.cta.body}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <LocaleLink
            href="/support"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold skin-btn-primary"
          >
            {c.cta.primary}
            <ArrowRight className="h-4 w-4 flip-rtl" aria-hidden />
          </LocaleLink>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition-colors"
            style={{
              color: 'var(--skin-foreground)',
              border: '1px solid var(--gold-soft)',
              borderRadius: 'var(--skin-radius)',
            }}
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {c.cta.secondary}
          </a>
        </div>
      </section>
    </div>
  );
}
