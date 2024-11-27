import type { z } from 'astro:content';

export type LanguageCode = 'en' | 'cy';

export interface BaseContent {
  title: string;
  description?: string;
  image?: string;
  lang: LanguageCode;
}

export interface NewsContent extends BaseContent {
  publishDate: Date;
  author?: string;
  fullArticleLink?: string;
}

export interface EventContent extends BaseContent {
  date: Date;
  startTime?: string;
  endTime?: string;
  location?: string;
  type?: string;
  registrationLink?: string;
}

export interface TeamContent extends BaseContent {
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

export type NewsEntry = {
  id: string;
  slug: string;
  body: string;
  collection: 'news';
  data: NewsContent;
};

export type EventEntry = {
  id: string;
  slug: string;
  body: string;
  collection: 'events';
  data: EventContent;
};

export type TeamEntry = {
  id: string;
  slug: string;
  body: string;
  collection: 'team';
  data: TeamContent;
};
