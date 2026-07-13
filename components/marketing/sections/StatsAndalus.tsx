'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';

/**
 * Bandeau de chiffres sur fond d'émeraude, séparés par des losanges d'or —
 * une frise épigraphique plus qu'un tableau de bord.
 */
export function StatsAndalus() {
  const { t } = useI18n();

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: 'var(--skin-hero-1)' }}
    >
      <div aria-hidden className="absolute inset-0 pattern-zellige motif-veil-strong" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: 'var(--gold)' }}
          >
            {t.stats.eyebrow}
          </span>
          <h2
            className="mt-3 text-3xl font-light skin-font-heading sm:text-4xl"
            style={{ color: '#FFFCF5' }}
          >
            {t.stats.title}
          </h2>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {t.stats.items.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative px-4 text-center"
            >
              {i > 0 && (
                <span
                  aria-hidden
                  className="absolute start-0 top-1/2 hidden h-2 w-2 -translate-y-1/2 rotate-45 lg:block"
                  style={{ background: 'var(--gold)' }}
                />
              )}
              <dt
                className="text-4xl font-semibold skin-font-heading sm:text-5xl"
                style={{ color: 'var(--gold)' }}
              >
                {s.value}
              </dt>
              <dd
                className="mt-3 text-xs uppercase tracking-[0.16em]"
                style={{ color: 'color-mix(in oklab, #FFFCF5 65%, transparent)' }}
              >
                {s.label}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
