import type { CollectionEntry } from 'astro:content';
import type { LanguageCode } from '~/i18n/routes';

export type NewsEntry = CollectionEntry<'news'>;
export type EventEntry = CollectionEntry<'events'>;
export type TeamEntry = CollectionEntry<'team'>;
export type PrivacyEntry = CollectionEntry<'privacy'>;
export type CookiesEntry = CollectionEntry<'cookies'>;

export type ContentEntry = NewsEntry | EventEntry | TeamEntry | PrivacyEntry | CookiesEntry;

export interface NewsData {
  title: string;
  description?: string;
  image?: string;
  author?: string;
  category?: string;
  publishDate: Date;
  lang: 'en' | 'cy';
}

export interface EventData {
  title: string;
  description?: string;
  location?: string;
  startTime?: string;
  endTime?: string;
  image?: string;
  date: Date;
  type?: string;
  registrationLink?: string;
  lang: 'en' | 'cy';
  order?: number;
}

export interface TeamData {
  name: string;
  title: string;
  department?: string;
  image?: string;
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
  lang: 'en' | 'cy';
}

export interface PolicyData {
  title: string;
  description?: string;
  lang: 'en' | 'cy';
}

export interface ContentEntryMap {
  'news': NewsEntry;
  'events': EventEntry;
  'team': TeamEntry;
  'privacy': PrivacyEntry;
  'cookies': CookiesEntry;
}

export interface BaseEntry {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description?: string;
    image?: string;
    lang: 'en' | 'cy';
  };
  render: () => Promise<{ Content: unknown }>;
}
