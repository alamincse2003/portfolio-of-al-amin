export const projects = [
  {
    id: 1,
    title: "AI-Powered NidusJob",
    type: "Company",
    description:
      "An AI-powered job portal with role-based dashboards for Employers, Job Seekers, and Admins. Built the complete frontend with secure authentication (JWT, OAuth, OTP), real-time data sync using TanStack React Query, and optimized performance through lazy loading and pagination.",
    outcome:
      "Shipped 3 distinct dashboards (Employer, Job Seeker, Admin) to production, live at nidusjob.com.",
    image: "/images/projects/nidusjob-hero.webp",
    tech: [
      "React",
      "TypeScript",
      "Chakra UI",
      "Python",
      "Django",
      "Postgresql",
    ],
    live: "https://nidusjob.com/",
    code: null,
    caseStudy: {
      problem:
        "[TODO: what gap or requirement NidusJob needed to solve — e.g. why three separate role-based dashboards were needed and what the constraint was before this existed]",
      approach:
        "[TODO: key technical decisions — why JWT/OAuth/OTP for auth, why TanStack React Query for data sync, why lazy loading/pagination mattered for this product specifically]",
      outcome:
        "Shipped 3 distinct dashboards (Employer, Job Seeker, Admin) to production, live at nidusjob.com.",
    },
  },
  {
    id: 2,
    title: "Career College",
    type: "Company",
    description:
      "A multi-page educational platform frontend with a fully designed landing page (Hero, Partners, Popular Courses, Career Journey), Our Courses, Course Details, Become a Partner, Instructor, Instructor Details, and About Us pages.",
    outcome: "9 fully responsive pages built from Figma, shipped to production.",
    image: "/images/projects/career-college.webp",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Django",
      "Postgresql",
    ],
    live: "https://career-college-frontend.vercel.app/",
    code: null,
    caseStudy: {
      problem:
        "[TODO: what the client needed — e.g. why 9 distinct pages, what the Figma handoff/timeline constraint looked like]",
      approach:
        "[TODO: key technical decisions — why Next.js for this build, how the Figma-to-responsive-page conversion was structured, any reuse/component strategy across the 9 pages]",
      outcome: "9 fully responsive pages built from Figma, shipped to production.",
    },
  },
  {
    id: 3,
    title: "Smart Appointment & Queue Manager",
    type: "Personal",
    description:
      "A full-stack booking system with real-time queue tracking, role-based dashboards for admin and clients, and automated appointment reminders.",
    outcome: "Full-stack build, solo — real-time queue state synced across admin and client views.",
    image: "/images/projects/smart-appointment.webp",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    live: "https://smart-appointment-frontend-olive.vercel.app/dashboard",
    code: "https://github.com/alamincse2003/smart-appointment-queue-manager",
    caseStudy: {
      problem:
        "[TODO: what real-world booking/queue problem this was built to solve, and why a full-stack solo build rather than using an existing scheduling tool]",
      approach:
        "[TODO: key technical decisions — how real-time queue sync between admin/client views was implemented, why Node/Express/MongoDB, how automated reminders were handled]",
      outcome:
        "Full-stack build, solo — real-time queue state synced across admin and client views.",
    },
  },
  {
    id: 4,
    title: "Job Portal Web App",
    type: "Personal",
    description:
      "A responsive job-listing platform with category filtering, search, and a clean card-based UI — built with React and Context API for global state.",
    outcome: "Global state handled with Context API, no external state library.",
    image: "/images/projects/job-portal-web-app.webp",
    tech: ["React", "React Router", "Context API", "Tailwind CSS"],
    live: "https://job-portal-web-app-ashy.vercel.app",
    code: "https://github.com/alamincse2003/job-portal-web-app",
  },
  {
    id: 5,
    title: "Smart Expense Tracker",
    type: "Personal",
    description:
      "An expense management tool with interactive Chart.js visualisations, PDF export via jsPDF, and persistent storage using localStorage.",
    outcome: "Data visualisation and PDF export built with zero backend.",
    image: "/images/projects/smart-tracker-expense-app.webp",
    tech: ["JavaScript", "Tailwind CSS", "Chart.js", "jsPDF", "LocalStorage"],
    live: "https://smart-expense-tracker-web-app.vercel.app",
    code: "https://github.com/alamincse2003/Smart-Expense-Tracker-Web-App",
  },
  {
    id: 6,
    title: "QuickMart — E-commerce",
    type: "Personal",
    description:
      "A fully functional e-commerce storefront with cart management, product filtering, and a checkout flow — powered by React Hooks and Context API.",
    outcome: "End-to-end cart-to-checkout flow, state-managed with React Hooks.",
    image: "/images/projects/quickmark.webp",
    tech: ["React", "Context API", "React Hooks", "Bootstrap"],
    live: "https://quickmart-demo.surge.sh",
    code: "https://github.com/alamincse2003/QuickMart",
  },
  {
    id: 7,
    title: "Extension Lab",
    type: "Client",
    description:
      "A client website for a browser-extension studio. Pixel-perfect conversion of a Figma design to a responsive, vanilla HTML/CSS/JS landing page.",
    outcome: "Delivered pixel-perfect to spec, no framework overhead.",
    image: "/images/projects/extention-lab.webp",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://extension-lab-xi.vercel.app/",
    code: "https://github.com/alamincse2003/extension-lab",
  },
];
