"use client";

import type { ReactElement } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

type CategoryKey = "sparkling" | "juices" | "coffee";

const categoryMeta: {
  key: CategoryKey;
  gradient: string;
  icon: ReactElement;
}[] = [
  {
    key: "sparkling",
    gradient: "from-[#1a3a6e] to-[#0c1c43]",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
        <path
          d="M26 8h12l2 14v28a6 6 0 0 1-6 6H30a6 6 0 0 1-6-6V22l2-14z"
          fill="none"
          stroke="#c8a951"
          strokeWidth="2"
        />
        <path d="M24 22h16" stroke="#c8a951" strokeWidth="2" />
        <circle cx="32" cy="36" r="3" fill="#c8a951" opacity="0.7" />
        <circle cx="28" cy="42" r="2" fill="#c8a951" opacity="0.45" />
        <circle cx="36" cy="40" r="2" fill="#c8a951" opacity="0.45" />
      </svg>
    ),
  },
  {
    key: "juices",
    gradient: "from-[#243d2a] to-[#0c1c43]",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
        <path
          d="M28 6h8v8l4 6v30a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V20l4-6V6z"
          fill="none"
          stroke="#c8a951"
          strokeWidth="2"
        />
        <path
          d="M26 28c4 6 8 6 12 0"
          fill="none"
          stroke="#c8a951"
          strokeWidth="2"
          opacity="0.7"
        />
      </svg>
    ),
  },
  {
    key: "coffee",
    gradient: "from-[#3a2a1a] to-[#0c1c43]",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
        <path
          d="M18 20h24a4 4 0 0 1 4 4v16a10 10 0 0 1-10 10H24a10 10 0 0 1-10-10V24a4 4 0 0 1 4-4z"
          fill="none"
          stroke="#c8a951"
          strokeWidth="2"
        />
        <path
          d="M46 26h4a6 6 0 0 1 0 12h-4"
          fill="none"
          stroke="#c8a951"
          strokeWidth="2"
        />
        <path
          d="M26 12c2 2 2 4 0 6M32 10c2 2 2 5 0 7M38 12c2 2 2 4 0 6"
          fill="none"
          stroke="#c8a951"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function Brand() {
  const { t } = useLanguage();

  return (
    <section
      id={siteConfig.sections.brand}
      className="bg-navy text-cream"
    >
      <div className="container-wide section-padding">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            {t.brandName}
          </p>
          <h2 className="font-display mb-4 text-3xl sm:text-4xl">
            {t.brand.title}
          </h2>
          <p className="text-base leading-relaxed text-cream/70 sm:text-lg">
            {t.brand.intro}
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryMeta.map((cat, i) => {
            const copy = t.brand.categories[cat.key];
            return (
              <Reveal key={cat.key} delay={0.08 * i}>
                <TiltCard className="h-full">
                  {/* TODO: replace with licensed product photography */}
                  <article className="flex h-full flex-col border border-gold/20 bg-navy-soft/40 p-6 text-center transition-colors duration-300 hover:border-gold/45">
                    <div
                      className={`mb-6 flex h-40 w-full items-center justify-center bg-gradient-to-br ${cat.gradient}`}
                    >
                      {/* TODO: replace with licensed product photography */}
                      <div className="flex flex-col items-center justify-center gap-2">
                        {cat.icon}
                        <span className="text-[10px] tracking-widest text-gold/50 uppercase">
                          Placeholder
                        </span>
                      </div>
                    </div>
                    <h3 className="font-display mb-2 text-xl text-gold">
                      {copy.title}
                    </h3>
                    <p className="mx-auto max-w-xs text-sm leading-relaxed text-cream/70">
                      {copy.description}
                    </p>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-cream/60 sm:text-base">
            {t.brand.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
