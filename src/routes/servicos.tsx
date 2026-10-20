import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle, WhatsButton } from "@/components/site";
import { brl } from "@/lib/site";
import { PhotoCollection } from "@/components/makeup-media";
import { photoGroups } from "@/lib/makeup-media";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Pacotes e Preços — Noivas, Madrinhas e 15 Anos | Violeta Beauty" },
      { name: "description", content: "Valores de maquiagem para noivas, madrinhas, pacote cerimonial e pacote festa de 15 anos. Atendimento a domicílio." },
      { property: "og:title", content: "Pacotes e Preços | Violeta Beauty" },
      { property: "og:description", content: "Noivas, madrinhas, cerimonial, 15 anos e atendimento a domicílio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicos,
});

const pacotes = [
  { nome: "Noiva", preco: 650, destaque: true, itens: ["Teste de maquiagem prévio", "Maquiagem de longa duração", "Cílios postiços premium", "Kit retoque para o dia"] },
  { nome: "Madrinha", preco: 220, itens: ["Maquiagem completa", "Cílios postiços", "Fixação prolongada"] },
  { nome: "Pacote Cerimonial", preco: 1490, destaque: true, itens: ["Noiva + 4 madrinhas", "Mãe da noiva inclusa", "Atendimento no local", "Teste da noiva incluso"] },
  { nome: "Festa de 15 Anos", preco: 890, itens: ["Teste prévio da debutante", "Maquiagem para valsa e festa", "Retoque durante o evento", "Maquiagem da mãe inclusa"] },
  { nome: "Social / Festa", preco: 180, itens: ["Maquiagem completa", "Cílios postiços"] },
  { nome: "Artística", preco: 300, itens: ["Criação personalizada", "Pedrarias e glitter", "Ideal para ensaios e eventos"] },
];

function Servicos() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle kicker="Valores" title="Pacotes & Preços" sub="Escolha o seu pacote e agende direto pelo WhatsApp." />
      <div className="grid gap-6 md:grid-cols-3">
        {pacotes.map((p) => (
          <div key={p.nome} className={`flex flex-col rounded-2xl border bg-card p-7 ${p.destaque ? "border-primary shadow-glow" : "border-border"}`}>
            {p.destaque && <span className="mb-3 w-fit rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-primary-foreground">Mais procurado</span>}
            <h2 className="text-2xl">{p.nome}</h2>
            <p className="mt-3 text-4xl font-bold text-gradient-gold">{brl(p.preco)}</p>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
              {p.itens.map((i) => <li key={i}>✦ {i}</li>)}
            </ul>
            <WhatsButton msg={`Olá! Quero agendar o pacote ${p.nome} (${brl(p.preco)}).`} className="mt-6">Agendar</WhatsButton>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-border pt-8">
        <p className="text-sm text-muted-foreground">Inspirações criadas com IA — não são fotos de clientes.</p>
        {photoGroups.slice(1).map((group) => <PhotoCollection key={group.title} group={group} />)}
      </div>
      <section className="mt-14 flex flex-col items-start gap-6 rounded-2xl border border-primary bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:flex-row md:items-center">
        <div className="text-4xl">🏠</div>
        <div className="flex-1">
          <h2 className="text-2xl text-gradient-gold">Atendimento a domicílio</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Vamos até você: maquiagem no conforto da sua casa, hotel ou no local do evento. Ideal para noivas, madrinhas e debutantes — você se arruma sem pressa e sem deslocamento.
          </p>
          <p className="mt-2 text-sm text-accent">
            Taxa de deslocamento varia conforme a região e é combinada no agendamento pelo WhatsApp.
          </p>
        </div>
        <WhatsButton msg="Olá! Quero agendar um atendimento a domicílio. Pode me informar a taxa de deslocamento?" className="shrink-0">Agendar a domicílio</WhatsButton>
      </section>
    </main>
  );
}
