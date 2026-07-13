import type { Metadata } from 'next';
import { ArrowRight, Building2, Calculator, MessageCircle, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { MarketingContentPage } from '@/components/marketing/MarketingContentPage';
import { LocaleLink } from '@/i18n';
import type { Locale } from '@/i18n/config';
import { docsCopy } from '@/i18n/messages/pages/docs';

const WHATSAPP_HREF = 'https://wa.me/23568888048';

// `params` est typé `string` (contrat Next), puis restreint à `Locale` :
// la locale layout a déjà rejeté toute valeur inconnue via notFound().
type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const c = docsCopy[locale as Locale];
  return { title: c.meta.title, description: c.meta.description };
}

export default async function DocsPage({ params }: Params) {
  const { locale } = await params;
  const c = docsCopy[locale as Locale];

  // Les libellés viennent de la copie ; l'icône, la cible et le caractère
  // externe du lien restent ici (ce ne sont pas des chaînes traduisibles).
  const tools: {
    key: string;
    icon: LucideIcon;
    href: string;
    external?: boolean;
    title: string;
    body: string;
    cta: string;
  }[] = [
    { key: 'simulator', icon: Calculator, href: '/simulateur', ...c.tools.simulator },
    { key: 'track', icon: Search, href: '/track', ...c.tools.track },
    { key: 'agencies', icon: Building2, href: '/agencies', ...c.tools.agencies },
    {
      key: 'support',
      icon: MessageCircle,
      href: WHATSAPP_HREF,
      external: true,
      ...c.tools.support,
    },
  ];

  return (
    <MarketingContentPage eyebrow={c.eyebrow} title={c.title} intro={c.intro} wide>
      <section>
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.stepsTitle}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {c.steps.map((step) => (
            <li key={step.index} className="relative overflow-hidden p-7 skin-card">
              <div
                aria-hidden
                className="absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil-strong"
                style={{ background: 'var(--skin-primary)' }}
              />
              <div className="relative">
                <span
                  className="text-3xl font-light skin-font-heading"
                  style={{ color: 'var(--gold)' }}
                >
                  {step.index}
                </span>
                <h3
                  className="mt-4 text-xl font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  {step.title}
                </h3>
                <div className="my-6 rule-gold" />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-24">
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.toolsTitle}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const inner = (
              <>
                <Icon className="h-5 w-5" style={{ color: 'var(--gold)' }} aria-hidden />
                <h3
                  className="mt-5 text-lg font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                  {tool.body}
                </p>
                <div className="my-5 rule-gold" />
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: 'var(--skin-primary)' }}
                >
                  {tool.cta}
                  <ArrowRight className="h-4 w-4 flip-rtl" aria-hidden />
                </span>
              </>
            );

            const className = 'group block p-7 cartouche transition-shadow hover:shadow-md';

            return tool.external ? (
              <a
                key={tool.key}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <LocaleLink key={tool.key} href={tool.href} className={className}>
                {inner}
              </LocaleLink>
            );
          })}
        </div>
      </section>

      <section className="mt-24 grid gap-6 md:grid-cols-2">
        <div className="p-8 cartouche">
          <h2
            className="text-2xl font-light tracking-tight skin-font-heading"
            style={{ color: 'var(--skin-foreground)' }}
          >
            {c.receiveTitle}
          </h2>
          <div className="my-6 rule-gold" />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
            {c.receiveBody}
          </p>
          <ul className="mt-6 space-y-3">
            {c.receiveItems.map((item) => (
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
        </div>

        <div className="p-8 cartouche">
          <h2
            className="text-2xl font-light tracking-tight skin-font-heading"
            style={{ color: 'var(--skin-foreground)' }}
          >
            {c.forbiddenTitle}
          </h2>
          <div className="my-6 rule-gold" />
          <ul className="space-y-3">
            {c.forbiddenItems.map((item) => (
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
          <p className="mt-6 text-xs leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
            {c.forbiddenNote}
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
              {c.labelTitle}
            </h2>
            <div className="mx-auto mt-7 max-w-[16rem] rule-gold" />
            <p
              className="mt-7 text-base leading-relaxed"
              style={{ color: 'color-mix(in oklab, #FFFCF5 76%, transparent)' }}
            >
              {c.labelBody}
            </p>
            <LocaleLink
              href="/api-docs"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold btn-gold"
            >
              {c.labelCta}
              <ArrowRight className="h-4 w-4 flip-rtl" aria-hidden />
            </LocaleLink>
          </div>
        </div>
      </section>
    </MarketingContentPage>
  );
}
