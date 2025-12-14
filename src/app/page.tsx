import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { media } from "@/content/media";

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
              },
              {
                title: "Preparação",
                desc: "Produção artesanal, com controle de textura e acabamento.",
              },
              {
                title: "Entrega",
                desc: "Chega com cuidado, estabilidade e apresentação impecável.",
              },
              {
                title: "Momento",
                desc: "Desenforme com as instruções e viva a experiência completa.",
              },
            ].map((step, idx) => (
              <div
                key={step.title}
                className="rounded-3xl border border-border bg-background p-6"
              >
                <p className="text-xs tracking-[0.28em] uppercase text-muted">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-medium">{step.title}</p>
                <p className="mt-2 text-sm leading-7 text-muted">{step.desc}</p>
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
              <div className="relative aspect-[4/3]">
                <Image
                  src={media.founders || "/assets/photo-placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover object-top"
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
            {[
              { title: "Mini / Individual", note: "Para um momento só seu." },
              { title: "Pequeno", note: "Perfeito para compartilhar a dois." },
              { title: "Médio", note: "Para encontros especiais." },
              { title: "Grande", note: "A mesa vira um evento." },
            ].map((card) => (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-3xl border border-border bg-background p-6"
              >
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src={media.product || "/assets/product-placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover opacity-[0.18]"
                    sizes="(min-width: 768px) 25vw, 100vw"
                    aria-hidden="true"
                  />
                </div>
                <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(color-mix(in_oklab,var(--pb-gold)_26%,transparent)_1px,transparent_1px)] [background-size:18px_18px]" />
                <div className="relative">
                  <p className="font-medium">{card.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {card.note}
                  </p>
                </div>
              </div>
            ))}
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
