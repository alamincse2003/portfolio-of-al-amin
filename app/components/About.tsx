"use client";
import { motion } from "framer-motion";

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
      className="bg-surface-raised py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-serif text-3xl sm:text-4xl mb-5 text-zinc-900 dark:text-zinc-100"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4"
        >
          I&apos;m{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-300">
            Al Amin
          </span>
          , a Frontend Developer at NidusLab, where I build the interfaces for
          an AI-integrated job platform - secure auth flows, real-time
          dashboards, and features that hold up once real users touch them. I
          work mainly in{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            React, Next.js, and TypeScript
          </span>
          , and I care about the parts that don&apos;t show up in a screenshot:
          load times, edge cases, code someone else can pick up without asking
          me first.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          I&apos;m looking for a team where I can keep taking on harder
          problems - not just building screens, but owning features end to
          end.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
