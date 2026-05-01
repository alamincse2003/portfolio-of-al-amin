"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Code, FileDown, MapPin } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { useEffect, useState } from "react";

const stats = [
  { label: "Projects Built", value: "5+" },
  { label: "Technologies", value: "10+" },
  { label: "Available for", value: "Hire" },
];

// Stagger container — children animate in sequence
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

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
      {/* Particle network — scoped to hero only */}
      <ParticleBackground />

      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.04)_1px,transparent_0)] [background-size:32px_32px]" />

      {/* Gradient accent blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* ── Left side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left z-10 order-2 lg:order-1"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700/40 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block text-indigo-600 dark:text-indigo-400">
              Al Amin
              <svg
                className="absolute -bottom-2 left-0 w-full opacity-40"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M2 5C50 2 150 2 198 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Static role — professional, no typewriter */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold mb-5 text-zinc-600 dark:text-zinc-300"
          >
            <span className="text-indigo-600 dark:text-indigo-400">
              {displayText}
            </span>
            <span className="border-r-2 border-indigo-600 dark:border-indigo-400 ml-1 animate-pulse"></span>
          </motion.h2>
          {/* <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold mb-5 text-zinc-600 dark:text-zinc-300"
          >
            Frontend Developer &amp;{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              React Specialist
            </span>
          </motion.h2> */}

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg mb-8 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I turn Figma designs into fast, accessible React and Next.js
            applications — with clean code, smooth UI, and zero shortcuts.
          </motion.p>

          {/* CTAs — 2 max */}
          <motion.div
            variants={itemVariants}
            className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 px-7 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white rounded-lg font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-200 text-sm sm:text-base"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/images/resume/Al Amin_Frontend_Developer_Resume.pdf"
              download="Al_Amin_Frontend_Developer_Resume.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 px-7 py-3 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-lg font-semibold hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all duration-200 text-sm sm:text-base"
            >
              <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Stat badges */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-wrap justify-center lg:justify-start"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl px-4 py-2.5 text-center shadow-sm"
              >
                <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400 leading-none">
                  {stat.value}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex-1 flex justify-center z-10 order-1 lg:order-2"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Soft glow — static, not animated */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-15 blur-3xl" />

            <Image
              src="/images/hero/profile.png"
              alt="Al Amin — Frontend Developer"
              fill
              className="rounded-full object-cover shadow-2xl border-4 border-zinc-200 dark:border-zinc-700 relative z-10"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[2px] h-6 bg-gradient-to-b from-indigo-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
