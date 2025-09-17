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
      className={cn("bg-background px-20 py-28", props.className)}
    >
      <div className={cn("mx-auto max-w-7xl", innerClassName)}>{children}</div>
    </section>
  );
}
