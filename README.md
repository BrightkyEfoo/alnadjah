# alnadjah

Site public **alnadjah** — dérivé du web-client OptiPack, rendu **autonome**
(hors monorepo). Il consomme les infos du tenant via l'API (`/tenant-meta`)
mais **n'utilise pas** les API de thème/skin : une seule peau, figée.

## Spécificités vs web-client

- **Mono-peau** : la peau est figée dans `lib/providers/SkinProvider.tsx`
  (`ALNADJAH_SKIN_ID`, défaut `forest`). `meta.skin` / `meta.theme` renvoyés par
  `/tenant-meta` sont ignorés. Pour changer la peau : éditer cette constante.
- **Galerie** : nouvelle section sur la page d'accueil, sous le hero
  (`components/marketing/Gallery.tsx`, insérée dans `ClassicLayout`). Images de
  démo Unsplash — à remplacer par les visuels réels.
- **Footer** : garde le lien `transitsoftservices.com`.
- **Standalone** : les anciens packages workspace `@transitsoftservices/{shared,
  skins,payments}` sont **vendorisés** sous `vendor/` et résolus via les alias
  `tsconfig` (plus de `workspace:*`, plus de `transpilePackages`).

## Développement

```bash
npm install
NEXT_PUBLIC_API_URL=https://api.<slug>.transitsoftservices.com/api/v1 npm run dev
# http://localhost:3001
```

## Build / Docker

```bash
npm run build            # output: standalone
docker build -t alnadjah --build-arg NEXT_PUBLIC_API_URL=https://api.<slug>.<base>/api/v1 .
```

L'image écoute sur le port **3000** (`server.js`). Déploiement prévu via la
feature **site custom** de l'orchestrateur OptiPack (git clone → docker build →
run isolé → Caddy route les hosts publics du tenant).

## Variables d'env

- `NEXT_PUBLIC_API_URL` — base de l'API tenant (`…/api/v1`). Bakée au build
  (build-arg) ; à défaut, dérivée du hostname au runtime
  (`<slug>.<base>` → `api.<slug>.<base>`).
