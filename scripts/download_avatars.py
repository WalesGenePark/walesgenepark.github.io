import os
import requests
from pathlib import Path
import cairosvg

# Create output directory if it doesn't exist
output_dir = Path("public/images/team")
output_dir.mkdir(parents=True, exist_ok=True)

# List of team members and their avatar URLs
team_members = [
    ("sian", "b6e3f4"),
    ("david", "c1dfc4"),
    ("emma", "ffd1dc"),
    ("sarah", "e6e6fa"),
    ("michael", "d4f1f4"),
    ("lisa", "ffefd5"),
    ("james", "e0ffff"),
    ("rachel", "f0e6ff"),
    ("thomas", "e6ffe6"),
    ("catherine", "fff0f5"),
    ("richard", "e6f3ff"),
    ("helen", "f5f5f5"),
    ("paul", "f0f8ff"),
    ("anna", "ffebf2"),
    ("mark", "e6ffe6"),
    ("sophie", "fff5e6"),
    ("robert", "e6f9ff"),
    ("claire", "f0e6ff"),
    ("david-h", "e6ffee"),
]

for name, bg_color in team_members:
    # Request a much larger SVG for higher quality
    url = f"https://api.dicebear.com/7.x/personas/svg?seed={name}&backgroundColor={bg_color}&width=1024&height=1024&quality=100"
    
    # Download SVG
    response = requests.get(url)
    if response.status_code == 200:
        # Convert to PNG with high DPI settings
        output_path = output_dir / f"{name}.png"
        cairosvg.svg2png(
            bytestring=response.content,
            write_to=str(output_path),
            scale=4.0,  # Increase scale factor for better quality
            output_width=1024,
            output_height=1024
        )
        print(f"Downloaded and converted avatar for {name}")
    else:
        print(f"Failed to download avatar for {name}")

print("Done downloading avatars!")
