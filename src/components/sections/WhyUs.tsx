"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";
import { Reveal } from "@/components/ui/Reveal";

const icons: ReactNode[] = [
  // Quality globe
  <svg key="0" viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  // Brand mark
  <svg key="1" viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  // Partnership
  <svg key="2" viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
    <path d="M8 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM16 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 20c.5-2.5 2.5-4 4-4h1c1.2 0 2.3.5 3 1.3.7-.8 1.8-1.3 3-1.3h1c1.5 0 3.5 1.5 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Distribution network
  <svg key="3" viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
    <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 7.5l3.5 8M16 7.5l-3.5 8M8.5 6h7" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  // Quality check
  <svg key="4" viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
    <path d="M12 3l2.2 2.2L17 4l.2 2.8L20 8l-1.2 2.5L20 13l-2.8.2L17 16l-2.8-1.2L12 17l-2.2-2.2L7 16l-.2-2.8L4 13l1.2-2.5L4 8l2.8-.2L7 4l2.8 1.2L12 3z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9.5 12l1.8 1.8 3.7-3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Support
  <svg key="5" viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
    <path d="M12 21a9 9 0 1 0-9-9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 12v3a2 2 0 0 0 2 2h1M8 12h2l1.5-3 2 6 1.5-3H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section
      id={siteConfig.sections.whyUs}
      className="bg-navy text-cream"
    >
      <div className="container-wide section-padding">
        <Reveal className="mb-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">{t.whyUs.title}</h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyUs.items.map((item, i) => (
            <Reveal key={item} delay={0.06 * i}>
              <article className="group h-full border border-gold/15 bg-navy-soft/30 p-6 text-center transition-all duration-300 hover:border-gold/40 hover:bg-navy-soft/55">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-shadow duration-300 group-hover:shadow-gold-sm">
                  {icons[i]}
                </div>
                <p className="mx-auto max-w-xs text-base leading-relaxed text-cream/90">
                  {item}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
