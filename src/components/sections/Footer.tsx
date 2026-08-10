"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";
import { LogoChip } from "@/components/ui/LogoBadge";

const navItems = [
  { key: "home" as const, href: `#${siteConfig.sections.home}` },
  { key: "about" as const, href: `#${siteConfig.sections.about}` },
  { key: "brand" as const, href: `#${siteConfig.sections.brand}` },
  { key: "whyUs" as const, href: `#${siteConfig.sections.whyUs}` },
  { key: "contact" as const, href: `#${siteConfig.sections.contact}` },
];

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-navy-deep text-cream">
      <div className="container-wide section-padding !py-12">
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
              {(
                [
                  ["facebook", siteConfig.social.facebook],
                  ["instagram", siteConfig.social.instagram],
                  ["linkedin", siteConfig.social.linkedin],
                ] as const
              ).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center border border-gold/30 text-xs uppercase text-gold/80 transition hover:border-gold hover:text-gold"
                >
                  {name.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-gold/10 pt-6 text-center text-xs text-cream/45">
          {t.footer.accessibility}
        </p>
      </div>
    </footer>
  );
}
