"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative w-72 h-72 md:w-96 md:h-96 "
        >
          <Image
            src="/images/hero/alamin.jpg"
            alt="About Me"
            fill
            className="rounded-full shadow-lg border-4 border-white dark:border-gray-300 object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Hi, I’m{" "}
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
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            My goal is to work with innovative companies, contribute to
            impactful projects, and grow as a professional developer.
          </p>

          <a
            href="#projects"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
