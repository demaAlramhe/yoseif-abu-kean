import type { Locale } from "@/i18n/types";

export type SocialNetwork = "facebook" | "instagram" | "tiktok";

const NETWORK_LABEL: Record<Locale, Record<SocialNetwork, string>> = {
  he: {
    facebook: "בפייסבוק",
    instagram: "באינסטגרם",
    tiktok: "בטיקטוק",
  },
  ar: {
    facebook: "على فيسبوك",
    instagram: "على إنستغرام",
    tiktok: "على تيك توك",
  },
  en: {
    facebook: "on Facebook",
    instagram: "on Instagram",
    tiktok: "on TikTok",
  },
};

export function socialAriaLabel(locale: Locale, brand: string, network: SocialNetwork): string {
  return `${brand} ${NETWORK_LABEL[locale][network]}`;
}

export function SocialIcon({
  name,
  className = "h-4 w-4",
}: {
  name: SocialNetwork;
  className?: string;
}) {
  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M14.5 8.5V6.8c0-.7.5-1 1.1-1H17V3h-2.2C12.2 3 11 4.5 11 6.6v1.9H9v2.7h2V21h2.8v-9.8h2.3l.4-2.7h-2.7z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3zm5.8-8.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM12 4.8c1.3 0 1.5 0 2 .1a3.7 3.7 0 0 1 1.2.2 2.4 2.4 0 0 1 1.4 1.4 3.7 3.7 0 0 1 .2 1.2c.1.5.1.7.1 2s0 1.5-.1 2a3.7 3.7 0 0 1-.2 1.2 2.4 2.4 0 0 1-1.4 1.4 3.7 3.7 0 0 1-1.2.2c-.5.1-.7.1-2 .1s-1.5 0-2-.1a3.7 3.7 0 0 1-1.2-.2 2.4 2.4 0 0 1-1.4-1.4 3.7 3.7 0 0 1-.2-1.2c-.1-.5-.1-.7-.1-2s0-1.5.1-2a3.7 3.7 0 0 1 .2-1.2 2.4 2.4 0 0 1 1.4-1.4 3.7 3.7 0 0 1 1.2-.2c.5-.1.7-.1 2-.1m0-1.6c-1.3 0-1.6 0-2.1.1a5.3 5.3 0 0 0-1.7.3 4.1 4.1 0 0 0-2.3 2.3 5.3 5.3 0 0 0-.3 1.7C5.5 8.2 5.5 8.5 5.5 12s0 3.8.1 4.4a5.3 5.3 0 0 0 .3 1.7 4.1 4.1 0 0 0 2.3 2.3 5.3 5.3 0 0 0 1.7.3c.5.1.8.1 2.1.1s1.6 0 2.1-.1a5.3 5.3 0 0 0 1.7-.3 4.1 4.1 0 0 0 2.3-2.3 5.3 5.3 0 0 0 .3-1.7c.1-.6.1-.9.1-4.4s0-3.8-.1-4.4a5.3 5.3 0 0 0-.3-1.7 4.1 4.1 0 0 0-2.3-2.3 5.3 5.3 0 0 0-1.7-.3c-.5-.1-.8-.1-2.1-.1z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
    </svg>
  );
}
