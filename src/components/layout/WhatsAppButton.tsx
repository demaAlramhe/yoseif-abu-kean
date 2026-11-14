"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { whatsappUrl } from "@/lib/siteConfig";

export function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href={whatsappUrl(t.contact.whatsappOrder)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contact.whatsappOrderLabel}
      data-track="whatsapp"
      className="print:hidden fixed bottom-24 left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-28 sm:left-6"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.1L1 23l6.1-1.6A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.6 1 .9-3.5-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.2-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.5-.8-2s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.3 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4.3c.6.3 1.1.4 1.5.5a3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
      </svg>
    </a>
  );
}
