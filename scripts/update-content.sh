#!/bin/bash

# Function to update news files
update_news() {
  local file=$1
  local lang=$(echo $file | grep -o '/[ce][ny]/' | tr -d '/')
  
  # Convert date to publishDate if it exists
  if grep -q "^date:" "$file"; then
    sed -i.bak 's/^date:/publishDate:/' "$file"
    rm -f "${file}.bak"
  fi
  
  # Check if publishDate exists, if not add it
  if ! grep -q "^publishDate:" "$file"; then
    # Get the date from the filename or use current date
    local date=$(echo $file | grep -o '[0-9]\{4\}' || date +%Y)
    local month=$(date +%m)
    local day=$(date +%d)
    
    # Insert after first ---
    awk -v date="$date-$month-$day" '
      NR==1,/^---$/ {
        print
        if (/^---$/) {
          print "publishDate:", date
        }
        next
      }
      {print}
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
  fi
  
  # Add or update lang
  if grep -q "^lang:" "$file"; then
    sed -i.bak "s/^lang:.*/lang: \"$lang\"/" "$file"
    rm -f "${file}.bak"
  else
    awk -v lang="$lang" '
      NR==1,/^---$/ {
        print
        if (/^---$/) {
          print "lang: \"" lang "\""
        }
        next
      }
      {print}
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
  fi
}

# Function to update event files
update_events() {
  local file=$1
  local lang=$(echo $file | grep -o '/[ce][ny]/' | tr -d '/')
  
  # Check if date exists, if not add it
  if ! grep -q "^date:" "$file"; then
    # Get the date from the filename or use current date
    local date=$(echo $file | grep -o '[0-9]\{4\}' || date +%Y)
    local month=$(date +%m)
    local day=$(date +%d)
    
    # Insert after first ---
    awk -v date="$date-$month-$day" '
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
  
  # Add or update lang
  if grep -q "^lang:" "$file"; then
    sed -i.bak "s/^lang:.*/lang: \"$lang\"/" "$file"
    rm -f "${file}.bak"
  else
    awk -v lang="$lang" '
      NR==1,/^---$/ {
        print
        if (/^---$/) {
          print "lang: \"" lang "\""
        }
        next
      }
      {print}
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
  fi
}

# Function to update team files
update_team() {
  local file=$1
  local lang=$(echo $file | grep -o '/[ce][ny]/' | tr -d '/')
  
  # Add or update lang
  if grep -q "^lang:" "$file"; then
    sed -i.bak "s/^lang:.*/lang: \"$lang\"/" "$file"
    rm -f "${file}.bak"
  else
    awk -v lang="$lang" '
      NR==1,/^---$/ {
        print
        if (/^---$/) {
          print "lang: \"" lang "\""
        }
        next
      }
      {print}
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
  fi
  
  # Ensure name and title exist
  if ! grep -q "^name:" "$file"; then
    # Try to get name from title or filename
    local name=$(grep "title:" "$file" | cut -d':' -f2 || echo "Team Member")
    awk -v name="$name" '
      NR==1,/^---$/ {
        print
        if (/^---$/) {
          print "name:" name
        }
        next
      }
      {print}
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
  fi
  
  if ! grep -q "^title:" "$file"; then
    awk '
      NR==1,/^---$/ {
        print
        if (/^---$/) {
          print "title: \"Team Member\""
        }
        next
      }
      {print}
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
  fi
}

# Process all content files
echo "Updating news files..."
find src/content/news -name "*.md" -type f | while read file; do
  echo "Processing $file..."
  update_news "$file"
done

echo "Updating event files..."
find src/content/events -name "*.md" -type f | while read file; do
  echo "Processing $file..."
  update_events "$file"
done

echo "Updating team files..."
find src/content/team -name "*.md" -type f | while read file; do
  echo "Processing $file..."
  update_team "$file"
done

echo "Content update complete!"
