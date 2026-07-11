'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  applySkinById,
  DEFAULT_SKIN_ID,
  listSkins,
  registerSkins,
  resolveSkin,
  type ResolvedSkin,
  type SkinCustomization,
  type SkinId,
  type SkinTokens,
} from '@transitsoftservices/skins';

// alnadjah : site MONO-PEAU. La peau est figée ici et n'est PAS pilotée par
// /tenant-meta (aucune API de thème/skin consommée). Pour changer la peau du
// site, modifier cette constante.
const ALNADJAH_SKIN_ID: SkinId = DEFAULT_SKIN_ID;

interface SkinContextValue {
  skinId: SkinId;
  customization: SkinCustomization;
  resolved: ResolvedSkin;
  /** All skins available (built-in + tenant-registered). */
  available: SkinTokens[];
  setSkin: (id: SkinId) => void;
  patchCustomization: (patch: SkinCustomization) => void;
  resetCustomization: () => void;
  publish: () => Promise<void>;
}

const SkinContext = createContext<SkinContextValue | undefined>(undefined);

// LocalStorage skin retire : le skin est centralement gere par le tenant
// (Studio admin). Aucun fallback visiteur -- coherence garantie.

export interface SkinProviderProps {
  children: ReactNode;
  initialSkinId?: SkinId;
  initialCustomization?: SkinCustomization;
  /** Extra runtime-registered skins (server-driven catalogue). */
  extraSkins?: SkinTokens[];
}

export function SkinProvider({
  children,
  initialSkinId,
  initialCustomization,
  extraSkins,
}: SkinProviderProps) {
  // Register extra skins ASAP so listSkins() returns them.
  if (extraSkins && extraSkins.length) {
    registerSkins(extraSkins);
  }

  // Peau figée : on NE suit PAS /tenant-meta (mono-peau). initialSkinId permet
  // un override serveur ponctuel, sinon la constante alnadjah.
  const [skinId, setSkinId] = useState<SkinId>(initialSkinId ?? ALNADJAH_SKIN_ID);
  const [customization, setCustomization] = useState<SkinCustomization>(
    initialCustomization ?? {},
  );

  useEffect(() => {
    applySkinById(skinId, customization);
  }, [skinId, customization]);

  const setSkin = useCallback((id: SkinId) => setSkinId(id), []);
  const patchCustomization = useCallback(
    (patch: SkinCustomization) =>
      setCustomization((prev) => ({ ...prev, ...patch })),
    [],
  );
  const resetCustomization = useCallback(() => setCustomization({}), []);

  const publish = useCallback(async () => {
    // No-op cote client : changement de skin = via dashboard admin uniquement.
  }, []);

  const resolved = useMemo(
    () => resolveSkin(skinId, customization),
    [skinId, customization],
  );
  const available = useMemo(() => listSkins(), [extraSkins]);

  const value = useMemo<SkinContextValue>(
    () => ({
      skinId,
      customization,
      resolved,
      available,
      setSkin,
      patchCustomization,
      resetCustomization,
      publish,
    }),
    [skinId, customization, resolved, available, setSkin, patchCustomization, resetCustomization, publish],
  );

  return <SkinContext.Provider value={value}>{children}</SkinContext.Provider>;
}

export function useSkin(): SkinContextValue {
  const ctx = useContext(SkinContext);
  if (!ctx) throw new Error('useSkin must be used inside <SkinProvider>');
  return ctx;
}
