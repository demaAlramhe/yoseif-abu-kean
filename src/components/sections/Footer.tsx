"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { CONTACT, siteConfig } from "@/lib/siteConfig";
import { LogoChip } from "@/components/ui/LogoBadge";
import { SocialIcon, socialAriaLabel, type SocialNetwork } from "@/components/ui/SocialIcons";

const NETWORKS: SocialNetwork[] = ["facebook", "instagram", "tiktok"];

const navItems = [
  { key: "home" as const, href: `#${siteConfig.sections.home}` },
  { key: "about" as const, href: `#${siteConfig.sections.about}` },
  { key: "brand" as const, href: `#${siteConfig.sections.brand}` },
  { key: "whyUs" as const, href: `#${siteConfig.sections.whyUs}` },
  { key: "contact" as const, href: `#${siteConfig.sections.contact}` },
];

export function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-navy-deep text-cream">
      <div className="container-wide section-padding !pt-12 !pb-44 sm:!pb-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-start">
            <div className="flex items-center gap-3">
              <LogoChip size={48} surface="dark" />
              <div className="text-center md:text-start">
                <p className="font-semibold tracking-wide">{t.companyName}</p>
                <p className="text-xs text-cream/50">
                  {year} · {t.footer.rights}
                </p>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-cream/70">
              <li>
                <a
                  href={siteConfig.landlineHref}
                  className="transition-colors hover:text-gold"
                >
                  <span className="me-1.5" aria-hidden>
                    ☎️
                  </span>
                  <span dir="ltr">{CONTACT.landline}</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-gold">
                  <span className="me-1.5" aria-hidden>
                    📱
                  </span>
                  <span dir="ltr">{CONTACT.mobile}</span>
                </a>
              </li>
            </ul>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center"
            aria-label="Footer"
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-cream/70 transition-colors hover:text-gold"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          <div className="text-center md:text-start">
            <p className="mb-3 text-xs tracking-wide text-cream/50 uppercase">
              {t.footer.socialLabel}
            </p>
            <div className="flex justify-center gap-3 md:justify-start">
              {NETWORKS.map((name) => (
                <a
                  key={name}
                  href={CONTACT.social.alyosef[name]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialAriaLabel(locale, "Al-Yosef Global", name)}
                  className="flex h-9 w-9 items-center justify-center border border-gold/30 text-gold/80 transition hover:border-gold hover:text-gold"
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
            <p className="mb-2 mt-4 text-xs text-cream/50">{t.footer.brandLine}</p>
            <div className="flex justify-center gap-2 md:justify-start">
              {NETWORKS.map((name) => (
                <a
                  key={name}
                  href={CONTACT.social.vevia[name]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialAriaLabel(locale, "VEVIA", name)}
                  className="flex h-7 w-7 items-center justify-center border border-gold/25 text-gold/70 transition hover:border-gold hover:text-gold"
                >
                  <SocialIcon name={name} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-gold/10 pt-6 text-center text-xs text-cream/45">
          {t.footer.accessibility}
        </p>
        <p className="mt-3 text-center text-[11px] text-cream/30">
          {t.footer.madeBy}{" "}
          <a
            href="https://demadigitalsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/40 underline-offset-2 transition-colors hover:text-gold/70 hover:underline"
          >
            Dema Digital Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
