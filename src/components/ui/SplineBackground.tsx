"use client";

import { siteConfig } from "@/lib/siteConfig";

/**
 * Lightweight Spline embed for the hero background.
 * TODO: paste the real Spline scene URL into siteConfig.splineEmbedUrl
 * (from https://spline.design — export → Public URL / iframe).
 */
export function SplineBackground() {
  const url = siteConfig.splineEmbedUrl;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Soft gold orb fallback so hero never looks empty before Spline is wired */}
      <div className="absolute end-[-10%] top-1/2 h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.28)_0%,rgba(200,169,81,0.08)_35%,transparent_70%)] blur-2xl" />
      <div className="absolute end-[8%] top-[28%] h-40 w-40 animate-pulse rounded-full bg-gold/10 blur-3xl" />

      {url ? (
        <iframe
          src={url}
          title="Al-Yosef 3D background"
          className="absolute inset-0 h-full w-full scale-110 opacity-40"
          loading="lazy"
          allow="autoplay"
        />
      ) : (
        /*
         * TODO: Replace siteConfig.splineEmbedUrl with your Spline public URL, e.g.
         * https://my.spline.design/abstractorbliquidgold-xxxxxxxx/
         * Then this iframe will render automatically.
         */
        <iframe
          src="about:blank"
          title="Spline placeholder — paste real embed URL in siteConfig.splineEmbedUrl"
          className="absolute inset-0 h-full w-full opacity-0"
          tabIndex={-1}
          aria-hidden
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/55 to-navy" />
    </div>
  );
}
