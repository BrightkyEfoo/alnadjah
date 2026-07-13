import { HeroAndalus } from '@/components/marketing/heroes/HeroAndalus';
import { RoutesAndalus } from '@/components/marketing/sections/RoutesAndalus';
import { Gallery } from '@/components/marketing/Gallery';
import { ServicesAndalus } from '@/components/marketing/sections/ServicesAndalus';
import { StatsAndalus } from '@/components/marketing/sections/StatsAndalus';
import { CTAAndalus } from '@/components/marketing/sections/CTAAndalus';

/**
 * Layout "Andalus" : la home d'Al-Nadjah Express.
 *
 * Rythme voulu : mur d'émeraude (hero) -> papier (lignes) -> papier (galerie)
 * -> papier ouvragé (services) -> mur d'émeraude (chiffres) -> cartouche (CTA).
 * L'alternance sombre/ivoire structure la page comme une façade : pleins,
 * vides, pleins.
 */
export function AndalusLayout() {
  return (
    <>
      <HeroAndalus />
      <RoutesAndalus />
      <Gallery />
      <ServicesAndalus />
      <StatsAndalus />
      <CTAAndalus />
    </>
  );
}
