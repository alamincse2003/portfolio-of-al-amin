import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaTools,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiGit,
  SiFigma,
  SiChakraui,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
export const skills = {
  frontend: [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500" />,
      proficiency: "Advanced",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500" />,
      proficiency: "Advanced",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600" />,
      proficiency: "Advanced",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" />,
      proficiency: "Advanced",
    },
    {
      name: "Chakra UI",
      icon: <SiChakraui className="text-teal-400" />,
      proficiency: "Advanced",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      proficiency: "Intermediate",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      proficiency: "Intermediate",
    },
    {
      name: "Typescript",
      icon: <SiTypescript className="text-blue-600" />,
      proficiency: "Intermediate",
    },
    {
      name: "Nextjs",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      proficiency: "Intermediate",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      proficiency: "Intermediate",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      proficiency: "Intermediate",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-600" />,
      proficiency: "Intermediate",
    },
  ],
  tools: [
    {
      name: "Git & GitHub",
      icon: <SiGit className="text-orange-600" />,
      proficiency: "Intermediate",
    },
    {
      name: "Figma",
      icon: <SiFigma className="text-pink-500" />,
      proficiency: "Intermediate",
    },
    {
      name: "Other Tools",
      icon: <FaTools className="text-gray-600" />,
      proficiency: "Advanced",
    },
  ],
};
