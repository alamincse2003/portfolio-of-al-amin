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
      className=" py-10 px-6 md:px-20 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-4xl underline decoration-wavy dark:decoration-indigo-400 decoration-indigo-600 font-bold mb-6 text-gray-800 dark:text-white text-center">
        My Projects
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
        {/* Some of my recent work using React, Next.js & Tailwind CSS */}
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium transition cursor-pointer ${
              activeTab === tab
                ? "bg-indigo-600 text-white dark:bg-indigo-400"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover   rounded-lg h-full w-full transition-all duration-4000 ease-in-out   object-top animate-scrollImage"
                />
              </div>
              {/* new code  */}
              {/* <div className="relative w-full h-56 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover h-full w-full object-top transition-all duration-[4000ms] ease-in-out animate-scrollImage"
                />
              </div> */}

              {/* new code  */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100 px-2 py-1 rounded-md text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 dark:bg-indigo-400 dark:hover:bg-indigo-300 transition"
                  >
                    <FiExternalLink className="mr-1" /> Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-300 dark:hover:text-gray-900 transition"
                  >
                    <FiCode className="mr-1" /> Code
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
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500 transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
