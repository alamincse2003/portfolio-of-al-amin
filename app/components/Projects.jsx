"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";
import { FiCode, FiExternalLink } from "react-icons/fi";
const tabs = ["All", "Personal", "Client"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-zinc-50 dark:bg-zinc-950"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-zinc-900 dark:text-zinc-100 text-center">
        My Projects
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-center">
        {/* Some of my recent work using React, Next.js & Tailwind CSS */}
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
              activeTab === tab
                ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md"
                : "bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
            >
              <div className="relative w-full h-40 sm:h-48 md:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg h-full w-full transition-all duration-4000 ease-in-out object-top animate-scrollImage"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 px-2 py-1 rounded-md text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition-colors duration-300 text-xs sm:text-sm font-medium"
                  >
                    <FiExternalLink className="mr-1.5" /> Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-zinc-900 text-zinc-900 rounded-lg hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 text-xs sm:text-sm font-medium"
                  >
                    <FiCode className="mr-1.5" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* See More / See Less */}
      {filteredProjects.length > 3 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-zinc-900 dark:bg-indigo-600 text-white rounded-lg shadow hover:bg-zinc-800 dark:hover:bg-indigo-500 transition-all duration-300 font-medium"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
