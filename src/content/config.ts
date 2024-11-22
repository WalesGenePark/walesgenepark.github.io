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
    lang: z.enum(['en', 'cy']),
  }),
});

const team = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string().optional(),
    description: z.string().optional(),
    lang: z.enum(['en', 'cy']),
  }),
});

export const collections = {
  news,
  events,
  team,
};
