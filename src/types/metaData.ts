export interface MetaData {
  title?: string;
  description?: string;
  image?: string;
  canonical?: URL;
  noindex?: boolean;
  nofollow?: boolean;
  ogTitle?: string;
  ogType?: string;
  alternateLinks?: {
    href: string;
    hreflang: string;
  }[];
  openGraph?: {
    basic: {
      title: string;
      type: string;
      image: string;
      url: string;
    };
    optional?: {
      audio?: string;
      description?: string;
      determiner?: string;
      locale?: string;
      localeAlternate?: string[];
      siteName?: string;
      video?: string;
    };
  };
  twitter?: {
    card?: string;
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
  };
}
