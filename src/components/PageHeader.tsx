import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("pt-12 sm:pt-16", className)}>
      <Container>
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow ? (
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}


