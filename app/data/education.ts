import type { EducationItem } from "../types";

export const education: EducationItem[] = [
  {
    title: "BSc in Computer Science and Engineering",
    institution: "Uttara University",
    start: "Sep 2026",
    end: "Present",
    details: ["Evening classes, alongside full-time work"],
  },
  {
    title: "Diploma in Computer Science & Engineering",
    institution: "Shariatpur Polytechnic Institute",
    start: "Sep 2019",
    end: "Dec 2023",
    details: ["CGPA 3.79 / 4.00"],
  },
];

export const training: EducationItem[] = [
  {
    title: "Web Design & Development",
    institution: "Programming Hero",
    start: "Jan 2023",
    end: "Jun 2023",
    link: { label: "View certificate", href: "/images/certificate/certificate_student.pdf" },
  },
];
