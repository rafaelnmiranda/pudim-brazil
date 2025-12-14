# 📸 Mapa Completo de Fotos - Pudim Brazil

Este documento lista todas as fotos necessárias para o site, incluindo nome sugerido do arquivo e local onde será exibida.

---

## 📁 Localização dos Arquivos

**Todas as fotos devem ser colocadas em:**
```
public/assets/
```

---

## 🎯 Fotos Obrigatórias (Core)

### 1. **Hero / Imagem Principal da Home**
- **Nome sugerido do arquivo:** `hero.jpg` ou `hero.webp` (ou qualquer nome contendo: `hero`, `capa`, `home`, `pudim`)
- **Onde aparece:**
  - Página inicial (Home) - seção hero (imagem de fundo full-screen)
- **Especificações:**
  - Formato: JPG, WEBP ou PNG
  - Proporção: Qualquer (será usado como `object-cover`)
  - Tamanho recomendado: 1920x1080px ou maior
  - Uso: Background da seção hero principal

---

### 2. **Foto dos Fundadores / Casal**
- **Nome sugerido do arquivo:** `fundadores.jpg` ou `casal.jpg` (ou qualquer nome contendo: `fundador`, `casal`, `sobre`, `historia`)
- **Onde aparece:**
  - Página inicial (Home) - seção "Fundadores & História" (teaser)
  - Página `/fundadores` - foto principal do casal
- **Especificações:**
  - Formato: JPG, WEBP ou PNG
  - Proporção: 4:3 ou 4:5 (retrato)
  - Tamanho recomendado: 1200x1500px ou similar
  - Uso: Foto do casal fundador da marca

---

### 3. **Instruções para Desenformar**
- **Nome sugerido do arquivo:** `instrucoes.jpg` ou `desenformar.jpg` (ou qualquer nome contendo: `instrucao`, `instrucoes`, `desenformar`, `guia`, `manual`)
- **Onde aparece:**
  - Página `/experiencia` - seção de instruções exclusivas
- **Especificações:**
  - Formato: JPG, WEBP ou PNG
  - Proporção: 4:3
  - Tamanho recomendado: 1200x900px ou similar
  - Uso: Arte/folha com instruções visuais de como desenformar o pudim

---

## 🍮 Fotos de Produtos

### 4. **Produto Mini / Individual**
- **Nome sugerido do arquivo:** `produto-mini.jpg` ou `mini.jpg` (ou qualquer nome contendo: `produto`, `pudim`, `mini`)
- **Onde aparece:**
  - Página inicial (Home) - card "Mini / Individual"
  - Página `/produtos` - card do produto "Pudim Individual (clássico)"
- **Especificações:**
  - Formato: JPG, WEBP ou PNG
  - Proporção: 4:3
  - Tamanho recomendado: 800x600px ou maior
  - Uso: Foto do pudim tamanho mini/individual

---

### 5. **Produto Pequeno**
- **Nome sugerido do arquivo:** `produto-pequeno.jpg` ou `pequeno.jpg`
- **Onde aparece:**
  - Página inicial (Home) - card "Pequeno"
  - Página `/produtos` - card do produto "Pudim Pequeno (clássico)"
- **Especificações:**
  - Formato: JPG, WEBP ou PNG
  - Proporção: 4:3
  - Tamanho recomendado: 800x600px ou maior
  - Uso: Foto do pudim tamanho pequeno

---

### 6. **Produto Médio**
- **Nome sugerido do arquivo:** `produto-medio.jpg` ou `medio.jpg`
- **Onde aparece:**
  - Página inicial (Home) - card "Médio"
  - Página `/produtos` - card do produto "Pudim Médio (clássico)"
- **Especificações:**
  - Formato: JPG, WEBP ou PNG
  - Proporção: 4:3
  - Tamanho recomendado: 800x600px ou maior
  - Uso: Foto do pudim tamanho médio

---

### 7. **Produto Grande**
- **Nome sugerido do arquivo:** `produto-grande.jpg` ou `grande.jpg`
- **Onde aparece:**
  - Página inicial (Home) - card "Grande"
  - Página `/produtos` - card do produto "Pudim Grande (clássico)"
- **Especificações:**
  - Formato: JPG, WEBP ou PNG
  - Proporção: 4:3
  - Tamanho recomendado: 800x600px ou maior
  - Uso: Foto do pudim tamanho grande

---

## 📋 Resumo Rápido

| # | Nome do Arquivo Sugerido | Local no Site | Prioridade |
|---|-------------------------|---------------|------------|
| 1 | `hero.jpg` ou `hero.webp` | Home - Hero | ⭐⭐⭐ Alta |
| 2 | `fundadores.jpg` ou `casal.jpg` | Home + /fundadores | ⭐⭐⭐ Alta |
| 3 | `instrucoes.jpg` ou `desenformar.jpg` | /experiencia | ⭐⭐ Média |
| 4 | `produto-mini.jpg` | Home + /produtos | ⭐⭐⭐ Alta |
| 5 | `produto-pequeno.jpg` | Home + /produtos | ⭐⭐⭐ Alta |
| 6 | `produto-medio.jpg` | Home + /produtos | ⭐⭐⭐ Alta |
| 7 | `produto-grande.jpg` | Home + /produtos | ⭐⭐⭐ Alta |

---

## 🔍 Como o Sistema Funciona

O sistema busca automaticamente imagens por **palavras-chave no nome do arquivo**. Por exemplo:

- Se você colocar `hero-pudim-brazil.jpg` → será usado como hero
- Se você colocar `casal-fundadores-2024.jpg` → será usado como foto dos fundadores
- Se você colocar `produto-mini-classico.jpg` → será usado como produto mini

**Se não encontrar nenhuma imagem com as palavras-chave, o sistema usa os placeholders SVG que já existem.**

---

## ✅ Checklist de Upload

- [ ] Hero/imagem principal da home
- [ ] Foto dos fundadores/casal
- [ ] Instruções para desenformar
- [ ] Foto produto Mini/Individual
- [ ] Foto produto Pequeno
- [ ] Foto produto Médio
- [ ] Foto produto Grande

---

## 📝 Notas Importantes

1. **Formato recomendado:** WEBP (melhor compressão) ou JPG (compatibilidade)
2. **Otimização:** Comprima as imagens antes de fazer upload para melhor performance
3. **Nomes alternativos:** O sistema aceita variações dos nomes sugeridos (veja `src/content/media.ts`)
4. **Placeholders:** Se alguma foto não for encontrada, o site continuará funcionando com placeholders SVG
5. **Imagens individuais por produto (opcional):** Se quiser imagens específicas para cada produto individual, você pode configurar o campo `imageSrc` em `src/content/products.ts` com o caminho completo (ex.: `/assets/produto-mini-classico.jpg`). Caso contrário, o sistema usará a imagem genérica de produto.

---

**Última atualização:** Baseado na análise do código em `src/content/media.ts` e todas as páginas do site.
