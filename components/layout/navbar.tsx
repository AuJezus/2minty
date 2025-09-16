import Link from "next/link";
import Logo from "@/public/logo/2minty-logo.svg";

const navItems = [
  { label: "Apie Mus", href: "#about" },
  { label: "Komanda", href: "#team" },
  { label: "Online Pamokos", href: "#lessons" },
  { label: "Atsiliepimai", href: "#reviews" },
  { label: "Kontaktai", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="bg-accent px-16 py-4" aria-label="Main navigation">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="text-accent-foreground" />
        </Link>

        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
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
