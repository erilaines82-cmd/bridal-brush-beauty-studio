import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle, WhatsButton } from "@/components/site";
import { PhotoCollection, TutorialVideos } from "@/components/makeup-media";
import { photoGroups, artisticVideos } from "@/lib/makeup-media";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Maquiagens Artísticas | Violeta Beauty" },
      { name: "description", content: "Fotos de maquiagens artísticas, noivas e festas do portfólio Violeta Beauty." },
      { property: "og:title", content: "Galeria | Violeta Beauty" },
      { property: "og:description", content: "Portfólio de maquiagens artísticas e sociais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle kicker="Galeria" title="Maquiagens Artísticas & Ocasiões" sub="Arte, noivas, debutantes e festas: inspirações para cada momento." />
      <p className="text-center text-sm text-muted-foreground">Imagens de inspiração criadas com IA; não são fotos de clientes ou trabalhos realizados.</p>
      {photoGroups.slice(0, 1).map((group) => <PhotoCollection key={group.title} group={group} />)}
      <section className="mt-14 border-y border-border py-10">
        <h2 className="mb-6 text-3xl text-gradient-gold">Aprenda maquiagem artística</h2>
        <TutorialVideos videos={artisticVideos} />
      </section>
      {photoGroups.slice(1).map((group) => <PhotoCollection key={group.title} group={group} />)}
      <div className="mt-12 text-center">
        <WhatsButton msg="Olá! Quero uma maquiagem artística.">Quero uma maquiagem artística</WhatsButton>
      </div>
    </main>
  );
}
