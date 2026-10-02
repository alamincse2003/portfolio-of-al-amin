import type { ReactNode } from "react";
import Container from "./Container";
import Reveal from "../Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 md:py-28 ${className}`}>
      <Container>
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent-text">
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
