import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn()
 * Utilitário padrão para compor classes Tailwind com segurança:
 * - aceita condicionais (clsx)
 * - resolve conflitos Tailwind (tailwind-merge)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


