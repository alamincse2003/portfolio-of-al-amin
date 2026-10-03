import Container from "./ui/Container";
import SocialLinks from "./ui/SocialLinks";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.title}
        </p>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <a href="#top" className="rounded-lg px-2 py-2 transition-colors hover:text-fg">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
