import { createFileRoute } from "@tanstack/react-router";
import art1 from "@/assets/art1.jpg";
import hero from "@/assets/hero.jpg";
import noiva from "@/assets/noiva.jpg";
import { SectionTitle, WhatsButton } from "@/components/site";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Maquiagens Artísticas | Violeta Beauty" },
      { name: "description", content: "Fotos de maquiagens artísticas, noivas e festas do portfólio Violeta Beauty." },
      { property: "og:title", content: "Galeria | Violeta Beauty" },
      { property: "og:description", content: "Portfólio de maquiagens artísticas e sociais." },
    ],
  }),
  component: Galeria,
});

const fotos = [
  { src: art1, t: "Borboleta Artística" },
  { src: hero, t: "Glam Violeta" },
  { src: noiva, t: "Noiva Clássica" },
];

function Galeria() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle kicker="Portfólio" title="Maquiagens Artísticas" sub="Criações que transformam rostos em arte." />
      <div className="grid gap-6 md:grid-cols-3">
        {fotos.map((f) => (
          <figure key={f.t} className="group relative overflow-hidden rounded-2xl">
            <img src={f.src} alt={f.t} loading="lazy" width={1024} height={1024} className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-110" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5 font-display text-xl">{f.t}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-12 text-center">
        <WhatsButton msg="Olá! Quero uma maquiagem artística.">Quero uma maquiagem artística</WhatsButton>
      </div>
    </main>
  );
}
