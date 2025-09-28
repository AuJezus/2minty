import Link from "next/link";
import { navItems } from "@/config/config";
import { NavLogo } from "./nav-header";
import { Typography } from "../ui/typography";

export function Footer() {
  return (
    <footer className="bg-primary/65 text-primary-foreground px-5 py-16 sm:px-8 md:px-14 md:py-16 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <NavLogo className="mb-8 w-32 sm:w-[8.5rem]" />

        <ul className="mb-20 flex flex-col flex-wrap items-center justify-center gap-8 sm:flex-row">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-primary-foreground/80 text-primary-foreground text-xl font-semibold whitespace-nowrap transition-colors sm:text-lg lg:text-sm"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-primary-foreground/20 mb-8 w-full border-t" />

        <Typography as="p" variant="base" className="self-start">
          © 2025 2minty. Visos teisės saugomos.
        </Typography>
      </div>
    </footer>
  );
}
