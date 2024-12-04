import type { CollectionEntry } from 'astro:content';

export type NewsEntry = CollectionEntry<'news'>;
export type EventEntry = CollectionEntry<'events'>;
export type TeamEntry = CollectionEntry<'team'>;
export type PrivacyEntry = CollectionEntry<'privacy'>;
export type CookiesEntry = CollectionEntry<'cookies'>;

export type ContentEntry = NewsEntry | EventEntry | TeamEntry | PrivacyEntry | CookiesEntry;

// Common interface for all content types
interface BaseContentData {
  title: string;
  description?: string;
  image?: string;
  lang: 'en' | 'cy';
}

export interface NewsData extends BaseContentData {
  author?: string;
  category?: string;
  publishDate: Date;
}

export interface EventData extends BaseContentData {
  location?: string;
  startTime?: string;
  endTime?: string;
  date: Date;
  startDate?: Date; // Added for backward compatibility
  type?: string;
  registrationLink?: string;
  order?: number;
}

export interface TeamData extends BaseContentData {
  name: string;
  title: string;
  department?: string;
  bio?: string;
  email?: string;
  phone?: string;
  order?: number;
  category?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    researchgate?: string;
    orcid?: string;
  };
}

// Since PolicyData doesn't need additional fields beyond BaseContentData,
// we can use BaseContentData directly instead of creating an empty interface
export type PolicyData = BaseContentData;

export interface ContentEntryMap {
  news: NewsEntry;
  events: EventEntry;
  team: TeamEntry;
  privacy: PrivacyEntry;
  cookies: CookiesEntry;
}

export interface BaseEntry {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: BaseContentData;
  title: string;
  description?: string;
  image?: string;
  lang: 'en' | 'cy';
  render: () => Promise<{ Content: unknown }>;
  Content: unknown;
}
