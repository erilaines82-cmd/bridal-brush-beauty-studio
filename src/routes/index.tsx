import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import art1 from "@/assets/art1.jpg";
import noiva from "@/assets/noiva.jpg";
import produtos from "@/assets/produtos.jpg";
import { WhatsButton } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Violeta Beauty — Maquiagem Profissional e Artística" },
      { name: "description", content: "Portfólio de maquiagem: noivas, madrinhas, 15 anos, maquiagem artística, produtos e tutoriais. Agende pelo WhatsApp." },
      { property: "og:title", content: "Violeta Beauty — Maquiagem Profissional" },
      { property: "og:description", content: "Noivas, madrinhas, 15 anos e maquiagem artística. Agende pelo WhatsApp." },
    ],
  }),
  component: Index,
});

const cards = [
  { to: "/servicos", img: noiva, t: "Noivas & Festas", d: "Pacotes para noivas, madrinhas e 15 anos" },
  { to: "/galeria", img: art1, t: "Maquiagem Artística", d: "Fantasias, editoriais e criações únicas" },
  { to: "/produtos", img: produtos, t: "Produtos Premium", d: "Alta qualidade, compre pelo WhatsApp" },
] as const;

function Index() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Maquiadora profissional</p>
          <h1 className="mt-4 text-5xl leading-tight md:text-7xl">
            Sua beleza em <span className="text-gradient-gold italic">destaque</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Maquiagem para noivas, madrinhas, debutantes e criações artísticas que fazem todos olharem para você. Atendimento a domicílio: vamos até você.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsButton msg="Olá! Quero agendar uma maquiagem.">Agendar no WhatsApp</WhatsButton>
            <Link to="/servicos" className="rounded-full border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
              Ver preços
            </Link>
          </div>
        </div>
        <img src={hero} alt="Maquiagem profissional" width={1280} height={1280} className="rounded-[2rem] shadow-glow" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        {cards.map((c) => (
          <Link key={c.to} to={c.to} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-glow">
            <img src={c.img} alt={c.t} loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover transition group-hover:scale-105" />
            <div className="p-5">
              <h2 className="text-2xl">{c.t}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
