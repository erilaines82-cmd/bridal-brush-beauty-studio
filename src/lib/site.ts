// Contato real — formato internacional sem símbolos
export const WHATSAPP = "5521993891418";
export const WHATSAPP_DISPLAY = "(21) 99389-1418";
export const EMAIL = "violetabeauty234@hotmail.com";
export const INSTAGRAM = "beauty_makeupe23";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM}`;

export const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
