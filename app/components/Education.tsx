import { FileText, GraduationCap } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./Reveal";
import { education, training } from "../data/education";
import type { EducationItem } from "../types";

function Entry({ item, label }: { item: EducationItem; label: string }) {
  const Icon = label === "Education" ? GraduationCap : FileText;
  return (
    <li data-reveal className="flex gap-4 rounded-xl border border-line bg-surface p-6">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-subtle text-muted">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-wider text-faint">{label}</p>
        <h3 className="mt-1 font-semibold text-fg">{item.title}</h3>
        <p className="mt-0.5 text-sm text-muted">{item.institution}</p>
        <p className="mt-1 font-mono text-xs text-faint">
          {item.start} — {item.end}
        </p>
        {item.details?.map((detail) => (
          <p key={detail} className="mt-3 text-sm text-fg">
            {detail}
          </p>
        ))}
        {item.link && (
          <a
            href={item.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-accent-text underline-offset-4 hover:underline"
          >
            {item.link.label}
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        )}
      </div>
    </li>
  );
}

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & training">
      <Reveal>
        <ul className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <Entry key={item.title} item={item} label="Education" />
          ))}
          {training.map((item) => (
            <Entry key={item.title} item={item} label="Training" />
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
