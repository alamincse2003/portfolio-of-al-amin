"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-zinc-900 py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl px-6 mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative w-72 h-72 md:w-96 md:h-96"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 blur-2xl animate-pulse"></div>

          <Image
            src="/images/hero/alamin.jpg"
            alt="About Me"
            fill
            className="rounded-full shadow-2xl border-4 border-zinc-200 dark:border-zinc-800 object-cover relative z-10"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
            About Me
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 sm:text-justify">
            Hi, I'm{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Al Amin
            </span>
            , a passionate Frontend Developer from Bangladesh. I love creating
            modern, responsive, and user-friendly web applications using
            <span className="font-semibold">
              {" "}
              HTML, Tailwind CSS, JavaScript, React & Next.js
            </span>
            . I enjoy solving problems and always try to learn new technologies.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
            My goal is to work with innovative companies, contribute to
            impactful projects, and grow as a professional developer.
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-indigo-600 hover:bg-zinc-800 dark:hover:bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 font-medium"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
