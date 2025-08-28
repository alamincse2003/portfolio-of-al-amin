"use client";

import { motion } from "framer-motion";
import { features } from "../data/features";

const Features = () => {
  return (
    <section className="py-10 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>
        <motion.p
          className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Here are some of the key areas I focus on to deliver high-quality
          websites and applications.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-900 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
