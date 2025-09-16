import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export function LinkChevron({
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link {...props} className={cn("flex items-center gap-2", props.className)}>
      {children}
      <ChevronRightIcon className="size-4" />
    </Link>
  );
}
