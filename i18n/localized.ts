/**
 * Relâche les littéraux d'un objet `as const` en `string`, en préservant la
 * forme (clés, imbrication, longueur des tableaux).
 *
 * Sert à typer les traductions contre le français : on écrit le FR en
 * `as const`, puis `const en: Localized<typeof fr> = {…}` — une clé manquante
 * ou un tableau de mauvaise longueur casse le type-check, mais les textes
 * restent libres.
 */
export type Localized<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? { readonly [K in keyof T]: Localized<U> }
    : { readonly [K in keyof T]: Localized<T[K]> };
