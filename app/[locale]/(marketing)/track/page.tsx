'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, Package, MapPin, Clock, AlertCircle, Loader2, Building2 } from 'lucide-react';
import { apiClient } from '@/lib/api/client';
import { useI18n } from '@/i18n';
import { trackCopy } from '@/i18n/messages/pages/track';

/** Teinte du statut : or / émeraude / encre / rouge — pas de palette SaaS. */
const STATUS_TONE: Record<string, string> = {
  IN_STOCK: 'var(--skin-muted)',
  LOADING: 'var(--gold)',
  IN_TRANSIT: 'var(--gold)',
  ARRIVED: 'var(--skin-primary)',
  RECEIVED: 'var(--skin-primary)',
  DELIVERED: 'var(--skin-primary)',
  LOST: '#9b2c2c',
};

type Parcel = {
  trackingNumber: string;
  designation: string;
  status: string;
  isPresent: boolean;
  origin?: string | null;
  destination: string;
  destinationAddress?: string | null;
  createdAt: string;
  arrivalDate?: string | null;
  pickupDate?: string | null;
  warehouseEnteredAt?: string | null;
  category: string;
  warehouse?: { name: string; agency?: { name: string; city: string } | null } | null;
  destinationAgency?: { name: string; city: string } | null;
  transitRoute?: {
    name: string;
    type: string;
    addedValue?: number | null;
    addedValueType?: 'AMOUNT' | 'PERCENT' | null;
  } | null;
};

// Valeur ajoutee d'une route : montant fixe (+2 000 FCFA) ou pourcentage (+10%).
function formatAddedValue(
  value: number | null | undefined,
  type: 'AMOUNT' | 'PERCENT' | null | undefined,
  numberLocale: string,
): string | null {
  if (value == null || !type) return null;
  if (type === 'PERCENT') return `+${value}%`;
  return `+${Math.round(value).toLocaleString(numberLocale)} FCFA`;
}

export default function TrackPage() {
  // Next 16 + Turbopack : useSearchParams() doit etre dans une boundary
  // Suspense, sinon le build prerender pour /track echoue.
  return (
    <Suspense fallback={<TrackFallback />}>
      <TrackPageInner />
    </Suspense>
  );
}

function TrackFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Loader2 className="h-6 w-6 animate-spin" style={{ color: 'var(--skin-primary)' }} />
    </div>
  );
}

function TrackPageInner() {
  const { locale, href } = useI18n();
  const c = trackCopy[locale];
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get('q') || '';
  const [tracking, setTracking] = useState(initial);
  const [submitted, setSubmitted] = useState(initial);
  const [parcel, setParcel] = useState<Parcel | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!submitted) return;
    setLoading(true);
    setError(null);
    setParcel(null);
    // apiClient : base de l'API résolue depuis le host courant (cf. baseUrl.ts).
    apiClient
      .get(`/public/tracking/${encodeURIComponent(submitted.trim())}`)
      .then((r) => setParcel(r.data?.data ?? null))
      .catch((e) => {
        if (e.response?.status === 404) {
          setError(c.notFound.replace('{q}', submitted));
        } else {
          setError(e.response?.data?.message || c.genericError);
        }
      })
      .finally(() => setLoading(false));
  }, [submitted, c]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = tracking.trim();
    if (!v) return;
    setSubmitted(v);
    // href() prefixe la locale courante : /fr/track, /ar/track…
    router.replace(`${href('/track')}?q=${encodeURIComponent(v)}`);
  };

  return (
    <div className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <header className="text-center">
        <span className="eyebrow">{c.eyebrow}</span>
        <h1
          className="mt-4 text-3xl font-light tracking-tight skin-font-heading sm:text-5xl"
          style={{ color: 'var(--skin-foreground)' }}
        >
          {c.title}
        </h1>
        <div className="mx-auto my-6 max-w-xs rule-gold" />
        <p className="mx-auto max-w-xl text-sm" style={{ color: 'var(--skin-muted)' }}>
          {c.subtitle}
        </p>
      </header>

      <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <label className="sr-only" htmlFor="tracking">
            {c.searchLabel}
          </label>
          <Search
            className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2"
            style={{ color: 'var(--skin-muted)' }}
          />
          <input
            id="tracking"
            type="text"
            value={tracking}
            onChange={(e) => setTracking(e.target.value)}
            placeholder="TST-AB12CD"
            className="skin-input w-full ps-10 font-mono uppercase"
          />
        </div>
        <button
          type="submit"
          disabled={!tracking.trim() || loading}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold skin-btn-primary disabled:opacity-50"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
          {c.searchCta}
        </button>
      </form>

      {error && (
        <div
          className="mt-6 flex items-start gap-3 border p-4"
          style={{ borderColor: '#d9b0b0', background: '#fbf3f2', color: '#8a2f2f' }}
        >
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {parcel && <ParcelCard parcel={parcel} />}
    </div>
  );
}

function ParcelCard({ parcel }: { parcel: Parcel }) {
  const { locale } = useI18n();
  const c = trackCopy[locale];

  const formatDate = (d?: string | null) =>
    d
      ? new Date(d).toLocaleDateString(c.dateLocale, {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      : null;

  const statusLabel = c.status[parcel.status as keyof typeof c.status] || parcel.status;
  const tone = STATUS_TONE[parcel.status] || 'var(--skin-muted)';

  // Timeline simplifiee : cree -> en transit -> arrive -> livre.
  const milestones = [
    { key: 'created', label: c.progress.created, date: parcel.createdAt, done: true },
    { key: 'transit', label: c.progress.transit, date: null, done: ['IN_TRANSIT', 'ARRIVED', 'RECEIVED', 'DELIVERED'].includes(parcel.status) },
    { key: 'arrived', label: c.progress.arrived, date: parcel.arrivalDate ?? null, done: ['ARRIVED', 'RECEIVED', 'DELIVERED'].includes(parcel.status) },
    { key: 'delivered', label: c.progress.delivered, date: parcel.pickupDate ?? null, done: parcel.status === 'DELIVERED' },
  ];

  // Agence de depart : l'agence du magasin d'origine, sinon la ville d'origine.
  const departureAgency = parcel.warehouse?.agency
    ? `${parcel.warehouse.agency.name}${parcel.warehouse.agency.city ? ` (${parcel.warehouse.agency.city})` : ''}`
    : parcel.origin || null;

  const routeAddedValue = formatAddedValue(
    parcel.transitRoute?.addedValue,
    parcel.transitRoute?.addedValueType,
    c.numberLocale,
  );

  return (
    <article className="relative mt-10 overflow-hidden skin-card">
      {/* Arc en filigrane : la carte est une porte. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil"
        style={{ background: 'var(--skin-primary)' }}
      />

      <header
        className="relative border-b px-6 py-5"
        style={{ borderColor: 'var(--skin-border)' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center"
              style={{
                background: 'color-mix(in oklab, var(--skin-primary) 12%, transparent)',
                border: '1px solid var(--gold-soft)',
              }}
            >
              <Package className="h-5 w-5" style={{ color: 'var(--skin-primary)' }} />
            </div>
            <div>
              <p
                className="font-mono text-sm font-semibold tracking-tight"
                style={{ color: 'var(--skin-foreground)' }}
              >
                {parcel.trackingNumber}
              </p>
              <p className="text-xs" style={{ color: 'var(--skin-muted)' }}>
                {parcel.designation}
              </p>
            </div>
          </div>
          <span
            className="inline-flex items-center gap-1 border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{
              color: tone,
              borderColor: tone,
              background: `color-mix(in oklab, ${tone} 8%, transparent)`,
            }}
          >
            {statusLabel}
          </span>
        </div>
      </header>

      <div className="relative grid gap-5 px-6 py-6 sm:grid-cols-2">
        {departureAgency && (
          <InfoItem
            icon={<MapPin className="h-4 w-4" />}
            label={c.info.departureAgency}
            value={departureAgency}
          />
        )}
        <InfoItem
          icon={<MapPin className="h-4 w-4" />}
          label={c.info.arrivalAgency}
          value={
            parcel.destinationAgency
              ? `${parcel.destinationAgency.name}${parcel.destinationAgency.city ? ` (${parcel.destinationAgency.city})` : ''}`
              : parcel.destination || c.info.empty
          }
        />
        {parcel.warehouse && (
          <InfoItem
            icon={<Building2 className="h-4 w-4" />}
            label={c.info.currentWarehouse}
            value={`${parcel.warehouse.name}${parcel.warehouse.agency?.name ? ` — ${parcel.warehouse.agency.name}` : ''}`}
          />
        )}
        {parcel.transitRoute && (
          <InfoItem
            icon={<MapPin className="h-4 w-4" />}
            label={c.info.transitRoute}
            value={`${parcel.transitRoute.name} (${parcel.transitRoute.type})`}
          />
        )}
        {routeAddedValue && (
          <InfoItem
            icon={<MapPin className="h-4 w-4" />}
            label={c.info.addedValue}
            value={routeAddedValue}
          />
        )}
        <InfoItem
          icon={<Clock className="h-4 w-4" />}
          label={c.info.registeredAt}
          value={formatDate(parcel.createdAt) || c.info.empty}
        />
      </div>

      <div className="relative border-t px-6 py-6" style={{ borderColor: 'var(--skin-border)' }}>
        <h2
          className="text-[11px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: 'var(--gold)' }}
        >
          {c.progress.title}
        </h2>
        <div className="my-5 rule-gold" />
        <ol className="space-y-4">
          {milestones.map((m) => (
            <li key={m.key} className="flex items-start gap-4">
              {/* Losange : plein en or quand l'étape est franchie, vide sinon. */}
              <span
                aria-hidden
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45"
                style={{
                  background: m.done ? 'var(--gold)' : 'transparent',
                  border: `1px solid ${m.done ? 'var(--gold)' : 'var(--skin-border)'}`,
                }}
              />
              <div className="flex-1">
                <p
                  className="text-sm font-medium"
                  style={{ color: m.done ? 'var(--skin-foreground)' : 'var(--skin-muted)' }}
                >
                  {m.label}
                </p>
                {m.date && (
                  <p className="mt-0.5 text-xs" style={{ color: 'var(--skin-muted)' }}>
                    {formatDate(m.date)}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 text-start">
      <span className="mt-0.5" style={{ color: 'var(--gold)' }}>
        {icon}
      </span>
      <div>
        <p
          className="text-[11px] uppercase tracking-[0.16em]"
          style={{ color: 'var(--skin-muted)' }}
        >
          {label}
        </p>
        <p className="mt-1 text-sm font-medium" style={{ color: 'var(--skin-foreground)' }}>
          {value}
        </p>
      </div>
    </div>
  );
}
