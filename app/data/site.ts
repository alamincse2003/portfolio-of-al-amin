import type { SocialLink } from "../types";

export const site = {
  name: "Al Amin",
  fullName: "Md. Al Amin",
  title: "Junior Software Engineer",
  company: "NidusLab",
  location: "Dhaka, Bangladesh",
  availability: "Open to remote and on-site roles",
  email: "mdalamincse2003@gmail.com",
  url: "https://portfolio-of-alamincse2003.vercel.app",
  resume: "/images/resume/Al-Amin-Resume.pdf",
  photo: "/images/hero/al-amin.webp",
  description:
    "Al Amin is a Junior Software Engineer at NidusLab building secure, real-time web applications with React, Next.js and TypeScript — authentication, role-based dashboards and AI-powered features for SaaS products.",
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/alamincse2003" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alamincse2003/" },
  { label: "Email", href: `mailto:${site.email}` },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
