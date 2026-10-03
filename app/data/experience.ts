import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    company: "NidusLab",
    location: "USA",
    url: "https://nidusjob.com/",
    roles: [
      { title: "Junior Software Engineer", start: "Sep 2026", end: "Present" },
      { title: "Frontend Engineer", start: "Nov 2025", end: "Aug 2026" },
    ],
    highlights: [
      "Built the Employer, Job Seeker and Admin dashboards of NidusJob, an AI-powered job platform live at nidusjob.com.",
      "Implemented authentication and authorization JWT, Google OAuth, OTP verification and protected routes including token expiry and session persistence handling.",
      "Delivered real-time chat and notifications over WebSockets with unread tracking and infinite-scroll pagination.",
      "Integrated AI features over REST APIs resume builder, CV parsing, job recommendations and cover letter generation  with error handling and fallback UI.",
      "Managed server state with TanStack Query, using caching and query invalidation to keep data in sync across dashboards.",
      "Implemented subscription and credit-based feature gating integrated with local payment gateways.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "TanStack Query",
      "Chakra UI",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
];
