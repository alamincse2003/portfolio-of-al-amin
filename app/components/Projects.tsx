import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Section from "./ui/Section";
import ButtonLink from "./ui/ButtonLink";
import { TagList } from "./ui/Tag";
import Reveal from "./Reveal";
import { featuredProjects, otherProjects } from "../data/projects";
import type { Project } from "../types";

const iconLink =
  "flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-subtle hover:text-fg";

function FeaturedProject({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <Reveal>
      <article className="group grid overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-line-strong md:grid-cols-2">
        <div
          className={`flex items-center border-b border-line bg-subtle p-4 sm:p-6 md:border-b-0 ${
            flip ? "md:order-2 md:border-l" : "md:border-r"
          }`}
        >
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 448px, (min-width: 768px) 45vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-faint">{project.type} project</p>
          <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">{project.title}</h3>
          <p className="mt-2 leading-relaxed text-muted">{project.summary}</p>

          {project.role && (
            <p className="mt-4 text-sm leading-relaxed text-muted">
              <span className="font-medium text-fg">My role: </span>
              {project.role}
            </p>
          )}

          {project.features && (
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              {project.features.map((feature) => (
                <li key={feature} className="relative pl-4">
                  <span aria-hidden className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {project.outcome && (
            <p className="mt-5 rounded-lg bg-accent-soft px-3.5 py-2.5 text-sm text-fg">{project.outcome}</p>
          )}

          <div className="mt-6 space-y-2.5">
            <TagList items={project.stack} label="Technologies I used" />
            {project.teamStack && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-faint">Backend by team:</span>
                <TagList items={project.teamStack} muted label="Backend built by the team" />
              </div>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-2.5 pt-7">
            <ButtonLink href={project.live} external size="sm">
              <ExternalLink className="h-4 w-4" aria-hidden />
              Live site
            </ButtonLink>
            {project.code && (
              <ButtonLink href={project.code} external size="sm" variant="secondary">
                <FaGithub className="h-4 w-4" aria-hidden />
                Source
              </ButtonLink>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function OtherProject({ project }: { project: Project }) {
  return (
    <li
      data-reveal
      className="flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-faint">{project.type}</p>
          <h4 className="mt-1 font-semibold text-fg">{project.title}</h4>
        </div>
        <div className="-mr-2 -mt-1 flex">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code (opens in a new tab)`}
              className={iconLink}
            >
              <FaGithub className="h-4 w-4" aria-hidden />
            </a>
          )}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live site (opens in a new tab)`}
            className={iconLink}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-4">
        <TagList items={project.stack} label="Technologies used" />
      </div>
    </li>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Production work from NidusLab alongside projects I built on my own — what each one does and what I was responsible for."
    >
      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={project.id} project={project} flip={index % 2 === 1} />
        ))}
      </div>

      <h3 className="mb-5 mt-16 text-lg font-semibold text-fg">Other projects</h3>
      <Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <OtherProject key={project.id} project={project} />
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
