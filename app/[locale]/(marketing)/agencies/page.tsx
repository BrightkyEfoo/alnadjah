'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Search,
  Loader2,
  AlertCircle,
  Building2,
  ArrowRight,
} from 'lucide-react';
import axios from 'axios';
import { LocaleLink, useLocale } from '@/i18n';
import { agenciesCopy } from '@/i18n/messages/pages/agencies';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';

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
};

export default function AgenciesPage() {
  const c = agenciesCopy[useLocale()];
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`${API_URL}/public/agencies`)
      .then((r) => setAgencies(r.data?.data ?? []))
      .catch((e) => setError(e.response?.data?.message || c.error))
      .finally(() => setLoading(false));
    // La copie change avec la locale, mais le fetch ne doit pas se rejouer :
    // seul le message d'erreur de repli en depend.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return agencies;
    return agencies.filter((a) =>
      [a.name, a.city, a.country, a.address].some((v) => v?.toLowerCase().includes(q)),
    );
  }, [agencies, query]);

  return (
    <div className="pb-24">
      {/* Bandeau d'émeraude : la façade avant la cour. */}
      <header
        className="relative overflow-hidden py-20 sm:py-24"
        style={{ background: 'var(--skin-hero-1)' }}
      >
        <div aria-hidden className="absolute inset-0 pattern-girih motif-veil" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
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
            {c.subtitle}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto -mt-8 mb-14 max-w-md">
          <div className="relative">
            <Search
              className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2"
              style={{ color: 'var(--skin-muted)' }}
              aria-hidden
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={c.search.placeholder}
              aria-label={c.search.label}
              className="skin-input w-full ps-10 text-start"
            />
          </div>
        </div>

        {loading && (
          <div className="flex min-h-[40vh] items-center justify-center">
            <Loader2
              className="h-6 w-6 animate-spin"
              style={{ color: 'var(--skin-primary)' }}
              aria-label={c.loading}
            />
          </div>
        )}

        {error && (
          <div
            className="mx-auto flex max-w-md items-start gap-3 p-4 cartouche"
            style={{ color: 'var(--skin-foreground)' }}
          >
            <AlertCircle className="h-5 w-5 shrink-0" style={{ color: 'var(--gold)' }} />
            <p className="text-sm text-start">{error}</p>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <p className="text-center text-sm" style={{ color: 'var(--skin-muted)' }}>
            {c.empty}
          </p>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <AgencyCard key={a.id} agency={a} detailLabel={c.detailLink} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AgencyCard({ agency, detailLabel }: { agency: Agency; detailLabel: string }) {
  return (
    <LocaleLink
      href={`/agencies/${agency.id}`}
      className="group flex flex-col overflow-hidden p-5 skin-card transition-shadow hover:shadow-md"
    >
      {/* L'image porte l'arc : chaque agence est une porte. */}
      <div
        className="relative aspect-[4/3] w-full overflow-hidden arch"
        style={{ background: 'color-mix(in oklab, var(--skin-primary) 12%, transparent)' }}
      >
        {agency.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={agency.imageUrl} alt={agency.name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-end justify-center pb-8">
            <Building2
              className="h-10 w-10"
              style={{ color: 'var(--skin-primary)', opacity: 0.4 }}
              aria-hidden
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p
          className="text-xs font-semibold uppercase tracking-[0.16em]"
          style={{ color: 'var(--gold)' }}
        >
          {agency.code}
        </p>
        <h2
          className="mt-1 text-lg font-semibold tracking-tight skin-font-heading"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {agency.name}
        </h2>

        <div className="my-5 rule-gold" />

        <div className="space-y-2 text-sm" style={{ color: 'var(--skin-muted)' }}>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>
              {agency.address}, {agency.city} ({agency.country})
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            <span dir="ltr">{agency.phone}</span>
          </p>
          {agency.email && (
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              <span className="truncate" dir="ltr">
                {agency.email}
              </span>
            </p>
          )}
        </div>

        <span
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity group-hover:opacity-80"
          style={{ color: 'var(--skin-primary)' }}
        >
          {detailLabel}
          <ArrowRight className="h-3.5 w-3.5 flip-rtl" aria-hidden />
        </span>
      </div>
    </LocaleLink>
  );
}
