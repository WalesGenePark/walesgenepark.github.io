import slugify from 'limax';
import { SITE } from 'astrowind:config';
import { defaultLang } from '~/i18n/config';
import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));

const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.base || '/';

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

/** */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

/** */
export const getPermalink = (slug = '', type = 'page', lang?: string): string => {
  let permalink: string;

  if (
    slug.startsWith('https://') ||
    slug.startsWith('http://') ||
    slug.startsWith('://') ||
    slug.startsWith('#') ||
    slug.startsWith('javascript:')
  ) {
    return slug;
  }

  switch (type) {
    case 'home':
      permalink = getHomePermalink(lang);
      break;

    case 'news':
      permalink = getNewsPermalink(lang);
      break;

    case 'events':
      permalink = getEventsPermalink(lang);
      break;

    case 'team':
      permalink = getTeamPermalink(lang);
      break;

    case 'asset':
      permalink = getAsset(slug);
      break;

    case 'page':
    default:
      permalink = createPath(lang || '', slug);
      break;
  }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (lang?: string): string => {
  if (lang && lang !== defaultLang) {
    return getPermalink(lang);
  }
  return getPermalink('');
};

/** */
export const getNewsPermalink = (lang?: string): string => {
  if (lang && lang !== defaultLang) {
    return getPermalink('news', 'page', lang);
  }
  return getPermalink('news');
};

/** */
export const getEventsPermalink = (lang?: string): string => {
  if (lang && lang !== defaultLang) {
    return getPermalink('events', 'page', lang);
  }
  return getPermalink('events');
};

/** */
export const getTeamPermalink = (lang?: string): string => {
  if (lang && lang !== defaultLang) {
    return getPermalink('team', 'page', lang);
  }
  return getPermalink('team');
};

/** */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

/** */
const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);

/** */
export const applyGetPermalinks = (menu: object = {}, lang?: string) => {
  if (Array.isArray(menu)) {
    return menu.map((item) => applyGetPermalinks(item, lang));
  } else if (typeof menu === 'object' && menu !== null) {
    const obj = {};
    for (const key in menu) {
      if (key === 'href') {
        if (typeof menu[key] === 'string') {
          obj[key] = getPermalink(menu[key], 'page', lang);
        } else if (typeof menu[key] === 'object') {
          if (menu[key].type === 'home') {
            obj[key] = getHomePermalink(lang);
          } else if (menu[key].type === 'news') {
            obj[key] = getNewsPermalink(lang);
          } else if (menu[key].type === 'events') {
            obj[key] = getEventsPermalink(lang);
          } else if (menu[key].type === 'team') {
            obj[key] = getTeamPermalink(lang);
          } else if (menu[key].type === 'asset') {
            obj[key] = getAsset(menu[key].url);
          } else if (menu[key].url) {
            obj[key] = getPermalink(menu[key].url, menu[key].type, lang);
          }
        }
      } else {
        obj[key] = applyGetPermalinks(menu[key], lang);
      }
    }
    return obj;
  }
  return menu;
};
