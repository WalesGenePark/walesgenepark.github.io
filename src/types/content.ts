import type { z } from 'astro:content';
import type { LanguageCode } from '~/i18n/routes';

export interface BaseEntry {
  id: string;
  slug: string;
  body: string;
  collection: string;
}

export interface NewsEntry extends BaseEntry {
  data: {
    publishDate: Date;
    title: string;
    description?: string;
    image?: string;
    author?: string;
    category?: string;
    lang: LanguageCode;
  };
}

export interface EventEntry extends BaseEntry {
  data: {
    startDate: Date;
    endDate?: Date;
    title: string;
    description?: string;
    location?: string;
    image?: string;
    lang: LanguageCode;
    order?: number;
  };
}

export interface TeamEntry extends BaseEntry {
  data: {
    name: string;
    title: string;
    description?: string;
    image?: string;
    lang: LanguageCode;
    order?: number;
  };
}

export interface PolicyEntry extends BaseEntry {
  data: {
    title: string;
    description?: string;
    lang: LanguageCode;
  };
}

export type ContentEntry = NewsEntry | EventEntry | TeamEntry | PolicyEntry;

export interface ContentEntryMap {
  'news': NewsEntry;
  'events': EventEntry;
  'team': TeamEntry;
  'policy': PolicyEntry;
}
