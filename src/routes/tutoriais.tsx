import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site";

export const Route = createFileRoute("/tutoriais")({
  head: () => ({
    meta: [
      { title: "Tutoriais de Maquiagem e Maquiagem Artística | Violeta Beauty" },
      { name: "description", content: "Aprenda maquiagem do dia a dia, festa e maquiagem artística passo a passo." },
      { property: "og:title", content: "Tutoriais de Maquiagem | Violeta Beauty" },
      { property: "og:description", content: "Tutoriais de maquiagem social e artística." },
    ],
  }),
  component: Tutoriais,
});

const grupos = [
  {
    titulo: "Tutoriais de Maquiagem",
    lista: [
      { t: "Pele perfeita e duradoura", v: "8 min", passos: ["Hidrate e aplique primer", "Base em camadas finas", "Corretivo em triângulo", "Sele com pó translúcido"] },
      { t: "Olho esfumado para festa", v: "12 min", passos: ["Primer de sombra", "Cor de transição no côncavo", "Escureça o canto externo", "Esfume e ilumine o canto interno"] },
      { t: "Maquiagem de noiva natural", v: "15 min", passos: ["Pele leve e luminosa", "Sombra nude acetinada", "Cílios naturais", "Batom rosado"] },
    ],
  },
  {
    titulo: "Tutoriais de Maquiagem Artística",
    lista: [
      { t: "Borboleta com pedrarias", v: "20 min", passos: ["Desenhe as asas com lápis branco", "Preencha com sombras vibrantes", "Contorne com delineador preto", "Aplique strass com cola de cílios"] },
      { t: "Galáxia glitter", v: "18 min", passos: ["Base escura com sombra roxa", "Pontos de azul e rosa", "Estrelas com pincel fino branco", "Finalize com glitter holográfico"] },
      { t: "Caveira mexicana", v: "25 min", passos: ["Base branca com tinta facial", "Olhos pretos com flores ao redor", "Nariz e dentes com delineador", "Detalhes coloridos e brilho"] },
    ],
  },
];

function Tutoriais() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle kicker="Aprenda" title="Tutoriais" sub="Passo a passo do básico ao artístico." />
      {grupos.map((g) => (
        <section key={g.titulo} className="mb-16">
          <h2 className="mb-6 text-3xl text-gradient-gold">{g.titulo}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {g.lista.map((x) => (
              <article key={x.t} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl">{x.t}</h3>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs">▶ {x.v}</span>
                </div>
                <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
                  {x.passos.map((p) => <li key={p}>{p}</li>)}
                </ol>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
