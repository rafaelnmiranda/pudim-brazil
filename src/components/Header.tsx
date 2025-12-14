"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { getWhatsAppLink } from "@/lib/whatsapp";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/a-marca", label: "A Marca" },
  { href: "/fundadores", label: "Fundadores & História" },
  { href: "/produtos", label: "Produtos" },
  { href: "/experiencia", label: "A Experiência" },
  { href: "/contato", label: "Contato" },
] as const;

type HeaderProps = {
  logo?: string | null;
};

export function Header({ logo }: HeaderProps) {
  const [open, setOpen] = useState(false);

  // Pequeno refinamento: trava scroll quando o menu mobile está aberto.
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2"
          aria-label="Pudim Brazil"
        >
          {logo && typeof logo === "string" && !logo.includes("placeholder") ? (
            <Image
              src={logo}
              alt="Pudim Brazil"
              width={180}
              height={60}
              className="h-12 w-auto object-contain sm:h-14"
              priority
            />
          ) : (
            <>
              <span className="font-[var(--font-serif)] text-lg tracking-tight text-foreground">
                Pudim Brazil
              </span>
              <span className="hidden text-xs text-muted sm:inline">
                artesanal premium
              </span>
            </>
          )}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium",
              "bg-gold text-ink hover:bg-gold/90 transition-colors",
            )}
          >
            Pedir pelo WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className={cn(
            "md:hidden inline-flex h-11 items-center justify-center rounded-full px-4",
            "border border-border text-foreground hover:bg-foreground/5 transition-colors",
          )}
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      {/* Menu Mobile */}
      {open ? (
        <div className="md:hidden fixed inset-0 z-50 bg-background/70 backdrop-blur">
          <div className="absolute inset-x-0 top-0 border-b border-border bg-background">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
              {logo && typeof logo === "string" && !logo.includes("placeholder") ? (
                <Image
                  src={logo}
                  alt="Pudim Brazil"
                  width={150}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <span className="font-[var(--font-serif)] text-lg tracking-tight">
                  Pudim Brazil
                </span>
              )}
              <button
                type="button"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-full px-4",
                  "border border-border text-foreground hover:bg-foreground/5 transition-colors",
                )}
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
              >
                Fechar
              </button>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8">
            <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-foreground hover:text-foreground/80 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-medium",
                    "bg-gold text-ink hover:bg-gold/90 transition-colors",
                  )}
                >
                  Pedir pelo WhatsApp
                </a>
                <p className="mt-3 text-xs text-muted">
                  Atendimento e pedidos exclusivamente via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}


