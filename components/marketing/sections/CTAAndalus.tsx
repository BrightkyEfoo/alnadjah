'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useI18n, LocaleLink } from '@/i18n';

const WHATSAPP_HREF = 'https://wa.me/23568888048';

/**
 * Appel à l'action final : un cartouche d'ivoire posé sur l'émeraude, tenu
 * par un double filet d'or. La dernière porte avant le contact.
 */
export function CTAAndalus() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden px-6 py-16 text-center sm:px-16 sm:py-20"
          style={{
            background: 'var(--skin-hero-1)',
            borderRadius: 'var(--skin-radius)',
            boxShadow: 'inset 0 0 0 1px var(--gold-soft)',
          }}
        >
          <div aria-hidden className="absolute inset-0 pattern-girih motif-veil-strong" />

          <div className="relative mx-auto max-w-2xl">
            <h2
              className="text-3xl font-light skin-font-heading sm:text-5xl"
              style={{ color: '#FFFCF5' }}
            >
              {t.cta.title}
            </h2>
            <div className="mx-auto mt-7 max-w-[16rem] rule-gold" />
            <p
              className="mt-7 text-base leading-relaxed"
              style={{ color: 'color-mix(in oklab, #FFFCF5 76%, transparent)' }}
            >
              {t.cta.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <LocaleLink
                href="/simulateur"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold btn-gold"
              >
                {t.cta.primary}
                <ArrowRight className="h-4 w-4 flip-rtl" />
              </LocaleLink>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition-colors"
                style={{
                  color: '#FFFCF5',
                  border: '1px solid color-mix(in oklab, var(--gold) 55%, transparent)',
                  borderRadius: 'var(--skin-radius)',
                }}
              >
                <MessageCircle className="h-4 w-4" />
                {t.cta.secondary}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
