"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { t, locale } = useLanguage();
  const isArabic = locale === "ar";

  return (
    <section
      id={siteConfig.sections.about}
      className="relative overflow-hidden bg-cream text-navy"
    >
      <div className="container-wide relative section-padding">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal className="text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gold-dark uppercase">
              Al-Yosef Global
            </p>
            <h2
              className={`mb-6 text-3xl text-navy sm:text-4xl ${
                isArabic ? "font-arabic leading-[1.6]" : "font-display"
              }`}
              style={isArabic ? { lineHeight: 1.6 } : undefined}
            >
              {t.about.title}
            </h2>
            <div className="mx-auto max-w-2xl space-y-4 text-base leading-relaxed text-navy/80 sm:text-lg">
              {t.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} direction="left">
            <div className="relative border border-gold/30 bg-navy px-8 py-10 text-center text-cream shadow-[0_24px_60px_rgba(12,28,67,0.18)]">
              <div className="absolute start-0 top-0 h-full w-1 bg-gold" aria-hidden />
              <p className="mb-4 text-sm font-medium tracking-wide text-gold">
                {t.hero.eyebrow}
              </p>
              <p
                className={`text-2xl text-cream sm:text-3xl ${
                  isArabic
                    ? "font-arabic leading-[1.6]"
                    : "font-display leading-snug"
                }`}
                style={isArabic ? { lineHeight: 1.6 } : undefined}
              >
                {t.hero.headline}
              </p>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-cream/70">
                {t.hero.intro[1]}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
