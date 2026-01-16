"use client";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";
import { FaCertificate } from "react-icons/fa";
export default function Experience() {
  return (
    <section id="experiences" className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl underline decoration-wavy dark:decoration-indigo-400 decoration-indigo-600 font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Experience
        </h2>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
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
