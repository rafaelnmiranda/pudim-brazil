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

export const WHATSAPP_DEFAULT_MESSAGE = WHATSAPP_MESSAGE;
export const WHATSAPP_PHONE_E164 = WHATSAPP_E164;


