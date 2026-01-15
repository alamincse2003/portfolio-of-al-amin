"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useDarkMode } from "../context/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      className="ml-4 text-xl text-gray-700 dark:text-gray-200 cursor-pointer"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default DarkModeToggler;
