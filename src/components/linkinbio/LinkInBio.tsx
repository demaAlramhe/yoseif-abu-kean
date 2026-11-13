import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  SocialIcon,
  socialAriaLabel,
  type SocialNetwork,
} from "@/components/ui/SocialIcons";
import { CONTACT, whatsappUrl } from "@/lib/siteConfig";

const NETWORKS: SocialNetwork[] = ["facebook", "instagram", "tiktok"];

const PRESS =
  "transition-[transform,background-color,border-color,color] duration-150 ease-out active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 touch-manipulation";

export type LinkInBioTheme = "vevia" | "alyosef";

export interface LinkInBioButton {
  track: string;
  icon: string;
  label: string;
  ariaLabel: string;
  href: string;
  primary?: boolean;
}

export interface LinkInBioProps {
  theme: LinkInBioTheme;
  logo: { src: string; alt: string };
  title: string;
  subtitle: string;
  subtitleAr: string;
  buttons: LinkInBioButton[];
  socials: Record<SocialNetwork, string>;
  otherBrand: { href: string; label: string; ariaLabel: string };
}

const THEMES = {
  vevia: {
    background: "#FFFFFF",
    page: "bg-[#FFFFFF] text-[#111111]",
    primary: "border border-[#111111] bg-[#111111] text-white hover:bg-[#2b2b2b]",
    outline: "border border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111]/5",
    focus:
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F9A3C]",
    social: "border border-[#111111]/25 text-[#111111] hover:border-[#3F9A3C]",
    muted: "text-[#222222]",
    footer: "text-[#333333]",
  },
  alyosef: {
    background: "#021F3D",
    page: "bg-[#021F3D] text-white",
    primary: "border border-[#C9A24A] bg-[#C9A24A] text-[#021F3D] hover:bg-[#D4B56A]",
    outline: "border border-white bg-transparent text-white hover:bg-white/10",
    focus:
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24A]",
    social: "border border-white text-white hover:border-[#C9A24A] hover:text-[#C9A24A]",
    muted: "text-white",
    footer: "text-white",
  },
} as const;

export function linkInBioBackground(theme: LinkInBioTheme): string {
  return THEMES[theme].background;
}

/** Shared action stack. Product catalog is omitted — the site has no products route. */
export function linkInBioButtons(whatsappMessage: string): LinkInBioButton[] {
  return [
    {
      track: "whatsapp",
      icon: "💬",
      label: "הזמנה סיטונאית בוואטסאפ",
      ariaLabel: "הזמנה סיטונאית בוואטסאפ",
      href: whatsappUrl(whatsappMessage),
      primary: true,
    },
    {
      track: "call",
      icon: "☎️",
      label: "חייגו אלינו",
      ariaLabel: `חייגו אלינו, ${CONTACT.landline}`,
      href: `tel:${CONTACT.landlineIntl}`,
    },
    {
      track: "website",
      icon: "🌐",
      label: "לאתר",
      ariaLabel: "לאתר Al-Yosef Global",
      href: "/",
    },
    {
      track: "waze",
      icon: "📍",
      label: "ניווט ב-Waze",
      ariaLabel: `ניווט ב-Waze אל ${CONTACT.address}`,
      href: `https://waze.com/ul?q=${encodeURIComponent(CONTACT.address)}&navigate=yes`,
    },
  ];
}

function BioLink({
  href,
  track,
  ariaLabel,
  className,
  children,
}: {
  href: string;
  track: string;
  ariaLabel: string;
  className: string;
  children: ReactNode;
}) {
  const shared = {
    "aria-label": ariaLabel,
    "data-track": track,
    className,
  };

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...shared}>
        {children}
      </Link>
    );
  }

  const isHttp = href.startsWith("http://") || href.startsWith("https://");
  return (
    <a
      href={href}
      {...shared}
      {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function buttonClass(theme: LinkInBioTheme, primary: boolean): string {
  const tone = THEMES[theme];
  return `flex h-14 w-full items-center justify-center gap-2.5 rounded-[14px] px-4 text-[15px] font-semibold ${PRESS} ${tone.focus} ${primary ? tone.primary : tone.outline}`;
}

export function LinkInBio({
  theme,
  logo,
  title,
  subtitle,
  subtitleAr,
  buttons,
  socials,
  otherBrand,
}: LinkInBioProps) {
  const tone = THEMES[theme];
  const circular = theme === "alyosef";

  return (
    <main
      dir="rtl"
      lang="he"
      className={`flex min-h-dvh w-full justify-center overflow-x-hidden font-hebrew ${tone.page}`}
    >
      <div className="flex w-full max-w-[440px] flex-col items-center px-6 pb-28 pt-6">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={circular ? 120 : 200}
          height={circular ? 120 : 88}
          priority
          sizes={circular ? "120px" : "200px"}
          className={
            circular
              ? "h-[120px] w-[120px] rounded-full object-cover"
              : "h-auto w-[200px]"
          }
        />

        {theme === "vevia" ? (
          <div dir="ltr" className="mt-3 flex h-1 w-[140px] gap-1.5" aria-hidden="true">
            <span className="h-full flex-1 rounded-full bg-[#F2A900]" />
            <span className="h-full flex-1 rounded-full bg-[#E4002B]" />
            <span className="h-full flex-1 rounded-full bg-[#3B2416]" />
          </div>
        ) : null}

        <h1 className="mt-5 text-center text-2xl font-bold leading-tight tracking-tight">
          {title}
        </h1>
        <p className={`mt-2 text-balance text-center text-sm leading-relaxed ${tone.muted}`}>
          {subtitle}
        </p>
        <p
          lang="ar"
          dir="rtl"
          className={`mt-1 text-balance text-center font-arabic text-[13px] leading-relaxed ${tone.muted}`}
        >
          {subtitleAr}
        </p>

        <nav className="mt-6 flex w-full flex-col gap-3" aria-label="קישורים">
          {buttons.map((button) => (
            <BioLink
              key={button.track}
              href={button.href}
              track={button.track}
              ariaLabel={button.ariaLabel}
              className={buttonClass(theme, button.primary === true)}
            >
              <span aria-hidden className="text-lg leading-none">
                {button.icon}
              </span>
              <span className="leading-none">{button.label}</span>
            </BioLink>
          ))}
          <BioLink
            href={otherBrand.href}
            track="other-brand"
            ariaLabel={otherBrand.ariaLabel}
            className={buttonClass(theme, false)}
          >
            <span aria-hidden className="text-lg leading-none">
              🏷️
            </span>
            <span className="leading-none">{otherBrand.label}</span>
          </BioLink>
        </nav>

        <nav className="mt-6 flex items-center justify-center gap-3" aria-label="רשתות חברתיות">
          {NETWORKS.map((network) => (
            <a
              key={network}
              href={socials[network]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialAriaLabel("he", title, network)}
              data-track={network}
              className={`flex h-11 w-11 items-center justify-center rounded-full ${PRESS} ${tone.focus} ${tone.social}`}
            >
              <SocialIcon name={network} className="h-5 w-5" />
            </a>
          ))}
        </nav>

        <p className={`mt-6 text-center text-xs tracking-wide ${tone.footer}`}>
          <Link
            href="/"
            data-track="footer"
            aria-label="al-yosefglobal.com"
            className={`rounded-sm ${tone.focus}`}
          >
            al-yosefglobal.com
          </Link>
        </p>
      </div>
    </main>
  );
}
