import type { Metadata } from 'next';
import { Briefcase, Mail, MapPin, MessageCircle } from 'lucide-react';
import { MarketingContentPage } from '@/components/marketing/MarketingContentPage';
import type { Locale } from '@/i18n/config';
import { careersCopy } from '@/i18n/messages/pages/careers';

const WHATSAPP_HREF = 'https://wa.me/23568888048';
const EMAIL = 'contact@alnadjah-express.com';

// `params` est typé `string` (contrat Next), puis restreint à `Locale` :
// la locale layout a déjà rejeté toute valeur inconnue via notFound().
type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const c = careersCopy[locale as Locale];
  return { title: c.meta.title, description: c.meta.description };
}

export default async function CareersPage({ params }: Params) {
  const { locale } = await params;
  const c = careersCopy[locale as Locale];

  return (
    <MarketingContentPage eyebrow={c.eyebrow} title={c.title} intro={c.intro} wide>
      <section>
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.whyTitle}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {c.why.map((item) => (
            <li key={item} className="flex gap-4 p-6 cartouche">
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
      </section>

      <section className="mt-24">
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.openingsTitle}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {c.openings.map((job) => (
            <article key={job.title} className="relative overflow-hidden p-7 skin-card">
              {/* Chaque poste est une porte de l'agence : arc en filigrane. */}
              <div
                aria-hidden
                className="absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil-strong"
                style={{ background: 'var(--skin-primary)' }}
              />
              <div className="relative">
                <h3
                  className="text-xl font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  {job.title}
                </h3>

                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em]">
                  <span className="inline-flex items-center gap-2" style={{ color: 'var(--gold)' }}>
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {job.location}
                  </span>
                  <span
                    className="inline-flex items-center gap-2"
                    style={{ color: 'var(--skin-muted)' }}
                  >
                    <Briefcase className="h-3.5 w-3.5" aria-hidden />
                    {job.type}
                  </span>
                </div>

                <div className="my-6 rule-gold" />

                <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                  {job.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-6 md:grid-cols-2">
        <div className="p-8 cartouche">
          <h2
            className="text-2xl font-light tracking-tight skin-font-heading"
            style={{ color: 'var(--skin-foreground)' }}
          >
            {c.applyTitle}
          </h2>
          <div className="my-6 rule-gold" />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
            {c.applyBody}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold skin-btn-primary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {c.applyCta}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors"
              style={{
                color: 'var(--skin-foreground)',
                border: '1px solid var(--skin-border)',
                borderRadius: 'var(--skin-radius)',
              }}
            >
              <Mail className="h-4 w-4" aria-hidden />
              {c.applyEmail}
            </a>
          </div>
        </div>

        <div className="p-8 cartouche">
          <h2
            className="text-2xl font-light tracking-tight skin-font-heading"
            style={{ color: 'var(--skin-foreground)' }}
          >
            {c.spontaneousTitle}
          </h2>
          <div className="my-6 rule-gold" />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
            {c.spontaneousBody}
          </p>
          <a
            href={`mailto:${EMAIL}`}
            dir="ltr"
            className="mt-8 inline-block text-sm font-semibold underline underline-offset-4"
            style={{ color: 'var(--skin-primary)', textAlign: 'start' }}
          >
            {EMAIL}
          </a>
        </div>
      </section>
    </MarketingContentPage>
  );
}
