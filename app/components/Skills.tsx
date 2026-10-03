import Section from "./ui/Section";
import Reveal from "./Reveal";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="TypeScript, React and Next.js are what I use every day. The rest I've used in production or in my own projects."
    >
      <Reveal>
        <dl className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
          {skills.map((group) => (
            <div key={group.title} data-reveal className="grid gap-3 p-5 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:p-6">
              <dt className="font-mono text-xs uppercase tracking-wider text-faint sm:pt-1.5">{group.title}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-line bg-subtle px-3 py-1.5 text-sm text-fg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
