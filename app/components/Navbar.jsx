"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll effect (bg change)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className={`text-2xl font-bold transition-colors ${
            scrolled ? "text-indigo-600" : "text-white"
          }`}
        >
          Al Amin
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`relative font-medium transition-colors ${
                scrolled ? "text-gray-700" : "text-white"
              } after:content-[''] after:block after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ${
            scrolled ? "text-gray-700" : "text-white"
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
          className="md:hidden bg-white shadow-md"
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
