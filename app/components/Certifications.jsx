"use client";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { certifications } from "../data/certifications";

const Certifications = () => {
  return (
    <section id="certifications" className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="lg:text-3xl text-2xl underline decoration-wavy dark:decoration-indigo-400 decoration-indigo-600 font-bold text-center dark:text-gray-100 mb-14">
          Certifications & Achievements
        </h2>

        <div className="  border-blue-400 dark:border-blue-500">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              {/* Card Content */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold dark:text-gray-100">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {cert.issuer} | {cert.date}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  className="inline-block mt-3 text-blue-500 hover:underline"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
