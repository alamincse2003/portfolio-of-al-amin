import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:bg-accent-hover",
  secondary: "border border-line-strong bg-surface text-fg hover:border-fg/40 hover:bg-subtle",
  ghost: "text-muted hover:text-fg hover:bg-subtle",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: "sm" | "md";
  external?: boolean;
  children: ReactNode;
};

export default function ButtonLink({
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const sizing = size === "sm" ? "h-9 px-3.5 text-sm" : "h-11 px-5 text-[15px]";
  return (
    <a
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 ${sizing} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
