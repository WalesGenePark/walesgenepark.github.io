import os
import requests
from pathlib import Path
import yaml
import glob
import re
import random

def create_dir_if_not_exists(dir_path):
    Path(dir_path).mkdir(parents=True, exist_ok=True)

def download_image(url, output_path):
    response = requests.get(url)
    if response.status_code == 200:
        with open(output_path, 'wb') as f:
            f.write(response.content)
        return True
    return False

# Curated list of image IDs from Lorem Picsum that are suitable for genomics/healthcare
CURATED_IMAGES = {
    # Laboratory/Science images
    'lab': [1, 96, 200, 250, 287, 325, 338, 341, 375, 400],
    # Conference/Meeting images
    'conference': [101, 175, 225, 275, 325, 350, 400, 450, 475, 500],
    # Education/Training images
    'education': [26, 50, 75, 125, 150, 175, 200, 225, 250, 275],
    # Healthcare/Medical images
    'medical': [425, 450, 475, 500, 525, 550, 575, 600, 625, 650],
    # Technology/Research images
    'technology': [15, 30, 45, 60, 75, 90, 105, 120, 135, 150]
}

def get_themed_image(category, output_path):
    # Select appropriate image category
    if 'conference' in category or 'forum' in category or 'networking' in category:
        image_ids = CURATED_IMAGES['conference']
    elif 'training' in category or 'workshop' in category or 'education' in category:
        image_ids = CURATED_IMAGES['education']
    elif 'research' in category or 'breakthrough' in category or 'technology' in category:
        image_ids = CURATED_IMAGES['technology']
    elif 'medical' in category or 'clinical' in category or 'disease' in category:
        image_ids = CURATED_IMAGES['medical']
    else:
        image_ids = CURATED_IMAGES['lab']
    
    # Get a random image ID from the appropriate category
    image_id = random.choice(image_ids)
    url = f"https://picsum.photos/id/{image_id}/800/600"
    return download_image(url, output_path)

def update_markdown_file(file_path, new_image_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Update image path in frontmatter
    if 'image:' not in content:
        # If no image field exists, add it after the description
        content = re.sub(
            r'(description:\s*"[^"]*")',
            f'\\1\nimage: "{new_image_path}"',
            content
        )
    else:
        # Update existing image field
        content = re.sub(
            r'(image:\s*")[^"]*(")',
            f'\\1{new_image_path}\\2',
            content
        )
    
    with open(file_path, 'w') as f:
        f.write(content)

# Create directories
create_dir_if_not_exists("public/images/events")
create_dir_if_not_exists("public/images/news")

# Process events
for event_file in glob.glob("src/content/events/**/*.md", recursive=True):
    event_name = Path(event_file).stem
    base_name = event_name.split('-2024')[0] if '-2024' in event_name else event_name
    
    image_name = f"{base_name}.jpg"
    output_path = f"public/images/events/{image_name}"
    
    if not os.path.exists(output_path):
        print(f"Downloading image for event: {base_name}")
        if get_themed_image(base_name, output_path):
            update_markdown_file(event_file, f"/images/events/{image_name}")

# Process news
for news_file in glob.glob("src/content/news/**/*.md", recursive=True):
    news_name = Path(news_file).stem
    base_name = news_name.split('-2024')[0] if '-2024' in news_name else news_name
    
    image_name = f"{base_name}.jpg"
    output_path = f"public/images/news/{image_name}"
    
    if not os.path.exists(output_path):
        print(f"Downloading image for news: {base_name}")
        if get_themed_image(base_name, output_path):
            update_markdown_file(news_file, f"/images/news/{image_name}")

print("Done downloading and updating content images!")
