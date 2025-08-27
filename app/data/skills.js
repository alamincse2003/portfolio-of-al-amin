import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaTools } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiGit,
  SiFigma,
} from "react-icons/si";
export const skills = {
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
