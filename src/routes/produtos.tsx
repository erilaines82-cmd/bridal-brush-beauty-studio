import { createFileRoute } from "@tanstack/react-router";
import palette from "@/assets/products/eyeshadow-palette.png.asset.json";
import matte from "@/assets/products/matte-lipstick.png.asset.json";
import brushes from "@/assets/products/makeup-brush-set.jpg.asset.json";
import blush from "@/assets/products/blush.png.asset.json";
import foundation from "@/assets/products/foundation.png.asset.json";
import nude from "@/assets/products/nude-lipstick.png.asset.json";
import { SectionTitle, WhatsButton } from "@/components/site";
import { brl } from "@/lib/site";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos de Maquiagem Premium | Violeta Beauty" },
      { name: "description", content: "Paletas, batons, pincéis e mais — produtos de alta qualidade. Compre pelo WhatsApp." },
      { property: "og:title", content: "Produtos Premium | Violeta Beauty" },
      { property: "og:description", content: "Compre produtos de maquiagem de alta qualidade pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Produtos,
});

const itens = [
  { n: "Paleta Sombras Violeta Gold", p: 189.9, img: palette.url, ref: "Maybelline The Nudes", source: "https://well.ca/products/maybelline-the-nudes-eye-shadow_99882.html" },
  { n: "Batom Matte Luxo", p: 69.9, img: matte.url, ref: "Maybelline Vivid Matte Liquid", source: "https://well.ca/products/maybelline-color-sensational-vivid_114538.html" },
  { n: "Kit Pincéis Profissionais", p: 159.9, img: brushes.url, ref: "Foto de pincéis · Unsplash / CC0", source: "https://commons.wikimedia.org/wiki/File:Makeup_brush_set_(Unsplash).jpg" },
  { n: "Blush Rosé Iluminado", p: 89.9, img: blush.url, ref: "Maybelline Master Hi-Light", source: "https://well.ca/products/maybelline-face-studio-master_88831.html" },
  { n: "Base Alta Cobertura", p: 129.9, img: foundation.url, ref: "Maybelline Dream Wonder", source: "https://makeup-api.herokuapp.com/" },
  { n: "Batom Cremoso Nude", p: 64.9, img: nude.url, ref: "Maybelline Color Sensational The Buffs", source: "https://makeup-api.herokuapp.com/" },
];

function Produtos() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle kicker="Loja" title="Produtos de Alta Qualidade" sub="Consulte cores, marcas e disponibilidade pelo WhatsApp." />
      <p className="mb-8 max-w-3xl text-sm text-muted-foreground">Fotografias reais de referência por categoria, não do estoque confirmado. Nomes e preços são exemplos; confirme o produto exato, a marca, a cor e o valor antes de comprar.</p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {itens.map((i) => (
          <div key={i.n} className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={i.img} alt={`Foto de referência: ${i.ref}`} loading="lazy" width={600} height={450} className="aspect-[4/3] w-full bg-product-photo object-contain p-5" />
            <div className="p-5">
              <h2 className="text-xl">{i.n}</h2>
              <a href={i.source} target="_blank" rel="noreferrer" className="mt-2 block text-xs text-muted-foreground underline underline-offset-4">Referência da foto: {i.ref}</a>
              <p className="mt-2 text-2xl font-bold text-gradient-gold">{brl(i.p)}</p>
              <WhatsButton msg={`Olá! Quero comprar: ${i.n} (${brl(i.p)}).`} className="mt-4 w-full">Comprar</WhatsButton>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
