# Inter Font

## Overview

This directory contains the Inter font family by Rasmus Andersson, used for generating Open Graph social media preview images.

**Version**: Inter 4.1
**Source**: https://github.com/rsms/inter
**License**: SIL Open Font License 1.1 (OFL)

## Files

- `InterVariable.ttf` - Variable font with adjustable weight (used for OG images)
- `Inter.ttc` - TrueType Collection fallback
- `LICENSE.txt` - Full SIL OFL 1.1 license text

## Usage

This font is used by `generate-og-images.py` to create social media preview images that match the website's typography (Inter from Google Fonts).

### In OG Image Generation

```python
# Primary: Variable font with weight control
title_font = ImageFont.truetype("assets/fonts/inter/InterVariable.ttf", 90)
title_font.set_variation_by_name('Bold')

# Fallback: TrueType Collection
title_font = ImageFont.truetype("assets/fonts/inter/Inter.ttc", 90)
```

## License Summary

**SIL Open Font License 1.1** allows you to:
- ✅ Use the font commercially
- ✅ Modify and redistribute the font
- ✅ Bundle the font with software
- ✅ Sell products that use the font

**Requirements**:
- Include the license file (LICENSE.txt) when redistributing
- Do not sell the font files standalone

For full license terms, see `LICENSE.txt`.

## Why Bundled?

Inter font files are bundled in this repository (rather than downloaded at runtime) to:
1. **Ensure reproducibility** - OG images can be regenerated anytime without external dependencies
2. **Match website fonts** - Inter is used on the website via Google Fonts
3. **Legal compliance** - SIL OFL 1.1 explicitly permits bundling and redistribution

## Regenerating OG Images

To regenerate social media preview images:

```bash
python3 generate-og-images.py
```

This will recreate all OG images in `assets/images/` using the bundled Inter font.
