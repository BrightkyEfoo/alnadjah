'use client';

import { use, useEffect, useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Loader2,
  AlertCircle,
  Building2,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';
import axios from 'axios';
import { LocaleLink, useLocale } from '@/i18n';
import { agenciesCopy } from '@/i18n/messages/pages/agencies';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';

// Ordre d'affichage : lundi -> dimanche. Les index suivent Date.getDay() (0 = dimanche).
const DAY_ORDER = [1, 2, 3, 4, 5, 6, 0];

type OpeningHour = { dayOfWeek: number; openTime: string; closeTime: string };

type Agency = {
  id: string;
  name: string;
  code: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email?: string | null;
  imageUrl?: string | null;
  googleMapsLink?: string | null;
  openingHours: OpeningHour[];
};

export default function AgencyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const c = agenciesCopy[useLocale()];
  const [agency, setAgency] = useState<Agency | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`${API_URL}/public/agencies/${encodeURIComponent(id)}`)
      .then((r) => setAgency(r.data?.data ?? null))
      .catch((e) => {
        if (e.response?.status === 404) setError(c.detail.notFound);
        else setError(e.response?.data?.message || c.detail.loadError);
      })
      .finally(() => setLoading(false));
    // Le fetch ne depend que de l'id ; la copie sert uniquement aux messages d'erreur.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2
          className="h-6 w-6 animate-spin"
          style={{ color: 'var(--skin-primary)' }}
          aria-label={c.loading}
        />
      </div>
    );
  }

  if (error || !agency) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div
          className="mx-auto mb-8 flex max-w-md items-start gap-3 p-4 text-start cartouche"
          style={{ color: 'var(--skin-foreground)' }}
        >
          <AlertCircle className="h-5 w-5 shrink-0" style={{ color: 'var(--gold)' }} />
          <p className="text-sm">{error || c.detail.notFound}</p>
        </div>
        <LocaleLink
          href="/agencies"
          className="inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: 'var(--skin-primary)' }}
        >
          <ArrowLeft className="h-4 w-4 flip-rtl" aria-hidden />
          {c.detail.back}
        </LocaleLink>
      </div>
    );
  }

  // Regroupe les creneaux par jour : une meme journee peut porter plusieurs
  // plages (ex. 8h-12h puis 14h-18h).
  const hoursByDay = new Map<number, OpeningHour[]>();
  for (const h of agency.openingHours) {
    const list = hoursByDay.get(h.dayOfWeek) ?? [];
    list.push(h);
    hoursByDay.set(h.dayOfWeek, list);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <LocaleLink
        href="/agencies"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
        style={{ color: 'var(--skin-muted)' }}
      >
        <ArrowLeft className="h-4 w-4 flip-rtl" aria-hidden />
        {c.detail.back}
      </LocaleLink>

      {/* Portail : l'image de l'agence sous un arc outrepassé. */}
      <div
        className="relative aspect-[21/9] w-full overflow-hidden arch-horseshoe"
        style={{ background: 'color-mix(in oklab, var(--skin-primary) 12%, transparent)' }}
      >
        {agency.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={agency.imageUrl} alt={agency.name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-end justify-center pb-8">
            <Building2
              className="h-14 w-14"
              style={{ color: 'var(--skin-primary)', opacity: 0.4 }}
              aria-hidden
            />
          </div>
        )}
      </div>

      <header className="mt-8 text-center">
        <span className="eyebrow">
          {c.detail.codeLabel} {agency.code}
        </span>
        <h1
          className="mt-4 text-3xl font-light tracking-tight skin-font-heading sm:text-4xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {agency.name}
        </h1>
        <div className="mx-auto mt-6 max-w-[14rem] rule-gold" />
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="p-6 skin-card">
          <h2
            className="text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: 'var(--gold)' }}
          >
            {c.detail.contactTitle}
          </h2>
          <div className="my-5 rule-gold" />

          <div className="space-y-4">
            <InfoRow
              icon={<MapPin className="h-4 w-4" />}
              label={c.detail.addressLabel}
              value={`${agency.address}, ${agency.city} (${agency.country})`}
            />
            <InfoRow
              icon={<Phone className="h-4 w-4" />}
              label={c.detail.phoneLabel}
              value={agency.phone}
              href={`tel:${agency.phone}`}
              ltr
            />
            {agency.email && (
              <InfoRow
                icon={<Mail className="h-4 w-4" />}
                label={c.detail.emailLabel}
                value={agency.email}
                href={`mailto:${agency.email}`}
                ltr
              />
            )}
          </div>

          {agency.googleMapsLink && (
            <a
              href={agency.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold skin-btn-primary"
            >
              {c.detail.maps}
              <ExternalLink className="h-3.5 w-3.5 flip-rtl" aria-hidden />
            </a>
          )}
        </section>

        <section className="p-6 skin-card">
          <h2
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: 'var(--gold)' }}
          >
            <Clock className="h-4 w-4" aria-hidden />
            {c.detail.hoursTitle}
          </h2>
          <div className="my-5 rule-gold" />

          {agency.openingHours.length === 0 ? (
            <p className="text-sm" style={{ color: 'var(--skin-muted)' }}>
              {c.detail.hoursEmpty}
            </p>
          ) : (
            <ul className="space-y-2">
              {DAY_ORDER.map((day) => {
                const slots = hoursByDay.get(day);
                return (
                  <li key={day} className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-medium" style={{ color: 'var(--skin-foreground)' }}>
                      {c.days[day]}
                    </span>
                    <span
                      dir="ltr"
                      style={{ color: slots ? 'var(--skin-foreground)' : 'var(--skin-muted)' }}
                    >
                      {slots
                        ? slots.map((s) => `${s.openTime} - ${s.closeTime}`).join(', ')
                        : c.detail.closed}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
  ltr,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  /** Numéros et e-mails restent en lecture gauche-droite, même en arabe. */
  ltr?: boolean;
}) {
  const content = (
    <p
      className="text-sm font-medium"
      dir={ltr ? 'ltr' : undefined}
      style={{ color: 'var(--skin-foreground)', textAlign: ltr ? 'start' : undefined }}
    >
      {value}
    </p>
  );
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5" style={{ color: 'var(--skin-primary)' }} aria-hidden>
        {icon}
      </span>
      <div>
        <p
          className="text-[11px] uppercase tracking-[0.14em]"
          style={{ color: 'var(--skin-muted)' }}
        >
          {label}
        </p>
        {href ? (
          <a href={href} className="transition-opacity hover:opacity-70">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
