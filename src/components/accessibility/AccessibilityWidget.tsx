"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";

const STORAGE_KEY = "alyosef-a11y";

interface A11yPrefs {
  fontScale: number;
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  stopAnimations: boolean;
  readableFont: boolean;
}

const DEFAULT_PREFS: A11yPrefs = {
  fontScale: 1,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  stopAnimations: false,
  readableFont: false,
};

function applyPrefs(prefs: A11yPrefs) {
  const root = document.documentElement;
  root.style.setProperty("--font-size-scale", String(prefs.fontScale));
  root.dataset.highContrast = String(prefs.highContrast);
  root.dataset.grayscale = String(prefs.grayscale);
  root.dataset.underlineLinks = String(prefs.underlineLinks);
  root.dataset.reduceMotion = String(prefs.stopAnimations);
  root.dataset.readableFont = String(prefs.readableFont);
}

export function AccessibilityWidget() {
  const { t, dir } = useLanguage();
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(DEFAULT_PREFS);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULT_PREFS, ...JSON.parse(raw) } as A11yPrefs;
        setPrefs(parsed);
        applyPrefs(parsed);
        return;
      }
    } catch {
      /* ignore corrupt storage */
    }
    applyPrefs(DEFAULT_PREFS);
  }, []);

  const persist = useCallback((next: A11yPrefs) => {
    setPrefs(next);
    applyPrefs(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const toggle = (key: keyof Omit<A11yPrefs, "fontScale">) => {
    persist({ ...prefs, [key]: !prefs[key] });
  };

  const changeFont = (delta: number) => {
    const next = Math.min(1.4, Math.max(0.85, Number((prefs.fontScale + delta).toFixed(2))));
    persist({ ...prefs, fontScale: next });
  };

  const reset = () => persist(DEFAULT_PREFS);

  const cornerClass = dir === "rtl" ? "left-4 sm:left-6" : "right-4 sm:right-6";

  return (
    <div className={`fixed bottom-4 z-[60] ${cornerClass} sm:bottom-6`}>
      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label={t.accessibility.title}
          className="mb-3 w-[min(100vw-2rem,20rem)] border border-gold/30 bg-navy p-4 text-cream shadow-xl"
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-wide text-gold">
              {t.accessibility.title}
            </h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-cream/70 hover:text-cream"
              aria-label={t.accessibility.closePanel}
            >
              ✕
            </button>
          </div>

          <div className="mb-3 flex gap-2">
            <button
              type="button"
              onClick={() => changeFont(-0.05)}
              className="flex-1 border border-gold/30 px-2 py-2 text-sm hover:border-gold"
              aria-label={t.accessibility.fontDecrease}
            >
              A−
            </button>
            <button
              type="button"
              onClick={() => changeFont(0.05)}
              className="flex-1 border border-gold/30 px-2 py-2 text-sm hover:border-gold"
              aria-label={t.accessibility.fontIncrease}
            >
              A+
            </button>
          </div>

          <ul className="space-y-2 text-sm">
            {(
              [
                ["highContrast", t.accessibility.highContrast],
                ["grayscale", t.accessibility.grayscale],
                ["underlineLinks", t.accessibility.underlineLinks],
                ["stopAnimations", t.accessibility.stopAnimations],
                ["readableFont", t.accessibility.readableFont],
              ] as const
            ).map(([key, label]) => (
              <li key={key}>
                <button
                  type="button"
                  aria-pressed={prefs[key]}
                  onClick={() => toggle(key)}
                  className={`flex w-full items-center justify-between border px-3 py-2 text-center transition ${
                    prefs[key]
                      ? "border-gold bg-gold/15 text-gold"
                      : "border-gold/20 hover:border-gold/50"
                  }`}
                >
                  <span>{label}</span>
                  <span aria-hidden className="text-xs">
                    {prefs[key] ? "●" : "○"}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={reset}
            className="mt-3 w-full border border-gold/40 py-2 text-sm text-gold hover:bg-gold/10"
          >
            {t.accessibility.reset}
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? t.accessibility.closePanel : t.accessibility.openPanel}
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-navy text-gold shadow-gold transition hover:bg-gold hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
          <circle cx="12" cy="4.5" r="2" />
          <path d="M12 8c-3.5 0-5.5 1.2-6.5 2.2-.4.4-.3 1 .2 1.2l2.8 1.1v7.2c0 .5.4.9.9.9h.9c.5 0 .9-.4.9-.9V15h1.6v4.6c0 .5.4.9.9.9h.9c.5 0 .9-.4.9-.9v-7.2l2.8-1.1c.5-.2.6-.8.2-1.2C17.5 9.2 15.5 8 12 8z" />
        </svg>
      </button>
    </div>
  );
}
