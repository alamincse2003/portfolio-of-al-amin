"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Animate on mount instead of when scrolled into view (above-the-fold content). */
  immediate?: boolean;
  delay?: number;
};

/**
 * Fades content up into place with GSAP. If any descendants carry a
 * `data-reveal` attribute they animate in sequence; otherwise the wrapper
 * animates as a whole. Users with reduced motion get static content.
 */
export default function Reveal({ children, className, immediate = false, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const items = el.querySelectorAll<HTMLElement>("[data-reveal]");
        gsap.from(items.length ? items : el, {
          autoAlpha: 0,
          y: 16,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          delay,
          clearProps: "transform,opacity,visibility",
          scrollTrigger: immediate ? undefined : { trigger: el, start: "top 88%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
