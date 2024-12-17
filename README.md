# Wales Gene Park Website

## Project Overview

The Wales Gene Park Website is a static site designed to provide information about the Wales Gene Park's activities, including news, events, services, and team members. The website supports bilingual content, offering both English and Welsh translations for various sections. It is built using modern web technologies to ensure a responsive and accessible user experience.

## Content Types

The website includes the following types of content:

- **News**: Updates and announcements related to genomic research and activities.
- **Events**: Information about upcoming workshops, seminars, and public engagement initiatives.
- **Team Members**: Profiles of staff members, including their roles, contact information, and biographies.
- **Services**: Descriptions of the services offered by the Wales Gene Park, such as education programs and technical support.
- **Policies**: Documents like Privacy Policy and Cookie Policy.

## Technologies Used

- **Astro**: A modern static site builder for generating fast, content-focused websites.
- **AstroWind Theme**: A starter template combining Astro with Tailwind CSS for styling.
- **TypeScript**: Provides static typing for JavaScript, enhancing code quality and developer experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Markdown**: Used for writing content in a simple and readable format.
- **Node.js Scripts**: Custom scripts for updating and managing content.

## Logic for Adding and Creating Content

### Markdown Content Structure

Content is organized into collections within the `src/content/` directory, categorized by content type and language:

```
src/content/
  news/
    en/
    cy/
  events/
    en/
    cy/
  team/
    en/
    cy/
  privacy/
    en/
    cy/
  cookies/
    en/
    cy/
```

Each content piece is a Markdown file with frontmatter for metadata and the main content body.

### Adding a News or Event Article

To add a new news or event article:

1. **Determine the Language**: Choose between English (`en`) or Welsh (`cy`).
2. **Navigate to the Appropriate Directory**:

   - For news:
     - English: `src/content/news/en/`
     - Welsh: `src/content/news/cy/`
   - For events:
     - English: `src/content/events/en/`
     - Welsh: `src/content/events/cy/`

3. **Create a New Markdown File**:

   - Use a descriptive filename, e.g., `new-genomics-initiative.md`.
   - Place the file in the appropriate language directory.

4. **Add Frontmatter Metadata**:

   Include fields such as `lang`, `title`, `publishDate`, `description`, and `image`.

   Example:

   ```markdown
   ---
   lang: 'en'
   title: 'New Genomics Initiative Launched'
   publishDate: 2024-08-15
   description: 'An overview of the newly launched genomics initiative.'
   image: '/images/news/genomics-initiative.jpg'
   ---
   ```

5. **Write the Content**:

   Add the main body of the article below the frontmatter.

### Adding a New Team Member

To add a new team member profile:

1. **Determine the Language**: `en` for English or `cy` for Welsh.
2. **Navigate to the Directory**:

   - English: `src/content/team/en/`
   - Welsh: `src/content/team/cy/`

3. **Create a New Markdown File**:

   - Use a numbering system to maintain order, e.g., `19-jane-doe.md`.
   - Place the file in the appropriate language directory.

4. **Add Frontmatter Metadata**:

   Include fields such as `lang`, `name`, `title`, `department`, `image`, `bio`, `email`, `phone`, `order`, `category`, and `socialLinks`.

   Example:

   ```markdown
   ---
   lang: 'en'
   name: 'Dr. Jane Doe'
   title: 'Genomics Researcher'
   department: 'Research Division'
   image: '/images/team/jane.png'
   bio: 'Dr. Doe specializes in genomic data analysis and rare disease research.'
   email: 'doej@cardiff.ac.uk'
   phone: '+44 (0)29 2074 4222'
   order: 12
   category: 'research'
   socialLinks:
     linkedin: 'https://www.linkedin.com/in/janedoe'
     researchgate: 'https://www.researchgate.net/profile/Jane-Doe'
     orcid: 'https://orcid.org/0000-0002-1234-5678'
   ---
   ```

5. **Write the Profile Content**:

   The content can be expanded below the frontmatter if necessary.

### Adding a New Service

To add a new service page:

1. **Determine the Language**: `en` or `cy`.
2. **Navigate to the Pages Directory**:

   The services are defined in the `src/pages/[lang]/services/` directory.

3. **Create a New Astro Component**:

   - Create a new `.astro` file, e.g., `genomic-consulting.astro`.

4. **Define Metadata and Content**:

   Use the Astro component to define page metadata and content. Include language-specific content objects to handle bilingual support.

   Example Structure:

   ```astro
   ---
   export const metadata = {
     title: lang === 'en' ? 'Genomic Consulting Services' : 'Gwasanaethau Ymgynghori Genomig',
     description: lang === 'en' ? 'Expert consulting in genomics.' : 'Ymgynghori arbenigol mewn genomig.',
     // Additional metadata fields...
   };

   const content = {
     en: {
       title: 'Genomic Consulting Services',
       overview: 'Providing expert advice and consulting in genomics.',
       sections: [
         // Content sections...
       ],
     },
     cy: {
       title: 'Gwasanaethau Ymgynghori Genomig',
       overview: 'Yn darparu cyngor arbenigol ac ymgynghori mewn genomig.',
       sections: [
         // Content sections...
       ],
     },
   };

   const currentContent = content[lang];
   ---
   <!-- Page layout and content rendering -->
   ```

5. **Update Navigation and Routes**:

   Ensure the new service is added to the navigation menus and that routing is correctly set up for bilingual access.

## Logic for Content Collection

The website uses Astro's Content Collections to manage and organize content from Markdown files. The collections are defined in the Astro configuration, specifying schema validation and type inference.

When new Markdown files are added to the content directories, they are automatically included in the build process.

## Logic for URL Generation

### Dynamic Routes

The website utilizes dynamic routing to generate URLs based on content:

- **Language Parameter**: `[lang]` represents the language code (`en` or `cy`).
- **Section Parameter**: `[section]` represents the content type (`news`, `events`, `team`, etc.).
- **Slug Parameter**: `[...slug]` captures the content slug from the filename.

Example Route Definition:

```
src/pages/[lang]/[section]/[...slug].astro
```

### URL Examples

- **News Article**:

  - English: `/en/news/new-genomics-initiative`
  - Welsh: `/cy/news/new-genomics-initiative`

- **Team Member Profile**:

  - English: `/en/team/dr-jane-doe`
  - Welsh: `/cy/team/dr-jane-doe`

- **Service Page**:

  - English: `/en/services/genomic-consulting`
  - Welsh: `/cy/services/genomic-consulting`

## Logic for Bilingual Support and URL Handling

The website supports bilingual content by:

- **Language Directories**: Content files are organized into `en` and `cy` directories.
- **Language Switch**: The site includes functionality to switch between languages, updating URLs accordingly.
- **Metadata Localization**: Page metadata, such as titles and descriptions, are defined per language.
- **Dynamic Content Rendering**: Components load content based on the current language parameter.

### Bilingual URL Handling

- URLs include the language code as the first segment (`/en/` or `/cy/`).
- Alternate links are provided in the page metadata for SEO and accessibility, using the `hreflang` attribute.
- The site ensures that navigating between languages maintains the corresponding page context.

## Examples

### Where to Put Markdown Files for News or Events

- **News**:

  - English: `src/content/news/en/`
  - Welsh: `src/content/news/cy/`

- **Events**:

  - English: `src/content/events/en/`
  - Welsh: `src/content/events/cy/`

Create a new Markdown file in the appropriate directory with the necessary frontmatter and content.

### How to Add a New Team Member

1. Create a new Markdown file in `src/content/team/en/` for English or `src/content/team/cy/` for Welsh.
2. Use the provided frontmatter template to include all required information.
3. Save the file with an appropriate filename, such as `19-jane-doe.md`.

### How to Add a New Service

1. Create a new `.astro` component in `src/pages/[lang]/services/` with the service name.
2. Define the metadata and content objects for both languages.
3. Update navigation components if necessary to include the new service.

### Files to Consider for Bilingual URL Generation

- Dynamic route components: `src/pages/[lang]/[section]/[...slug].astro`
- Content files: Ensure that content exists in both `en` and `cy` directories.
- Navigation and layout components that handle language links and alternates.
- Metadata definitions that include alternate links and `hreflang` attributes.

## Additional Information

### Scripts

- **Content Update Script**: A Node.js script (`scripts/update-content.js`) is used to update frontmatter across content files, ensuring consistency and adding necessary metadata like language codes.

### Frontmatter Fields

Common fields used in frontmatter:

- `lang`: Language code (`'en'` or `'cy'`).
- `title`: Title of the content.
- `name`: For team members, their full name.
- `publishDate`: Date of publication (for news).
- `description`: Brief description or summary.
- `image`: Path to an associated image.
- `category`: Used for categorization within collections.
- `socialLinks`: An object containing URLs to social media or professional profiles.

### Image Assets

- Images are stored in the `public/images/` directory.
- Team member images are located in `public/images/team/`.

### Styling

- The website uses Tailwind CSS utility classes for styling components.
- Custom styles and configurations can be modified in `tailwind.config.js`.

### Development Workflow

- Use `npm install` to install dependencies.
- Run `npm run dev` to start the development server.
- Build the site for production using `npm run build`.

### Deployment

- The static site is designed to be deployed to GitHub Pages.
- Ensure the build output is correctly configured for GitHub Pages compatibility.