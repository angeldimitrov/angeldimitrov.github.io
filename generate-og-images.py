#!/usr/bin/env python3
"""
Generate Open Graph images for social media sharing

Creates 1200x630px images with brand colors and messaging for:
- Homepage (og-homepage.jpg)
- Workshop page (og-workshop.jpg)
- ROI Calculator (og-roi-calculator.jpg)
- Default fallback (og-default.jpg)

Requirements:
- Python 3.x
- Pillow (PIL): pip install Pillow
- Inter font files (bundled in assets/fonts/inter/)

Usage:
    python3 generate-og-images.py

Output:
    Generates all OG images in assets/images/ directory
    Images are 1200x630px JPEG format, quality 95, ~95KB each

Design:
    - Background: Solid dark slate (#1e293b) matching site
    - Fonts: Inter Variable font (same as website)
    - Colors: White text with purple accents (#c084fc)
    - Brand colors: Blue (#3B82F6) for stats

Font License:
    Inter font by Rasmus Andersson
    Licensed under SIL Open Font License 1.1
    https://github.com/rsms/inter
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Brand colors from tailwind.config.js
PRIMARY = "#3B82F6"  # Blue - used for stats and key numbers
DARK_BG = "#1e293b"  # Dark slate - background color
WHITE = "#ffffff"    # White - primary text color
PURPLE = "#c084fc"   # Purple - accent color for subtitles

# Note: SECONDARY, GRADIENT_START, GRADIENT_END not currently used
# Reserved for future gradient backgrounds or button styling if needed

def create_gradient_background(width, height):
    """Create a solid dark background matching the site"""
    img = Image.new('RGB', (width, height), DARK_BG)
    return img

def add_text_centered(draw, text, y, font, color, width=1200):
    """Add centered text at given y position"""
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    x = (width - text_width) // 2
    draw.text((x, y), text, font=font, fill=color)

def create_homepage_og_image():
    """Homepage: Ship Software 3x Faster"""
    img = create_gradient_background(1200, 630)
    draw = ImageDraw.Draw(img)

    # Use Inter font from the website
    try:
        # Use Inter Variable font (same as website)
        title_font = ImageFont.truetype("assets/fonts/inter/InterVariable.ttf", 90)
        title_font.set_variation_by_name('Bold')
        subtitle_font = ImageFont.truetype("assets/fonts/inter/InterVariable.ttf", 48)
        subtitle_font.set_variation_by_name('SemiBold')
        detail_font = ImageFont.truetype("assets/fonts/inter/InterVariable.ttf", 36)
        detail_font.set_variation_by_name('Medium')
    except:
        # Fallback to Inter.ttc or system fonts
        try:
            title_font = ImageFont.truetype("assets/fonts/inter/Inter.ttc", 90)
            subtitle_font = ImageFont.truetype("assets/fonts/inter/Inter.ttc", 48)
            detail_font = ImageFont.truetype("assets/fonts/inter/Inter.ttc", 36)
        except:
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()
            detail_font = ImageFont.load_default()

    # Main headline
    add_text_centered(draw, "Ship Software 3x Faster", 140, title_font, WHITE)

    # Subtitle
    add_text_centered(draw, "AI-Native Development Consulting", 260, subtitle_font, PURPLE)

    # Value props - clean checkmarks
    add_text_centered(draw, "40-60% Productivity Gains", 360, detail_font, WHITE)
    add_text_centered(draw, "Expert Consulting for CTOs", 420, detail_font, WHITE)
    add_text_centered(draw, "Proven Results at Scale", 480, detail_font, WHITE)

    img.save('assets/images/og-homepage.jpg', 'JPEG', quality=95)
    print("✓ Created og-homepage.jpg")

def create_workshop_og_image():
    """Workshop page: Claude Code Workshop"""
    img = create_gradient_background(1200, 630)
    draw = ImageDraw.Draw(img)

    try:
        title_font = ImageFont.truetype("assets/fonts/inter/InterVariable.ttf", 80)
        title_font.set_variation_by_name('Bold')
        subtitle_font = ImageFont.truetype("assets/fonts/inter/InterVariable.ttf", 46)
        subtitle_font.set_variation_by_name('SemiBold')
        detail_font = ImageFont.truetype("assets/fonts/inter/InterVariable.ttf", 34)
        detail_font.set_variation_by_name('Medium')
    except:
        try:
            title_font = ImageFont.truetype("assets/fonts/inter/Inter.ttc", 80)
            subtitle_font = ImageFont.truetype("assets/fonts/inter/Inter.ttc", 46)
            detail_font = ImageFont.truetype("assets/fonts/inter/Inter.ttc", 34)
        except:
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()
            detail_font = ImageFont.load_default()

    # Title
    add_text_centered(draw, "Claude Code Workshop", 120, title_font, WHITE)

    # Subtitle
    add_text_centered(draw, "2-Day Intensive Training", 230, subtitle_font, PURPLE)

    # Key features
    add_text_centered(draw, "Plan Mode & Subagents", 330, detail_font, WHITE)
    add_text_centered(draw, "MCP Protocol Setup", 385, detail_font, WHITE)
    add_text_centered(draw, "Custom Commands & Workflows", 440, detail_font, WHITE)
    add_text_centered(draw, "Production-Ready Implementations", 495, detail_font, WHITE)

    img.save('assets/images/og-workshop.jpg', 'JPEG', quality=95)
    print("✓ Created og-workshop.jpg")

def create_roi_calculator_og_image():
    """ROI Calculator: Impact Calculator"""
    img = create_gradient_background(1200, 630)
    draw = ImageDraw.Draw(img)

    try:
        title_font = ImageFont.truetype("assets/fonts/inter/InterVariable.ttf", 78)
        title_font.set_variation_by_name('Bold')
        subtitle_font = ImageFont.truetype("assets/fonts/inter/InterVariable.ttf", 44)
        subtitle_font.set_variation_by_name('SemiBold')
        detail_font = ImageFont.truetype("assets/fonts/inter/InterVariable.ttf", 36)
        detail_font.set_variation_by_name('Medium')
        stat_font = ImageFont.truetype("assets/fonts/inter/InterVariable.ttf", 120)
        stat_font.set_variation_by_name('Bold')
    except:
        try:
            title_font = ImageFont.truetype("assets/fonts/inter/Inter.ttc", 78)
            subtitle_font = ImageFont.truetype("assets/fonts/inter/Inter.ttc", 44)
            detail_font = ImageFont.truetype("assets/fonts/inter/Inter.ttc", 36)
            stat_font = ImageFont.truetype("assets/fonts/inter/Inter.ttc", 120)
        except:
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()
            detail_font = ImageFont.load_default()
            stat_font = ImageFont.load_default()

    # Title
    add_text_centered(draw, "AI Development Impact", 100, title_font, WHITE)

    # Subtitle
    add_text_centered(draw, "Calculate Your Team's Potential", 200, subtitle_font, PURPLE)

    # Key stat
    add_text_centered(draw, "40-60%", 300, stat_font, PRIMARY)

    # Description
    add_text_centered(draw, "Productivity Increase", 440, subtitle_font, WHITE)

    # CTA
    add_text_centered(draw, "Free Calculator • No Signup Required", 520, detail_font, WHITE)

    img.save('assets/images/og-roi-calculator.jpg', 'JPEG', quality=95)
    print("✓ Created og-roi-calculator.jpg")

def create_default_og_image():
    """Default OG image: Copy of homepage for fallback"""
    import shutil
    shutil.copy('assets/images/og-homepage.jpg', 'assets/images/og-default.jpg')
    print("✓ Created og-default.jpg (copy of homepage)")

if __name__ == "__main__":
    print("Generating Open Graph images (1200x630px)...")
    print()

    create_homepage_og_image()
    create_workshop_og_image()
    create_roi_calculator_og_image()
    create_default_og_image()

    print()
    print("✅ All OG images generated successfully!")
    print("   Images saved to assets/images/")
