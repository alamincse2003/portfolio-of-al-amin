"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { education } from "../data/education";

const Eductaion = () => {
  return (
    <section id="education" className="py-16 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
          Education
        </h2>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-6 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <FaGraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />{" "}
                  {edu.degree}
                </h3>
                <span className="flex items-center text-zinc-600 dark:text-zinc-400 text-sm gap-1">
                  <FaCalendarAlt className="w-3 h-3" /> {edu.duration}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 italic mb-3">
                {edu.institution}
              </p>
              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
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
