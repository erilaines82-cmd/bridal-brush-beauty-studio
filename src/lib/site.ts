// Contato real — formato internacional sem símbolos
export const WHATSAPP = "5521993891418";
export const WHATSAPP_DISPLAY = "(21) 99389-1418";
export const EMAIL = "vioeltabeauty@gmail.com";
export const INSTAGRAM = "violetabeauty2026";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM}`;

export type Partner = { name: string; whatsapp: string; display: string };

// Sócias — cada agendamento vai direto para a sócia responsável
export const PARTNERS: Partner[] = [
  { name: "Nanny Santos", whatsapp: "5521993891418", display: "(21) 99389-1418" },
  { name: "Bruna Napoleão", whatsapp: "5521999479675", display: "(21) 99947-9675" },
];

export const waPartner = (partner: Partner, msg: string) =>
  `https://wa.me/${partner.whatsapp}?text=${encodeURIComponent(msg)}`;

export const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
