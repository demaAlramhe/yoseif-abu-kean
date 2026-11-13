"use client";

import { useEffect, type ReactNode } from "react";
import { AccessibilityWidget } from "@/components/accessibility/AccessibilityWidget";
import { LanguageProvider } from "@/context/LanguageProvider";

export function LinkInBioChrome({
  background,
  children,
}: {
  background: string;
  children: ReactNode;
}) {
  useEffect(() => {
    const previous = document.body.style.backgroundColor;
    document.body.style.backgroundColor = background;
    return () => {
      document.body.style.backgroundColor = previous;
    };
  }, [background]);

  return (
    <LanguageProvider lockLocale="he">
      {children}
      <AccessibilityWidget />
    </LanguageProvider>
  );
}
