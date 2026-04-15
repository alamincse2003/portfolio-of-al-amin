"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Dual-circle custom cursor.
 * – Inner dot  : snaps to mouse position instantly
 * – Outer ring : follows with lerp lag (smooth trail)
 * – Hover state: ring expands + blends on <a>, <button>, [role="button"]
 * – Click state: both compress briefly
 * – Hidden on touch/mobile devices automatically
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Only activate on pointer-fine (mouse) devices — not touch
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    setVisible(true);

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = (e) => {
      if (e.target.closest("a, button, [role='button'], label, [tabindex]")) {
        setHovered(true);
      }
    };

    const onLeave = (e) => {
      if (e.target.closest("a, button, [role='button'], label, [tabindex]")) {
        setHovered(false);
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseLeaveWindow = () => setVisible(false);
    const onMouseEnterWindow = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onMouseEnterWindow);

    // Lerp animation loop for the outer ring
    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onMouseEnterWindow);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot — snaps instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          width: clicked ? "5px" : "7px",
          height: clicked ? "5px" : "7px",
          borderRadius: "50%",
          background: hovered ? "#a5b4fc" : "#4f46e5",
          transition: "width 0.1s, height 0.1s, background 0.2s",
        }}
      />

      {/* Outer ring — lags behind */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          width: clicked ? "28px" : hovered ? "48px" : "36px",
          height: clicked ? "28px" : hovered ? "48px" : "36px",
          borderRadius: "50%",
          border: `1.5px solid ${hovered ? "#818cf8" : "#6366f1"}`,
          background: hovered ? "rgba(99,102,241,0.08)" : "transparent",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s, background 0.2s",
        }}
      />
    </>
  );
}
