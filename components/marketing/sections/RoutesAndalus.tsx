'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useI18n, LocaleLink } from '@/i18n';

/**
 * Section "Nos lignes" : les liaisons du réseau, présentées comme trois
 * portes cintrées. Chaque carte porte un arc brisé en tête (le mihrab),
 * le trajet, le tarif et les jours de départ.
 */
export function RoutesAndalus() {
  const { t } = useI18n();

  return (
    <section id="routes" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="eyebrow">{t.routes.eyebrow}</span>
          <h2
            className="mt-4 text-3xl font-light tracking-tight skin-font-heading sm:text-5xl"
            style={{ color: 'var(--skin-foreground)' }}
          >
            {t.routes.title}
          </h2>
          <p className="mt-4 max-w-xl text-base" style={{ color: 'var(--skin-muted)' }}>
            {t.routes.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.routes.items.map((route, i) => (
            <motion.article
              key={`${route.from}-${route.to}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden p-7 skin-card"
            >
              {/* Arc en filigrane : la carte est une porte. */}
              <div
                aria-hidden
                className="absolute -top-10 end-[-2rem] h-40 w-32 arch pattern-girih motif-veil-strong"
                style={{ background: 'var(--skin-primary)' }}
              />

              <div className="relative">
                <div
                  className="flex flex-wrap items-center gap-2 text-lg font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  <span>{route.from}</span>
                  <ArrowRight
                    className="h-4 w-4 flip-rtl"
                    style={{ color: 'var(--gold)' }}
                  />
                  <span>{route.to}</span>
                </div>

                <p
                  className="mt-6 text-3xl font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-primary)' }}
                >
                  {route.price}
                </p>
                <p
                  className="mt-1 text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: 'var(--gold)' }}
                >
                  {route.schedule}
                </p>

                <div className="my-6 rule-gold" />

                <p className="text-sm leading-relaxed" style={{ color: 'var(--skin-muted)' }}>
                  {route.note}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <LocaleLink
            href="/simulateur"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold skin-btn-primary"
          >
            {t.pricing.cta}
            <ArrowRight className="h-4 w-4 flip-rtl" />
          </LocaleLink>
          <p className="mt-4 text-xs" style={{ color: 'var(--skin-muted)' }}>
            {t.pricing.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
