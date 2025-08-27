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

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://github.com/alamincse2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 text-xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/alamincse2003/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 text-xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mdalamincse2003@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 text-xl transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-6 text-gray-700 dark:text-gray-300 font-medium justify-center"
        >
          <li>
            <a href="#home" className="hover:text-indigo-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-500">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-indigo-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#experiences" className="hover:text-indigo-500">
              Experiences
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-indigo-500">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-500">
              Contact
            </a>
          </li>
        </motion.ul>
        {/* Name */}
        <motion.h2
          className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Copyright © {new Date().getFullYear()} Al Amin | All Rights Reserved
        </motion.h2>
      </div>
      {/* Back to Top Button */}
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-indigo-700 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
