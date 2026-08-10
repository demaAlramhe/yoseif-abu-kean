"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";
import { LogoBadge } from "@/components/ui/LogoBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SplineBackground } from "@/components/ui/SplineBackground";

export function Hero() {
  const { t, locale } = useLanguage();
  const isArabic = locale === "ar";

  return (
    <section
      id={siteConfig.sections.home}
      className="relative isolate min-h-[min(100svh,920px)] overflow-hidden bg-navy-radial"
    >
      <SplineBackground />

      <div className="container-wide relative z-10 grid items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-8 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="order-2 text-center md:order-1">
          <Reveal>
            <p
              className={`mb-4 text-2xl tracking-wide text-gold sm:text-3xl md:text-4xl ${
                isArabic ? "font-arabic leading-[1.6]" : "font-display"
              }`}
            >
              {t.companyName}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mb-4 text-xs font-medium tracking-[0.18em] text-gold/80 uppercase sm:text-sm">
              {t.hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <h1
              className={`hero-headline mx-auto mb-6 max-w-xl text-3xl text-cream sm:text-4xl md:text-[2.65rem] lg:text-5xl ${
                isArabic
                  ? "font-arabic leading-[1.6]"
                  : "font-display leading-tight text-balance"
              }`}
              style={isArabic ? { lineHeight: 1.6 } : undefined}
            >
              {t.hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              {t.hero.intro[0]}
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`#${siteConfig.sections.brand}`} className="btn-primary">
                {t.hero.ctaBrand}
              </a>
              <a
                href={`#${siteConfig.sections.contact}`}
                className="btn-secondary"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.18}
          direction="left"
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <div className="relative">
            <div
              className="absolute inset-0 -m-8 rounded-full bg-[radial-gradient(circle,rgba(200,169,81,0.22),transparent_65%)] blur-xl"
              aria-hidden
            />
            <LogoBadge size="hero" tilt />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
