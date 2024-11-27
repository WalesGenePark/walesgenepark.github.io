import os
from pathlib import Path

def update_image_path(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Replace DiceBear URLs with local paths
    for name in ['sian', 'david', 'emma', 'sarah', 'michael', 'lisa', 'james', 
                'rachel', 'thomas', 'catherine', 'richard', 'helen', 'paul', 
                'anna', 'mark', 'sophie', 'robert', 'claire', 'david-h']:
        old_pattern = f'image: "https://api.dicebear.com/7.x/personas/svg?seed={name}&backgroundColor='
        new_path = f'image: "/images/team/{name}.png"'
        content = content.replace(old_pattern, new_path + '  # Previously: ' + old_pattern)
    
    with open(file_path, 'w') as f:
        f.write(content)

# Update all markdown files in content/team
team_dir = Path('src/content/team')
for lang in ['en', 'cy']:
    for md_file in (team_dir / lang).glob('*.md'):
        print(f"Updating {md_file}")
        update_image_path(md_file)

print("Done updating image paths!")
