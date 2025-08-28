"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-gray-900 dark:to-gray-800 text-white px-6 md:px-20"
    >
      <div className="max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl  font-bold pt-4 lg:mb-4">
            Hi, I&apos;m{" "}
            <span className="text-indigo-300 dark:text-indigo-400">
              Al Amin
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold h-10 mb-4">
            {displayText}
            <span className="border-r-2 border-white ml-1 animate-pulse"></span>
          </h2>
          <p className="mb-6 text-gray-200 dark:text-gray-300">
            I build modern, responsive web applications with clean code and
            smooth UI.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-400 dark:hover:bg-indigo-300 rounded-md font-medium transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white hover:bg-white hover:text-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-gray-900 rounded-md font-medium transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <Image
              src="/images/hero/alamin.jpg"
              alt="Al Amin"
              fill
              className="rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-300"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
