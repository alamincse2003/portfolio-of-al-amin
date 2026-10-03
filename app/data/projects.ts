import type { Project } from "../types";

export const featuredProjects: Project[] = [
  {
    id: "nidusjob",
    title: "NidusJob",
    type: "Company",
    summary:
      "AI-powered job platform with role-based dashboards for employers, job seekers and admins.",
    image: "/images/projects/nidusjob-hero.webp",
    imageAlt: "NidusJob landing page with AI-powered job search",
    role: "Frontend — authentication, dashboards, real-time features and AI integrations",
    features: [
      "Secure auth with JWT, Google OAuth and OTP, including token expiry and session persistence",
      "Cross-dashboard state sync with TanStack Query caching and invalidation",
      "AI resume builder, CV parsing and recommendations with error handling and fallback UI",
      "Lazy loading and pagination for large job and applicant lists",
    ],
    outcome: "Three dashboards shipped to production at nidusjob.com.",
    stack: ["React", "TypeScript", "Chakra UI", "TanStack Query", "WebSockets"],
    teamStack: ["Python", "Django", "PostgreSQL"],
    live: "https://nidusjob.com/",
  },
  {
    id: "career-college",
    title: "Career College",
    type: "Company",
    summary:
      "Multi-page educational platform covering courses, instructors and partner onboarding.",
    image: "/images/projects/career-college.webp",
    imageAlt: "Career College landing page with course highlights",
    role: "Frontend — built every page from the Figma designs",
    features: [
      "Landing page with hero, partners, popular courses and career journey sections",
      "Course listing and course details pages",
      "Instructor, instructor details, become-a-partner and about pages",
    ],
    outcome: "9 fully responsive pages built from Figma and shipped to production.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    teamStack: ["Python", "Django", "PostgreSQL"],
    live: "https://career-college-frontend.vercel.app/",
  },
  {
    id: "smart-appointment",
    title: "Smart Appointment & Queue Manager",
    type: "Personal",
    summary:
      "Full-stack booking system with real-time queue tracking and automated appointment reminders.",
    image: "/images/projects/smart-appointment.webp",
    imageAlt: "Smart Appointment dashboard with daily queue stats and recent activity",
    role: "Solo full-stack build — frontend, API and database",
    features: [
      "Real-time queue state synced across admin and client views",
      "Role-based dashboards for admins and clients",
      "Automated appointment reminders",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    live: "https://smart-appointment-frontend-olive.vercel.app/dashboard",
    code: "https://github.com/alamincse2003/smart-appointment-queue-manager",
  },
];

export const otherProjects: Project[] = [
  {
    id: "job-portal",
    title: "Job Portal Web App",
    type: "Personal",
    summary:
      "Job-listing app with category filtering and search, using Context API for global state.",
    image: "/images/projects/job-portal-web-app.webp",
    imageAlt: "Job Portal web app listing page",
    stack: ["React", "React Router", "Context API", "Tailwind CSS"],
    live: "https://job-portal-web-app-ashy.vercel.app",
    code: "https://github.com/alamincse2003/job-portal-web-app",
  },
  {
    id: "expense-tracker",
    title: "Smart Expense Tracker",
    type: "Personal",
    summary:
      "Expense tracker with Chart.js visualisations, PDF export and localStorage persistence — no backend.",
    image: "/images/projects/smart-tracker-expense-app.webp",
    imageAlt: "Smart Expense Tracker with spending charts",
    stack: ["JavaScript", "Chart.js", "jsPDF", "Tailwind CSS"],
    live: "https://smart-expense-tracker-web-app.vercel.app",
    code: "https://github.com/alamincse2003/Smart-Expense-Tracker-Web-App",
  },
  {
    id: "extension-lab",
    title: "Extension Lab",
    type: "Client",
    summary:
      "Responsive landing page for a browser-extension studio, converted pixel-perfect from Figma.",
    image: "/images/projects/extension-lab.webp",
    imageAlt: "Extension Lab landing page",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://extension-lab-xi.vercel.app/",
    code: "https://github.com/alamincse2003/extension-lab",
  },
];
