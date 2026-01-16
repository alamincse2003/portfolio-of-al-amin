"use client";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="lg:py-10 py-0 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl underline decoration-wavy dark:decoration-indigo-400 decoration-indigo-600 font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
              Frontend
            </h3>
            <div className="grid gap-6">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon}
                    <span className="font-medium dark:text-gray-100">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      className="bg-indigo-600 h-3 rounded-full relative flex items-center justify-end pr-2 text-white text-xs font-medium"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1 }}
                    >
                      <span>{skill.level}</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend */}
          {/* <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
              Backend
            </h3>
            <div className="grid gap-6">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon}
                    <span className="font-medium dark:text-gray-100">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      className="bg-green-500 h-3 rounded-full relative flex items-center justify-end pr-2 text-white text-xs font-medium"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1 }}
                    >
                      <span>{skill.level}</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
              Tools
            </h3>
            <div className="grid gap-6">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon}
                    <span className="font-medium dark:text-gray-100">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      className="bg-pink-500 h-3 rounded-full relative flex items-center justify-end pr-2 text-white text-xs font-medium"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1 }}
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
