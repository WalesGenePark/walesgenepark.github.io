import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    publishDate: z.date(),
    lang: z.enum(['en', 'cy']),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    location: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    image: z.string().optional(),
    date: z.date(),
    type: z.string().optional(),
    registrationLink: z.string().optional(),
    lang: z.enum(['en', 'cy']),
    order: z.number().optional(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    department: z.string().optional(),
    image: z.string().optional(),
    bio: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    order: z.number().optional(),
    category: z.string().optional(),
    socialLinks: z
      .object({
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
        researchgate: z.string().optional(),
        orcid: z.string().optional(),
      })
      .optional(),
    lang: z.enum(['en', 'cy']),
  }),
});

const privacy = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.enum(['en', 'cy']),
  }),
});

const cookies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.enum(['en', 'cy']),
  }),
});

export const collections = {
  news,
  events,
  team,
  privacy,
  cookies,
};
