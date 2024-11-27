import fs from 'fs';
import path from 'path';
const matter = require('gray-matter');

const contentDir = path.join(process.cwd(), 'src/content');

function updateFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, content: markdown } = matter(content);
  
  // Get language from path
  const lang = filePath.includes('/cy/') ? 'cy' : 'en';
  
  // Get collection type from path
  const collection = filePath.includes('/events/') ? 'events' : 
                    filePath.includes('/news/') ? 'news' : 
                    filePath.includes('/team/') ? 'team' : null;
  
  if (!collection) return;

  // Update frontmatter based on collection type
  const newData = {
    ...data,
    lang,
  };

  if (collection === 'events') {
    newData.date = data.date || new Date().toISOString().split('T')[0];
  }
  if (collection === 'news') {
    newData.publishDate = data.publishDate || new Date().toISOString().split('T')[0];
  }
  if (collection === 'team') {
    newData.name = data.name || data.title;
    newData.title = data.position || data.title || 'Team Member';
  }

  // Write updated content
  const updatedContent = matter.stringify(markdown, newData);
  fs.writeFileSync(filePath, updatedContent);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      updateFrontmatter(filePath);
    }
  });
}

// Start processing from content directory
processDirectory(contentDir);
