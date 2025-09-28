import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-bree text-5xl sm:text-6xl xl:text-7xl",
      h2: "font-bree text-5xl",
      h3: "font-bree text-[2.75rem] leading-[1.2] tracking-[-1%]",
      h4: "font-bree text-2xl xl:text-3xl",
      h5: "font-bree text-2xl",
      tagline: "font-base font-semibold",
      lg: "text-base xl:text-lg",
      base: "text-base ",
    },
  },
  defaultVariants: {
    variant: "lg",
  },
});

export function Typography({
  className,
  variant,
  as: Component = "h1",
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof typographyVariants> & {
    as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }) {
  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
}
