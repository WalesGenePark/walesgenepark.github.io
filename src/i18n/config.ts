interface Route {
  en: string;
  cy: string;
}

export const routes: Record<string, Route> = {
  '/': {
    en: '/',
    cy: '/hafan',
  },
  '/calendar': {
    en: '/calendar',
    cy: '/calendar', // Keep English URL for both languages
  },
  '/events': {
    en: '/events',
    cy: '/events', // Keep English URL for both languages
  },
  '/team': {
    en: '/team',
    cy: '/team', // Keep English URL for both languages
  },
  '/news': {
    en: '/news',
    cy: '/news', // Keep English URL for both languages
  },
  '/contact': {
    en: '/contact',
    cy: '/contact', // Keep English URL for both languages
  },
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const languages = {
  en: 'English',
  cy: 'Cymraeg',
};

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.team': 'Our Team',
    'nav.calendar': 'Calendar',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.events': 'Events',
  },
  cy: {
    'nav.home': 'Hafan',
    'nav.team': 'Ein Tîm',
    'nav.calendar': 'Calendr',
    'nav.news': 'Newyddion',
    'nav.contact': 'Cysylltu',
    'nav.events': 'Digwyddiadau',
  },
} as const;
