import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),
      canonical: z.string().url().optional(),
      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),
      description: z.string().optional(),
      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),
      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string().optional(),
    readMoreLink: z.string().url().optional(),
    metadata: metadataDefinition(),
  }),
});

const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),
    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const eventCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    description: z.string(),
    type: z.enum(['workshop', 'conference', 'seminar', 'training', 'public-event']),
    readMoreLink: z.string().url().optional(),
    image: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    department: z.string(),
    image: z.string().optional(),
    bio: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
    order: z.number().default(99), // For controlling display order
    category: z.enum(['leadership', 'research', 'education', 'support', 'technical']),
    socialLinks: z.object({
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      researchgate: z.string().optional(),
      orcid: z.string().optional(),
    }).optional(),
    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
  news: newsCollection,
  events: eventCollection,
  team: teamCollection,
};
