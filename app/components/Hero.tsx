import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";
import Container from "./ui/Container";
import ButtonLink from "./ui/ButtonLink";
import SocialLinks from "./ui/SocialLinks";
import Reveal from "./Reveal";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-10 sm:pt-36 md:pb-[50px]">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          <Reveal immediate className="order-2 md:order-1">
            <p
              data-reveal
              className="mb-5 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent-text"
            >
              <span className="h-px w-6 bg-accent" aria-hidden />
              {site.title} · {site.company}
            </p>

            <h1
              data-reveal
              className="max-w-2xl text-[clamp(2.25rem,5.2vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-fg"
            >
              Hi, I&apos;m {site.name}. I build secure, real-time web
              applications.
            </h1>

            <p
              data-reveal
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              I work on AI-integrated SaaS products at {site.company} -
              authentication, role-based dashboards and real-time features with{" "}
              <span className="text-fg">React, Next.js and FastAPI</span>.
            </p>

            <div data-reveal className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#projects">
                View projects
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </ButtonLink>
              <ButtonLink
                href={site.resume}
                variant="secondary"
                download="Al-Amin-Resume.pdf"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download resume
              </ButtonLink>
            </div>

            <div
              data-reveal
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-6 text-sm text-muted"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" aria-hidden />
                {site.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full bg-emerald-500"
                  aria-hidden
                />
                {site.availability}
              </span>
              <SocialLinks className="-ml-2.5 sm:ml-auto" />
            </div>
          </Reveal>

          <Reveal immediate delay={0.15} className="order-1 flex justify-center md:order-2 md:block">
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-line bg-subtle sm:h-36 sm:w-36 md:h-72 md:w-64 lg:h-80 lg:w-72">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, 144px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
