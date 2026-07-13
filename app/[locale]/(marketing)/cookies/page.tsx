'use client';

import { LegalPage } from '@/components/marketing/LegalPage';
import { useLocale } from '@/i18n';
import { cookiesCopy } from '@/i18n/messages/pages/cookies';

export default function CookiesPage() {
  const c = cookiesCopy[useLocale()];

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
    />
  );
}
