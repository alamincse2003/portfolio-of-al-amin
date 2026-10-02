"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, site } from "../data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      if (window.scrollY < 200) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const close = () => setIsOpen(false);
  const solid = scrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight text-fg" onClick={close}>
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-fg font-mono text-xs font-bold text-bg"
          >
            AA
          </span>
          {site.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                aria-current={active === href ? "true" : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition-colors hover:text-fg ${
                  active === href ? "text-fg" : "text-muted"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center rounded-lg border border-line-strong px-3.5 text-sm font-medium text-fg transition-colors hover:bg-subtle sm:inline-flex"
          >
            Resume<span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-fg hover:bg-subtle md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        inert={!isOpen}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1 px-4 pb-4 pt-1 sm:px-6">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className="block rounded-lg px-3 py-2.5 text-[15px] text-muted transition-colors hover:bg-subtle hover:text-fg"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex h-11 items-center justify-center rounded-lg border border-line-strong text-[15px] font-medium text-fg"
              >
                Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
