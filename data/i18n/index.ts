import { Locale, DEFAULT_LOCALE, Dictionary } from "./types";
import { isValidLocale } from "./locales";
import { de } from "./de";
import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { it } from "./it";
import { pt } from "./pt";
import { nl } from "./nl";
import { pl } from "./pl";
import { tr } from "./tr";
import { sq } from "./sq";
import { ar } from "./ar";

const dictionaries: Record<Locale, Dictionary> = {
  de,
  en,
  fr,
  es,
  it,
  pt,
  nl,
  pl,
  tr,
  sq,
  ar,
};

export function getDictionary(locale: string = DEFAULT_LOCALE): Dictionary {
  if (isValidLocale(locale)) {
    return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
  }
  return dictionaries[DEFAULT_LOCALE];
}

export * from "./types";
export * from "./locales";
