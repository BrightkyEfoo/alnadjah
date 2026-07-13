'use client';

import { useSkin } from '@/lib/providers/SkinProvider';
import { HOME_LAYOUTS, DEFAULT_HOME_LAYOUT } from '@/components/marketing/layouts';
import type { LayoutVariant } from '@transitsoftservices/skins';

/**
 * Page d'accueil. Le layout (composition et ordre des sections) découle du
 * `layoutVariant` de la peau active — ici "andalus", la direction artistique
 * arabo-islamique d'Al-Nadjah Express.
 */
export default function HomePage() {
  const { resolved } = useSkin();
  const variant = ((resolved as { layoutVariant?: LayoutVariant } | undefined)
    ?.layoutVariant ?? 'andalus') as LayoutVariant;
  const Layout = HOME_LAYOUTS[variant] ?? DEFAULT_HOME_LAYOUT;
  return <Layout />;
}
