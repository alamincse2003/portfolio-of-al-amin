"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "5+", label: "Projects" },
  { value: "10+", label: "Technologies" },
  { value: "2+", label: "Years Learning" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-zinc-900 py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">

        {/* ── Left: Image ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[340px] md:h-[340px]">
            {/* Static glow — no animate-pulse */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-15 blur-2xl" />

            <Image
              src="/images/hero/alamin.webp"
              alt="Al Amin"
              fill
              className="rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 object-cover relative z-10"
            />

            {/* Glassmorphism badge — currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass rounded-xl px-4 py-2.5 shadow-lg z-20 whitespace-nowrap"
            >
              <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">
                🚀 Currently learning TypeScript deeply
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Right: Text ──────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 md:mt-0"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-5 text-zinc-900 dark:text-zinc-100 text-center md:text-left"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 text-center md:text-left"
          >
            I&apos;m{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Al Amin
            </span>
            , a Frontend Developer from Bangladesh who builds fast, accessible,
            and pixel-perfect web interfaces using{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
              React, Next.js, and Tailwind CSS
            </span>
            . I care deeply about the details that make a product feel
            polished — performance, accessibility, and clean code.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 text-center md:text-left"
          >
            My goal is to join a team where I can ship impactful products and
            grow into a well-rounded engineer — not just a UI developer.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
              >
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white px-7 py-3 rounded-lg shadow-lg shadow-indigo-500/20 transition-all duration-200 font-semibold text-sm sm:text-base"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
