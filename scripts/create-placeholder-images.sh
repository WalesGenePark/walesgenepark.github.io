#!/bin/bash

# Create images directories if they don't exist
mkdir -p public/images/events
mkdir -p public/images/news

# List of event images to create
EVENTS=(
  "bioinformatics-training.jpg"
  "clinical-updates.jpg"
  "dna-day.jpg"
  "genetic-counseling-seminar.jpg"
  "genomics-networking.jpg"
  "genomics-policy-forum.jpg"
  "genomics-workshop.jpg"
  "ngs-workshop.jpg"
  "rare-disease-conference.jpg"
  "rare-disease-support.jpg"
  "schools-outreach.jpg"
  "student-careers-fair.jpg"
)

# List of news images to create
NEWS=(
  "education-program.jpg"
  "research-lab.jpg"
  "collaboration.jpg"
  "testing-facility.jpg"
  "partnership-2024.jpg"
  "cancer-research.jpg"
  "public-engagement.jpg"
)

# Create placeholder SVG files for events
for img in "${EVENTS[@]}"; do
  name="${img%.*}"
  cat > "public/images/events/$img" << EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f0f0f0"/>
  <text x="400" y="300" font-family="Arial" font-size="24" text-anchor="middle" fill="#666">
    $name
  </text>
</svg>
EOF
done

# Create placeholder SVG files for news
for img in "${NEWS[@]}"; do
  name="${img%.*}"
  cat > "public/images/news/$img" << EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#e0e0e0"/>
  <text x="400" y="300" font-family="Arial" font-size="24" text-anchor="middle" fill="#666">
    $name
  </text>
</svg>
EOF
done

echo "Created placeholder images in public/images/events/ and public/images/news/"
