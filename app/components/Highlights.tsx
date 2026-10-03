import Section from "./ui/Section";
import { TagList } from "./ui/Tag";
import Reveal from "./Reveal";
import { highlights } from "../data/highlights";

export default function Highlights() {
  return (
    <Section
      id="highlights"
      eyebrow="Engineering highlights"
      title="Problems worth talking about"
      description="A few production problems from NidusJob, and how I approached them."
      className="border-y border-line bg-surface"
    >
      <Reveal>
        <ul className="grid gap-4 md:grid-cols-2">
          {highlights.map((item, i) => (
            <li key={item.title} data-reveal className="flex flex-col rounded-xl border border-line bg-bg p-6">
              <p className="font-mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")} · {item.context}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-fg">{item.title}</h3>
              <dl className="mt-4 flex-1 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="font-medium text-fg">Challenge</dt>
                  <dd className="mt-0.5 text-muted">{item.challenge}</dd>
                </div>
                <div>
                  <dt className="font-medium text-fg">What I did</dt>
                  <dd className="mt-0.5 text-muted">{item.solution}</dd>
                </div>
              </dl>
              <div className="mt-5">
                <TagList items={item.tech} label="Related technologies" />
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
