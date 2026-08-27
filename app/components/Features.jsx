"use client";

import { motion } from "framer-motion";
import { features } from "../data/features";

const Features = () => {
  return (
    <section className="py-12 sm:py-16 bg-surface-raised">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-4"
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
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-surface border border-border rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-lg hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-200 dark:bg-zinc-800/30 mb-4 text-zinc-900 dark:text-zinc-300">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
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
