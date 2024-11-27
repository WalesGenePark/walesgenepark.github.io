import type { z } from 'astro:content';
import type { LanguageCode } from '~/i18n/routes';

export interface NewsEntry {
  id: string;
  slug: string;
  body: string;
  collection: 'news';
  data: {
    publishDate: Date;
    title: string;
    description?: string;
    image?: string;
    author?: string;
    category?: string;
    fullArticleLink?: string;
    lang: LanguageCode;
  };
}

export interface EventEntry {
  id: string;
  slug: string;
  body: string;
  collection: 'events';
  data: {
    startDate: Date;
    endDate?: Date;
    date?: Date;
    title: string;
    description?: string;
    location?: string;
    startTime?: string;
    endTime?: string;
    image?: string;
    lang: LanguageCode;
    order?: number;
  };
}

export interface PolicyEntry {
  id: string;
  slug: string;
  body: string;
  collection: 'policy';
  data: {
    title: string;
    description?: string;
    lang: LanguageCode;
    order?: number;
  };
  render: () => Promise<{ Content: any }>;
}

export interface TeamEntry {
  id: string;
  slug: string;
  body: string;
  collection: 'team';
  data: {
    name: string;
    title: string;
    description?: string;
    image?: string;
    lang: LanguageCode;
    order?: number;
  };
}

export type ContentEntry = NewsEntry | EventEntry | PolicyEntry | TeamEntry;

export interface ContentEntryMap {
  'news': NewsEntry;
  'events': EventEntry;
  'team': TeamEntry;
  'policy': PolicyEntry;
}
