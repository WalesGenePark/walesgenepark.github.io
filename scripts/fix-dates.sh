#!/bin/bash

# Function to fix dates in event files
fix_event_dates() {
  local file=$1
  
  # Remove any startDate and endDate fields
  sed -i.bak '/^startDate:/d' "$file"
  sed -i.bak '/^endDate:/d' "$file"
  rm -f "${file}.bak"
  
  # Check if date exists, if not add it
  if ! grep -q "^date:" "$file"; then
    # Get the date from the filename or use current date
    local year=$(echo $file | grep -o '[0-9]\{4\}' || date +%Y)
    local month="01"
    local day="01"
    
    # Insert after first ---
    awk -v date="$year-$month-$day" '
      NR==1,/^---$/ {
        print
        if (/^---$/) {
          print "date:", date
        }
        next
      }
      {print}
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
  fi
}

# Process all event files
echo "Fixing dates in event files..."
find src/content/events -name "*.md" -type f | while read file; do
  echo "Processing $file..."
  fix_event_dates "$file"
done

echo "Date fixes complete!"
