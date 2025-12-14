import Link from "next/link";
import { Container } from "@/components/Container";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <p className="font-[var(--font-serif)] text-lg tracking-tight">
              Pudim Brazil
            </p>
            <p className="text-sm text-muted leading-7">
              Um pedaço do céu em forma de pudim — artesanal, sofisticado e
              cuidadosamente entregue.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Navegação</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-muted hover:text-foreground" href="/a-marca">
                  A Marca
                </Link>
              </li>
              <li>
                <Link className="text-muted hover:text-foreground" href="/fundadores">
                  Fundadores & História
                </Link>
              </li>
              <li>
                <Link className="text-muted hover:text-foreground" href="/produtos">
                  Produtos
                </Link>
              </li>
              <li>
                <Link className="text-muted hover:text-foreground" href="/experiencia">
                  A Experiência
                </Link>
              </li>
              <li>
                <Link className="text-muted hover:text-foreground" href="/contato">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-foreground">Pedidos</p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gold px-6 text-sm font-medium text-ink hover:bg-gold/90 transition-colors"
            >
              Pedir pelo WhatsApp
            </a>
            <p className="text-xs text-muted leading-6">
              Não trabalhamos com e-commerce. Atendimento e vendas exclusivamente
              via WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Pudim Brazil. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/pudimbrazil/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              aria-label="Siga-nos no Instagram"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>@pudimbrazil</span>
            </a>
            <p>Feito com cuidado — como cada pudim.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}


