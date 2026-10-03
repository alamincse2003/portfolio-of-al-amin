import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import type { ComponentType } from "react";
import { socials } from "../../data/site";
import type { SocialLink } from "../../types";

const icons: Record<SocialLink["label"], ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: Mail,
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {socials.map(({ label, href }) => {
        const Icon = icons[label];
        const external = !href.startsWith("mailto:");
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={external ? `${label} (opens in a new tab)` : label}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-subtle hover:text-fg"
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
