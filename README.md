# Pudim Brazil — Site Institucional (Next.js)

Site institucional premium (não e-commerce) para a marca **Pudim Brazil**, com foco em storytelling, performance e SEO básico. Todas as conversões vão para **WhatsApp**.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Assets (fotos, artes, cardápios)

Coloque todos os arquivos de imagem em:

- `public/assets/`

O site **seleciona automaticamente** imagens por nome (e usa placeholders se estiver vazio). Sugestões de nomes:

- `hero-*` / `capa-*` → imagem principal da Home
- `fundadores-*` / `casal-*` → foto do casal / história
- `produto-*` → vitrine de produtos
- `instrucoes-*` / `desenformar-*` → instruções/arte de desenformar

O mapeamento está centralizado em `src/content/media.ts`.

## Variável de ambiente (SEO)

Para gerar URLs absolutas no `sitemap.xml` e metadados, defina:

- `NEXT_PUBLIC_SITE_URL` (ex.: `https://seudominio.com`)

