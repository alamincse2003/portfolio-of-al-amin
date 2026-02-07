"use client";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
              Frontend
            </h3>
            <div className="grid gap-6">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-indigo-600 dark:text-indigo-400">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      className="bg-indigo-600 dark:bg-indigo-500 h-3 rounded-full relative flex items-center justify-end pr-2 text-white text-xs font-medium"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <span>{skill.level}</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
              Tools
            </h3>
            <div className="grid gap-6">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-zinc-700 dark:text-zinc-300">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      className="bg-zinc-600 dark:bg-zinc-500 h-3 rounded-full relative flex items-center justify-end pr-2 text-white text-xs font-medium"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <span>{skill.level}</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
