"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { skills } from "../data/skills";

const SkillGroup = ({ title, items, groupRef }) => (
  <div>
    <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-zinc-500 dark:text-zinc-400">
      {title}
    </h3>
    <div ref={groupRef} className="flex flex-wrap gap-2.5">
      {items.map((skill) => (
        <span
          key={skill.name}
          className="skill-badge group inline-flex items-center gap-2 px-3.5 py-2 bg-surface-raised border border-border rounded-lg text-sm font-medium text-zinc-800 dark:text-zinc-200"
        >
          <span className="text-lg leading-none">{skill.icon}</span>
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const sectionRef = useRef(null);
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const toolsRef = useRef(null);

  useLayoutEffect(() => {
    const groups = [frontendRef.current, backendRef.current, toolsRef.current].filter(Boolean);

    const triggers = groups.map((group) => {
      const badges = group.querySelectorAll(".skill-badge");
      gsap.set(badges, { opacity: 0, y: 10 });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            gsap.to(badges, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.03,
              ease: "power2.out",
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(group);
      return observer;
    });

    return () => triggers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-12 sm:py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl sm:text-3xl mb-10 text-zinc-900 dark:text-zinc-100">
          Skills &amp; Technologies
        </h2>

        <div className="space-y-10">
          <SkillGroup title="Frontend" items={skills.frontend} groupRef={frontendRef} />
          {skills.backend?.length > 0 && (
            <SkillGroup title="Backend" items={skills.backend} groupRef={backendRef} />
          )}
          <SkillGroup title="Tools" items={skills.tools} groupRef={toolsRef} />
        </div>
      </div>
    </section>
  );
}
