'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Galerie de la page d'accueil (sous le hero). Grille responsive avec zoom au
 * survol. Suit la peau active via les variables --skin-*.
 *
 * Images : déposez vos fichiers dans `public/gallery/` (ex: 01.jpg … 06.jpg),
 * puis ajustez ce tableau (src, alt, wide). Les chemins commencent par
 * `/gallery/` (servis depuis public/). Voir public/gallery/README.md.
 */
interface GalleryItem {
  src: string;
  alt: string;
  /** span sur 2 colonnes pour casser la grille (facultatif). */
  wide?: boolean;
}

// Images dans public/gallery/ nommées 01.jpg … NN.jpg. Pour en ajouter/retirer :
// dépose le fichier + ajuste GALLERY_COUNT. Un item sur 6 est affiché en large.
const GALLERY_COUNT = 22;

const GALLERY: GalleryItem[] = Array.from({ length: GALLERY_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `/gallery/${n}.jpg`,
    alt: `alnadjah — photo ${i + 1}`,
    wide: i % 6 === 0,
  };
});

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: 'var(--skin-primary)' }}
          >
            En images
          </span>
          <h2
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl skin-font-heading"
            style={{ color: 'var(--skin-foreground)' }}
          >
            Notre réseau <span className="skin-gradient-text">en action.</span>
          </h2>
          <p className="mt-4 text-base" style={{ color: 'var(--skin-muted)' }}>
            De l&apos;entrepôt à votre porte : un aperçu de nos opérations au
            quotidien.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={
                'group relative overflow-hidden skin-radius skin-card p-0 ' +
                (item.wide ? 'col-span-2' : '')
              }
            >
              <div className={'relative w-full ' + (item.wide ? 'aspect-[16/9]' : 'aspect-[4/3]')}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(to top, color-mix(in oklab, var(--skin-primary) 55%, transparent), transparent 60%)',
                  }}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.alt}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
