#!/usr/bin/env python3
"""
Generate app icons and splash screen for Korean learning app
"""
from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, output_path):
    """Create app icon with Korean theme"""
    # Create image with gradient background
    img = Image.new('RGB', (size, size), '#FFFFFF')
    draw = ImageDraw.Draw(img)

    # Create gradient background (sage green to light cream)
    for y in range(size):
        ratio = y / size
        r = int(123 + (245 - 123) * ratio)  # 7B to F5
        g = int(148 + (241 - 148) * ratio)  # 94 to F1
        b = int(126 + (236 - 126) * ratio)  # 7E to EC
        draw.rectangle([(0, y), (size, y+1)], fill=(r, g, b))

    # Draw rounded rectangle background
    margin = size // 6
    bg_color = '#FFFFFF'
    draw.rounded_rectangle(
        [(margin, margin), (size - margin, size - margin)],
        radius=size // 8,
        fill=bg_color
    )

    # Draw Korean letter "한" (Han) in the center
    # Using simple geometric shapes to create the character
    center_x = size // 2
    center_y = size // 2
    char_size = size // 3

    # Draw "한" character components using rectangles
    stroke_width = max(size // 20, 1)
    char_color = '#7B947E'  # Sage color

    # Top horizontal line (ㅎ top part)
    draw.rectangle(
        [(center_x - char_size//2, center_y - char_size//2),
         (center_x + char_size//2, center_y - char_size//2 + stroke_width)],
        fill=char_color
    )

    # Middle horizontal line
    draw.rectangle(
        [(center_x - char_size//2, center_y - stroke_width//2),
         (center_x + char_size//2, center_y + stroke_width//2)],
        fill=char_color
    )

    # Left vertical line
    draw.rectangle(
        [(center_x - char_size//2, center_y - char_size//2),
         (center_x - char_size//2 + stroke_width, center_y + char_size//2)],
        fill=char_color
    )

    # Right vertical line
    draw.rectangle(
        [(center_x + char_size//2 - stroke_width, center_y - char_size//2),
         (center_x + char_size//2, center_y + char_size//2)],
        fill=char_color
    )

    # Bottom horizontal line
    draw.rectangle(
        [(center_x - char_size//2, center_y + char_size//2 - stroke_width),
         (center_x + char_size//2, center_y + char_size//2)],
        fill=char_color
    )

    # Add small decorative element (book icon suggestion)
    accent_color = '#F99B85'  # Coral color
    dot_size = size // 20
    draw.ellipse(
        [(size - margin - dot_size*2, margin + dot_size),
         (size - margin - dot_size, margin + dot_size*2)],
        fill=accent_color
    )

    img.save(output_path, 'PNG')
    print(f"Created icon: {output_path} ({size}x{size})")

def create_splash_screen(width, height, output_path):
    """Create full splash screen"""
    img = Image.new('RGB', (width, height), '#FFFFFF')
    draw = ImageDraw.Draw(img)

    # Create gradient background
    for y in range(height):
        ratio = y / height
        r = int(123 + (245 - 123) * ratio)
        g = int(148 + (241 - 148) * ratio)
        b = int(126 + (236 - 126) * ratio)
        draw.rectangle([(0, y), (width, y+1)], fill=(r, g, b))

    # Draw center logo area
    center_x = width // 2
    center_y = height // 2
    logo_size = min(width, height) // 3

    # White circle background
    circle_radius = logo_size // 2
    draw.ellipse(
        [(center_x - circle_radius, center_y - circle_radius),
         (center_x + circle_radius, center_y + circle_radius)],
        fill='#FFFFFF',
        outline='#7B947E',
        width=max(logo_size // 30, 1)
    )

    # Draw Korean character "한" similar to icon
    char_size = logo_size // 2
    stroke_width = max(logo_size // 15, 1)
    char_color = '#7B947E'

    # Top horizontal line
    draw.rectangle(
        [(center_x - char_size//2, center_y - char_size//2),
         (center_x + char_size//2, center_y - char_size//2 + stroke_width)],
        fill=char_color
    )

    # Middle horizontal line
    draw.rectangle(
        [(center_x - char_size//2, center_y - stroke_width//2),
         (center_x + char_size//2, center_y + stroke_width//2)],
        fill=char_color
    )

    # Left vertical line
    draw.rectangle(
        [(center_x - char_size//2, center_y - char_size//2),
         (center_x - char_size//2 + stroke_width, center_y + char_size//2)],
        fill=char_color
    )

    # Right vertical line
    draw.rectangle(
        [(center_x + char_size//2 - stroke_width, center_y - char_size//2),
         (center_x + char_size//2, center_y + char_size//2)],
        fill=char_color
    )

    # Bottom horizontal line
    draw.rectangle(
        [(center_x - char_size//2, center_y + char_size//2 - stroke_width),
         (center_x + char_size//2, center_y + char_size//2)],
        fill=char_color
    )

    # Add decorative elements
    accent_color = '#F99B85'

    # Top decoration
    for i in range(3):
        x = center_x - logo_size//3 + i * logo_size//3
        y = center_y - logo_size
        size = logo_size // 25
        draw.ellipse([(x-size, y-size), (x+size, y+size)], fill=accent_color)

    img.save(output_path, 'PNG')
    print(f"Created splash screen: {output_path} ({width}x{height})")

def main():
    """Generate all assets"""
    assets_dir = '/home/user/LetsLearnKorean/assets'

    # Create main app icon (1024x1024)
    create_icon(1024, os.path.join(assets_dir, 'icon.png'))

    # Create adaptive icon (1024x1024)
    create_icon(1024, os.path.join(assets_dir, 'adaptive-icon.png'))

    # Create splash icon (1024x1024)
    create_icon(1024, os.path.join(assets_dir, 'splash-icon.png'))

    # Create full splash screen (1242x2688 for iPhone)
    create_splash_screen(1242, 2688, os.path.join(assets_dir, 'splash.png'))

    # Create favicon (48x48)
    create_icon(48, os.path.join(assets_dir, 'favicon.png'))

    print("\n✅ All assets generated successfully!")

if __name__ == '__main__':
    main()
