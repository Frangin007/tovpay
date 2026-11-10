// Fichier écrit par scripts/images.py : ne pas modifier à la main.
// Pour chaque photo de public/images/ : dimensions de la source et largeurs disponibles, en
// pixels (fichiers public/images/variantes/<nom>-<largeur>.webp).
export const IMAGE_VARIANTS: Record<string, { width: number; height: number; widths: readonly number[] }> = {
  'accueil-enseignante': { width: 1920, height: 1280, widths: [480, 640, 960, 1280, 1600, 1920] },
  'bureau-administration': { width: 1600, height: 1221, widths: [480, 640, 960, 1280, 1600] },
  'bureau-agente-souriante': { width: 960, height: 540, widths: [480, 640, 960] },
  'bureau-agente': { width: 960, height: 1280, widths: [480, 640, 960] },
  'bureau-ordinateur': { width: 960, height: 640, widths: [480, 640, 960] },
  'bureau-telephone': { width: 1920, height: 1080, widths: [480, 640, 960, 1280, 1600, 1920] },
  'classe-enseignante': { width: 1600, height: 1067, widths: [480, 640, 960, 1280, 1600] },
  'enseignant-classe': { width: 960, height: 640, widths: [480, 640, 960] },
  'equipe-ordinateurs': { width: 1920, height: 1282, widths: [480, 640, 960, 1280, 1600, 1920] },
  'lecture-dossier': { width: 960, height: 641, widths: [480, 640, 960] },
  'medecin': { width: 960, height: 1008, widths: [480, 640, 960] },
  'reunion-bureau': { width: 1920, height: 1282, widths: [480, 640, 960, 1280, 1600, 1920] },
  'reunion-equipe': { width: 1920, height: 1282, widths: [480, 640, 960, 1280, 1600, 1920] },
  'reunion-vue-dessus': { width: 1920, height: 1280, widths: [480, 640, 960, 1280, 1600, 1920] },
  'smartphone': { width: 960, height: 640, widths: [480, 640, 960] },
  'telephone-agent': { width: 960, height: 540, widths: [480, 640, 960] },
}
