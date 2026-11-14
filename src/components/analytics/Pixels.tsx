"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;

function metaPixelId(): string | null {
  if (!META_PIXEL_ID || !/^\d+$/.test(META_PIXEL_ID)) return null;
  return META_PIXEL_ID;
}

function tiktokPixelId(): string | null {
  if (!TIKTOK_PIXEL_ID || !/^[A-Za-z0-9]+$/.test(TIKTOK_PIXEL_ID)) return null;
  return TIKTOK_PIXEL_ID;
}

function trackPageView() {
  try {
    window.fbq?.("track", "PageView");
    window.ttq?.page();
  } catch {
    /* A missing or blocked pixel must not affect navigation. */
  }
}

export function Pixels() {
  const pathname = usePathname();
  const trackedPath = useRef<string | null>(null);
  const metaId = metaPixelId();
  const tiktokId = tiktokPixelId();

  useEffect(() => {
    // First load is counted by the base snippets. Strict Mode runs this effect
    // twice with the same pathname; only a real route change should track again.
    if (trackedPath.current === null || trackedPath.current === pathname) {
      trackedPath.current = pathname;
      return;
    }
    trackedPath.current = pathname;
    trackPageView();
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const tracked = target.closest("[data-track]");
      if (!tracked) return;
      const name = tracked.getAttribute("data-track");
      if (name === "whatsapp") {
        trackEvent("Contact", { method: "whatsapp", page: pathname });
      } else if (name === "call") {
        trackEvent("Contact", { method: "phone", page: pathname });
      } else if (name === "waze") {
        trackEvent("ViewContent", { content_name: "directions", page: pathname });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return (
    <>
      {metaId ? (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');if(!window.__fbqInit){window.__fbqInit=true;fbq('init','${metaId}');fbq('track','PageView');}`}
          </Script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${metaId}&ev=PageView&noscript=1"/>`,
            }}
          />
        </>
      ) : null}
      {tiktokId ? (
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};if(!w.__ttqInit){w.__ttqInit=true;ttq.load('${tiktokId}');ttq.page();}}(window,document,'ttq');`}
        </Script>
      ) : null}
    </>
  );
}
