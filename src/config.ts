import type { LanguageCode } from './i18n/routes';

interface SiteConfig {
  readonly name: string;
  readonly origin: string;
  readonly basePathname: string;
  readonly title: string;
  readonly description: string;
  readonly defaultImage: string;
  readonly defaultTheme: 'light' | 'dark' | 'system';
  readonly language: LanguageCode;
  readonly textDirection: 'ltr' | 'rtl';
}

interface I18NConfig {
  readonly language: LanguageCode;
  readonly textDirection: 'ltr' | 'rtl';
  readonly dateFormatter: Intl.DateTimeFormat;
}

interface MetadataConfig {
  readonly title: {
    readonly default: string;
    readonly template: string;
  };
  readonly description: string;
  readonly robots: {
    readonly index: boolean;
    readonly follow: boolean;
  };
  readonly openGraph: {
    readonly type: string;
  };
  readonly twitter: {
    readonly handle: string;
    readonly site: string;
    readonly cardType: string;
  };
  readonly defaultLocale: LanguageCode;
  readonly supportedLocales: readonly LanguageCode[];
}

export const SITE: SiteConfig = {
  name: 'Wales Gene Park',
  origin: 'https://walesgenepark.github.io',
  basePathname: '/',
  title: 'Wales Gene Park',
  description: 'Wales Gene Park is a Welsh Government funded initiative to promote and facilitate the development and application of genetics and genomics to health and healthcare in Wales.',
  defaultImage: 'https://walesgenepark.github.io/images/default.png',
  defaultTheme: 'system',
  language: 'en',
  textDirection: 'ltr',
} as const;

export const I18N: I18NConfig = {
  language: SITE.language,
  textDirection: SITE.textDirection,
  dateFormatter: new Intl.DateTimeFormat([SITE.language, 'en-GB']),
} as const;

export const METADATA: MetadataConfig = {
  title: {
    default: SITE.title,
    template: '%s — Wales Gene Park',
  },
  description: SITE.description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
  },
  twitter: {
    handle: '@WalesGenePark',
    site: '@WalesGenePark',
    cardType: 'summary_large_image',
  },
  defaultLocale: 'en',
  supportedLocales: ['en', 'cy'],
} as const;
