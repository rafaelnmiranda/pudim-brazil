export type ProductItem = {
  name: string;
  description: string;
  /**
   * Sabor do pudim
   */
  flavor: string;
  /**
   * Referência (opcional): deixamos como texto para facilitar ajustes depois.
   * Ex.: "a partir de R$ 00" ou "sob consulta".
   */
  priceNote?: string;
  /**
   * Preço de referência (opcional)
   */
  price?: number;
};

export type ProductCategory = {
  id: "mini" | "pequeno" | "medio" | "grande";
  title: string;
  subtitle: string;
  /**
   * Informações gerais da categoria (peso, fatias, dimensões)
   */
  sizeInfo?: {
    weight: string;
    slices?: number;
    dimensions?: {
      diameter: number;
      height: number;
    };
  };
  /**
   * Caminho de imagem local para o tamanho (opcional).
   * Ex.: "/assets/produtos/mini.webp"
   * Será preenchido quando os assets forem copiados para public/assets/.
   */
  imageSrc?: string;
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
    sizeInfo: {
      weight: "150G",
    },
    imageSrc: "/assets/produto-mini.jpg",
    items: [
      {
        name: "Pudim de Leite Condensado Moça",
        flavor: "Leite Condensado Moça",
        description:
          "Textura extremamente cremosa, caramelo elegante e finalização impecável — perfeito para uma pausa sofisticada.",
        price: 25,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Chocolate Belga com Praliné de Castanhas",
        flavor: "Chocolate Belga com Praliné de Castanhas",
        description:
          "Chocolate belga de alta qualidade com crocante de castanhas caramelizadas, criando uma experiência única de texturas.",
        price: 29,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Doce de Leite",
        flavor: "Doce de Leite",
        description:
          "Cremoso e sedoso, com o sabor autêntico do doce de leite brasileiro.",
        price: 29,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Chocolate Branco com Calda de Frutas Vermelhas",
        flavor: "Chocolate Branco com Calda de Frutas Vermelhas",
        description:
          "Delicadeza do chocolate branco harmonizada com a acidez das frutas vermelhas.",
        price: 29,
        priceNote: "Consultar disponibilidade",
      },
    ],
  },
  {
    id: "pequeno",
    title: "Pequeno",
    subtitle: "Para compartilhar a dois — sem pressa, com ritual.",
    sizeInfo: {
      weight: "550G",
      slices: 4,
      dimensions: {
        diameter: 11,
        height: 6,
      },
    },
    imageSrc: "/assets/produto-pequeno.jpg",
    items: [
      {
        name: "Pudim de Leite Condensado Moça",
        flavor: "Leite Condensado Moça",
        description:
          "Equilíbrio de doçura e cremosidade, com caramelo sedoso e aroma aconchegante.",
        price: 75,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Chocolate Belga com Praliné de Castanhas",
        flavor: "Chocolate Belga com Praliné de Castanhas",
        description:
          "Chocolate belga de alta qualidade com crocante de castanhas caramelizadas, criando uma experiência única de texturas.",
        price: 90,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Doce de Leite",
        flavor: "Doce de Leite",
        description:
          "Cremoso e sedoso, com o sabor autêntico do doce de leite brasileiro.",
        price: 90,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Chocolate Branco com Calda de Frutas Vermelhas",
        flavor: "Chocolate Branco com Calda de Frutas Vermelhas",
        description:
          "Delicadeza do chocolate branco harmonizada com a acidez das frutas vermelhas.",
        price: 90,
        priceNote: "Consultar disponibilidade",
      },
    ],
  },
  {
    id: "medio",
    title: "Médio",
    subtitle: "O tamanho do encontro — a mesa vira ocasião.",
    sizeInfo: {
      weight: "900G",
      slices: 7,
      dimensions: {
        diameter: 15,
        height: 6,
      },
    },
    imageSrc: "/assets/produto-medio.jpg",
    items: [
      {
        name: "Pudim de Leite Condensado Moça",
        flavor: "Leite Condensado Moça",
        description:
          "Corte limpo, brilho elegante e derreter lento. Ideal para receber com estilo.",
        price: 105,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Chocolate Belga com Praliné de Castanhas",
        flavor: "Chocolate Belga com Praliné de Castanhas",
        description:
          "Chocolate belga de alta qualidade com crocante de castanhas caramelizadas, criando uma experiência única de texturas.",
        price: 120,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Doce de Leite",
        flavor: "Doce de Leite",
        description:
          "Cremoso e sedoso, com o sabor autêntico do doce de leite brasileiro.",
        price: 120,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Chocolate Branco com Calda de Frutas Vermelhas",
        flavor: "Chocolate Branco com Calda de Frutas Vermelhas",
        description:
          "Delicadeza do chocolate branco harmonizada com a acidez das frutas vermelhas.",
        price: 130,
        priceNote: "Consultar disponibilidade",
      },
    ],
  },
  {
    id: "grande",
    title: "Grande",
    subtitle: "Quando você quer impressionar — por inteiro.",
    sizeInfo: {
      weight: "1.7KG",
      slices: 12,
      dimensions: {
        diameter: 20,
        height: 6,
      },
    },
    imageSrc: "/assets/produto-grande.jpg",
    items: [
      {
        name: "Pudim de Leite Condensado Moça",
        flavor: "Leite Condensado Moça",
        description:
          "Presença de sobremesa de celebração: textura impecável, caramelo profundo e acabamento premium.",
        price: 170,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Chocolate Belga com Praliné de Castanhas",
        flavor: "Chocolate Belga com Praliné de Castanhas",
        description:
          "Chocolate belga de alta qualidade com crocante de castanhas caramelizadas, criando uma experiência única de texturas.",
        price: 200,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Doce de Leite",
        flavor: "Doce de Leite",
        description:
          "Cremoso e sedoso, com o sabor autêntico do doce de leite brasileiro.",
        price: 200,
        priceNote: "Consultar disponibilidade",
      },
      {
        name: "Pudim de Chocolate Branco com Calda de Frutas Vermelhas",
        flavor: "Chocolate Branco com Calda de Frutas Vermelhas",
        description:
          "Delicadeza do chocolate branco harmonizada com a acidez das frutas vermelhas.",
        price: 220,
        priceNote: "Consultar disponibilidade",
      },
    ],
  },
];


