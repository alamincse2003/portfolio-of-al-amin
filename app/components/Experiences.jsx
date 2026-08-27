"use client";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experiences"
      className="py-12 sm:py-16 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <h2 className="font-serif text-2xl sm:text-3xl text-center mb-8 sm:mb-12 text-zinc-900 dark:text-zinc-100">
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
              <div className="bg-surface-raised border border-border rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md hover:border-accent/40 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-surface rounded-lg">
                    <Briefcase className="w-5 h-5 text-zinc-900 dark:text-zinc-300" />
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

                {/* Impact row — lead with outcomes */}
                {exp.impact && (
                  <ul className="space-y-1.5 mb-4">
                    {exp.impact.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Supporting detail — demoted */}
                <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400 space-y-1 ml-2 pt-3 border-t border-border">
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
