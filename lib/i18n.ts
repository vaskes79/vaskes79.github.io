import { defaultLocale, type Locale } from '@/i18n/config';
import enTranslations from '@/i18n/locales/en.json';
import ruTranslations from '@/i18n/locales/ru.json';

type Translations = typeof enTranslations;

const translations: Record<Locale, Translations> = {
  en: enTranslations,
  ru: ruTranslations,
};

export function getTranslations(locale: Locale = defaultLocale): Translations {
  return translations[locale] || translations[defaultLocale];
}

export function getTranslation(
  locale: Locale,
  key: string,
  params?: Record<string, string | number>
): string {
  const t = getTranslations(locale);
  const keys = key.split('.');
  let value: any = t;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }

  if (typeof value !== 'string') {
    return key;
  }

  if (params) {
    return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
      return params[paramKey]?.toString() || match;
    });
  }

  return value;
}

export function isValidLocale(locale: string): locale is Locale {
  return locale === 'en' || locale === 'ru';
}

