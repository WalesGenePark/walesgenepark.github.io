import type { CollectionEntry } from 'astro:content';
import type { LanguageCode } from '~/i18n/routes';

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  researchgate?: string;
  orcid?: string;
}

export interface TeamData {
  name: string;
  title: string;
  description?: string;
  image?: string;
  lang: LanguageCode;
  order?: number;
  department?: string;
  bio?: string;
  email?: string;
  socialLinks?: SocialLinks;
}

export type TeamEntry = CollectionEntry<'team'> & {
  data: TeamData;
};

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
  render: () => Promise<{ Content: unknown }>;
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

export type ContentEntry = NewsEntry | EventEntry | TeamEntry | PolicyEntry;

export interface ContentEntryMap {
  news: NewsEntry;
  events: EventEntry;
  team: TeamEntry;
  policy: PolicyEntry;
}
