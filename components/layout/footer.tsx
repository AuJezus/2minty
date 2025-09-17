import Link from "next/link";
import Logo from "@/public/logo/2minty-logo.svg";
import { navItems } from "@/config/config";

export function Footer() {
  return (
    <footer className="bg-primary/65 text-primary-foreground px-20 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <Link href="/" className="mb-8">
          <Logo />
        </Link>

        <ul className="mb-20 flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-primary-foreground/80 text-primary-foreground text-sm font-semibold transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-primary-foreground/20 mb-8 w-full border-t" />

        <p className="self-start">© 2025 2minty. Visos teisės saugomos.</p>
      </div>
    </footer>
  );
}
