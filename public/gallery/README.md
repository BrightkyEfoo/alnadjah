# Images de la galerie

Images de la galerie de la page d'accueil (section sous le hero).

## Convention

- Fichiers nommés `01.jpg`, `02.jpg`, … `NN.jpg` (séquentiel, sans trou).
- Servis à `/gallery/01.jpg`, etc. (dossier `public/`).
- Le composant `components/marketing/Gallery.tsx` génère la liste à partir de
  `GALLERY_COUNT` (nombre d'images). Un item sur 6 est affiché en large.

## Ajouter / retirer des images

1. Dépose le fichier en respectant la numérotation (`23.jpg`, `24.jpg`, …).
2. Mets à jour `GALLERY_COUNT` dans `Gallery.tsx`.

## Notes

- Les images sont servies telles quelles (`unoptimized`) — pas d'optimiseur Next,
  donc aucun 400. Compresse-les avant (WebP/JPEG ~80, ~1600px de large max) pour
  garder la page légère.
- Format paysage recommandé.
