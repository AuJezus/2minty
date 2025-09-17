import Link from "next/link";
import Logo from "@/public/logo/2minty-logo.svg";
import { navItems } from "@/config/config";
import posthog from "posthog-js";

function Navbar() {
  return (
    <nav className="bg-accent px-16 py-4" aria-label="Main navigation">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => posthog.capture("navbar_logo_clicked", { href: "/" })}
        >
          <Logo className="text-accent-foreground" />
        </Link>

        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() =>
                  posthog.capture("navbar_link_clicked", {
                    href: item.href,
                    label: item.label,
                  })
                }
                className="hover:text-accent-foreground/80 font-quicksand text-accent-foreground text-base transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export { Navbar };
