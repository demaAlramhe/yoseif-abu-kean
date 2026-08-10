"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";

export function VisionMission() {
  const { t, dir } = useLanguage();
  const visionFrom = dir === "rtl" ? "right" : "left";
  const missionFrom = dir === "rtl" ? "left" : "right";

  return (
    <section className="bg-cream text-navy">
      <div className="container-wide section-padding">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <Reveal direction={visionFrom as "left" | "right"}>
            <article className="h-full border border-gold/25 bg-white px-8 py-10 text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center border border-gold/50 text-gold">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h2 className="font-display mb-4 text-2xl text-navy sm:text-3xl">
                {t.visionMission.visionTitle}
              </h2>
              <p className="mx-auto max-w-md leading-relaxed text-navy/75">
                {t.visionMission.visionBody}
              </p>
            </article>
          </Reveal>

          <Reveal direction={missionFrom as "left" | "right"} delay={0.1}>
            <article className="h-full border border-gold/25 bg-navy px-8 py-10 text-center text-cream">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center border border-gold/50 text-gold">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                  <path
                    d="M4 19V5M4 19h16M8 15V9M12 15V7M16 15v-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h2 className="font-display mb-4 text-2xl text-gold sm:text-3xl">
                {t.visionMission.missionTitle}
              </h2>
              <p className="mx-auto max-w-md leading-relaxed text-cream/75">
                {t.visionMission.missionBody}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
