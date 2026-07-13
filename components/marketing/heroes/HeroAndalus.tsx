'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useI18n, LocaleLink } from '@/i18n';

/**
 * Hero "Andalus" : un mur d'émeraude couvert de girih, une inscription
 * calligraphiée, et une image sous arc outrepassé — la silhouette d'un
 * portail andalou. Le contenu est piloté par le dictionnaire (FR/EN/AR) et
 * la composition se retourne d'elle-même en RTL (propriétés logiques).
 */
export function HeroAndalus() {
  const { t } = useI18n();

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1Label },
    { value: t.hero.stat2Value, label: t.hero.stat2Label },
    { value: t.hero.stat3Value, label: t.hero.stat3Label },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--skin-hero-1)' }}
    >
      {/* Trame géométrique : le fond n'est jamais nu, il est ouvragé. */}
      <div aria-hidden className="absolute inset-0 pattern-girih motif-veil-strong" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, transparent 40%, color-mix(in oklab, var(--skin-hero-1) 85%, black) 100%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-32 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: 'var(--gold)' }}
          >
            <span className="inline-block h-1.5 w-1.5 rotate-45" style={{ background: 'var(--gold)' }} />
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-[2.6rem] leading-[1.05] tracking-tight skin-font-heading sm:text-6xl lg:text-7xl"
            style={{ color: '#FFFCF5' }}
          >
            <span className="block font-light">{t.hero.titleLine1}</span>
            <span className="block font-semibold italic" style={{ color: 'var(--gold)' }}>
              {t.hero.titleLine2}
            </span>
            <span className="block font-light">{t.hero.titleLine3}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-xs rule-gold"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: 'color-mix(in oklab, #FFFCF5 78%, transparent)' }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <LocaleLink
              href="/simulateur"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold btn-gold"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 flip-rtl" />
            </LocaleLink>
            <LocaleLink
              href="/track"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold transition-colors"
              style={{
                color: '#FFFCF5',
                border: '1px solid color-mix(in oklab, var(--gold) 55%, transparent)',
                borderRadius: 'var(--skin-radius)',
              }}
            >
              {t.hero.ctaSecondary}
            </LocaleLink>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-s ps-4"
                style={{ borderColor: 'color-mix(in oklab, var(--gold) 40%, transparent)' }}
              >
                <dt
                  className="text-2xl font-semibold skin-font-heading sm:text-3xl"
                  style={{ color: 'var(--gold)' }}
                >
                  {s.value}
                </dt>
                <dd
                  className="mt-1 text-[0.7rem] uppercase tracking-[0.14em]"
                  style={{ color: 'color-mix(in oklab, #FFFCF5 60%, transparent)' }}
                >
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Le portail : image sous arc outrepassé, doublée d'un cadre d'or. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -inset-3 arch-horseshoe"
            style={{ background: 'color-mix(in oklab, var(--gold) 30%, transparent)' }}
          />
          <div className="relative aspect-[3/4] w-full overflow-hidden arch-horseshoe">
            {/* 22.jpg : fond sombre, sujet centré — la seule image du fonds
                qui tienne sous l'arc sans jurer avec l'émeraude. */}
            <Image
              src="/gallery/22.jpg"
              alt=""
              fill
              unoptimized
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 pattern-mashrabiya motif-veil"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
