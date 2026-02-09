"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Mail, FileDown } from "lucide-react";

const roles = [
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "Tailwind CSS Expert",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const current = roles[currentRole];
    let timeout;

    if (!isDeleting && displayText.length < current.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, speed);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayText.length === current.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next role
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 sm:px-6 md:px-12 lg:px-20 pt-20 pb-12 overflow-hidden"
    >
      {/* Background Pattern - Subtle Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.05)_1px,transparent_0)] [background-size:32px_32px]"></div>

      {/* Gradient Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left z-10 order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full"
          >
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Hi, I&apos;m{" "}
            <span className="text-indigo-600 dark:text-indigo-400 relative">
              Al Amin
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5C50 2 150 2 198 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-indigo-600 dark:text-indigo-400 opacity-40"
                />
              </svg>
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold min-h-[2.5rem] sm:min-h-[3rem] mb-4 sm:mb-6 text-zinc-700 dark:text-zinc-300">
            <span className="text-indigo-600 dark:text-indigo-400">
              {displayText}
            </span>
            <span className="border-r-2 border-indigo-600 dark:border-indigo-400 ml-1 animate-pulse"></span>
          </h2>

          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build modern, responsive web applications with clean code and
            smooth UI. Passionate about creating exceptional user experiences.
          </p>

          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-zinc-900 dark:bg-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-indigo-500 text-sm sm:text-base"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-zinc-900 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-800 dark:hover:border-zinc-600 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </motion.a>

            <motion.a
              href="/images/resume/Al Amin_Frontend_Developer_Resume.pdf"
              download="Al_Amin_Frontend_Developer_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 flex justify-center z-10 order-1 lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 blur-2xl animate-pulse"></div>

            <Image
              src="/images/hero/alamin.jpg"
              alt="Al Amin"
              fill
              className="rounded-full object-cover shadow-2xl border-4 border-zinc-200 dark:border-zinc-800 relative z-10"
              priority
            />

            {/* Decorative Ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-indigo-500/20 dark:border-indigo-400/20 animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
