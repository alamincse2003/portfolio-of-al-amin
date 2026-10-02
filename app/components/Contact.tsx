"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const socials = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/alamincse2003",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alamincse2003/",
  },
  {
    icon: <FaEnvelope className="w-5 h-5" />,
    label: "Email",
    href: "mailto:mdalamincse2003@gmail.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-soft border border-accent/30 rounded-full text-sm font-medium text-accent">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-100 mb-3"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-zinc-500 dark:text-zinc-400 mb-8 text-sm sm:text-base"
          >
            Open to full-time roles and freelance projects. The fastest way to
            reach me is email — I typically reply within 24 hours.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-10">
            <a
              href="mailto:mdalamincse2003@gmail.com"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-strong text-white rounded-full font-medium transition-colors duration-200 text-sm sm:text-base"
            >
              Email me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-surface-raised border border-border rounded-xl text-zinc-600 dark:text-zinc-300 hover:text-accent hover:border-accent/50 transition-all duration-200"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
