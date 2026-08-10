"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";
import { LogoChip } from "@/components/ui/LogoBadge";
import type { Locale } from "@/i18n/types";
import { LOCALES } from "@/i18n/types";

const navItems = [
  { key: "home" as const, href: `#${siteConfig.sections.home}` },
  { key: "about" as const, href: `#${siteConfig.sections.about}` },
  { key: "brand" as const, href: `#${siteConfig.sections.brand}` },
  { key: "whyUs" as const, href: `#${siteConfig.sections.whyUs}` },
  { key: "contact" as const, href: `#${siteConfig.sections.contact}` },
];

export function Header() {
  const { t, locale, setLocale, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [locale]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-gold/20 bg-navy/95 backdrop-blur-md"
          : "border-transparent bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-wide flex items-center justify-between gap-4 px-5 py-3 sm:px-8 md:px-12 lg:px-16">
        <Link
          href={`#${siteConfig.sections.home}`}
          className="flex shrink-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          aria-label={t.companyName}
        >
          <span className="shrink-0">
            <LogoChip size={44} priority surface="dark" />
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-cream sm:block lg:text-base">
            {t.companyName}
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-6 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-cream/80 transition-colors hover:text-gold"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex items-center rounded-full border border-gold/30 bg-navy-deep/60 p-0.5"
            role="group"
            aria-label="Language"
          >
            {LOCALES.map((code: Locale) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                className={`rounded-full px-2.5 py-1.5 text-xs font-medium transition-all duration-200 sm:px-3 ${
                  locale === code
                    ? "bg-gold text-navy shadow-gold-sm"
                    : "text-cream/70 hover:text-cream"
                }`}
              >
                {t.languages[code]}
              </button>
            ))}
          </div>

          <a
            href={whatsappUrl(t.contact.whatsappGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden whitespace-nowrap px-4 py-2 text-xs sm:inline-flex md:text-sm"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gold/30 text-cream lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-gold/15 bg-navy-deep px-5 py-4 lg:hidden"
          style={{ direction: dir }}
        >
          <nav className="flex flex-col items-center gap-3 text-center" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="py-2 text-sm text-cream/90 hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[item.key]}
              </a>
            ))}
            <a
              href={whatsappUrl(t.contact.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full max-w-xs"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
