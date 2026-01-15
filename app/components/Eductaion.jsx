"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { education } from "../data/education";

const Eductaion = () => {
  return (
    <section id="education" className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl underline decoration-wavy dark:decoration-indigo-400 decoration-indigo-600 font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Education
        </h2>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <FaGraduationCap className="w-4 h-4 text-indigo-500" />{" "}
                  {edu.degree}
                </h3>
                <span className="flex items-center text-gray-500 dark:text-gray-300 text-sm gap-1">
                  <FaCalendarAlt className="w-3 h-3" /> {edu.duration}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-3">
                {edu.institution}
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eductaion;
