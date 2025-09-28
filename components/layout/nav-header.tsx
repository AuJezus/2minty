"use client";

import useScrollUp from "@/lib/hooks/use-scroll-up";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import type { HTMLAttributes } from "react";
import Logo from "@/public/logo/2minty-logo.svg";
import { navItems, registerFormUrl } from "@/config/config";
import { Button } from "../ui/button";

export function NavLogo({
  className,
  ...props
}: HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="/"
      className={cn("flex w-[8.5rem] items-center", className)}
      {...props}
    >
      <Logo />
    </Link>
  );
}

function NavLinks({
  isDesktop = true,
  onClick,
}: {
  isDesktop?: boolean;
  onClick?: () => void;
}) {
  if (isDesktop)
    return (
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="hover:text-accent-foreground/80 font-quicksand text-accent-foreground text-base transition-colors"
              onClick={onClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Button pgName="nav_register" asChild>
            <Link href={registerFormUrl}>Registruotis</Link>
          </Button>
        </li>
      </ul>
    );

  return (
    <ul className="flex flex-col items-center gap-8">
      {navItems.map((link) => (
        <li
          className="hover:text-accent-foreground/80 font-quicksand text-accent-foreground text-xl font-bold transition-colors"
          key={link.label}
        >
          <Link href={link.href} onClick={onClick}>
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <Button pgName="nav_register" asChild>
          <Link href={registerFormUrl}>Registruotis</Link>
        </Button>
      </li>
    </ul>
  );
}

export function NavHeader() {
  const isScrollUp = useScrollUp();
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const isHeroInView = useIntersectionObserver("hero");

  const [open, setOpen] = useState(false);

  if (isMobile)
    return (
      <header className="fixed top-0 z-20">
        <nav>
          <Drawer open={open} onOpenChange={setOpen} direction="right">
            <DrawerTrigger className="flex w-screen justify-end p-2 sm:p-4">
              <div
                className={cn(
                  "rounded-lg bg-transparent p-1 transition-colors",
                  !isHeroInView && "bg-accent",
                )}
              >
                <MenuIcon className="text-accent-foreground size-9" />
              </div>
            </DrawerTrigger>

            <DrawerContent className="bg-accent font-quicksand text-accent-foreground">
              <DrawerClose>
                <XIcon className="size-9" />
              </DrawerClose>

              <DrawerTitle className="hidden">2minty</DrawerTitle>

              <DrawerHeader className="flex flex-col items-center gap-2">
                <NavLogo className="w-32" onClick={() => setOpen(false)} />

                <DrawerDescription className="font-quicksand text-accent-foreground text-lg">
                  Iš „neaišku“ į „moku!“
                </DrawerDescription>
              </DrawerHeader>

              <div className="mx-auto my-auto">
                <NavLinks onClick={() => setOpen(false)} isDesktop={false} />
              </div>

              <DrawerFooter className="font-quicksand text-accent-foreground text-center text-base">
                <p>© 2025 2minty. Visos teisės saugomos.</p>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </nav>
      </header>
    );

  return (
    <>
      <header
        className={cn(
          "sticky top-0 left-0 z-20 h-[4.875rem] w-full transition-transform hover:translate-y-0",
          isScrollUp ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <nav className={cn("bg-accent w-full px-16 py-4")}>
          <div className="mx-auto flex max-w-[90rem] items-center justify-between">
            <NavLogo className="text-accent-foreground" />

            <NavLinks />
          </div>
        </nav>
      </header>

      <div
        className="bg-accent absolute top-0 left-0 z-10 h-[4.875rem] w-full"
        aria-hidden="true"
      />
    </>
  );
}
