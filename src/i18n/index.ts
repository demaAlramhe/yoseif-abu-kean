import { ar } from "./dictionaries/ar";
import { en } from "./dictionaries/en";
import { he } from "./dictionaries/he";
import type { Dictionary, Locale } from "./types";
import { DEFAULT_LOCALE } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  he,
  ar,
  en,
};

export function getDictionary(locale: Locale = DEFAULT_LOCALE): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export * from "./types";
