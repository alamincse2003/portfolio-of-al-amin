import { ArrowUpRight } from "lucide-react";
import Section from "./ui/Section";
import { TagList } from "./ui/Tag";
import Reveal from "./Reveal";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked" className="border-y border-line bg-surface">
      <div className="space-y-16">
        {experience.map((job) => {
          const first = job.roles[job.roles.length - 1];
          const latest = job.roles[0];
          return (
            <Reveal key={job.company}>
              <article className="grid gap-6 md:grid-cols-[14rem_1fr] md:gap-12">
                <header>
                  <h3 className="text-xl font-semibold tracking-tight text-fg">
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 transition-colors hover:text-accent-text"
                      >
                        {job.company}
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{job.location}</p>
                  <p className="mt-1 font-mono text-xs text-faint">
                    {first.start} — {latest.end}
                  </p>
                </header>

                <div>
                  <ol className="mb-7 space-y-4 border-l border-line pl-6">
                    {job.roles.map((role, i) => (
                      <li key={role.title} className="relative">
                        <span
                          aria-hidden
                          className={`absolute -left-[29.5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-surface ${
                            i === 0 ? "bg-accent" : "bg-line-strong"
                          }`}
                        />
                        <p className="font-semibold text-fg">{role.title}</p>
                        <p className="mt-0.5 font-mono text-xs text-faint">
                          {role.start} — {role.end}
                        </p>
                      </li>
                    ))}
                  </ol>

                  <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
                    {job.highlights.map((item) => (
                      <li key={item} className="relative pl-5">
                        <span aria-hidden className="absolute left-0 top-[0.8em] h-px w-2.5 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <TagList items={job.tech} label="Technologies used" />
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
