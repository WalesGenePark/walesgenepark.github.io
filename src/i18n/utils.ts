import { ui, defaultLang, routes } from './config';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useRoutes(lang: keyof typeof routes) {
  return function r(key: keyof typeof routes[typeof defaultLang]) {
    return routes[lang][key] || routes[defaultLang][key];
  };
}

export function getRouteFromKey(key: keyof typeof routes[typeof defaultLang], lang: keyof typeof routes): string {
  return routes[lang][key] || routes[defaultLang][key];
}
