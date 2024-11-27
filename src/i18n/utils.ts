import { ui, defaultLang, routes, showDefaultLang } from './config';
import type { UIKey } from './ui';
import type { LanguageCode } from './routes';

export function getLangFromUrl(url: URL): LanguageCode {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as LanguageCode;
  return defaultLang as LanguageCode;
}

export function useTranslations(lang: LanguageCode) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useRoutes(lang: LanguageCode) {
  return function r(key: keyof typeof routes) {
    const route = routes[key];
    return route ? (route[lang] || route[defaultLang]) : '';
  };
}

export function getRouteFromKey(key: string, lang: LanguageCode) {
  const route = routes[key];
  return route ? (route[lang] || route[defaultLang]) : '';
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/');
  
  if (parts.length > 2) {
    const route = parts.slice(2).join('/');
    return route || '';
  }
  return '';
}

export function getPathWithoutLang(path: string) {
  const segments = path.split('/');
  segments.splice(1, 1); // Remove language segment
  return segments.join('/') || '/';
}

export function getLocalizedPath(path: string, lang: string) {
  // Special handling for root path
  if (path === '/' || path === '/en' || path === '/cy') {
    return `/${lang}`;
  }

  // Remove current language prefix if it exists
  const pathWithoutLang = path.replace(/^\/(en|cy)\//, '/');

  // Handle other routes
  for (const [key, route] of Object.entries(routes)) {
    if (pathWithoutLang === route.en || pathWithoutLang === route.cy) {
      return `/${lang}${route[lang as keyof typeof route]}`;
    }
  }

  // Default case: just add language prefix
  return `/${lang}${pathWithoutLang}`;
}
