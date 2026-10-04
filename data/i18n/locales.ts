import {
  Locale,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  LOCALES_INFO,
  LocaleInfo,
} from "./types";

export { SUPPORTED_LOCALES, DEFAULT_LOCALE, LOCALES_INFO };

export function isValidLocale(lang: string): lang is Locale {
  return SUPPORTED_LOCALES.includes(lang as Locale);
}

export function getLocaleInfo(locale: string): LocaleInfo {
  if (isValidLocale(locale)) {
    return LOCALES_INFO[locale];
  }
  return LOCALES_INFO[DEFAULT_LOCALE];
}

export function getLocalizedUrl(path: string, locale: Locale): string {
  // Normalize path
  let cleanPath = path.startsWith("/") ? path : `/${path}`;

  // Strip existing locale if present
  for (const loc of SUPPORTED_LOCALES) {
    if (cleanPath === `/${loc}` || cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.slice(loc.length + 1) || "/";
      break;
    }
  }

  if (cleanPath === "/") {
    return `/${locale}`;
  }

  return `/${locale}${cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`}`;
}
