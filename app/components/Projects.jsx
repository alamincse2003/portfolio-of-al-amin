"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";
import { FiCode, FiExternalLink, FiChevronDown } from "react-icons/fi";

const CASE_STUDY_IDS = [1, 2, 3];

const caseStudies = projects.filter((p) => CASE_STUDY_IDS.includes(p.id));
const moreProjects = projects.filter((p) => !CASE_STUDY_IDS.includes(p.id));

const TechBadges = ({ tech }) => (
  <div className="flex flex-wrap gap-1.5">
    {tech.map((t) => (
      <span
        key={t}
        className="font-mono text-xs bg-surface-raised text-zinc-700 dark:text-zinc-300 border border-border px-2 py-1 rounded-md"
      >
        {t}
      </span>
    ))}
  </div>
);

const ProjectLinks = ({ live, code }) => (
  <div className="flex gap-2.5">
    <a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent hover:bg-accent-strong text-white rounded-lg transition-colors duration-200 text-xs font-semibold"
    >
      <FiExternalLink className="w-3.5 h-3.5" /> Live Demo
    </a>
    {code && (
      <a
        href={code}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2 border border-border text-zinc-800 dark:text-zinc-200 hover:border-accent hover:text-accent rounded-lg transition-all duration-200 text-xs font-semibold"
      >
        <FiCode className="w-3.5 h-3.5" /> Source
      </a>
    )}
  </div>
);

const CaseStudy = ({ project, index }) => {
  const [approachOpen, setApproachOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 py-10 border-b border-border last:border-0"
    >
      {/* Image */}
      <div className="md:col-span-2">
        <div className="relative w-full h-48 md:h-full min-h-[180px] rounded-xl overflow-hidden border border-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
          <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 text-white backdrop-blur-sm">
            {project.type}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="md:col-span-3">
        <h3 className="font-serif text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100 mb-3">
          {project.title}
        </h3>

        <div className="space-y-3 mb-4">
          <div>
            <p className="font-serif italic text-sm text-accent mb-1">The problem</p>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.caseStudy.problem}
            </p>
          </div>

          <div>
            <button
              onClick={() => setApproachOpen(!approachOpen)}
              className="flex items-center gap-1.5 font-serif italic text-sm text-accent mb-1 cursor-pointer"
            >
              The approach
              <FiChevronDown
                className={`w-3.5 h-3.5 transition-transform ${approachOpen ? "rotate-180" : ""}`}
              />
            </button>
            {approachOpen && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.25 }}
                className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed overflow-hidden"
              >
                {project.caseStudy.approach}
              </motion.p>
            )}
          </div>

          <div>
            <p className="font-serif italic text-sm text-accent mb-1">The outcome</p>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.caseStudy.outcome}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <TechBadges tech={project.tech} />
        </div>

        <ProjectLinks live={project.live} code={project.code} />
      </div>
    </motion.article>
  );
};

const MoreProjectRow = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-5 border-b border-border last:border-0"
  >
    <div className="sm:w-56 shrink-0">
      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h4>
      <span className="text-xs text-zinc-500 dark:text-zinc-400">{project.type}</span>
    </div>
    <p className="flex-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
      {project.description}
    </p>
    <div className="flex items-center gap-3 shrink-0">
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} live demo`}
        className="text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors"
      >
        <FiExternalLink className="w-4 h-4" />
      </a>
      {project.code && (
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code`}
          className="text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors"
        >
          <FiCode className="w-4 h-4" />
        </a>
      )}
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-surface"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-100 mb-3">
            Selected Work
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-sm sm:text-base">
            A closer look at three projects — the problem each one solved, how
            I approached it, and what shipped.
          </p>
        </motion.div>

        {/* Case studies */}
        <div>
          {caseStudies.map((project, index) => (
            <CaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More projects */}
        {moreProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="font-serif text-xl text-zinc-900 dark:text-zinc-100 mb-2">
              More projects
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              Smaller builds and client work.
            </p>
            <div>
              {moreProjects.map((project, index) => (
                <MoreProjectRow key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
