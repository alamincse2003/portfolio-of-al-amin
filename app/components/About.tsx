import Section from "./ui/Section";
import Reveal from "./Reveal";
import { site } from "../data/site";

const facts = [
  { label: "Current role", value: `${site.title} at ${site.company}` },
  { label: "Focus", value: "Frontend architecture, auth, real-time UI" },
  { label: "Core stack", value: "React · Next.js · TypeScript" },
  { label: "Location", value: site.location },
  { label: "Availability", value: site.availability },
  { label: "Education", value: "BSc in CSE (ongoing), Uttara University" },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer first, interface second"
    >
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p data-reveal>
            I joined {site.company} in November 2025 as a Frontend Engineer and
            was promoted to {site.title} in 2026. Most of my work is on
            NidusJob, an AI-powered hiring platform, where I work across the
            frontend from authentication flows to the dashboards employers and
            job seekers use every day.
          </p>
          <p data-reveal>
            I care about the parts that don&apos;t show up in a screenshot: edge
            cases in auth, state that stays in sync, loading and error states,
            and code another engineer can pick up without asking me first.
          </p>
          <p data-reveal>
            I&apos;m looking to keep growing on a team where I can own features
            end to end.
          </p>
        </Reveal>

        <Reveal>
          <dl className="divide-y divide-line rounded-xl border border-line bg-surface">
            {facts.map(({ label, value }) => (
              <div
                key={label}
                data-reveal
                className="grid grid-cols-[7.5rem_1fr] gap-4 px-5 py-3.5 text-sm"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-faint leading-5">
                  {label}
                </dt>
                <dd className="text-fg">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
