import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/produtos.jpg";
import { SectionTitle, WhatsButton } from "@/components/site";
import { brl } from "@/lib/site";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos de Maquiagem Premium | Violeta Beauty" },
      { name: "description", content: "Paletas, batons, pincéis e mais — produtos de alta qualidade. Compre pelo WhatsApp." },
      { property: "og:title", content: "Produtos Premium | Violeta Beauty" },
      { property: "og:description", content: "Compre produtos de maquiagem de alta qualidade pelo WhatsApp." },
    ],
  }),
  component: Produtos,
});

const itens = [
  { n: "Paleta Sombras Violeta Gold", p: 189.9, pos: "20% 20%" },
  { n: "Batom Matte Luxo", p: 69.9, pos: "10% 50%" },
  { n: "Kit Pincéis Profissionais", p: 159.9, pos: "90% 20%" },
  { n: "Blush Rosé Iluminado", p: 89.9, pos: "50% 75%" },
  { n: "Base Alta Cobertura", p: 129.9, pos: "25% 90%" },
  { n: "Batom Cremoso Nude", p: 64.9, pos: "75% 80%" },
];

function Produtos() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle kicker="Loja" title="Produtos de Alta Qualidade" sub="Os mesmos produtos que uso nas minhas clientes. Peça pelo WhatsApp." />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {itens.map((i) => (
          <div key={i.n} className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={img} alt={i.n} loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover" style={{ objectPosition: i.pos }} />
            <div className="p-5">
              <h2 className="text-xl">{i.n}</h2>
              <p className="mt-2 text-2xl font-bold text-gradient-gold">{brl(i.p)}</p>
              <WhatsButton msg={`Olá! Quero comprar: ${i.n} (${brl(i.p)}).`} className="mt-4 w-full">Comprar</WhatsButton>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
