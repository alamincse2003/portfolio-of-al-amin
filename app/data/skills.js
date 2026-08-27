import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
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
  SiMui,
  SiAntdesign,
} from "react-icons/si";

const icon = "text-zinc-500 dark:text-zinc-400 group-hover:text-accent transition-colors";

export const skills = {
  frontend: [
    { name: "React", icon: <FaReact className={icon} /> },
    { name: "Next.js", icon: <SiNextdotjs className={icon} /> },
    { name: "TypeScript", icon: <SiTypescript className={icon} /> },
    { name: "JavaScript", icon: <SiJavascript className={icon} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className={icon} /> },
    { name: "Chakra UI", icon: <SiChakraui className={icon} /> },
    { name: "Material UI", icon: <SiMui className={icon} /> },
    { name: "Ant Design", icon: <SiAntdesign className={icon} /> },
    { name: "Bootstrap", icon: <FaBootstrap className={icon} /> },
    { name: "HTML5", icon: <FaHtml5 className={icon} /> },
    { name: "CSS3", icon: <FaCss3Alt className={icon} /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className={icon} /> },
    { name: "MongoDB", icon: <SiMongodb className={icon} /> },
    { name: "MySQL", icon: <SiMysql className={icon} /> },
  ],
  tools: [
    { name: "Git & GitHub", icon: <SiGit className={icon} /> },
    { name: "Figma", icon: <SiFigma className={icon} /> },
  ],
};
