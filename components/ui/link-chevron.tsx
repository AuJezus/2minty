"use client";

import posthog from "posthog-js";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export function LinkChevron({
  pgName,
  children,
  ...props
}: React.ComponentProps<typeof Link> & { pgName?: string }) {
  return (
    <Link
      {...props}
      className={cn(
        "flex items-center gap-2 font-semibold md:font-medium",
        props.className,
      )}
      onClick={() => {
        if (pgName) {
          posthog.capture(`${pgName}_link_clicked`, {
            link_url: props.href,
          });
        }
      }}
    >
      {children}
      <ChevronRightIcon className="size-4" />
    </Link>
  );
}
