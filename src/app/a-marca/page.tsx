import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "A Marca",
  description:
    "Elegância, sofisticação e cuidado extremo: conheça os valores e a visão por trás da Pudim Brazil.",
};

export default function AMarcaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="A Marca"
        title="Sofisticação que começa no detalhe."
        subtitle="Pudim Brazil é a tradução de um clássico brasileiro em linguagem premium: artesanal, elegante e memorável — do primeiro olhar ao último pedaço."
      />

      <Section>
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              O que a gente acredita
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              A excelência não está em “fazer mais”, e sim em fazer melhor: a
              textura certa, o caramelo no ponto, o brilho no acabamento, a
              embalagem impecável e a entrega cuidadosa. Cada etapa existe para
              criar uma experiência sensorial completa — e uma lembrança boa de
              repetir.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              A Pudim Brazil nasceu artesanal e permanece artesanal. Só que com
              um padrão de apresentação e consistência que aproxima o clássico
              do extraordinário.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-border bg-background p-6">
              <p className="text-xs tracking-[0.28em] uppercase text-muted">
                Valores
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "Elegância e simplicidade bem resolvida",
                  "Cuidado extremo com detalhes",
                  "Apresentação impecável",
                  "Artesanal premium e consistente",
                  "Sustentabilidade (forma reutilizável)",
                ].map((v) => (
                  <li key={v} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                    <span className="text-foreground">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--pb-gold)_9%,transparent))]">
        <Container className="rounded-[2.5rem] border border-border bg-background p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
                Pedido exclusivo via WhatsApp
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                Consulte sabores, tamanhos e agenda de entregas. A experiência
                começa no atendimento — com o mesmo cuidado do produto.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <ButtonLink href={getWhatsAppLink()} variant="secondary" size="lg">
                Pedir pelo WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}


