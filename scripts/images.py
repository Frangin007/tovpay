"""Variantes légères des photos du site, pour un chargement rapide.

Pour chaque photo source de public/images/ (fichier .webp), écrit dans public/images/variantes/ :
  - une version par largeur utile (480, 640, 960, 1280, 1600, 1920 px, sans dépasser la largeur
    de la source), en WebP qualité 80 : le navigateur choisit la plus petite qui suffit à
    l'écran (attribut srcset, composant Photo) ;
  - les recadrages déclarés dans CROPS (photo d'accueil en portrait pour les téléphones).
Écrit aussi src/lib/imageVariants.ts (dimensions de chaque source et largeurs disponibles, lu
par images.ts) et la version légère du logo (barre de navigation, pied de page).

Les sources ne sont jamais modifiées. Après avoir ajouté ou remplacé une photo :

    python scripts/images.py

Nécessite Python 3 et Pillow (pip install Pillow). Une photo remplacée doit changer de nom :
les images sont gardées en cache 30 jours par les navigateurs (vercel.json).
"""

import sys
from pathlib import Path

from PIL import Image

sys.stdout.reconfigure(encoding="utf-8")  # accents lisibles dans la console Windows

ROOT = Path(__file__).resolve().parent.parent
SOURCES = ROOT / "public" / "images"
VARIANTS = SOURCES / "variantes"
MANIFEST = ROOT / "src" / "lib" / "imageVariants.ts"

WIDTHS = (480, 640, 960, 1280, 1600, 1920)
QUALITY = 80  # identique à l'œil à la source, environ deux fois plus léger
# Photos très granuleuses : le grain coûte cher en qualité 80 ; 75 reste identique à l'œil à la
# taille affichée (classe-enseignante : 142 Ko au lieu de 252 en 1600 px).
QUALITY_BY_PHOTO = {"classe-enseignante": 75}

# Recadrages centrés, à pleine hauteur : nom de la photo -> {suffixe: (largeur, hauteur) du ratio}
CROPS = {
    # Hero de l'accueil sur écran en portrait : seule la bande centrale de la photo y est visible
    # (fond en « cover ») ; ce recadrage donne la même image, à la même netteté, deux fois plus léger.
    "accueil-enseignante": {"portrait": (3, 4)},
}

# Logo : (source, version légère, hauteur en px). Affiché sur 44 à 48 px de haut : 150 px couvre
# les écrans de densité 3. Moitié exacte de la source (328 x 300) : mêmes proportions, donc même
# largeur affichée au pixel près. WebP sans perte, transparence conservée.
LOGOS = [
    (ROOT / "public" / "brand" / "tovpay-logo-transparent.png", ROOT / "public" / "brand" / "tovpay-logo-nav.webp", 150),
]


def save_webp(image: Image.Image, path: Path, quality: int = QUALITY) -> int:
    image.save(path, "WEBP", quality=quality, method=6)
    return path.stat().st_size


def main() -> None:
    VARIANTS.mkdir(exist_ok=True)
    written: set[Path] = set()
    manifest: dict[str, tuple[int, int, list[int]]] = {}
    before = after = 0

    for source in sorted(SOURCES.glob("*.webp")):
        name = source.stem
        with Image.open(source) as opened:
            image = opened.convert("RGBA" if "A" in opened.getbands() else "RGB")
        w0, h0 = image.size
        quality = QUALITY_BY_PHOTO.get(name, QUALITY)
        widths = sorted({w for w in WIDTHS if w < w0} | {w0})
        manifest[name] = (w0, h0, widths)
        sizes = []
        for w in widths:
            resized = image if w == w0 else image.resize((w, round(h0 * w / w0)), Image.LANCZOS)
            path = VARIANTS / f"{name}-{w}.webp"
            sizes.append(save_webp(resized, path, quality))
            written.add(path)
        for suffix, (rw, rh) in CROPS.get(name, {}).items():
            cw = min(w0, round(h0 * rw / rh))
            left = (w0 - cw) // 2
            path = VARIANTS / f"{name}-{suffix}.webp"
            size = save_webp(image.crop((left, 0, left + cw, h0)), path, quality)
            written.add(path)
            print(f"  {name}-{suffix}.webp : {cw} x {h0}, {size // 1024} Ko")
        before += source.stat().st_size
        after += sizes[-1]
        detail = ", ".join(f"{w}:{s // 1024}K" for w, s in zip(widths, sizes))
        print(f"{name} ({w0} x {h0}, source {source.stat().st_size // 1024} Ko) -> {detail}")

    # Variantes dont la source ou la largeur n'existe plus
    for stale in sorted(set(VARIANTS.glob("*.webp")) - written):
        stale.unlink()
        print(f"supprimé : {stale.relative_to(ROOT).as_posix()}")

    lines = [
        "// Fichier écrit par scripts/images.py : ne pas modifier à la main.",
        "// Pour chaque photo de public/images/ : dimensions de la source et largeurs disponibles, en",
        "// pixels (fichiers public/images/variantes/<nom>-<largeur>.webp).",
        "export const IMAGE_VARIANTS: Record<string, { width: number; height: number; widths: readonly number[] }> = {",
        *(
            f"  '{name}': {{ width: {w0}, height: {h0}, widths: [{', '.join(map(str, widths))}] }},"
            for name, (w0, h0, widths) in manifest.items()
        ),
        "}",
        "",
    ]
    MANIFEST.write_text("\n".join(lines), encoding="utf-8", newline="\n")  # fins de ligne du dépôt (LF)

    for source, target, height in LOGOS:
        with Image.open(source) as logo:
            width = logo.width * height // logo.height
            if width * logo.height != height * logo.width:
                raise SystemExit(f"Logo : la hauteur {height} ne garde pas exactement les proportions de {source.name}.")
            logo.convert("RGBA").resize((width, height), Image.LANCZOS).save(target, "WEBP", lossless=True, method=6)
        print(f"logo : {target.relative_to(ROOT).as_posix()} ({width} x {height}, {target.stat().st_size // 1024} Ko, source {source.stat().st_size // 1024} Ko)")

    print(f"\nPleine largeur : {before // 1024} Ko de sources -> {after // 1024} Ko. Liste écrite dans {MANIFEST.relative_to(ROOT).as_posix()}.")


if __name__ == "__main__":
    main()
