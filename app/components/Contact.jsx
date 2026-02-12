"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    emailjs
      .send(
        "service_0mpwqcc",
        "template_hbbkxca",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "MjKU8ciwz84K1pqwB",
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for contacting me. I will reply soon.",
          timer: 3000,
          showConfirmButton: false,
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      });
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
          Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Contact Info */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Get in Touch
            </h3>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
              I'm open to opportunities and collaborations. Feel free to contact
              me using the details below or send a message through the form.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <FaEnvelope className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-sm sm:text-base break-all">
                  mdalamincse2003@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <FaPhone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span>+880 1751 492367</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <FaMapMarkerAlt className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4"
          >
            {status && (
              <p
                className={`text-sm ${
                  status.includes("successfully")
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {status}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400"
            />
            <button
              type="submit"
              className="w-full bg-zinc-900 dark:bg-indigo-600 hover:bg-zinc-800 dark:hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
