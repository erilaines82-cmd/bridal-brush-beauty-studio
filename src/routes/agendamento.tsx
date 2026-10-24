import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle, WhatsButton } from "@/components/site";
import { PARTNERS, waPartner, EMAIL, INSTAGRAM, INSTAGRAM_URL, type Partner } from "@/lib/site";

export const Route = createFileRoute("/agendamento")({
  head: () => ({
    meta: [
      { title: "Agendamento — Violeta Beauty" },
      { name: "description", content: "Agende sua maquiagem com as sócias Nanny Santos ou Bruna Napoleão pelo WhatsApp. Atendimento a domicílio." },
      { property: "og:title", content: "Agendamento — Violeta Beauty" },
      { property: "og:description", content: "Fale direto com Nanny Santos ou Bruna Napoleão e agende pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Agendamento,
});

function PartnerCard({ partner }: { partner: Partner }) {
  const name = partner.name;
  const display = partner.display;
  return (
    <div className="flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center shadow-glow transition hover:-translate-y-1">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 font-display text-3xl text-gradient-gold">
        {name.charAt(0)}
      </div>
      <h2 className="mt-5 font-display text-3xl">{name}</h2>
      <p className="mt-1 text-sm uppercase tracking-[0.25em] text-accent">Sócia fundadora</p>
      <p className="mt-4 text-muted-foreground">
        Fale direto com {name.split(" ")[0]} para tirar dúvidas, combinar data, horário e endereço do seu atendimento.
      </p>
      <WhatsButton
        msg={`Olá, ${name.split(" ")[0]}! Gostaria de agendar uma maquiagem.`}
        href={waPartner(partner, `Olá, ${name.split(" ")[0]}! Gostaria de agendar uma maquiagem.`)}
        className="mt-6"
      >
        Agendar com {name.split(" ")[0]}
      </WhatsButton>
      <p className="mt-3 text-sm text-muted-foreground">WhatsApp: {display}</p>
    </div>
  );
}

function Agendamento() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        kicker="Agendamento"
        title="Escolha com quem falar"
        sub="Somos duas sócias à sua espera. Escolha uma das maquiadoras abaixo e o WhatsApp abre direto com ela."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {PARTNERS.map((p) => (
          <PartnerCard key={p.whatsapp} partner={p} />
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-border bg-card/60 p-8 text-center">
        <h2 className="text-2xl text-gradient-gold">Atendimento a domicílio</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Vamos até você: casa, hotel ou local do evento. Ao agendar, já pode combinar com sua maquiadora o dia, o horário e o endereço do atendimento.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
            Instagram: @{INSTAGRAM}
          </a>
        </div>
      </section>
    </main>
  );
}
