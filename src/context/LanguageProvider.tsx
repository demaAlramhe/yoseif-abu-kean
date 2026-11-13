"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries } from "@/i18n";
import {
  DEFAULT_LOCALE,
  getDirection,
  type Dictionary,
  type Locale,
} from "@/i18n/types";

const STORAGE_KEY = "alyosef-locale";

interface LanguageContextValue {
  locale: Locale;
  dir: "rtl" | "ltr";
  t: Dictionary;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "he" || value === "ar" || value === "en";
}

export function LanguageProvider({
  children,
  lockLocale,
}: {
  children: ReactNode;
  /** Keep this subtree on one locale and do not read or write the stored preference. */
  lockLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(lockLocale ?? DEFAULT_LOCALE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (lockLocale) {
      setHydrated(true);
      return;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
    }
    setHydrated(true);
  }, [lockLocale]);

  const setLocale = useCallback(
    (next: Locale) => {
      if (lockLocale) return;
      setLocaleState(next);
      window.localStorage.setItem(STORAGE_KEY, next);
    },
    [lockLocale],
  );

  const activeLocale = lockLocale ?? locale;
  const dir = getDirection(activeLocale);
  const t = dictionaries[activeLocale];

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = activeLocale;
    document.documentElement.dir = dir;
  }, [activeLocale, dir, hydrated]);

  const value = useMemo(
    () => ({
      locale: activeLocale,
      dir,
      t,
      setLocale,
    }),
    [activeLocale, dir, t, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
