"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";
import { FiCode, FiExternalLink } from "react-icons/fi";

const tabs = ["All", "Personal", "Client"];

const TechBadges = ({ tech }) => {
  const [expanded, setExpanded] = useState(false);
  const maxVisible = 3;
  const hasMore = tech.length > maxVisible;
  const visibleTech = expanded ? tech : tech.slice(0, maxVisible);
  const remaining = tech.length - maxVisible;

  return (
    <div className="flex flex-wrap gap-1.5 mb-4">
      {visibleTech.map((t) => (
        <span
          key={t}
          className="font-mono text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-900/25 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/40 px-2 py-1 rounded-md"
        >
          {t}
        </span>
      ))}
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-indigo-100 hover:text-indigo-700 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-300 transition-colors duration-200 font-medium cursor-pointer"
        >
          {expanded ? "Less" : `+${remaining}`}
        </button>
      )}
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
            My Projects
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            A selection of things I&apos;ve built — from full-stack applications
            to client landing pages.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setShowAll(false); }}
              className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md shadow-indigo-500/20"
                  : "bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl hover:shadow-indigo-500/8 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-all duration-[4000ms] ease-in-out animate-scrollImage group-hover:scale-105"
                  />
                  {/* Type badge over image */}
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 text-white backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <TechBadges tech={project.tech} />

                  <div className="flex gap-2.5 mt-auto pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white rounded-lg transition-colors duration-200 text-xs font-semibold flex-1 justify-center"
                    >
                      <FiExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 rounded-lg transition-all duration-200 text-xs font-semibold flex-1 justify-center"
                    >
                      <FiCode className="w-3.5 h-3.5" /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more / less */}
        {filteredProjects.length > 3 && (
          <div className="mt-10 text-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white rounded-lg shadow-lg shadow-indigo-500/20 transition-all duration-200 font-semibold text-sm cursor-pointer"
            >
              {showAll ? "Show Less" : "Show All Projects"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
