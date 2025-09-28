import { cn } from "@/lib/utils";

export function HomeSection({
  innerClassName,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  innerClassName?: string;
}) {
  return (
    <section
      {...props}
      className={cn(
        "bg-background px-5 py-16 sm:px-8 md:px-14 md:py-16 lg:px-20 lg:py-28",
        props.className,
      )}
    >
      <div className={cn("mx-auto max-w-7xl", innerClassName)}>{children}</div>
    </section>
  );
}
