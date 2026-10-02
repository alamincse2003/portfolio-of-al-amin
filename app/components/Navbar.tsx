"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import DarkModeToggler from "./DarkModeToggler";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Notes", href: "#notes" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl w-full mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-sm font-medium text-zinc-800 dark:text-zinc-200 tracking-wide"
        >
          Al Amin
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/images/resume/Al Amin_Frontend_Developer_Resume.pdf"
            download="Al_Amin_Frontend_Developer_Resume.pdf"
            className="hidden lg:inline text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Resume
          </a>
          <DarkModeToggler />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full text-sm font-medium hover:bg-zinc-700 dark:hover:bg-white transition-colors"
          >
            Contact
          </a>
          <button
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-surface border-b border-border overflow-hidden"
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
                className="block px-6 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="/images/resume/Al Amin_Frontend_Developer_Resume.pdf"
              download="Al_Amin_Frontend_Developer_Resume.pdf"
              className="block px-6 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
            <a
              href="#contact"
              className="block px-6 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
