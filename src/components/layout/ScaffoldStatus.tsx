"use client";

import { useLanguage } from "@/context/LanguageProvider";

/**
 * Temporary scaffold placeholder — replaced section-by-section after confirmation.
 */
export function ScaffoldStatus() {
  const { t, locale, dir } = useLanguage();

  return (
    <main
      id="home"
      className="section-padding flex min-h-[70vh] flex-col items-center justify-center text-center"
    >
      <div className="container-narrow max-w-2xl">
        <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold uppercase">
          Phase 1 — Scaffold
        </p>
        <h1 className="font-display mb-4 text-3xl text-balance text-cream sm:text-4xl md:text-5xl">
          {t.companyName}
        </h1>
        <p className="mb-6 text-lg text-cream/80">{t.hero.headline}</p>
        <p className="mb-8 text-sm leading-relaxed text-cream/60">
          Language system, sticky header, brand tokens, and dictionaries are
          ready. Confirm to continue with Hero → About → Brand → Vision → Why
          Us → Contact → Footer → Accessibility.
        </p>
        <dl className="mx-auto grid max-w-md grid-cols-2 gap-3 text-start text-sm">
          <div className="rounded-lg border border-gold/20 bg-navy-soft/40 px-4 py-3">
            <dt className="text-cream/50">Locale</dt>
            <dd className="font-medium text-gold">{locale}</dd>
          </div>
          <div className="rounded-lg border border-gold/20 bg-navy-soft/40 px-4 py-3">
            <dt className="text-cream/50">Direction</dt>
            <dd className="font-medium text-gold">{dir}</dd>
          </div>
          <div className="col-span-2 rounded-lg border border-gold/20 bg-navy-soft/40 px-4 py-3">
            <dt className="text-cream/50">Active dictionary sample</dt>
            <dd className="mt-1 text-cream/90">{t.hero.eyebrow}</dd>
          </div>
        </dl>
        <p className="mt-10 text-xs text-cream/40">
          Drop your logo at <code className="text-gold/80">/public/logo.png</code>
        </p>
      </div>
    </main>
  );
}
