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
          <p>Feito com cuidado — como cada pudim.</p>
        </div>
      </Container>
    </footer>
  );
}


