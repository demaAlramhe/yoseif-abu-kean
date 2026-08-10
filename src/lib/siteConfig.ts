/**
 * Central site config — swap assets / map embed / contact details here
 * without touching section components.
 */
export const siteConfig = {
  companyLegalName: "Al-Yosef Global Ltd",
  brandName: "VEVIA",
  phone: "052-936-7090",
  phoneHref: "tel:+972529367090",
  email: "info@al-yosefglobal.com",
  emailHref: "mailto:info@al-yosefglobal.com",
  /** WhatsApp business number in international format (no +) */
  whatsappNumber: "972529367090",
  logo: {
    /**
     * Primary color logo (navy + gold wordmark, transparent PNG).
     * Use on cream/white/light surfaces only — not directly on navy.
     */
    src: "/logoNoB.png",
    /** Large circular hero / seal badge (same asset on cream chip) */
    badgeSrc: "/logoNoB.png",
    /**
     * TODO: drop white/gold mono version at /public/logo-mono-white.png
     * for header, footer, favicon, and any direct-on-navy placement.
     * Until then, navy placements use a cream chip behind logoNoB.png.
     */
    monoSrc: "/logo-mono-white.png",
    /** Set true once logo-mono-white.png is uploaded */
    monoReady: false,
    alt: "Al-Yosef Global Ltd",
  },
  /**
   * TODO: Replace with real Spline scene URL from https://spline.design
   * Example: https://my.spline.design/your-scene-id/
   */
  splineEmbedUrl: "",
  /**
   * TODO: Replace with real Google Maps embed URL for HaKaymot 3, Idan HaNegev
   */
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Idan%20HaNegev%20Industrial%20Park&t=&z=14&ie=UTF8&iwloc=&output=embed",
  social: {
    /** TODO: replace with real profile URLs */
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  sections: {
    home: "home",
    about: "about",
    brand: "brand",
    whyUs: "why-us",
    contact: "contact",
  },
} as const;

/** Color logo for light surfaces; mono for navy when ready, else color (put on cream chip). */
export function logoSrcForSurface(surface: "light" | "dark"): string {
  if (surface === "dark" && siteConfig.logo.monoReady) {
    return siteConfig.logo.monoSrc;
  }
  return siteConfig.logo.src;
}

/** Build a wa.me deep link; optional prefilled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
