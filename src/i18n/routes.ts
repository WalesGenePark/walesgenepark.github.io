import { ui } from './config';

export type LanguageCode = 'en' | 'cy';
export type UIKey = keyof typeof ui.en;

export type Section = 'news' | 'events' | 'team' | 'contact' | 'privacy' | 'cookies';

export const sectionRoutes: Record<Section, { en: string; cy: string }> = {
  news: { en: 'news', cy: 'newyddion' },
  events: { en: 'events', cy: 'digwyddiadau' },
  team: { en: 'team', cy: 'tim' },
  contact: { en: 'contact', cy: 'cysylltu' },
  privacy: { en: 'privacy', cy: 'preifatrwydd' },
  cookies: { en: 'cookies', cy: 'cwcis' }
};

export function isValidSection(section: string): section is Section {
  return section in sectionRoutes;
}

export function getAlternateSection(section: string, currentLang: LanguageCode): string {
  if (!isValidSection(section)) return section;
  const otherLang = currentLang === 'en' ? 'cy' : 'en';
  return sectionRoutes[section][otherLang];
}

export function getSectionTitle(section: string, currentLang: LanguageCode): string {
  if (!isValidSection(section)) return section;
  const key = `nav.${section}` as UIKey;
  return ui[currentLang][key] || section;
}
