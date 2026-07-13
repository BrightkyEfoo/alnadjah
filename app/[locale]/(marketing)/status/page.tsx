'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import { apiClient } from '@/lib/api/client';
import { useLocale } from '@/i18n';
import { statusCopy } from '@/i18n/messages/pages/status';

const WHATSAPP_HREF = 'https://wa.me/23568888048';

type Health = 'ok' | 'down' | 'checking';

/** Clés des services sondés — les libellés vivent dans la copie i18n. */
const SERVICE_KEYS = ['tracking', 'simulator', 'portal'] as const;
type ServiceKey = (typeof SERVICE_KEYS)[number];

export default function StatusPage() {
  const locale = useLocale();
  const c = statusCopy[locale];

  const [health, setHealth] = useState<Health>('checking');
  const [checkedAt, setCheckedAt] = useState<Date | null>(null);

  useEffect(() => {
    const ping = async () => {
      // On sonde l'endpoint /health public : les trois services publics
      // dépendent tous de cette API, on ne les distingue pas encore.
      try {
        // apiClient : base résolue depuis le host courant (cf. baseUrl.ts).
        await apiClient.get('/health', { timeout: 5000 });
        setHealth('ok');
      } catch {
        setHealth('down');
      }
      setCheckedAt(new Date());
    };
    ping();
    const id = setInterval(ping, 60_000); // vérification chaque minute
    return () => clearInterval(id);
  }, []);

  const title =
    health === 'checking' ? c.titleChecking : health === 'ok' ? c.titleOk : c.titleDown;

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
            {title}
          </h1>
          <div className="mx-auto mt-7 max-w-[16rem] rule-gold" />
          {health !== 'checking' && (
            <p
              className="mx-auto mt-7 max-w-2xl text-base leading-relaxed"
              style={{ color: 'color-mix(in oklab, #FFFCF5 76%, transparent)' }}
            >
              {health === 'ok' ? c.subtitleOk : c.subtitleDown}
            </p>
          )}
          {checkedAt && (
            <p
              className="mt-6 text-xs"
              style={{ color: 'color-mix(in oklab, #FFFCF5 55%, transparent)' }}
            >
              {c.checkedAt} : {checkedAt.toLocaleTimeString(locale)}
            </p>
          )}
        </div>

        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2 pattern-zellige"
          style={{ background: 'color-mix(in oklab, var(--skin-hero-1) 70%, black)' }}
        />
      </header>

      <section className="mx-auto max-w-4xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <ul className="space-y-4">
          {SERVICE_KEYS.map((key: ServiceKey) => (
            <li
              key={key}
              className="flex flex-wrap items-center justify-between gap-4 p-6 skin-card"
            >
              <div>
                <p
                  className="text-base font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  {c.services[key].label}
                </p>
                <p className="mt-1 text-sm" style={{ color: 'var(--skin-muted)' }}>
                  {c.services[key].desc}
                </p>
              </div>
              <StatusBadge
                status={health}
                labels={{ ok: c.badgeOk, down: c.badgeDown, checking: c.badgeChecking }}
              />
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs" style={{ color: 'var(--skin-muted)' }}>
          {c.autoRefresh}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-20 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.departuresTitle}
        </h2>
        <div className="mt-8 max-w-[16rem] rule-gold" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {c.departures.map((departure) => (
            <article
              key={departure.route}
              className="relative overflow-hidden p-7 skin-card"
            >
              <div
                aria-hidden
                className="absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil-strong"
                style={{ background: 'var(--skin-primary)' }}
              />
              <div className="relative">
                <h3
                  className="text-lg font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  {departure.route}
                </h3>
                <p
                  className="mt-2 text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: 'var(--gold)' }}
                >
                  {departure.days}
                </p>
                <div className="my-6 rule-gold" />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                  {departure.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
          {c.departuresNote}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="p-8 cartouche sm:p-10">
          <h2
            className="text-2xl font-light tracking-tight skin-font-heading"
            style={{ color: 'var(--skin-foreground)' }}
          >
            {c.incidentTitle}
          </h2>
          <div className="my-6 rule-gold" />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
            {c.incidentBody}
          </p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold skin-btn-primary"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {c.incidentCta}
          </a>
        </div>
      </section>
    </div>
  );
}

function StatusBadge({
  status,
  labels,
}: {
  status: Health;
  labels: { ok: string; down: string; checking: string };
}) {
  const base =
    'inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]';

  if (status === 'checking') {
    return (
      <span
        className={base}
        style={{
          background: 'var(--gold-soft)',
          color: 'var(--skin-foreground)',
          borderRadius: 'var(--skin-radius-sm)',
        }}
      >
        <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
        {labels.checking}
      </span>
    );
  }

  if (status === 'ok') {
    return (
      <span
        className={base}
        style={{
          background: 'color-mix(in oklab, var(--skin-primary) 12%, transparent)',
          color: 'var(--skin-primary)',
          borderRadius: 'var(--skin-radius-sm)',
          boxShadow: 'inset 0 0 0 1px color-mix(in oklab, var(--gold) 40%, transparent)',
        }}
      >
        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
        {labels.ok}
      </span>
    );
  }

  return (
    <span
      className={base}
      style={{
        background: 'color-mix(in oklab, #8C2F2F 12%, transparent)',
        color: '#8C2F2F',
        borderRadius: 'var(--skin-radius-sm)',
        boxShadow: 'inset 0 0 0 1px color-mix(in oklab, #8C2F2F 30%, transparent)',
      }}
    >
      <AlertCircle className="h-3.5 w-3.5" aria-hidden />
      {labels.down}
    </span>
  );
}
