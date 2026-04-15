"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const contactInfo = [
  {
    icon: <FaEnvelope className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    label: "Email",
    value: "mdalamincse2003@gmail.com",
    href: "mailto:mdalamincse2003@gmail.com",
  },
  {
    icon: <FaPhone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    label: "Phone",
    value: "+880 1751 492367",
    href: "tel:+8801751492367",
  },
  {
    icon: <FaMapMarkerAlt className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
  },
];

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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { name, email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for reaching out. I'll reply within 24 hours.",
          timer: 3000,
          showConfirmButton: false,
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again or email me directly.",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
            Get In Touch
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto text-sm sm:text-base">
            Open to full-time roles and freelance projects. I typically reply
            within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

          {/* ── Left: Info panel ───────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 rounded-full text-sm font-medium text-emerald-700 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Contact details */}
            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/25 border border-indigo-100 dark:border-indigo-800/30 rounded-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants}>
              <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Form ─────────────────────────────── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
          >
            {error && (
              <p className="text-sm text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-lg px-4 py-2.5">
                {error}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 text-sm transition-shadow"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 text-sm transition-shadow"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 text-sm transition-shadow resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
              className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 cursor-pointer text-sm"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
