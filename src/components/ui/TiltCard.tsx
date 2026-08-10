"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  options?: {
    max?: number;
    scale?: number;
    perspective?: number;
  };
}

/**
 * Lightweight CSS 3D tilt (vanilla approach) — avoids react-tilt SSR/typing issues
 * while matching the requested hover depth on logo badge & product cards.
 */
export function TiltCard({
  children,
  className = "",
  options,
}: TiltCardProps) {
  const max = options?.max ?? 12;
  const scale = options?.scale ?? 1.03;
  const perspective = options?.perspective ?? 1000;
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`,
  });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      const stop =
        mq.matches ||
        document.documentElement.dataset.reduceMotion === "true";
      setEnabled(!stop);
    };
    sync();
    mq.addEventListener("change", sync);
    const obs = new MutationObserver(sync);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-reduce-motion"],
    });
    return () => {
      mq.removeEventListener("change", sync);
      obs.disconnect();
    };
  }, []);

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!enabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateX = (py - 0.5) * -2 * max;
      const rotateY = (px - 0.5) * 2 * max;
      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},1)`,
        transition: "transform 80ms ease-out",
      });
    },
    [enabled, max, perspective, scale],
  );

  const onLeave = useCallback(() => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`,
      transition: "transform 400ms cubic-bezier(.03,.98,.52,.09)",
    });
  }, [perspective]);

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
