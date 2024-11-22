export const languages = {
  en: 'English',
  cy: 'Cymraeg',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.team': 'Our Team',
    'nav.calendar': 'Calendar',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'home.services': 'Our Services',
    'home.contact': 'Contact Us',
  },
  cy: {
    'nav.home': 'Hafan',
    'nav.team': 'Ein Tîm',
    'nav.calendar': 'Calendr',
    'nav.news': 'Newyddion',
    'nav.contact': 'Cysylltu',
    'home.services': 'Ein Gwasanaethau',
    'home.contact': 'Cysylltu â Ni',
  },
} as const;

export const routes = {
  en: {
    home: '',
    team: 'team',
    calendar: 'calendar',
    news: 'news',
    contact: 'contact',
  },
  cy: {
    home: '',
    team: 'tim',
    calendar: 'calendar',
    news: 'newyddion',
    contact: 'cysylltu',
  },
} as const;

export const showDefaultLang = false;

type RouteKey = keyof typeof routes[typeof defaultLang];

export function getRouteFromKey(key: RouteKey, lang: keyof typeof languages): string {
  return routes[lang][key];
}

export function getLocalizedPath(path: string, lang: keyof typeof languages): string {
  if (lang === defaultLang && !showDefaultLang) return path;
  return `/${lang}${path}`;
}
