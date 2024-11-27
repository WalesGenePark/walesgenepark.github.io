export interface MetaData {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  alternateLinks?: Array<{
    href: string;
    hreflang: string;
  }>;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
    url?: string;
    basic?: {
      title: string;
      type: string;
      image: string;
      url: string;
    };
  };
  twitter?: {
    title?: string;
    description?: string;
    image?: string;
    card?: string;
    site?: string;
    creator?: string;
  };
}
