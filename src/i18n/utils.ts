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
  return function r(key: keyof typeof routes) {
    const route = routes[key];
    return route ? (route[lang] || route[defaultLang]) : '';
  };
}

export function getRouteFromKey(key: string, lang: keyof typeof routes) {
  const route = routes[key];
  return route ? (route[lang] || route[defaultLang]) : '';
}

export function getPathWithoutLang(path: string) {
  const segments = path.split('/');
  segments.splice(1, 1); // Remove language segment
  return segments.join('/') || '/';
}

export function getLocalizedPath(path: string, lang: string) {
  // Remove current language prefix if it exists
  const pathWithoutLang = path.replace(/^\/(en|cy)\//, '/');

  // Special handling for calendar/calendr
  if (pathWithoutLang.startsWith('/calendar') || pathWithoutLang.startsWith('/calendr')) {
    const basePath = lang === 'en' ? '/calendar' : '/calendr';
    const queryString = path.includes('?') ? path.slice(path.indexOf('?')) : '';
    return `/${lang}${basePath}${queryString}`;
  }

  // Handle other routes
  for (const [key, route] of Object.entries(routes)) {
    if (pathWithoutLang === route.en || pathWithoutLang === route.cy) {
      return `/${lang}${route[lang as keyof typeof route]}`;
    }
  }

  // Default case: just add language prefix
  return `/${lang}${pathWithoutLang}`;
}
