export const SITE = {
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

export const I18N = {
  language: SITE.language,
  textDirection: SITE.textDirection,
  dateFormatter: new Intl.DateTimeFormat([SITE.language, 'en-GB']),
} as const;

export const METADATA = {
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
