"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitted(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    // name + message required; at least one of phone or email
    if (!name || !message || (!phone && !email)) {
      setError(t.contact.form.validation);
      return;
    }

    const body = [
      `${t.contact.form.name}: ${name}`,
      `${t.contact.form.phone}: ${phone || "—"}`,
      `${t.contact.form.email}: ${email || "—"}`,
      `${t.contact.form.message}: ${message}`,
    ].join("\n");

    window.open(whatsappUrl(body), "_blank", "noopener,noreferrer");
    form.reset();
    setSubmitted(true);
  }

  return (
    <section
      id={siteConfig.sections.contact}
      className="bg-cream text-navy"
    >
      <div className="container-wide section-padding">
        <Reveal className="mb-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">{t.contact.title}</h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="text-center">
              <p className="font-display text-xl text-navy">{t.contact.company}</p>
              <ul className="mt-4 space-y-3 text-navy/80">
                <li>
                  <span className="me-2 text-gold" aria-hidden>
                    📍
                  </span>
                  {t.contact.address}
                </li>
                <li>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold-dark"
                  >
                    <span className="me-2 text-gold" aria-hidden>
                      📞
                    </span>
                    {t.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.emailHref}
                    className="transition-colors hover:text-gold-dark"
                  >
                    <span className="me-2 text-gold" aria-hidden>
                      ✉️
                    </span>
                    {t.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8 overflow-hidden border border-gold/25 bg-navy/5">
              {/* TODO: replace mapEmbedUrl in siteConfig with real coordinates embed */}
              <iframe
                title={t.contact.mapLabel}
                src={siteConfig.mapEmbedUrl}
                className="h-64 w-full grayscale-[20%] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="space-y-4 border border-gold/20 bg-white p-6 text-center sm:p-8"
              noValidate
            >
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                  {t.contact.form.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full border border-navy/15 bg-cream px-4 py-3 text-center text-navy outline-none transition focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium">
                  {t.contact.form.phone}
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full border border-navy/15 bg-cream px-4 py-3 text-center text-navy outline-none transition focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                  {t.contact.form.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full border border-navy/15 bg-cream px-4 py-3 text-center text-navy outline-none transition focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className="w-full resize-y border border-navy/15 bg-cream px-4 py-3 text-center text-navy outline-none transition focus:border-gold"
                />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="btn-primary w-full sm:w-auto sm:min-w-[12rem]">
                  {t.contact.form.submit}
                </button>
              </div>
              {error && (
                <p className="text-sm text-red-700" role="alert">
                  {error}
                </p>
              )}
              {submitted && !error && (
                <p className="text-sm text-gold-dark" role="status">
                  {t.contact.form.success}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
