import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export function linkInBioMetadata(opts: {
  title: string;
  description: string;
  path: "/vevia" | "/links";
  image: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: "Al-Yosef Global",
      locale: "he_IL",
      type: "website",
      images: [opts.image],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [opts.image.url],
    },
  };
}
