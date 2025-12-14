import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Fundadores & História",
  description:
    "Conheça a história de Marcelo e Louise, fundadores da Pudim Brazil: do sonho de uma loja física à adaptação para o online durante a pandemia, os desafios enfrentados e a evolução até se tornar uma marca premium com valores de sustentabilidade.",
};

export default function FundadoresPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Fundadores & História"
        title="A cozinha mudou a nossa vida"
        subtitle="Marcelo e Louise transformaram um sonho, uma receita de família e muita determinação na Pudim Brazil — uma história de resiliência que começou em 2020."
      />

      <Section>
        <Container className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              O sonho original: uma loja física
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Marcelo trabalhava como produtor de eventos. Louise estudava
              enfermagem e também atuava na área de eventos. O casal queria sair
              da zona de conforto e tinha um plano: a receita de pudim de leite
              da Louise, sempre elogiada por amigos que provavam em casa, era
              sua "mina de ouro". O objetivo era juntar dinheiro por um ano para
              abrir uma loja física em 2020.
            </p>

            <h3 className="mt-10 font-serif text-xl tracking-tight">
              A pandemia: um balde de água fria que virou oportunidade
            </h3>
            <p className="mt-3 text-base leading-8 text-muted">
              Quando a pandemia chegou, tudo mudou. Marcelo perdeu o emprego, e
              os planos de economizar se tornaram impossíveis — o pouco que
              tinham foi usado para sobreviver. O que parecia uma derrota, no
              entanto, se transformou na decisão mais acertada: três meses
              depois, o casal recuperou a coragem e decidiu adaptar o sonho. Em
              vez de uma loja física, nasceu a <strong>Pudim Brazil</strong>{" "}
              como loja online.
            </p>

            <h3 className="mt-10 font-serif text-xl tracking-tight">
              Os primeiros passos: do apartamento para o mundo
            </h3>
            <p className="mt-3 text-base leading-8 text-muted">
              Tudo começou em um apartamento de 85 metros quadrados, com apenas
              um forno residencial e algumas formas. O primeiro pudim entrando no
              forno marcou o início de um sonho movido por uma emergência de
              sobrevivência. Amigos começaram a fazer pedidos e a compartilhar
              fotos nas redes sociais. Amigos de amigos também viraram clientes.
              Rapidamente, a Pudim Brazil se tornou o ganha-pão do casal.
            </p>

            <h3 className="mt-10 font-serif text-xl tracking-tight">
              A rápida ascensão e os desafios
            </h3>
            <p className="mt-3 text-base leading-8 text-muted">
              As vendas cresceram rápido, mas os desafios também. Uma geladeira
              de exposição foi instalada no quarto de hóspedes para armazenar a
              grande quantidade de pudins. O apartamento ficou completamente
              consumido pelo negócio. Os dias eram longos: trabalhavam das 6h da
              manhã até as 2h da madrugada, com apenas um forno para atender a
              alta demanda. Os motoboys às vezes não davam conta de todas as
              entregas, e a chuva muitas vezes impedia contratar entregadores
              adicionais. Sem carro, Marcelo e Louise entregavam pessoalmente,
              a pé, de ônibus ou de metrô.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              Apesar dos momentos difíceis e exaustivos, a resiliência e a
              determinação do casal foram fundamentais para continuar em busca do
              objetivo maior.
            </p>

            <h3 className="mt-10 font-serif text-xl tracking-tight">
              Hoje: uma fábrica estruturada, a mesma essência
            </h3>
            <p className="mt-3 text-base leading-8 text-muted">
              Atualmente, a Pudim Brazil opera em uma fábrica de 60 metros
              quadrados, localizada perto da Avenida Paulista. A operação conta
              com sete motoboys dedicados e também utiliza aplicativos de entrega.
              O casal ainda usa o próprio carro ocasionalmente para entregas
              urgentes ou específicas. Mas a essência permanece a mesma: cada
              pudim carrega a intenção do primeiro — entregar algo que os
              clientes descrevem como "um pedacinho do céu".
            </p>

            <h3 className="mt-10 font-serif text-xl tracking-tight">
              O detalhe faz a diferença: valores que guiam
            </h3>
            <p className="mt-3 text-base leading-8 text-muted">
              Desde o início, Marcelo e Louise tinham objetivos claros: oferecer
              o melhor sabor, garantir a melhor apresentação do produto e
              minimizar o impacto ambiental — tanto na produção quanto nas
              operações diárias e nas escolhas de embalagem. Por isso, rejeitaram
              formas de plástico para entregas e optaram por{" "}
              <strong>formas de alumínio reutilizáveis</strong>. Para eles, cuidar
              do planeta é equivalente a cuidar de si mesmos e dos entes queridos
              — uma forma de reverter, ao menos um pouco, os danos causados ao
              mundo.
            </p>
          </div>

          <div className="md:col-span-5">
            {/* Placeholder para fotos reais do casal (quando assets forem copiados). */}
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-background">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={media.founders || "/assets/photo-placeholder.svg"}
                    alt="Marcelo e Louise, fundadores da Pudim Brazil"
                    fill
                    className="object-cover object-bottom"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </div>
                <div className="absolute inset-0 grid place-items-end p-6">
                  <div className="rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur">
                    <p className="text-xs tracking-[0.28em] uppercase text-muted">
                      Foto do casal
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      Marcelo e Louise
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-background p-6">
                <p className="text-xs tracking-[0.28em] uppercase text-muted">
                  Frase da marca
                </p>
                <p className="mt-4 font-serif text-xl leading-8 tracking-tight">
                  "Pedacinho do céu em forma de pudim."
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Como nossos clientes descrevem cada pudim que entregamos — um
                  clássico brasileiro lapidado em textura, ponto e detalhe, para
                  virar lembrança.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--pb-wine)_7%,transparent))]">
        <Container className="rounded-[2.5rem] border border-border bg-background p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
                Quer consultar a agenda e fazer seu pedido?
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                A gente te orienta sobre sabores, tamanhos e disponibilidade. O
                atendimento é tão cuidadoso quanto a entrega.
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
