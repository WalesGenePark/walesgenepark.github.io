import type { z } from 'astro:content';
import type { LanguageCode } from '~/i18n/routes';

export interface BaseEntry {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description?: string;
    image?: string;
    lang: LanguageCode;
  };
  render: () => Promise<{ Content: any }>;
}

export interface NewsEntry extends BaseEntry {
  collection: 'news';
  data: {
    title: string;
    description?: string;
    image?: string;
    author?: string;
    category?: string;
    fullArticleLink?: string;
    publishDate: Date;
    lang: LanguageCode;
  };
}

export interface EventEntry extends BaseEntry {
  collection: 'events';
  data: {
    title: string;
    description?: string;
    location?: string;
    startTime?: string;
    endTime?: string;
    image?: string;
    date: Date;
    startDate: Date;
    endDate?: Date;
    type?: string;
    registrationLink?: string;
    lang: LanguageCode;
    order?: number;
  };
}

export interface PolicyEntry extends BaseEntry {
  collection: 'policy';
  data: {
    title: string;
    description?: string;
    lang: LanguageCode;
  };
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
import type { z } from 'astro:content';
import type { LanguageCode } from '~/i18n/routes';

export interface BaseEntry {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description?: string;
    image?: string;
    lang: LanguageCode;
  };
  render: () => Promise<{ Content: any }>;
}

export interface NewsEntry extends BaseEntry {
  collection: 'news';
  data: {
    title: string;
    description?: string;
    image?: string;
    author?: string;
    category?: string;
    fullArticleLink?: string;
    publishDate: Date;
    lang: LanguageCode;
  };
}

export interface EventEntry extends BaseEntry {
  collection: 'events';
  data: {
    title: string;
    description?: string;
    location?: string;
    startTime?: string;
    endTime?: string;
    image?: string;
    date: Date;
    startDate: Date;
    endDate?: Date;
    type?: string;
    registrationLink?: string;
    lang: LanguageCode;
    order?: number;
  };
}

export interface PolicyEntry extends BaseEntry {
  collection: 'policy';
  data: {
    title: string;
    description?: string;
    lang: LanguageCode;
  };
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
