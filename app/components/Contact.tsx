import { Mail, MapPin } from "lucide-react";
import Container from "./ui/Container";
import ButtonLink from "./ui/ButtonLink";
import SocialLinks from "./ui/SocialLinks";
import CopyEmail from "./CopyEmail";
import Reveal from "./Reveal";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-28">
      <Container>
        <Reveal className="rounded-2xl border border-line bg-surface px-6 py-12 text-center sm:px-12 sm:py-16">
          <p
            data-reveal
            className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent-text"
          >
            Contact
          </p>
          <h2 id="contact-title" data-reveal className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p data-reveal className="mx-auto mt-4 max-w-lg leading-relaxed text-muted sm:text-lg">
            I&apos;m open to full-time roles, remote or on-site, and selected freelance projects. Email is the
            fastest way to reach me — I usually reply within 24 hours.
          </p>

          <div data-reveal className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={`mailto:${site.email}`}>
              <Mail className="h-4 w-4" aria-hidden />
              Email me
            </ButtonLink>
            <CopyEmail email={site.email} />
          </div>

          <div
            data-reveal
            className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-muted sm:flex-row sm:gap-6"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden />
              {site.location}
            </span>
            <SocialLinks />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
