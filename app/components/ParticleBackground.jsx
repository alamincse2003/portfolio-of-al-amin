"use client";

import { useEffect, useRef } from "react";
import { useDarkMode } from "../context/ThemeContext";

/**
 * Subtle canvas particle network — dots drift slowly and connect
 * when within a proximity threshold. Kept intentionally faint so
 * it never competes with content.
 *
 * Performance notes:
 * – Capped at 55 particles
 * – ResizeObserver re-initialises on container resize
 * – Skipped entirely on touch/mobile (pointer: coarse)
 * – requestAnimationFrame loop cancelled on unmount
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const rafId = useRef(null);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    // Skip on touch devices — saves battery and avoids visual noise on small screens
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const PARTICLE_COUNT = 55;
    const MAX_DIST = 130;        // max px between dots to draw a line
    const SPEED = 0.35;          // drift speed

    // Colour tokens that match the design system
    const DOT_COLOR  = darkMode ? "rgba(99,102,241,0.55)"  : "rgba(79,70,229,0.30)";
    const LINE_COLOR = darkMode ? "rgba(99,102,241,0.12)"  : "rgba(79,70,229,0.08)";

    let W = 0;
    let H = 0;
    let particles = [];

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const rand = (min, max) => Math.random() * (max - min) + min;

    const init = () => {
      resize();
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x:  rand(0, W),
        y:  rand(0, H),
        vx: rand(-SPEED, SPEED),
        vy: rand(-SPEED, SPEED),
        r:  rand(1.2, 2.2),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Update + wrap positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0)  p.x = W;
        if (p.x > W)  p.x = 0;
        if (p.y < 0)  p.y = H;
        if (p.y > H)  p.y = 0;
      }

      // Draw connecting lines
      ctx.strokeStyle = LINE_COLOR;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            // Fade line as distance increases
            ctx.globalAlpha = 1 - dist / MAX_DIST;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      ctx.globalAlpha = 1;
      ctx.fillStyle = DOT_COLOR;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId.current = requestAnimationFrame(draw);
    };

    init();
    rafId.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(canvas);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      ro.disconnect();
    };
  }, [darkMode]); // re-run when theme toggles so colours update

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
