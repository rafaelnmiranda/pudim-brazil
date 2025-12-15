import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { media } from "@/content/media";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { productCategories } from "@/content/products";
import { InstagramEmbed } from "@/components/InstagramEmbed";

export default function Home() {
  return (
    <div className="font-sans">
      {/* HERO */}
      <section className="relative min-h-[92svh] overflow-hidden">
        {/* Hero visual: usa um asset local (public/assets). Se ainda não houver fotos, cai no placeholder. */}
        <div className="absolute inset-0 z-0">
          <Image
            src={media.hero || "/assets/hero-placeholder.svg"}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-[radial-gradient(1100px_circle_at_30%_10%,color-mix(in_oklab,var(--pb-gold)_22%,transparent)_0%,transparent_55%),radial-gradient(900px_circle_at_70%_35%,color-mix(in_oklab,var(--pb-wine)_18%,transparent)_0%,transparent_60%),linear-gradient(180deg,color-mix(in_oklab,var(--pb-paper)_40%,transparent),color-mix(in_oklab,var(--pb-paper)_70%,var(--pb-cocoa)_5%))]" />
        <div className="absolute inset-0 z-10 opacity-[0.07] [background-image:radial-gradient(var(--pb-ink)_1px,transparent_1px)] [background-size:14px_14px]" />

        <Container className="relative z-20 flex min-h-[92svh] items-center py-16">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              Pudins artesanais premium
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.02em] sm:text-6xl motion-safe:animate-[pbFadeUp_900ms_ease-out_both]">
              Um pedaço do céu
              <span className="block text-gold">em forma de pudim</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg motion-safe:animate-[pbFadeUp_1100ms_ease-out_both]">
              Sofisticação, sabor e cuidado extremo em cada detalhe — do pedido
              à entrega, da apresentação ao primeiro corte.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center motion-safe:animate-[pbFadeUp_1300ms_ease-out_both]">
              <ButtonLink href={getWhatsAppLink()} variant="primary" size="lg">
                Pedir pelo WhatsApp
              </ButtonLink>
              <p className="text-sm text-muted">
                Vendas exclusivamente via WhatsApp.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* APRESENTAÇÃO */}
      <Section>
        <Container className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              A elegância do artesanal — com padrão de alta confeitaria.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              A Pudim Brazil nasceu em 2020, quando uma receita simples virou um
              ritual de cuidado. Hoje, cada pudim entrega uma experiência
              sensorial completa: textura extremamente cremosa, acabamento
              impecável e uma presença que impressiona antes mesmo da primeira
              colherada.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-border bg-background p-6">
              <p className="text-xs tracking-[0.28em] uppercase text-muted">
                O que você recebe
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                  Textura cremosa e equilibrada
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                  Embalagem dourada e apresentação premium
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                  Forma de alumínio reutilizável
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                  Instruções exclusivas para desenformar
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* EXPERIÊNCIA (pipeline) */}
      <Section className="bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--pb-gold)_8%,transparent))]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              A experiência Pudim Brazil
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
              Do pedido à mesa, tudo é pensado para impressionar.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              {
                title: "Pedido",
                desc: "Você consulta sabores, tamanhos e agenda via WhatsApp.",
                image: "/assets/produto-mini.jpg",
              },
              {
                title: "Preparação",
                desc: "Produção artesanal, com controle de textura e acabamento.",
                image: "/assets/produto-pequeno.jpg",
              },
              {
                title: "Entrega",
                desc: "Chega com cuidado, estabilidade e apresentação impecável.",
                image: "/assets/produto-medio.jpg",
              },
              {
                title: "Momento",
                desc: "Desenforme com as instruções e viva a experiência completa.",
                image: "/assets/produto-grande.jpg",
              },
            ].map((step, idx) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-3xl border border-border bg-background p-6"
              >
                <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(color-mix(in_oklab,var(--pb-gold)_26%,transparent)_1px,transparent_1px)] [background-size:18px_18px]" />
                <div className="relative">
                  <p className="text-xs tracking-[0.28em] uppercase text-muted">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 font-medium">{step.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{step.desc}</p>
                </div>
                {step.image && (
                  <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={step.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 25vw, 100vw"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* DIFERENCIAIS */}
      <Section>
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.28em] uppercase text-muted">
                Diferenciais
              </p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                Premium de verdade: no sabor, no toque e no cuidado.
              </h2>
            </div>
            <ButtonLink href={getWhatsAppLink()} variant="secondary">
              Consultar pelo WhatsApp
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Receita autoral",
                desc: "Equilíbrio entre doçura, textura e perfume — assinatura Pudim Brazil.",
              },
              {
                title: "Cremosidade extrema",
                desc: "A colher entra macia, o corte é limpo e o derreter é lento.",
              },
              {
                title: "Embalagem dourada",
                desc: "Apresentação impecável, pronta para presentear (ou se presentear).",
              },
              {
                title: "Forma reutilizável",
                desc: "Alumínio resistente, pensado para reutilização e sustentabilidade.",
              },
              {
                title: "Entrega cuidadosa",
                desc: "Proteção, estabilidade e orientação para chegar perfeito até você.",
              },
              {
                title: "Desenformar sem medo",
                desc: "Instruções exclusivas para o “momento do reveal” ser impecável.",
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

      {/* TEASER HISTÓRIA */}
      <Section className="bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--pb-wine)_6%,transparent))]">
        <Container className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              Fundadores & História
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
              Tudo começou em casa — e virou uma marca premium.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Em 2020, um casal transformou um pudim em um gesto de afeto,
              lapidado com técnica e detalhe. O que era simples ficou memorável —
              e hoje a Pudim Brazil carrega essa mesma essência em cada entrega.
            </p>
            <div className="mt-8">
              <ButtonLink href="/fundadores" variant="ghost" size="lg">
                Conhecer a história
              </ButtonLink>
            </div>
          </div>

          <div className="md:col-span-6">
            {/* Placeholder de imagem: substituiremos por foto real do casal em public/assets/ */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-background">
              <div className="relative aspect-[3/4]">
                <Image
                  src={media.founders || "/assets/photo-placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover object-bottom"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* PRODUTOS (vitrine visual) */}
      <Section>
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.28em] uppercase text-muted">
                Produtos
              </p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                Tamanhos pensados para cada ocasião.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                Mini/Individual, pequeno, médio e grande — todos com a mesma
                assinatura: textura cremosa, caramelo elegante e acabamento
                impecável.
              </p>
            </div>
            <ButtonLink href="/produtos" variant="ghost" size="lg">
              Ver produtos
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {productCategories.map((category) => {
              const productImage = category.imageSrc || media.product || "/assets/product-placeholder.svg";
              return (
                <div
                  key={category.id}
                  className="relative overflow-hidden rounded-3xl border border-border bg-background"
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={productImage}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 25vw, 100vw"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-6">
                    <p className="font-medium">{category.title}</p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CARROSSEL DE FOTOS */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              Galeria
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
              Momentos especiais em cada pudim.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Cada criação é única, cada apresentação é pensada para impressionar.
            </p>
          </div>

          <div className="mt-10">
            <PhotoCarousel
              images={[
                {
                  src: "/assets/carrossel-01.jpeg",
                  alt: "Pudim Brazil - Momentos especiais",
                },
                {
                  src: "/assets/carrossel-02.jpeg",
                  alt: "Pudim Brazil - Apresentação impecável",
                },
                {
                  src: "/assets/carrossel-03.jpeg",
                  alt: "Pudim Brazil - Textura cremosa",
                },
                {
                  src: "/assets/carrossel-04.jpeg",
                  alt: "Pudim Brazil - Experiência única",
                },
                {
                  src: "/assets/carrossel-05.jpeg",
                  alt: "Pudim Brazil - Tradição e qualidade",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* INSTAGRAM */}
      <Section className="bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--pb-gold)_12%,transparent))]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              Instagram
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
              Siga-nos no Instagram
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Acompanhe nossos pudins, momentos especiais e novidades em tempo real. 
              Veja nossos produtos, depoimentos e a paixão que colocamos em cada criação.
            </p>
            <div className="mt-8">
              <a
                href="https://www.instagram.com/pudimbrazil/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-gold bg-background px-8 text-sm font-medium text-foreground hover:bg-gold/10 transition-all hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @pudimbrazil
              </a>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-3xl border border-border bg-background shadow-lg hover:shadow-xl transition-shadow">
              <InstagramEmbed url="https://www.instagram.com/p/DKqLys4RgAV/" />
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.instagram.com/pudimbrazil/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <span>Ver mais no Instagram</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </Container>
      </Section>

      {/* CTA FINAL */}
      <Section spacing="airy" className="bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--pb-gold)_10%,transparent))]">
        <Container className="rounded-[2.5rem] border border-border bg-background p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
                Pronto para viver a experiência Pudim Brazil?
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                Fale com a gente no WhatsApp para consultar sabores, tamanhos e a
                agenda de entregas.
              </p>
            </div>
            <div className="md:col-span-5 md:flex md:justify-end">
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
