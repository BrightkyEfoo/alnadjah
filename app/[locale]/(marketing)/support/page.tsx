import type { Metadata } from 'next';
import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { LocaleLink } from '@/i18n';
import type { Locale } from '@/i18n/config';
import { supportCopy } from '@/i18n/messages/pages/support';

const WHATSAPP_HREF = 'https://wa.me/23568888048';

/**
 * Icône et lien de chaque canal. La clé vient de la copie (`channels[].key`),
 * qui reste identique dans les trois langues.
 */
const CHANNEL_META: Record<string, { icon: LucideIcon; href: string; external?: boolean }> = {
  whatsapp: { icon: MessageCircle, href: WHATSAPP_HREF, external: true },
  phone: { icon: Phone, href: 'tel:+237688395608' },
  email: { icon: Mail, href: 'mailto:contact@alnadjah-express.com' },
};

// `params` est typé `string` (contrat Next), puis restreint à `Locale` :
// la locale layout a déjà rejeté toute valeur inconnue via notFound().
type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const c = supportCopy[locale as Locale];
  return { title: c.meta.title, description: c.meta.description };
}

export default async function SupportPage({ params }: Params) {
  const { locale } = await params;
  const c = supportCopy[locale as Locale];

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
        <div className="grid gap-6 md:grid-cols-3">
          {c.channels.map((channel) => {
            const meta = CHANNEL_META[channel.key];
            if (!meta) return null;
            const Icon = meta.icon;
            return (
              <a
                key={channel.key}
                href={meta.href}
                target={meta.external ? '_blank' : undefined}
                rel={meta.external ? 'noopener noreferrer' : undefined}
                className="group relative overflow-hidden p-7 skin-card transition-shadow hover:shadow-md"
              >
                <div
                  aria-hidden
                  className="absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil-strong"
                  style={{ background: 'var(--skin-primary)' }}
                />
                <div className="relative">
                  <Icon className="h-5 w-5" style={{ color: 'var(--gold)' }} aria-hidden />
                  <h2
                    className="mt-5 text-lg font-semibold skin-font-heading"
                    style={{ color: 'var(--skin-foreground)' }}
                  >
                    {channel.title}
                  </h2>
                  <p className="mt-2 text-sm" style={{ color: 'var(--skin-muted)' }}>
                    {channel.desc}
                  </p>
                  <div className="my-5 rule-gold" />
                  <p
                    className="text-sm font-semibold transition-opacity group-hover:opacity-80"
                    dir="ltr"
                    style={{ color: 'var(--skin-primary)', textAlign: 'start' }}
                  >
                    {channel.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <span className="eyebrow">{c.faq.eyebrow}</span>
        <h2
          className="mt-4 text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.faq.title}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <dl className="mt-12 space-y-8">
          {c.faq.items.map((item) => (
            <div key={item.q} className="p-7 cartouche">
              <dt
                className="text-lg font-semibold skin-font-heading"
                style={{ color: 'var(--skin-foreground)' }}
              >
                {item.q}
              </dt>
              <dd
                className="mt-4 text-sm leading-relaxed"
                style={{ color: 'var(--skin-muted)' }}
              >
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold btn-gold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {c.cta.primary}
              </a>
              <LocaleLink
                href="/simulateur"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition-colors"
                style={{
                  color: '#FFFCF5',
                  border: '1px solid color-mix(in oklab, var(--gold) 55%, transparent)',
                  borderRadius: 'var(--skin-radius)',
                }}
              >
                {c.cta.secondary}
                <ArrowRight className="h-4 w-4 flip-rtl" aria-hidden />
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
