export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Email";
  href: string;
};

export type Role = {
  title: string;
  start: string;
  end: string;
};

export type Experience = {
  company: string;
  location: string;
  url?: string;
  roles: Role[];
  highlights: string[];
  tech: string[];
};

export type ProjectType = "Company" | "Personal" | "Client";

export type Project = {
  id: string;
  title: string;
  type: ProjectType;
  summary: string;
  image: string;
  imageAlt: string;
  role?: string;
  features?: string[];
  outcome?: string;
  /** Technologies the author personally worked with. */
  stack: string[];
  /** Parts of the stack owned by other team members. */
  teamStack?: string[];
  live: string;
  code?: string;
};

export type Highlight = {
  title: string;
  context: string;
  challenge: string;
  solution: string;
  tech: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  start: string;
  end: string;
  details?: string[];
  link?: { label: string; href: string };
};
