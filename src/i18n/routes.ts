export type LanguageCode = 'en' | 'cy';

export interface RouteDisplay {
  display: {
    [K in LanguageCode]: string;
  };
  path?: {
    [K in LanguageCode]: string;
  };
}

export interface RouteMapping {
  [key: string]: RouteDisplay;
}

export const sectionRoutes: RouteMapping = {
  // Base routes with translations for display/navigation
  'contact': { 
    display: { en: 'Contact', cy: 'Cysylltu' },
    path: { en: 'contact', cy: 'cysylltu' }
  },
  'events': { 
    display: { en: 'Events', cy: 'Digwyddiadau' },
    path: { en: 'events', cy: 'digwyddiadau' }
  },
  'news': { 
    display: { en: 'News', cy: 'Newyddion' },
    path: { en: 'news', cy: 'newyddion' }
  },
  'team': { 
    display: { en: 'Team', cy: 'Tîm' },
    path: { en: 'team', cy: 'tim' }
  },
  'privacy': { 
    display: { en: 'Privacy Policy', cy: 'Polisi Preifatrwydd' },
    path: { en: 'privacy', cy: 'preifatrwydd' }
  },
  'cookies': { 
    display: { en: 'Cookie Policy', cy: 'Polisi Cwcis' },
    path: { en: 'cookies', cy: 'cwcis' }
  }
};

export function isValidSection(section: string): boolean {
  return section in sectionRoutes;
}

export function getSectionTitle(section: string, lang: LanguageCode): string {
  return sectionRoutes[section]?.display[lang] || section;
}

export function getSectionPath(section: string, lang: LanguageCode): string {
  return sectionRoutes[section]?.path?.[lang] || sectionRoutes[section]?.display[lang].toLowerCase() || section;
}

export function getAlternateSection(section: string, targetLang: LanguageCode): string {
  return sectionRoutes[section]?.path?.[targetLang] || section;
}
