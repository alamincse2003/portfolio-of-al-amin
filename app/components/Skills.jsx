"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaTools } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiGit,
  SiFigma,
} from "react-icons/si";

const skills = {
  frontend: [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500" />,
      level: "90%",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500" />,
      level: "85%",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" />,
      level: "85%",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      level: "80%",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      level: "75%",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      level: "70%",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      level: "65%",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-600" />,
      level: "60%",
    },
  ],
  tools: [
    {
      name: "Git & GitHub",
      icon: <SiGit className="text-orange-600" />,
      level: "80%",
    },
    {
      name: "Figma",
      icon: <SiFigma className="text-pink-500" />,
      level: "70%",
    },
    {
      name: "Other Tools",
      icon: <FaTools className="text-gray-600" />,
      level: "65%",
    },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
              Frontend
            </h3>
            <div className="grid gap-6">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      className="bg-indigo-600 h-3 rounded-full relative flex items-center justify-end pr-2 text-white text-xs font-medium"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1 }}
                    >
                      <span>{skill.level}</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
              Backend
            </h3>
            <div className="grid gap-6">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      className="bg-green-500 h-3 rounded-full relative flex items-center justify-end pr-2 text-white text-xs font-medium"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1 }}
                    >
                      <span>{skill.level}</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
              Tools
            </h3>
            <div className="grid gap-6">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      className="bg-pink-500 h-3 rounded-full relative flex items-center justify-end pr-2 text-white text-xs font-medium"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1 }}
                    >
                      <span>{skill.level}</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
