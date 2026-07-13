'use client';

import { motion } from 'framer-motion';
import {
  Truck,
  ShoppingBag,
  Scale,
  ShieldAlert,
  Route,
  MessageCircle,
} from 'lucide-react';
import { useI18n } from '@/i18n';

const ICONS = [Truck, ShoppingBag, Scale, ShieldAlert, Route, MessageCircle];

/**
 * Section "Services" : six entrées, chacune dans une niche cintrée — la
 * grille est une façade à arcades. L'icône est posée dans un médaillon d'or.
 */
export function ServicesAndalus() {
  const { t } = useI18n();

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 pattern-mashrabiya motif-veil"
        style={{ color: 'var(--skin-primary)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2
            className="mt-4 text-3xl font-light tracking-tight skin-font-heading sm:text-5xl"
            style={{ color: 'var(--skin-foreground)' }}
          >
            {t.services.title}
          </h2>
          <p className="mt-4 text-base" style={{ color: 'var(--skin-muted)' }}>
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="relative ps-16"
              >
                {/* Médaillon : carré pivoté + arc, la niche qui abrite l'icône. */}
                <span
                  aria-hidden
                  className="absolute start-0 top-0 flex h-11 w-11 items-center justify-center"
                  style={{
                    background: 'color-mix(in oklab, var(--skin-primary) 10%, transparent)',
                    border: '1px solid var(--gold-soft)',
                    transform: 'rotate(45deg)',
                  }}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: 'var(--skin-primary)', transform: 'rotate(-45deg)' }}
                  />
                </span>

                <h3
                  className="text-xl font-semibold skin-font-heading"
                  style={{ color: 'var(--skin-foreground)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-2.5 text-sm leading-relaxed"
                  style={{ color: 'var(--skin-muted)' }}
                >
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
