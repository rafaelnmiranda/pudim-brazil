import "server-only";

import fs from "node:fs";
import path from "node:path";

const ASSETS_DIR_REL = "public/assets";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".svg"]);

function safeReadDir(dirPath: string) {
  try {
    return fs.readdirSync(dirPath, { withFileTypes: true });
  } catch {
    return [];
  }
}

export function listPublicAssets(): string[] {
  const abs = path.join(process.cwd(), ASSETS_DIR_REL);
  const entries = safeReadDir(abs);
  return entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));
}

type PickAssetOptions = {
  /**
   * Substrings (case-insensitive) para priorizar na escolha do arquivo.
   * Ex.: ["hero", "capa", "pudim"]
   */
  prefer?: string[];
  /**
   * Arquivo de fallback (dentro de /public/assets).
   * Se for null, retorna null quando não encontrar nenhum arquivo.
   */
  fallback: string | null;
};

/**
 * Escolhe automaticamente um asset dentro de public/assets.
 * - Se houver arquivos reais, prioriza pelos padrões em `prefer`.
 * - Ignora placeholders ao procurar por arquivos preferidos.
 * - Se não encontrar nada, usa `fallback` (ou null se fallback for null).
 */
export function pickPublicAsset({ prefer, fallback }: PickAssetOptions): string | null {
  const files = listPublicAssets();
  // Filtra placeholders primeiro para priorizar arquivos reais
  const nonPlaceholders = files.filter(
    (f) => !f.toLowerCase().includes("placeholder"),
  );
  const normalized = nonPlaceholders.map((f) => f.toLowerCase());

  if (prefer?.length) {
    const preferLower = prefer.map((p) => p.toLowerCase());
    for (const p of preferLower) {
      const idx = normalized.findIndex((name) => name.includes(p));
      if (idx >= 0) return `/assets/${nonPlaceholders[idx]}`;
    }
  }

  // Se não encontrou pelos termos preferidos, usa o primeiro não-placeholder
  const chosen = nonPlaceholders[0] ?? files[0];
  
  if (chosen) {
    const chosenStr = chosen.toString();
    return chosenStr.startsWith("/assets/") ? chosenStr : `/assets/${chosenStr}`;
  }
  
  // Se não encontrou nada e fallback é null, retorna null
  if (fallback === null) return null;
  
  // Caso contrário, usa o fallback
  const fallbackStr = fallback.toString();
  return fallbackStr.startsWith("/assets/") ? fallbackStr : `/assets/${fallbackStr}`;
}


