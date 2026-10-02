import type { Highlight } from "../types";

export const highlights: Highlight[] = [
  {
    title: "Auth is a feature, not a login form",
    context: "NidusJob",
    challenge:
      "JWT refresh, Google OAuth, OTP verification and protected routes each had edge cases that only surfaced in production — expired tokens and sessions that didn't persist.",
    solution:
      "Treated authentication as its own feature with explicit handling for token expiry, session persistence and route protection across all three dashboards.",
    tech: ["JWT", "OAuth", "OTP"],
  },
  {
    title: "Keeping three dashboards in sync",
    context: "NidusJob",
    challenge:
      "Employer, Job Seeker and Admin dashboards share data, and manual useEffect fetching with loading flags led to stale, out-of-sync state.",
    solution:
      "Moved server state to TanStack Query — caching, query invalidation and background refetching replaced hand-rolled loading logic.",
    tech: ["TanStack Query", "React"],
  },
  {
    title: "Designing for when AI is slow or wrong",
    context: "NidusJob",
    challenge:
      "AI-backed resume parsing and job recommendations returned inconsistent responses and could be slow or fail outright.",
    solution:
      "Built the UI around the unhappy path: defensive response handling, error states and fallback UI so features degrade instead of breaking.",
    tech: ["REST APIs", "Error handling"],
  },
  {
    title: "Large lists without the wait",
    context: "NidusJob",
    challenge: "Job listings and applicant data grew large enough to slow down initial loads.",
    solution: "Introduced lazy loading, pagination and leaner API usage to reduce load time on data-heavy views.",
    tech: ["Lazy loading", "Pagination"],
  },
];
