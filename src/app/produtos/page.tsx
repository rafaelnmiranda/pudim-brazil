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
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              {/* Foto do tamanho */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-3xl border border-border bg-background">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={cat.imageSrc ?? media.product ?? "/assets/product-placeholder.svg"}
                      alt={`Pudim ${cat.title}`}
                      fill
                      className="object-cover object-bottom"
                      sizes="(min-width: 1024px) 41.666667vw, 100vw"
                    />
                  </div>
                </div>
              </div>

              {/* Informações e lista de sabores */}
              <div className="lg:col-span-7">
                <div>
                  <p className="text-xs tracking-[0.28em] uppercase text-muted">
                    {cat.title}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
                    {cat.subtitle}
                  </h2>

                  {cat.sizeInfo && (
                    <div className="mt-6 space-y-2 text-sm text-muted">
                      <p>
                        <span className="font-medium">Peso:</span> {cat.sizeInfo.weight}
                      </p>
                      {cat.sizeInfo.slices && (
                        <p>
                          <span className="font-medium">Fatias:</span> {cat.sizeInfo.slices}
                        </p>
                      )}
                      {cat.sizeInfo.dimensions && (
                        <p>
                          <span className="font-medium">Forma:</span>{" "}
                          {cat.sizeInfo.dimensions.diameter}cm × {cat.sizeInfo.dimensions.height}cm
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Lista de sabores */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
                    Sabores disponíveis
                  </h3>
                  <div className="space-y-3">
                    {cat.items.map((p) => (
                      <div
                        key={p.name}
                        className="rounded-2xl border border-border bg-background p-5"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1">
                            <p className="font-medium">{p.name}</p>
                            <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                              {p.flavor}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-muted">
                              {p.description}
                            </p>
                          </div>
                          {p.price && (
                            <div className="flex-shrink-0 sm:ml-4">
                              <p className="text-lg font-medium">
                                R$ {p.price.toFixed(2).replace(".", ",")}
                              </p>
                            </div>
                          )}
                        </div>
                        {p.priceNote && (
                          <p className="mt-3 text-xs tracking-[0.22em] uppercase text-muted">
                            {p.priceNote}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <ButtonLink href={getWhatsAppLink()} variant="secondary">
                    Consultar e pedir pelo WhatsApp
                  </ButtonLink>
                </div>
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


