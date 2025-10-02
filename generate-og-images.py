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
GRADIENT_START = "#2563EB"  # Blue from gradient
GRADIENT_END = "#9333EA"    # Purple from gradient

def create_gradient_background(width, height):
    """Create a clean dark background with subtle gradient accent"""
    img = Image.new('RGB', (width, height), DARK_BG)
    draw = ImageDraw.Draw(img)

    # Add subtle gradient accent at top (much lighter than site)
    for y in range(200):
        # Very subtle blue to purple gradient at top
        alpha = int((200 - y) / 200 * 15)  # Max 15 opacity
        if y % 2 == 0:  # Every other line for subtlety
            draw.line([(0, y), (width, y)], fill=(37, 99, 235, alpha))

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

    # Use Inter-like system fonts
    try:
        # Try SF Pro (macOS), fallback to Arial/Helvetica
        title_font = ImageFont.truetype("/System/Library/Fonts/SF-Pro-Display-Bold.otf", 90)
        subtitle_font = ImageFont.truetype("/System/Library/Fonts/SF-Pro-Display-Semibold.otf", 48)
        detail_font = ImageFont.truetype("/System/Library/Fonts/SF-Pro-Text-Medium.otf", 36)
    except:
        try:
            title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 90)
            subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 48)
            detail_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
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

    img.save('assets/images/og-homepage-temp.jpg', 'JPEG', quality=95)
    print("✓ Created og-homepage.jpg")

def create_workshop_og_image():
    """Workshop page: Claude Code Workshop"""
    img = create_gradient_background(1200, 630)
    draw = ImageDraw.Draw(img)

    try:
        title_font = ImageFont.truetype("/System/Library/Fonts/SF-Pro-Display-Bold.otf", 80)
        subtitle_font = ImageFont.truetype("/System/Library/Fonts/SF-Pro-Display-Semibold.otf", 46)
        detail_font = ImageFont.truetype("/System/Library/Fonts/SF-Pro-Text-Medium.otf", 34)
    except:
        try:
            title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 80)
            subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 46)
            detail_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 34)
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

    img.save('assets/images/og-workshop-temp.jpg', 'JPEG', quality=95)
    print("✓ Created og-workshop.jpg")

def create_roi_calculator_og_image():
    """ROI Calculator: Impact Calculator"""
    img = create_gradient_background(1200, 630)
    draw = ImageDraw.Draw(img)

    try:
        title_font = ImageFont.truetype("/System/Library/Fonts/SF-Pro-Display-Bold.otf", 78)
        subtitle_font = ImageFont.truetype("/System/Library/Fonts/SF-Pro-Display-Semibold.otf", 44)
        detail_font = ImageFont.truetype("/System/Library/Fonts/SF-Pro-Text-Medium.otf", 36)
        stat_font = ImageFont.truetype("/System/Library/Fonts/SF-Pro-Display-Bold.otf", 120)
    except:
        try:
            title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 78)
            subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 44)
            detail_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
            stat_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 120)
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
