"use client";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const proficiencyColors = {
  Advanced: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Intermediate: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Familiar: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-zinc-900 dark:text-zinc-100">
          Skills & Technologies
        </h2>

        <div className="space-y-12">
          {/* Frontend */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group relative p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-indigo-900/20 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                      {skill.name}
                    </span>
                    {skill.proficiency && (
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${proficiencyColors[skill.proficiency]}`}>
                        {skill.proficiency}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend */}
          {skills.backend && skills.backend.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-green-600 dark:text-green-400">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {skills.backend.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="group relative p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-lg hover:shadow-green-100 dark:hover:shadow-green-900/20 hover:border-green-300 dark:hover:border-green-500 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                        {skill.name}
                      </span>
                      {skill.proficiency && (
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${proficiencyColors[skill.proficiency]}`}>
                          {skill.proficiency}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Tools */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-purple-600 dark:text-purple-400">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group relative p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                      {skill.name}
                    </span>
                    {skill.proficiency && (
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${proficiencyColors[skill.proficiency]}`}>
                        {skill.proficiency}
                      </span>
                    )}
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
