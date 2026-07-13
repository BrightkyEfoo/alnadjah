import type { Metadata } from 'next';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { LocaleLink } from '@/i18n';
import type { Locale } from '@/i18n/config';
import { aboutCopy } from '@/i18n/messages/pages/about';

const WHATSAPP_HREF = 'https://wa.me/23568888048';

// `params` est typé `string` (contrat Next), puis restreint à `Locale` :
// la locale layout a déjà rejeté toute valeur inconnue via notFound().
type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const c = aboutCopy[locale as Locale];
  return { title: c.meta.title, description: c.meta.description };
}

export default async function AboutPage({ params }: Params) {
  const { locale } = await params;
  const c = aboutCopy[locale as Locale];

  return (
    <div className="pb-24">
      {/* Bandeau d'émeraude, girih en filigrane : la façade de la maison. */}
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

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="eyebrow">{c.mission.eyebrow}</span>
        <h2
          className="mt-4 text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.mission.title}
        </h2>
        <div className="my-8 max-w-[16rem] rule-gold" />
        <p className="text-base leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
          {c.mission.body}
        </p>
        <p
          className="mt-6 text-lg leading-relaxed skin-font-heading"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.mission.body2}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <span className="eyebrow">{c.lines.eyebrow}</span>
        <h2
          className="mt-4 text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.lines.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {c.lines.items.map((line) => (
            <article key={line.route} className="relative overflow-hidden p-7 skin-card">
              <div
                aria-hidden
                className="absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil-strong"
                style={{ background: 'var(--skin-primary)' }}
              />
              <div className="relative">
                <p
                  className="text-lg font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  {line.route}
                </p>
                <p
                  className="mt-6 text-3xl font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-primary)' }}
                >
                  {line.price}
                </p>
                <div className="my-6 rule-gold" />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                  {line.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* La devise : trois piliers sur l'émeraude. */}
      <section
        className="relative overflow-hidden py-20 sm:py-24"
        style={{ background: 'var(--skin-hero-1)' }}
      >
        <div aria-hidden className="absolute inset-0 pattern-zellige motif-veil" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {c.values.items.map((v) => (
              <div key={v.title} className="text-center">
                <h3
                  className="text-xl font-semibold skin-font-heading"
                  style={{ color: 'var(--gold)' }}
                >
                  {v.title}
                </h3>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: 'color-mix(in oklab, #FFFCF5 72%, transparent)' }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="eyebrow">{c.howWeWork.eyebrow}</span>
        <h2
          className="mt-4 text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.howWeWork.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {c.howWeWork.items.map((item) => (
            <article key={item.title} className="p-7 cartouche">
              <h3
                className="text-lg font-semibold skin-font-heading"
                style={{ color: 'var(--skin-foreground)' }}
              >
                {item.title}
              </h3>
              <div className="my-5 rule-gold" />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden px-6 py-16 text-center sm:px-16"
          style={{
            background: 'var(--skin-hero-1)',
            borderRadius: 'var(--skin-radius)',
            boxShadow: 'inset 0 0 0 1px var(--gold-soft)',
          }}
        >
          <div aria-hidden className="absolute inset-0 pattern-girih motif-veil-strong" />
          <div className="relative mx-auto max-w-2xl">
            <h2
              className="text-3xl font-light skin-font-heading sm:text-4xl"
              style={{ color: '#FFFCF5' }}
            >
              {c.cta.title}
            </h2>
            <div className="mx-auto mt-7 max-w-[16rem] rule-gold" />
            <p
              className="mt-7 text-base leading-relaxed"
              style={{ color: 'color-mix(in oklab, #FFFCF5 76%, transparent)' }}
            >
              {c.cta.body}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <LocaleLink
                href="/simulateur"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold btn-gold"
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
                  color: '#FFFCF5',
                  border: '1px solid color-mix(in oklab, var(--gold) 55%, transparent)',
                  borderRadius: 'var(--skin-radius)',
                }}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {c.cta.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
