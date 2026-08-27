"use client";
import { motion } from "framer-motion";

const Bracket = ({ className, style, delay = 0 }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
    style={style}
  >
    <motion.path
      d="M1 1 L1 8 M1 1 L8 1"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    />
  </svg>
);

export default function CornerBrackets({ children, className = "", inset = "-16px", delay = 0 }) {
  return (
    <div className={`relative ${className}`}>
      <Bracket
        className="absolute text-accent/60 dark:text-accent/50"
        style={{ top: inset, left: inset }}
        delay={delay}
      />
      <Bracket
        className="absolute text-accent/60 dark:text-accent/50 rotate-90"
        style={{ top: inset, right: inset }}
        delay={delay + 0.08}
      />
      <Bracket
        className="absolute text-accent/60 dark:text-accent/50 -rotate-90"
        style={{ bottom: inset, left: inset }}
        delay={delay + 0.16}
      />
      <Bracket
        className="absolute text-accent/60 dark:text-accent/50 rotate-180"
        style={{ bottom: inset, right: inset }}
        delay={delay + 0.24}
      />
      {children}
    </div>
  );
}
