/**
 * Single source for company contact details, phones, and social profiles.
 * Section components read from here — do not hardcode these values elsewhere.
 */
export const CONTACT = {
  company: "Al-Yosef Global Ltd",
  email: "info@al-yosefglobal.com",
  mobile: "052-936-7090",
  mobileIntl: "+972529367090",
  landline: "08-6600049",
  landlineIntl: "+97286600049",
  whatsapp: "https://wa.me/972529367090",
  address: "הקיימות 3, פארק עידן הנגב",
  social: {
    alyosef: {
      facebook: "https://www.facebook.com/profile.php?id=61596405845029",
      instagram: "https://www.instagram.com/alyosef.global",
      tiktok: "https://www.tiktok.com/@alyosef.global",
    },
    vevia: {
      facebook: "https://www.facebook.com/profile.php?id=61596596246182",
      instagram: "https://www.instagram.com/vevia.il",
      tiktok: "https://www.tiktok.com/@vevia.il",
    },
  },
} as const;

export const SITE_URL = "https://al-yosefglobal.com";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: CONTACT.company,
  url: SITE_URL,
  email: CONTACT.email,
  telephone: [CONTACT.landlineIntl, CONTACT.mobileIntl],
  address: {
    "@type": "PostalAddress",
    streetAddress: "הקיימות 3",
    addressLocality: "פארק עידן הנגב",
    addressCountry: "IL",
  },
  brand: { "@type": "Brand", name: "VEVIA" },
  sameAs: [
    CONTACT.social.alyosef.facebook,
    CONTACT.social.alyosef.instagram,
    CONTACT.social.alyosef.tiktok,
    CONTACT.social.vevia.facebook,
    CONTACT.social.vevia.instagram,
    CONTACT.social.vevia.tiktok,
  ],
} as const;

/**
 * Central site config — swap assets / map embed / contact details here
 * without touching section components.
 */
export const siteConfig = {
  companyLegalName: CONTACT.company,
  brandName: "VEVIA",
  phone: CONTACT.mobile,
  phoneHref: `tel:${CONTACT.mobileIntl}`,
  landline: CONTACT.landline,
  landlineHref: `tel:${CONTACT.landlineIntl}`,
  email: CONTACT.email,
  emailHref: `mailto:${CONTACT.email}`,
  /** WhatsApp business number in international format (no +) */
  whatsappNumber: CONTACT.mobileIntl.slice(1),
  whatsapp: CONTACT.whatsapp,
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
  social: CONTACT.social,
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

/** Build a wa.me deep link; optional prefilled message (URL-encoded). */
export function whatsappUrl(message?: string): string {
  const base = CONTACT.whatsapp;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
