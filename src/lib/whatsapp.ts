const WHATSAPP_E164 = "+5511998532804";
const WHATSAPP_MESSAGE = "Olá! Quero pedir um Pudim Brazil.";

/**
 * Gera um link oficial do WhatsApp (wa.me) com mensagem pré-preenchida.
 * Mantemos aqui para centralizar manutenção de número/mensagem.
 */
export function getWhatsAppLink(message: string = WHATSAPP_MESSAGE) {
  const phone = WHATSAPP_E164.replace(/[^\d]/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

/**
 * Formata o número de telefone no padrão brasileiro: XX XXXXX-XXXX
 * Remove o código do país (+55) e formata com espaços e hífen.
 */
export function formatPhoneNumber(phone: string): string {
  // Remove todos os caracteres não numéricos
  const digits = phone.replace(/[^\d]/g, "");
  
  // Remove o código do país (55) se presente
  const withoutCountryCode = digits.startsWith("55") ? digits.slice(2) : digits;
  
  // Formata: DDD (2) + número (9 dígitos) = 11 dígitos total
  // Formato: XX XXXXX-XXXX
  if (withoutCountryCode.length === 11) {
    return `${withoutCountryCode.slice(0, 2)} ${withoutCountryCode.slice(2, 7)}-${withoutCountryCode.slice(7)}`;
  }
  
  // Fallback: retorna o número original se não tiver 11 dígitos
  return phone;
}

export const WHATSAPP_DEFAULT_MESSAGE = WHATSAPP_MESSAGE;
export const WHATSAPP_PHONE_E164 = WHATSAPP_E164;
export const WHATSAPP_PHONE_FORMATTED = formatPhoneNumber(WHATSAPP_E164);


