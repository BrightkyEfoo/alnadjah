import type { Metadata } from 'next';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { MarketingContentPage } from '@/components/marketing/MarketingContentPage';
import { LocaleLink } from '@/i18n';
import type { Locale } from '@/i18n/config';
import { apiDocsCopy } from '@/i18n/messages/pages/apiDocs';

const WHATSAPP_HREF = 'https://wa.me/23568888048';

// `params` est typé `string` (contrat Next), puis restreint à `Locale` :
// la locale layout a déjà rejeté toute valeur inconnue via notFound().
type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const c = apiDocsCopy[locale as Locale];
  return { title: c.meta.title, description: c.meta.description };
}

export default async function ApiDocsPage({ params }: Params) {
  const { locale } = await params;
  const c = apiDocsCopy[locale as Locale];

  return (
    <MarketingContentPage eyebrow={c.eyebrow} title={c.title} intro={c.intro} wide>
      <section className="relative overflow-hidden p-8 skin-card sm:p-10">
        <div
          aria-hidden
          className="absolute -top-12 end-[-2rem] h-48 w-36 arch pattern-girih motif-veil-strong"
          style={{ background: 'var(--skin-primary)' }}
        />
        <div className="relative">
          <h2
            className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
            style={{ color: 'var(--skin-foreground)' }}
          >
            {c.trackingTitle}
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: 'var(--gold)' }}
            >
              {c.trackingFormatLabel}
            </span>
            {/* Le format reste en latin, même en arabe : c'est ce qui est imprimé. */}
            <code
              dir="ltr"
              className="px-3 py-1.5 text-sm font-semibold"
              style={{
                background: 'var(--gold-soft)',
                color: 'var(--skin-foreground)',
                borderRadius: 'var(--skin-radius-sm)',
              }}
            >
              {c.trackingFormat}
            </code>
          </div>

          <div className="my-8 rule-gold" />

          <p className="max-w-2xl text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
            {c.trackingBody}
          </p>

          <ul className="mt-8 space-y-3">
            {c.trackingItems.map((item) => (
              <li key={item} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 shrink-0 rotate-45"
                  style={{ background: 'var(--gold)' }}
                />
                <span className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <LocaleLink
            href="/track"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold skin-btn-primary"
          >
            {c.trackingCta}
            <ArrowRight className="h-4 w-4 flip-rtl" aria-hidden />
          </LocaleLink>
        </div>
      </section>

      <section className="mt-24">
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.labelTitle}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <dl className="mt-12 grid gap-6 md:grid-cols-2">
          {c.labelItems.map((item) => (
            <div key={item.term} className="p-7 cartouche">
              <dt
                className="text-lg font-semibold skin-font-heading"
                style={{ color: 'var(--skin-foreground)' }}
              >
                {item.term}
              </dt>
              <dd
                className="mt-4 text-sm leading-relaxed"
                style={{ color: 'var(--skin-muted)' }}
              >
                {item.desc}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-24">
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.documentsTitle}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <dl className="mt-12 space-y-6">
          {c.documentsItems.map((item) => (
            <div
              key={item.term}
              className="p-7 skin-card sm:flex sm:gap-10"
              style={{ borderInlineStartWidth: '3px', borderInlineStartColor: 'var(--gold)' }}
            >
              <dt
                className="shrink-0 text-lg font-semibold skin-font-heading sm:w-56"
                style={{ color: 'var(--skin-foreground)' }}
              >
                {item.term}
              </dt>
              <dd
                className="mt-3 text-sm leading-relaxed sm:mt-0"
                style={{ color: 'var(--skin-muted)' }}
              >
                {item.desc}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-24">
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.customsTitle}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <div className="mt-12 p-8 cartouche">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
            {c.customsBody}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {c.customsItems.map((item) => (
              <li key={item} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 shrink-0 rotate-45"
                  style={{ background: 'var(--skin-primary)' }}
                />
                <span className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="my-8 rule-gold" />
          <p className="text-xs leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
            {c.customsNote}
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div
          className="relative overflow-hidden px-6 py-14 text-center sm:px-16"
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
              {c.bulkTitle}
            </h2>
            <div className="mx-auto mt-7 max-w-[16rem] rule-gold" />
            <p
              className="mt-7 text-base leading-relaxed"
              style={{ color: 'color-mix(in oklab, #FFFCF5 76%, transparent)' }}
            >
              {c.bulkBody}
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold btn-gold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {c.bulkCta}
            </a>
          </div>
        </div>
      </section>
    </MarketingContentPage>
  );
}
