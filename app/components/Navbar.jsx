"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark Mode toggle effect on body
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <motion.nav
      initial={{ y: -10, opacity: 1 }} // Shuru thekei visible
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${
          scrolled
            ? "bg-white dark:bg-gray-900 shadow-md"
            : "bg-white dark:bg-gray-900 shadow-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className={`text-2xl font-bold transition-colors ${
            scrolled
              ? "text-indigo-600 dark:text-indigo-400"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Al Amin
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`relative font-medium transition-colors ${
                scrolled
                  ? "text-gray-700 dark:text-gray-200"
                  : "text-gray-800 dark:text-gray-200"
              } after:content-[''] after:block after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full`}
            >
              {link.name}
            </a>
          ))}

          {/* Dark/Light Toggle */}
          <button
            className="ml-4 text-xl text-gray-700 dark:text-gray-200"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ${
            scrolled
              ? "text-gray-700 dark:text-gray-200"
              : "text-gray-800 dark:text-gray-200"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-md"
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Dark Mode Toggle */}
          <button
            className="m-4 text-2xl text-gray-700 dark:text-gray-200"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
