import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';
import { MarketingContentPage } from '@/components/marketing/MarketingContentPage';
import type { Locale } from '@/i18n/config';
import { blogCopy } from '@/i18n/messages/pages/blog';

const WHATSAPP_HREF = 'https://wa.me/23568888048';

// `params` est typé `string` (contrat Next), puis restreint à `Locale` :
// la locale layout a déjà rejeté toute valeur inconnue via notFound().
type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const c = blogCopy[locale as Locale];
  return { title: c.meta.title, description: c.meta.description };
}

export default async function BlogPage({ params }: Params) {
  const { locale } = await params;
  const c = blogCopy[locale as Locale];

  return (
    <MarketingContentPage eyebrow={c.eyebrow} title={c.title} intro={c.intro} wide>
      <h2
        className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
        style={{ color: 'var(--skin-foreground)' }}
      >
        {c.articlesTitle}
      </h2>
      <div className="mt-8 max-w-[16rem] rule-gold" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {c.articles.map((article) => (
          <article key={article.title} className="relative overflow-hidden p-7 skin-card">
            {/* Chaque note est une porte du carnet : arc en filigrane. */}
            <div
              aria-hidden
              className="absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil-strong"
              style={{ background: 'var(--skin-primary)' }}
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
                <span style={{ color: 'var(--gold)' }}>{article.tag}</span>
                <span style={{ color: 'var(--skin-muted)' }}>{article.date}</span>
              </div>
              <h3
                className="mt-4 text-xl font-semibold skin-font-heading"
                style={{ color: 'var(--skin-foreground)' }}
              >
                {article.title}
              </h3>
              <div className="my-6 rule-gold" />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                {article.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

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
              {c.followTitle}
            </h2>
            <div className="mx-auto mt-7 max-w-[16rem] rule-gold" />
            <p
              className="mt-7 text-base leading-relaxed"
              style={{ color: 'color-mix(in oklab, #FFFCF5 76%, transparent)' }}
            >
              {c.followBody}
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold btn-gold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {c.followCta}
            </a>
          </div>
        </div>
      </section>
    </MarketingContentPage>
  );
}
