'use client';

import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Plane,
  Ship,
  Truck,
  Calculator,
  Loader2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
// /login reste hors i18n (espace client) : on garde next/link ici.
import Link from 'next/link';
import {
  portalApi,
  isAuthenticated,
  type PublicTransitRoute,
  type PriceSimulation,
} from '@/lib/api/client';
import { useLocale } from '@/i18n';
import { simulateurCopy } from '@/i18n/messages/pages/simulateur';

const TYPE_ICON: Record<'AIR' | 'SEA' | 'LAND', typeof Plane> = {
  AIR: Plane,
  SEA: Ship,
  LAND: Truck,
};

function formatFcfa(n: number, numberLocale: string): string {
  return `${Math.round(n).toLocaleString(numberLocale)} FCFA`;
}

export default function SimulateurPage() {
  const c = simulateurCopy[useLocale()];

  const { data: routes, isLoading: routesLoading } = useQuery({
    queryKey: ['public', 'transit-routes'],
    queryFn: () => portalApi.getPublicTransitRoutes(),
  });

  const [routeId, setRouteId] = useState('');
  const [weight, setWeight] = useState('');
  const [volume, setVolume] = useState('');
  const [result, setResult] = useState<PriceSimulation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selected = useMemo<PublicTransitRoute | undefined>(
    () => routes?.find((r) => r.id === routeId),
    [routes, routeId],
  );

  const needsWeight = selected?.type === 'AIR' || selected?.type === 'LAND';
  const needsVolume = selected?.type === 'SEA' || selected?.type === 'LAND';

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const payload: { transitRouteId: string; weight?: number; volume?: number } = {
        transitRouteId: selected.id,
      };
      if (needsWeight) payload.weight = Number(weight);
      if (needsVolume) payload.volume = Number(volume);
      const data = await portalApi.simulatePrice(payload);
      setResult(data);
    } catch (err) {
      const e = err as { response?: { data?: { message?: string } } };
      setError(e.response?.data?.message || c.genericError);
    } finally {
      setLoading(false);
    }
  };

  // Reset des saisies quand on change de route (les unites changent).
  const onSelectRoute = (id: string) => {
    setRouteId(id);
    setWeight('');
    setVolume('');
    setResult(null);
    setError(null);
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

      <form onSubmit={onSubmit} className="relative mt-10 overflow-hidden p-7 skin-card">
        {/* Arc en filigrane : le formulaire est une porte. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil"
          style={{ background: 'var(--skin-primary)' }}
        />

        <div className="relative">
          {/* Selecteur de route */}
          <label
            htmlFor="route"
            className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'var(--gold)' }}
          >
            {c.routeLabel}
          </label>
          {routesLoading ? (
            <div
              className="flex items-center gap-2 py-3 text-sm"
              style={{ color: 'var(--skin-muted)' }}
            >
              <Loader2 className="h-4 w-4 animate-spin" /> {c.routesLoading}
            </div>
          ) : (
            <select
              id="route"
              value={routeId}
              onChange={(e) => onSelectRoute(e.target.value)}
              className="skin-input w-full"
              required
            >
              <option value="" disabled>
                {c.routePlaceholder}
              </option>
              {routes?.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          )}

          {/* Saisie masse / volume selon le type */}
          {selected && (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {needsWeight && (
                <div>
                  <label
                    htmlFor="weight"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: 'var(--gold)' }}
                  >
                    {c.weightLabel}
                  </label>
                  <input
                    id="weight"
                    type="number"
                    min="0"
                    step="0.01"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder={c.weightPlaceholder}
                    className="skin-input w-full"
                    required
                  />
                </div>
              )}
              {needsVolume && (
                <div>
                  <label
                    htmlFor="volume"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: 'var(--gold)' }}
                  >
                    {c.volumeLabel}
                  </label>
                  <input
                    id="volume"
                    type="number"
                    min="0"
                    step="0.001"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    placeholder={c.volumePlaceholder}
                    className="skin-input w-full"
                    required
                  />
                </div>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={!selected || loading}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-sm font-semibold skin-btn-primary disabled:opacity-50 sm:w-auto"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Calculator className="h-4 w-4" />
            )}
            {c.submit}
          </button>
        </div>
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

      {result && <ResultCard result={result} />}

      {!isAuthenticated() && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 p-5 cartouche">
          <p className="text-sm" style={{ color: 'var(--skin-muted)' }}>
            {c.partner.question}
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: 'var(--skin-primary)' }}
          >
            {c.partner.cta}
            <ArrowRight className="h-4 w-4 flip-rtl" style={{ color: 'var(--gold)' }} />
          </Link>
        </div>
      )}
    </div>
  );
}

function ResultCard({ result }: { result: PriceSimulation }) {
  const c = simulateurCopy[useLocale()];
  const TypeIcon = TYPE_ICON[result.route.type];
  const b = result.breakdown;
  const fcfa = (n: number) => formatFcfa(n, c.numberLocale);

  return (
    <article className="relative mt-10 overflow-hidden skin-card">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil"
        style={{ background: 'var(--skin-primary)' }}
      />

      <header
        className="relative flex flex-wrap items-center justify-between gap-3 border-b px-6 py-5"
        style={{ borderColor: 'var(--skin-border)' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center"
            style={{
              background: 'color-mix(in oklab, var(--skin-primary) 12%, transparent)',
              border: '1px solid var(--gold-soft)',
            }}
          >
            <TypeIcon className="h-5 w-5" style={{ color: 'var(--skin-primary)' }} />
          </div>
          <div>
            <p
              className="flex items-center gap-2 text-sm font-semibold skin-font-heading"
              style={{ color: 'var(--skin-foreground)' }}
            >
              <span>{result.route.departureCity}</span>
              <ArrowRight className="h-4 w-4 flip-rtl" style={{ color: 'var(--gold)' }} />
              <span>{result.route.arrivalCity}</span>
            </p>
            <p className="mt-1 text-xs" style={{ color: 'var(--skin-muted)' }}>
              {c.types[result.route.type]} ·{' '}
              {c.result.duration.replace('{n}', String(result.route.estimatedDurationDays))}
            </p>
          </div>
        </div>
        {result.partnerApplied && (
          <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] btn-gold">
            {c.result.partnerBadge}
          </span>
        )}
      </header>

      <div className="relative px-6 py-8 text-center">
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: 'var(--gold)' }}
        >
          {c.result.estimatedPrice}
        </p>
        <p
          className="mt-3 text-4xl font-light tracking-tight skin-font-heading sm:text-5xl"
          style={{ color: 'var(--skin-primary)' }}
        >
          {fcfa(result.price)}
        </p>
        {result.partnerApplied && result.savings > 0 && (
          <p className="mt-3 text-sm font-medium" style={{ color: 'var(--skin-foreground)' }}>
            <span style={{ textDecoration: 'line-through', color: 'var(--skin-muted)' }}>
              {fcfa(result.standardPrice)}
            </span>{' '}
            — {c.result.savings.replace('{amount}', fcfa(result.savings))}
          </p>
        )}
      </div>

      <div className="relative border-t px-6 py-6" style={{ borderColor: 'var(--skin-border)' }}>
        <h2
          className="text-[11px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: 'var(--gold)' }}
        >
          {c.result.breakdownTitle}
        </h2>
        <div className="my-5 rule-gold" />
        <dl className="space-y-3 text-sm">
          {result.weight != null && (
            <Row
              label={c.result.rowWeight}
              value={`${result.weight} kg × ${fcfa(b.ratePerKg)}/kg`}
            />
          )}
          {result.volume != null && (
            <Row
              label={c.result.rowVolume}
              value={`${result.volume} m³ × ${fcfa(b.ratePerVolume)}/m³`}
            />
          )}
          {b.mode === 'max' && (
            <Row
              label={c.result.rowMode}
              value={c.result.modeMax
                .replace('{a}', fcfa(b.priceByWeight))
                .replace('{b}', fcfa(b.priceByVolume))}
            />
          )}
          <Row
            label={c.result.rowRate}
            value={b.rateSource === 'partner' ? c.result.ratePartner : c.result.rateStandard}
          />
        </dl>
        <p className="mt-6 text-[11px] leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
          {c.result.disclaimer}
        </p>
      </div>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt style={{ color: 'var(--skin-muted)' }}>{label}</dt>
      <dd className="text-end font-medium" style={{ color: 'var(--skin-foreground)' }}>
        {value}
      </dd>
    </div>
  );
}
