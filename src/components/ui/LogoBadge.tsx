"use client";

import Image from "next/image";
import { siteConfig, logoSrcForSurface } from "@/lib/siteConfig";
import { TiltCard } from "@/components/ui/TiltCard";

interface LogoBadgeProps {
  size?: "sm" | "md" | "lg" | "hero";
  tilt?: boolean;
  className?: string;
  ring?: boolean;
}

const sizeMap = {
  sm: { box: "h-14 w-14", sizes: "56px" },
  md: { box: "h-20 w-20", sizes: "80px" },
  lg: { box: "h-28 w-28", sizes: "112px" },
  hero: {
    box: "h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72",
    sizes: "(max-width: 640px) 224px, (max-width: 768px) 256px, 288px",
  },
};

/**
 * Circular logo badge — cream fill so the navy wordmark stays legible,
 * true circle crop via aspect-square + overflow-hidden + object-cover.
 */
export function LogoBadge({
  size = "md",
  tilt = false,
  className = "",
  ring = true,
}: LogoBadgeProps) {
  const s = sizeMap[size];

  const inner = (
    <div
      className={`relative aspect-square ${s.box} overflow-hidden rounded-full bg-cream ${
        ring
          ? "border-2 border-gold shadow-gold-sm ring-1 ring-gold/30"
          : ""
      } ${className}`}
    >
      <Image
        src={siteConfig.logo.badgeSrc}
        alt={siteConfig.logo.alt}
        fill
        sizes={s.sizes}
        className="object-cover"
        priority={size === "hero"}
      />
    </div>
  );

  if (!tilt) return inner;

  return (
    <TiltCard
      className="inline-block will-change-transform"
      options={{ max: 14, scale: 1.04 }}
    >
      {inner}
    </TiltCard>
  );
}

interface LogoChipProps {
  size?: number;
  className?: string;
  priority?: boolean;
  /** dark = on navy (cream chip until mono ready); light = direct on cream */
  surface?: "dark" | "light";
}

/** Compact circular logo for header / footer on navy (cream chip fallback). */
export function LogoChip({
  size = 44,
  className = "",
  priority = false,
  surface = "dark",
}: LogoChipProps) {
  const useMono = surface === "dark" && siteConfig.logo.monoReady;
  const src = logoSrcForSurface(surface);

  return (
    <span
      className={`relative inline-block aspect-square overflow-hidden rounded-full border border-gold/50 ${
        useMono ? "bg-navy-deep" : "bg-cream"
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority={priority}
      />
    </span>
  );
}
