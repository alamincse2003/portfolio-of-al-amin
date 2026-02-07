"use client";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { certifications } from "../data/certifications";
import { ExternalLink } from "lucide-react";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-12 sm:py-16 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-8 sm:mb-12">
          Certifications & Achievements
        </h2>

        <div className="grid gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              {/* Card Content */}
              <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <FaCertificate className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {cert.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1">
                      {cert.issuer} | {cert.date}
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      className="inline-flex items-center gap-1 mt-2 sm:mt-3 text-sm sm:text-base text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                    >
                      View Certificate <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
