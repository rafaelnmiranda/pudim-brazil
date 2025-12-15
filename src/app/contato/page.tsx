import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { getWhatsAppLink, WHATSAPP_PHONE_FORMATTED } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Pudim Brazil. Pedidos e atendimento exclusivamente via WhatsApp.",
};

export default function ContatoPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contato"
        title="Pedidos exclusivamente via WhatsApp."
        subtitle="Sem formulário, sem complicação — atendimento direto, com o mesmo cuidado do produto."
        align="center"
      />

      <Section spacing="airy">
        <Container className="max-w-4xl">
          <div className="rounded-[2.5rem] border border-border bg-background p-8 text-center sm:p-12">
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              WhatsApp
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block font-serif text-3xl tracking-tight sm:text-4xl hover:text-gold transition-colors cursor-pointer"
            >
              {WHATSAPP_PHONE_FORMATTED}
            </a>
            <p className="mt-4 text-base leading-8 text-muted">
              Clique abaixo para consultar sabores, tamanhos e agenda de
              entregas.
            </p>

            <div className="mt-8 flex justify-center">
              <ButtonLink href={getWhatsAppLink()} variant="secondary" size="lg">
                Pedir pelo WhatsApp
              </ButtonLink>
            </div>

            <p className="mt-6 text-xs leading-6 text-muted">
              Ao clicar, você será direcionado para o WhatsApp com uma mensagem
              pronta.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}


