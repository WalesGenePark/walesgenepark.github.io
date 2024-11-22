interface Route {
  en: string;
  cy: string;
}

export const routes: Record<string, Route> = {
  '/': {
    en: '/',
    cy: '/',
  },
  'calendar': {
    en: 'calendar',
    cy: 'calendar',
  },
  'events': {
    en: 'events',
    cy: 'events',
  },
  'news': {
    en: 'news',
    cy: 'news',
  },
  'team': {
    en: 'team',
    cy: 'team',
  },
  'contact': {
    en: 'contact',
    cy: 'contact',
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
