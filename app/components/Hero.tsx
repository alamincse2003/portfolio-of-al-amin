"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import CornerBrackets from "./CornerBrackets";
import { headline, subtext } from "../data/hero";

const socials = [
  { icon: <FaGithub className="w-4 h-4" />, label: "GitHub", href: "https://github.com/alamincse2003" },
  { icon: <FaLinkedin className="w-4 h-4" />, label: "LinkedIn", href: "https://www.linkedin.com/in/alamincse2003/" },
  { icon: <FaEnvelope className="w-4 h-4" />, label: "Email", href: "mailto:mdalamincse2003@gmail.com" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-surface px-4 sm:px-6 pt-28 pb-16"
    >
      <CornerBrackets
        inset="-24px"
        delay={0}
        className="w-full max-w-3xl mx-auto flex flex-col items-center text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Photo */}
          <motion.div variants={itemVariants} className="mb-6">
            <CornerBrackets inset="-10px" delay={0.25}>
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero/profile.png"
                  alt="Al Amin — Frontend Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </CornerBrackets>
          </motion.div>

          {/* Script name — left-to-right reveal, like it's being written */}
          <motion.p
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="font-script text-3xl sm:text-4xl text-zinc-800 dark:text-zinc-200 mb-4"
          >
            Al Amin
          </motion.p>

          {/* Wordplay headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-snug text-zinc-900 dark:text-zinc-100 mb-6"
          >
            {headline.lead}{" "}
            <span className="line-through text-accent/70 dark:text-accent/60">
              {headline.struck}
            </span>{" "}
            <span className="italic">{headline.replacement}</span>{" "}
            {headline.tail}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-8"
          >
            {subtext}
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-2.5 bg-accent hover:bg-accent-strong text-white rounded-full font-medium transition-colors duration-200 text-sm"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Secondary — social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-zinc-400 dark:text-zinc-500 hover:text-accent transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </CornerBrackets>
    </section>
  );
};

export default Hero;
