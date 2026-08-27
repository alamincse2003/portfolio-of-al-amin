"use client";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { certifications } from "../data/certifications";
import { ExternalLink } from "lucide-react";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-12 sm:py-16 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl sm:text-3xl text-center text-zinc-900 dark:text-zinc-100 mb-8 sm:mb-12">
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
              <div className="bg-surface-raised border border-border p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-zinc-200 dark:bg-zinc-800/30 rounded-lg">
                    <FaCertificate className="w-5 h-5 text-zinc-900 dark:text-zinc-300" />
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
                      className="inline-flex items-center gap-1 mt-2 sm:mt-3 text-sm sm:text-base text-zinc-900 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-400 font-medium transition-colors"
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
