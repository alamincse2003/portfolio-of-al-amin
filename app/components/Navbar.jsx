"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import DarkModeToggler from "./DarkModeToggler";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kept to 5 items — logo click handles "Home",
  // Education & Certifications are still on the page via scroll.
  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experiences" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b
          ${
            scrolled
              ? "navbar-scrolled border-white/10"
              : "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 shadow-sm"
          }`}
      >
        <div className="max-w-6xl w-full mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Al Amin
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative font-medium text-sm text-zinc-700 dark:text-zinc-300 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400
                after:content-[''] after:block after:w-0 after:h-[2px] after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <DarkModeToggler />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <DarkModeToggler />
            <button
              className="text-2xl text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
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
              className="lg:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden"
            >
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="block px-6 py-3 text-zinc-800 dark:text-zinc-200 hover:bg-indigo-50 dark:hover:bg-zinc-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition border-l-4 border-transparent hover:border-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
