import type { UIDict } from './ui';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export async function useTranslations(lang: keyof typeof languages) {
  const translations = await import(`./ui/${lang}.json`);
  return function t(key: string) {
    return key.split('.').reduce((obj: any, key: string) => obj?.[key], translations.default);
  };
}

export function getPathFromLang(lang: keyof typeof languages) {
  return lang === defaultLang ? '' : `/${lang}`;
}

export function getLangPath(path: string, lang: keyof typeof languages) {
  return `${getPathFromLang(lang)}${path}`;
} 