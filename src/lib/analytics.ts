export type AnalyticsEventName = "Contact" | "Lead" | "ViewContent";

interface FacebookPixel {
  (command: "init", pixelId: string): void;
  (command: "track", event: string, params?: Record<string, string>): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
  push: FacebookPixel;
}

interface TikTokPixel {
  load: (pixelId: string) => void;
  page: () => void;
  track: (event: string, params?: Record<string, string>) => void;
}

declare global {
  interface Window {
    fbq?: FacebookPixel;
    _fbq?: FacebookPixel;
    ttq?: TikTokPixel;
  }
}

/** Fire a standard event on whichever pixels are loaded. Never throws. */
export function trackEvent(name: AnalyticsEventName, params?: Record<string, string>) {
  try {
    if (process.env.NODE_ENV === "development") {
      console.debug("[pixel]", name, params);
    }
    window.fbq?.("track", name, params);
    window.ttq?.track(name, params);
  } catch {
    /* A missing or blocked pixel must not affect the page. */
  }
}
