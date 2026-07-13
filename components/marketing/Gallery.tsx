'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useI18n } from '@/i18n';

/**
 * Galerie en slides. Les images vivent dans public/gallery/ (01.jpg … 22.jpg)
 * et leurs textes (titre, description, alt) dans le dictionnaire i18n :
 * `t.gallery.slides[i]` correspond à `/gallery/{i+1}.jpg`. Ajouter une image =
 * déposer 23.jpg + ajouter une entrée dans les trois dictionnaires.
 *
 * Navigation : flèches, miniatures, clavier, glisser-déposer, défilement
 * automatique (en pause au survol). En arabe, tout se retourne : les flèches
 * sont miroir et le sens de progression suit le RTL.
 */
const IMAGE_COUNT = 22;
const AUTOPLAY_MS = 3200;

const SOURCES = Array.from(
  { length: IMAGE_COUNT },
  (_, i) => `/gallery/${String(i + 1).padStart(2, '0')}.jpg`,
);

export function Gallery() {
  const { t, dir } = useI18n();
  const rtl = dir === 'rtl';
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [playing, setPlaying] = useState(true);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const paginate = useCallback((dir: number) => {
    setState(([current]) => [
      (current + dir + IMAGE_COUNT) % IMAGE_COUNT,
      dir,
    ]);
  }, []);

  const goTo = useCallback((next: number) => {
    setState(([current]) => [next, next > current ? 1 : -1]);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [playing, paginate, index]);

  // Garde la miniature active visible dans la bande défilante.
  useEffect(() => {
    const strip = thumbsRef.current;
    const active = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !active) return;
    strip.scrollTo({
      left: active.offsetLeft - strip.clientWidth / 2 + active.clientWidth / 2,
      behavior: 'smooth',
    });
  }, [index]);

  const slide = t.gallery.slides[index];
  const src = SOURCES[index];
  // En RTL, une entrée "vers l'avant" doit venir de la gauche, pas de la droite.
  const enterFrom = (direction > 0 ? 1 : -1) * (rtl ? -1 : 1) * 60;

  return (
    <section id="gallery" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="eyebrow">{t.gallery.eyebrow}</span>
          <h2
            className="mt-4 text-3xl font-light tracking-tight skin-font-heading sm:text-5xl"
            style={{ color: 'var(--skin-foreground)' }}
          >
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-base" style={{ color: 'var(--skin-muted)' }}>
            {t.gallery.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-14 overflow-hidden skin-card p-0"
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
          onFocusCapture={() => setPlaying(false)}
          onBlurCapture={() => setPlaying(true)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') paginate(rtl ? 1 : -1);
            if (e.key === 'ArrowRight') paginate(rtl ? -1 : 1);
          }}
          role="region"
          aria-roledescription="carrousel"
          aria-label={t.gallery.title}
          tabIndex={0}
        >
          <div className="grid lg:grid-cols-[1.35fr_1fr]">
            {/* Média */}
            <div
              className="relative aspect-[4/3] w-full min-w-0 overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:min-h-[560px]"
              style={{ background: 'var(--skin-hero-1)' }}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={src}
                  initial={{ opacity: 0, x: enterFrom }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -enterFrom }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    const forward = rtl ? info.offset.x > 60 : info.offset.x < -60;
                    const backward = rtl ? info.offset.x < -60 : info.offset.x > 60;
                    if (forward) paginate(1);
                    else if (backward) paginate(-1);
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  {/* Les visuels sont tantôt portrait (affiches), tantôt paysage :
                      un fond flou remplit le cadre sans jamais rogner l'image. */}
                  <Image
                    src={src}
                    alt=""
                    aria-hidden
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="scale-110 object-cover blur-2xl brightness-[0.35]"
                  />
                  <Image
                    src={src}
                    alt={slide.alt}
                    fill
                    unoptimized
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="relative object-contain"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 pattern-girih motif-veil"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label={t.common.previous}
                className="absolute start-3 top-1/2 z-10 -translate-y-1/2 p-2.5 text-white transition-colors"
                style={{
                  background: 'color-mix(in oklab, var(--skin-hero-1) 75%, transparent)',
                  border: '1px solid var(--gold-soft)',
                }}
              >
                <ChevronLeft className="h-5 w-5 flip-rtl" />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label={t.common.next}
                className="absolute end-3 top-1/2 z-10 -translate-y-1/2 p-2.5 text-white transition-colors"
                style={{
                  background: 'color-mix(in oklab, var(--skin-hero-1) 75%, transparent)',
                  border: '1px solid var(--gold-soft)',
                }}
              >
                <ChevronRight className="h-5 w-5 flip-rtl" />
              </button>

              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? t.common.pause : t.common.play}
                className="absolute bottom-3 end-3 z-10 p-2.5 text-white"
                style={{
                  background: 'color-mix(in oklab, var(--skin-hero-1) 75%, transparent)',
                  border: '1px solid var(--gold-soft)',
                }}
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
            </div>

            {/* Description. `min-w-0` est nécessaire : sans lui, la largeur
                min-content de la bande de miniatures (22 vignettes en ligne)
                écraserait la colonne image à zéro. */}
            <div className="flex min-w-0 flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
              <div>
                <div
                  className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em]"
                  style={{ color: 'var(--gold)' }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span className="h-px flex-1 rule-gold" />
                  <span style={{ color: 'var(--skin-muted)' }}>
                    {String(IMAGE_COUNT).padStart(2, '0')}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                    aria-live="polite"
                  >
                    <h3
                      className="mt-6 text-2xl font-semibold tracking-tight skin-font-heading sm:text-3xl"
                      style={{ color: 'var(--skin-foreground)' }}
                    >
                      {slide.title}
                    </h3>
                    <p
                      className="mt-4 text-base leading-relaxed"
                      style={{ color: 'var(--skin-muted)' }}
                    >
                      {slide.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Miniatures : chacune sous arc brisé. */}
              <div
                ref={thumbsRef}
                className="flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {SOURCES.map((thumb, i) => (
                  <button
                    key={thumb}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={t.gallery.slides[i].title}
                    aria-current={i === index}
                    className="relative h-14 w-11 shrink-0 overflow-hidden arch transition-opacity"
                    style={{
                      opacity: i === index ? 1 : 0.45,
                      outline: i === index ? '1px solid var(--gold)' : 'none',
                      outlineOffset: '2px',
                    }}
                  >
                    <Image
                      src={thumb}
                      alt=""
                      fill
                      unoptimized
                      sizes="44px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
