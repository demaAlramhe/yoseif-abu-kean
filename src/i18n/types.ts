export type Locale = "he" | "ar" | "en";

export type Direction = "rtl" | "ltr";

export interface NavCopy {
  home: string;
  about: string;
  brand: string;
  whyUs: string;
  contact: string;
  cta: string;
}

export interface HeroCopy {
  eyebrow: string;
  headline: string;
  intro: string[];
  ctaBrand: string;
  ctaContact: string;
}

export interface AboutCopy {
  title: string;
  paragraphs: string[];
}

export interface BrandCopy {
  title: string;
  intro: string;
  categories: {
    sparkling: { title: string; description: string };
    juices: { title: string; description: string };
    coffee: { title: string; description: string };
  };
  closing: string;
}

export interface VisionMissionCopy {
  visionTitle: string;
  visionBody: string;
  missionTitle: string;
  missionBody: string;
}

export interface WhyUsCopy {
  title: string;
  items: [string, string, string, string, string, string];
}

export interface ContactCopy {
  title: string;
  company: string;
  address: string;
  phone: string;
  email: string;
  form: {
    name: string;
    phone: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    validation: string;
  };
  whatsappGreeting: string;
  mapLabel: string;
}

export interface FooterCopy {
  accessibility: string;
  rights: string;
  socialLabel: string;
  madeBy: string;
}

export interface AccessibilityCopy {
  openPanel: string;
  closePanel: string;
  title: string;
  fontDecrease: string;
  fontIncrease: string;
  highContrast: string;
  grayscale: string;
  underlineLinks: string;
  stopAnimations: string;
  readableFont: string;
  reset: string;
}

export interface Dictionary {
  locale: Locale;
  dir: Direction;
  langName: string;
  companyName: string;
  brandName: string;
  nav: NavCopy;
  hero: HeroCopy;
  about: AboutCopy;
  brand: BrandCopy;
  visionMission: VisionMissionCopy;
  whyUs: WhyUsCopy;
  contact: ContactCopy;
  footer: FooterCopy;
  accessibility: AccessibilityCopy;
  languages: {
    he: string;
    ar: string;
    en: string;
  };
}

export const LOCALES: Locale[] = ["he", "ar", "en"];

export const DEFAULT_LOCALE: Locale = "he";

export function getDirection(locale: Locale): Direction {
  return locale === "en" ? "ltr" : "rtl";
}
