"use client";

import { motion } from "framer-motion";
import { features } from "../data/features";

const Features = () => {
  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>
        <motion.p
          className="mt-2 text-center text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Here are some of the key areas I focus on to deliver high-quality
          websites and applications.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-6 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 mb-4 text-indigo-600 dark:text-indigo-400">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
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
