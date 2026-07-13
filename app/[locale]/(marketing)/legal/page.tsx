'use client';

import { LegalPage } from '@/components/marketing/LegalPage';
import { useLocale } from '@/i18n';
import { legalCopy } from '@/i18n/messages/pages/legal';

export default function LegalNoticePage() {
  const c = legalCopy[useLocale()];

  return (
    <LegalPage
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      updatedLabel={c.updatedLabel}
      updatedValue={c.updated}
      sections={c.sections}
      linksTitle={c.linksTitle}
      links={c.links}
    >
      {/* Coordonnées : `dir="ltr"` sur les valeurs, sinon l'arabe renvoie le
          « + » des numéros du mauvais côté. */}
      <section className="cartouche p-6 sm:p-8">
        <p className="eyebrow">{c.contactTitle}</p>
        <dl className="mt-6 space-y-5">
          {c.contact.map((row) => (
            <div key={row.href} className="flex flex-col gap-1">
              <dt
                className="text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: 'var(--skin-muted)' }}
              >
                {row.label}
              </dt>
              <dd>
                <a
                  href={row.href}
                  dir="ltr"
                  className="inline-block text-base underline-offset-4 hover:underline"
                  style={{ color: 'var(--skin-primary)' }}
                >
                  {row.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </LegalPage>
  );
}
