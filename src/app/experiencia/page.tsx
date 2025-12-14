import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "A Experiência",
  description:
    "Entenda a Experiência Pudim Brazil: pedido, entrega, embalagem dourada, forma reutilizável e instruções para desenformar.",
};

export default function ExperienciaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="A Experiência Pudim Brazil"
        title="Cuidado em cada etapa."
        subtitle="A sofisticação não está só no sabor — está no ritual completo: atendimento, entrega, apresentação, desenformar e o momento à mesa."
      />

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                title: "Como funciona o pedido",
                desc: "Você consulta sabores, tamanhos e a agenda de entregas via WhatsApp. A gente confirma disponibilidade e orienta o melhor formato para a ocasião.",
              },
              {
                title: "Entrega cuidadosa",
                desc: "A logística é pensada para preservar textura e acabamento. O pudim chega estável, protegido e com apresentação impecável.",
              },
              {
                title: "Embalagem dourada",
                desc: "Uma experiência premium começa no olhar: acabamento elegante, pronto para presentear e para chegar bonito à mesa.",
              },
              {
                title: "Forma reutilizável",
                desc: "Alumínio resistente e reutilizável — cuidado com o produto e com o impacto. Sustentabilidade com padrão premium.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-background p-6"
              >
                <p className="font-medium">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--pb-gold)_8%,transparent))]">
        <Container className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Instruções exclusivas para desenformar
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              O desenformar é parte da experiência. Enviamos orientações para
              garantir que o “reveal” seja perfeito: o brilho do caramelo, o
              corte limpo e a textura cremosa preservada.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              Assim que você copiar as artes/folhas de instrução para{" "}
              <span className="font-medium text-foreground">public/assets</span>,
              vamos exibí-las aqui com o mesmo cuidado editorial do restante do
              site.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-background">
              <div className="relative aspect-[4/3]">
                {media.instructions && (
                  <Image
                    src={media.instructions}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 40vw, 100vw"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="absolute inset-0 grid place-items-start p-6">
                <div className="rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs tracking-[0.28em] uppercase text-muted">
                    Arte / instruções aqui
                  </p>
                  <p className="mt-1 text-sm text-foreground">
                    (substituir via assets)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="airy">
        <Container className="rounded-[2.5rem] border border-border bg-background p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
                Quer viver essa experiência?
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                Consulte sabores, tamanhos e disponibilidade no WhatsApp.
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


