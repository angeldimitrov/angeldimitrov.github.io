#!/usr/bin/env python3
"""
Generate Open Graph images for social media sharing
Creates 1200x630px images with brand colors and messaging
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Brand colors from tailwind.config.js
PRIMARY = "#3B82F6"  # Blue
SECONDARY = "#1E40AF"  # Darker blue
DARK_BG = "#1e293b"  # Dark slate
WHITE = "#ffffff"
PURPLE = "#c084fc"

def create_gradient_background(width, height):
    """Create a dark gradient background"""
    img = Image.new('RGB', (width, height), DARK_BG)
    draw = ImageDraw.Draw(img)

    # Add subtle grid pattern (matching hero section)
    grid_color = (148, 163, 184, 20)  # rgba(148, 163, 184, 0.08) approximation
    for x in range(0, width, 50):
        draw.line([(x, 0), (x, height)], fill=grid_color, width=1)
    for y in range(0, height, 50):
        draw.line([(0, y), (width, y)], fill=grid_color, width=1)

    return img

def add_text_with_shadow(draw, text, position, font, text_color, shadow_color):
    """Add text with subtle shadow for depth"""
    x, y = position
    # Shadow
    draw.text((x + 2, y + 2), text, font=font, fill=shadow_color)
    # Main text
    draw.text((x, y), text, font=font, fill=text_color)

def create_homepage_og_image():
    """Homepage: Ship Software 3x Faster"""
    img = create_gradient_background(1200, 630)
    draw = ImageDraw.Draw(img)

    # Try to load system fonts, fall back to default
    try:
        title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 80)
        subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 40)
        cta_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 32)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        cta_font = ImageFont.load_default()

    # Main headline - centered
    headline = "Ship Software 3x Faster"
    bbox = draw.textbbox((0, 0), headline, font=title_font)
    text_width = bbox[2] - bbox[0]
    x = (1200 - text_width) // 2

    add_text_with_shadow(draw, headline, (x, 150), title_font, WHITE, "#000000")

    # Subtitle
    subtitle = "AI-Native Development Consulting"
    bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    text_width = bbox[2] - bbox[0]
    x = (1200 - text_width) // 2

    add_text_with_shadow(draw, subtitle, (x, 280), subtitle_font, PURPLE, "#000000")

    # Value props
    props = [
        "✓ 40-60% Productivity Gains",
        "✓ Expert Consulting for CTOs",
        "✓ Proven Results at Scale"
    ]

    y = 380
    for prop in props:
        bbox = draw.textbbox((0, 0), prop, font=cta_font)
        text_width = bbox[2] - bbox[0]
        x = (1200 - text_width) // 2
        draw.text((x, y), prop, font=cta_font, fill=WHITE)
        y += 50

    # Save
    img.save('assets/images/og-homepage-temp.jpg', 'JPEG', quality=95)
    print("✓ Created og-homepage.jpg")

def create_workshop_og_image():
    """Workshop page: Claude Code Workshop"""
    img = create_gradient_background(1200, 630)
    draw = ImageDraw.Draw(img)

    try:
        title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 72)
        subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 42)
        detail_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 32)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        detail_font = ImageFont.load_default()

    # Title
    title = "Claude Code Workshop"
    bbox = draw.textbbox((0, 0), title, font=title_font)
    text_width = bbox[2] - bbox[0]
    x = (1200 - text_width) // 2
    add_text_with_shadow(draw, title, (x, 120), title_font, WHITE, "#000000")

    # Subtitle
    subtitle = "2-Day Intensive Training"
    bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    text_width = bbox[2] - bbox[0]
    x = (1200 - text_width) // 2
    add_text_with_shadow(draw, subtitle, (x, 230), subtitle_font, PURPLE, "#000000")

    # Key features
    features = [
        "• Plan Mode & Subagents",
        "• MCP Protocol Setup",
        "• Custom Commands & Workflows",
        "• Production-Ready Implementations"
    ]

    y = 340
    for feature in features:
        bbox = draw.textbbox((0, 0), feature, font=detail_font)
        text_width = bbox[2] - bbox[0]
        x = (1200 - text_width) // 2
        draw.text((x, y), feature, font=detail_font, fill=WHITE)
        y += 50

    img.save('assets/images/og-workshop-temp.jpg', 'JPEG', quality=95)
    print("✓ Created og-workshop.jpg")

def create_roi_calculator_og_image():
    """ROI Calculator: Impact Calculator"""
    img = create_gradient_background(1200, 630)
    draw = ImageDraw.Draw(img)

    try:
        title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 70)
        subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 40)
        detail_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 32)
        stat_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 60)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        detail_font = ImageFont.load_default()
        stat_font = ImageFont.load_default()

    # Title
    title = "AI Development Impact"
    bbox = draw.textbbox((0, 0), title, font=title_font)
    text_width = bbox[2] - bbox[0]
    x = (1200 - text_width) // 2
    add_text_with_shadow(draw, title, (x, 100), title_font, WHITE, "#000000")

    # Subtitle
    subtitle = "Calculate Your Team's Potential"
    bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    text_width = bbox[2] - bbox[0]
    x = (1200 - text_width) // 2
    add_text_with_shadow(draw, subtitle, (x, 200), subtitle_font, PURPLE, "#000000")

    # Key stat
    stat = "40-60%"
    bbox = draw.textbbox((0, 0), stat, font=stat_font)
    text_width = bbox[2] - bbox[0]
    x = (1200 - text_width) // 2
    draw.text((x, 300), stat, font=stat_font, fill=PRIMARY)

    # Description
    desc = "Productivity Increase"
    bbox = draw.textbbox((0, 0), desc, font=subtitle_font)
    text_width = bbox[2] - bbox[0]
    x = (1200 - text_width) // 2
    draw.text((x, 390), desc, font=subtitle_font, fill=WHITE)

    # CTA
    cta = "Free Calculator • No Signup Required"
    bbox = draw.textbbox((0, 0), cta, font=detail_font)
    text_width = bbox[2] - bbox[0]
    x = (1200 - text_width) // 2
    draw.text((x, 500), cta, font=detail_font, fill=WHITE)

    img.save('assets/images/og-roi-calculator-temp.jpg', 'JPEG', quality=95)
    print("✓ Created og-roi-calculator.jpg")

if __name__ == "__main__":
    print("Generating Open Graph images (1200x630px)...")
    print()

    create_homepage_og_image()
    create_workshop_og_image()
    create_roi_calculator_og_image()

    print()
    print("✅ All OG images generated successfully!")
    print("   Images saved to assets/images/")
