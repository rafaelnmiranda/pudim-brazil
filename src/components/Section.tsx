import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  /**
   * Espaçamento vertical “cinematográfico”: bastante respiro, sem ficar vazio demais no mobile.
   */
  spacing?: "tight" | "default" | "airy";
};

export function Section({
  className,
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        spacing === "tight" && "py-10 sm:py-14",
        spacing === "default" && "py-16 sm:py-24",
        spacing === "airy" && "py-20 sm:py-32",
        className,
      )}
      {...props}
    />
  );
}


