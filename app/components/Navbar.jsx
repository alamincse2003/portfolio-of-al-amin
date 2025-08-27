"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import DarkModeToggler from "./DarkModeToggler";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experiences", href: "#experiences" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors"
        >
          Al Amin
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative font-medium text-gray-800 dark:text-gray-200 transition-colors
              after:content-[''] after:block after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}

          {/* Dark/Light Toggle */}
          <DarkModeToggler />
          {/* <button
            className="ml-4 text-xl text-gray-700 dark:text-gray-200"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
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
              className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Dark Mode Toggle */}
          <DarkModeToggler />
          {/* <button
            className="m-4 text-2xl text-gray-700 dark:text-gray-200"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button> */}
        </motion.div>
      )}
    </motion.nav>
  );
}
