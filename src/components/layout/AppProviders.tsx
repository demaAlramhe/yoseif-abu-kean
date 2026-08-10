"use client";

import { LanguageProvider, useLanguage } from "@/context/LanguageProvider";
import { Header } from "@/components/layout/Header";
import { AccessibilityWidget } from "@/components/accessibility/AccessibilityWidget";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Brand } from "@/components/sections/Brand";
import { VisionMission } from "@/components/sections/VisionMission";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import type { ReactNode } from "react";

function Shell({ children }: { children: ReactNode }) {
  const { dir, locale } = useLanguage();

  const fontClass =
    locale === "ar"
      ? "font-arabic"
      : locale === "he"
        ? "font-hebrew"
        : "font-body";

  return (
    <div
      dir={dir}
      lang={locale}
      className={`min-h-screen bg-navy text-cream ${fontClass}`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <div id="main-content">{children}</div>
      <AccessibilityWidget />
    </div>
  );
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Shell>{children}</Shell>
    </LanguageProvider>
  );
}

export function HomePage() {
  return (
    <AppProviders>
      <Hero />
      <About />
      <Brand />
      <VisionMission />
      <WhyUs />
      <Contact />
      <Footer />
    </AppProviders>
  );
}
