# Images de la galerie

Déposez ici les images de la galerie de la page d'accueil (section sous le hero).

## Convention

- Nommez les fichiers `01.jpg`, `02.jpg`, … `06.jpg` (ou `.png`/`.webp`).
- Ils sont servis à `/gallery/01.jpg`, etc. (dossier `public/`).
- Le tableau `GALLERY` dans `components/marketing/Gallery.tsx` référence ces
  chemins. Ajoutez/retirez des entrées ou changez `alt` / `wide` (2 colonnes)
  selon vos visuels.

## Conseils

- Format paysage recommandé (~1600×900 pour les `wide`, ~1200×900 sinon).
- Compressez (WebP ou JPEG qualité ~80) — ces images sont servies telles quelles.
- Pas de fichier = image cassée à l'affichage (pas d'erreur de build).
