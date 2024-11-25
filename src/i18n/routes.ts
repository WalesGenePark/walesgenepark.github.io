export type LanguageCode = 'en' | 'cy';

export interface RouteMapping {
  [key: string]: {
    display: {
      [K in LanguageCode]: string;
    };
  };
}

export const sectionRoutes: RouteMapping = {
  // Base routes with translations for display/navigation
  'contact': { display: { en: 'Contact', cy: 'Cysylltu' } },
  'events': { display: { en: 'Events', cy: 'Digwyddiadau' } },
  'news': { display: { en: 'News', cy: 'Newyddion' } },
  'team': { display: { en: 'Team', cy: 'Tîm' } },
  'privacy': { display: { en: 'Privacy Policy', cy: 'Polisi Preifatrwydd' } },
  'cookies': { display: { en: 'Cookie Policy', cy: 'Polisi Cwcis' } }
};

export function isValidSection(section: string): boolean {
  return section in sectionRoutes;
}

export function getSectionTitle(section: string, lang: LanguageCode): string {
  return sectionRoutes[section]?.display[lang] || section;
}

export function getAlternateSection(section: string): string {
  return section;
}
