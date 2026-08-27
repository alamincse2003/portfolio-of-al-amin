export const notes = [
  {
    title: "Auth is never 'just a login form'",
    body: "JWT refresh, OAuth, OTP verification, protected routes — every one of these has an edge case that only shows up in production. I've stopped treating auth as boilerplate and started treating it as its own feature with its own test cases.",
    date: "2026",
  },
  {
    title: "TanStack Query changed how I think about server state",
    body: "Before, I was reaching for useEffect and manual loading flags everywhere. Caching, invalidation, and background refetching solved problems I didn't realize I was solving badly.",
    date: "2025",
  },
  {
    title: "AI features are only as good as the fallback state",
    body: "Wiring up resume parsing and job recommendations taught me the real work isn't the happy path — it's what the UI does while an AI call is slow, wrong, or fails outright.",
    date: "2025",
  },
];
