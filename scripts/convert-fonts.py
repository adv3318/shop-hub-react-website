from __future__ import annotations

from pathlib import Path
from fontTools import ttLib

ROOT = Path(__file__).resolve().parents[1]
FONTS_DIR = ROOT / "src" / "assets" / "fonts"


def _is_up_to_date(src: Path, out: Path) -> bool:
    return out.exists() and out.stat().st_mtime >= src.stat().st_mtime


def _convert(src: Path, out: Path, flavor: str) -> None:
    print(f"Converting: {src.name} -> {out.name}")
    font = ttLib.TTFont(src)
    font.flavor = flavor
    font.save(out)
    print(f"  Done: {out.name} ({out.stat().st_size / 1024:.1f} KB)")


def main() -> None:
    FONTS_DIR.mkdir(parents=True, exist_ok=True)

    sources: list[Path] = []
    for ext in ("*.ttf", "*.otf"):
        sources.extend(FONTS_DIR.glob(ext))

    if not sources:
        print(f"No fonts found in: {FONTS_DIR}")
        return

    for src in sources:
        woff  = src.with_suffix(".woff")
        woff2 = src.with_suffix(".woff2")

        if not _is_up_to_date(src, woff):
            _convert(src, woff, "woff")

        if not _is_up_to_date(src, woff2):
            _convert(src, woff2, "woff2")

    print("\nDone.")


if __name__ == "__main__":
    main()