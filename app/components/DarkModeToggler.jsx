"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useDarkMode } from "../context/ThemeContext";
import { motion } from "framer-motion";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-14 h-7 bg-zinc-200 dark:bg-zinc-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
      aria-label="Toggle dark mode"
    >
      <motion.div
        className="absolute top-1 left-1 w-5 h-5 bg-white dark:bg-zinc-900 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: darkMode ? 28 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {darkMode ? (
          <FiMoon className="w-3 h-3 text-indigo-400" />
        ) : (
          <FiSun className="w-3 h-3 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
};

export default DarkModeToggler;
