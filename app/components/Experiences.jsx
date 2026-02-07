"use client";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experiences"
      className="py-12 sm:py-16 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-zinc-900 dark:text-zinc-100">
          Experience
        </h2>

        {/* Timeline */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 italic">
                      {exp.company} | <span>{exp.duration}</span>
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside mt-2 sm:mt-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 space-y-1 ml-2">
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
