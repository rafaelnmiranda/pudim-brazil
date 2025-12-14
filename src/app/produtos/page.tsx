import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { productCategories } from "@/content/products";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Conheça os tamanhos e categorias da Pudim Brazil. Vitrine institucional (sem e-commerce). Pedidos via WhatsApp.",
};

export default function ProdutosPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Produtos"
        title="Uma vitrine para escolher com calma."
        subtitle="Aqui você encontra as categorias e tamanhos. Para sabores, agenda e disponibilidade, o pedido é feito exclusivamente via WhatsApp."
      />

      {productCategories.map((cat) => (
        <Section key={cat.id}>
          <Container className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.28em] uppercase text-muted">
                {cat.title}
              </p>
              <h2 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
                {cat.subtitle}
              </h2>

              <div className="mt-7">
                <ButtonLink href={getWhatsAppLink()} variant="secondary">
                  Consultar e pedir pelo WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {cat.items.map((p) => (
                  <div
                    key={p.name}
                    className="overflow-hidden rounded-3xl border border-border bg-background"
                  >
                    {/* Placeholder de mídia: preencha imageSrc quando os assets chegarem */}
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={p.imageSrc ?? media.product}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 50vw, 100vw"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="p-6">
                      <p className="font-medium">{p.name}</p>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {p.description}
                      </p>
                      {p.priceNote ? (
                        <p className="mt-4 text-xs tracking-[0.22em] uppercase text-muted">
                          {p.priceNote}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section spacing="airy" className="bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--pb-gold)_10%,transparent))]">
        <Container className="rounded-[2.5rem] border border-border bg-background p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
                Sabores e agenda mudam — consulte no WhatsApp.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                A gente confirma disponibilidade, prazo e entrega, com toda a
                orientação para você receber impecável.
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


