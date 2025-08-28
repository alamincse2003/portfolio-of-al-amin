"use client";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <section id="experiences" className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Toggle Button */}

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-indigo-400 ml-6 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Dot */}
              <span className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-900 shadow"></span>

              {/* Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {exp.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  {exp.company} | <span>{exp.duration}</span>
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-300 space-y-1">
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
