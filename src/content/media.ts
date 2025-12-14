import "server-only";

import { pickPublicAsset } from "@/lib/publicAssets";

/**
 * Mapeamento centralizado de mídias locais.
 * - Quando você copiar as fotos/artes/cardápios para `public/assets/`, este arquivo
 *   automaticamente “puxa” os melhores candidatos por nome.
 * - Se quiser controle total, basta renomear arquivos com termos como:
 *   "hero", "fundadores", "produtos", "instrucoes", etc.
 */
export const media = {
  hero: pickPublicAsset({
    prefer: ["hero", "capa", "home", "pudim"],
    fallback: "hero-placeholder.svg",
  }),
  founders: pickPublicAsset({
    prefer: ["fundador", "casal", "sobre", "historia"],
    fallback: "photo-placeholder.svg",
  }),
  product: pickPublicAsset({
    prefer: ["produto", "pudim", "mini", "medio", "grande"],
    fallback: "product-placeholder.svg",
  }),
  instructions: pickPublicAsset({
    prefer: ["instrucao", "instrucoes", "desenformar", "guia", "manual"],
    fallback: "product-placeholder.svg",
  }),
  logo: pickPublicAsset({
    prefer: ["logo"],
    fallback: null, // Se não houver logo, retorna null para usar texto
  }),
} as const;


