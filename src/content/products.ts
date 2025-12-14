export type ProductItem = {
  name: string;
  description: string;
  /**
   * Referência (opcional): deixamos como texto para facilitar ajustes depois.
   * Ex.: "a partir de R$ 00" ou "sob consulta".
   */
  priceNote?: string;
  /**
   * Caminho de imagem local (opcional).
   * Ex.: "/assets/produtos/mini-01.webp"
   * Será preenchido quando os assets forem copiados para public/assets/.
   */
  imageSrc?: string;
};

export type ProductCategory = {
  id: "mini" | "pequeno" | "medio" | "grande";
  title: string;
  subtitle: string;
  items: ProductItem[];
};

/**
 * Importante:
 * - Sem e-commerce (sem carrinho/checkout)
 * - Preços apenas como referência (opcional)
 * - Conteúdo pode ser refinado assim que o cardápio real estiver em assets
 */
export const productCategories: ProductCategory[] = [
  {
    id: "mini",
    title: "Mini / Individual",
    subtitle: "Um momento só seu — preciso, delicado e memorável.",
    items: [
      {
        name: "Pudim Individual (clássico)",
        description:
          "Textura extremamente cremosa, caramelo elegante e finalização impecável — perfeito para uma pausa sofisticada.",
        priceNote: "Consultar disponibilidade",
        imageSrc: "/assets/produto-mini.jpg",
      },
    ],
  },
  {
    id: "pequeno",
    title: "Pequeno",
    subtitle: "Para compartilhar a dois — sem pressa, com ritual.",
    items: [
      {
        name: "Pudim Pequeno (clássico)",
        description:
          "Equilíbrio de doçura e cremosidade, com caramelo sedoso e aroma aconchegante.",
        priceNote: "Consultar disponibilidade",
        imageSrc: "/assets/produto-pequeno.jpg",
      },
    ],
  },
  {
    id: "medio",
    title: "Médio",
    subtitle: "O tamanho do encontro — a mesa vira ocasião.",
    items: [
      {
        name: "Pudim Médio (clássico)",
        description:
          "Corte limpo, brilho elegante e derreter lento. Ideal para receber com estilo.",
        priceNote: "Consultar disponibilidade",
        imageSrc: "/assets/produto-medio.jpg",
      },
    ],
  },
  {
    id: "grande",
    title: "Grande",
    subtitle: "Quando você quer impressionar — por inteiro.",
    items: [
      {
        name: "Pudim Grande (clássico)",
        description:
          "Presença de sobremesa de celebração: textura impecável, caramelo profundo e acabamento premium.",
        priceNote: "Consultar disponibilidade",
        imageSrc: "/assets/produto-grande.jpg",
      },
    ],
  },
];


