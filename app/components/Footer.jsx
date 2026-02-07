"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experiences", href: "#experiences" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Content */}
        <div className="text-center mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2"
          >
            Al Amin
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400"
          >
            Frontend Developer | Building exceptional web experiences
          </motion.p>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="https://github.com/alamincse2003"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/alamincse2003/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="mailto:mdalamincse2003@gmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
          >
            <FaEnvelope className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Navigation Links */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
        >
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Divider */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 mb-6"></div>

        {/* Copyright */}
        <motion.p
          className="text-center text-sm text-zinc-600 dark:text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            Al Amin
          </span>
          . All rights reserved.
        </motion.p>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 bg-zinc-900 dark:bg-indigo-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-zinc-800 dark:hover:bg-indigo-500 transition-all duration-300 z-50"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
