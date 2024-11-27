import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    publishDate: z.date(),
    lang: z.enum(['en', 'cy']),
  }),
});

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    date: z.date(),
    startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(), // Format: "HH:mm" (24-hour)
    endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(), // Format: "HH:mm" (24-hour)
    lang: z.enum(['en', 'cy']),
    location: z.string().optional(),
    type: z.string().optional(),
    registrationLink: z.string().optional(),
  }),
});

const team = defineCollection({
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
    socialLinks: z.object({
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      researchgate: z.string().optional(),
      orcid: z.string().optional(),
    }).optional(),
    lang: z.enum(['en', 'cy']),
  }),
});

const policy = defineCollection({
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
  policy,
};
