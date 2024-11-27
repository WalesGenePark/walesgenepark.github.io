import { ui, defaultLang, routes } from './config';
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
  return segments.join('/');
}

export function getLocalizedPath(path: string, targetLang: LanguageCode): string {
  const segments = path.split('/');
  if (segments.length >= 2) {
    segments[1] = targetLang;
  }
  return segments.join('/');
}
