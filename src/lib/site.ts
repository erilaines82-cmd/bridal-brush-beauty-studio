// Número de WhatsApp (placeholder) — formato internacional sem símbolos
export const WHATSAPP = "5511999999999";

export const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
