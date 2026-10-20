import { Link } from "@tanstack/react-router";
import { wa } from "@/lib/site";

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Pacotes" },
  { to: "/produtos", label: "Produtos" },
  { to: "/tutoriais", label: "Tutoriais" },
  { to: "/galeria", label: "Maquiagem artística & Galeria" },
] as const;

export function WhatsButton({ msg, children, className = "" }: { msg: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={wa(msg)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-foreground transition hover:scale-105 hover:shadow-glow ${className}`}
    >
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link to="/" className="font-display text-2xl text-gradient-gold">Violeta Beauty</Link>
        <nav className="flex flex-wrap gap-4 text-sm">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border py-10 text-center text-sm text-muted-foreground">
      <p className="font-display text-xl text-gradient-gold">Violeta Beauty</p>
      <p className="mt-2">Maquiagem profissional e artística • Atendimento com hora marcada</p>
      <WhatsButton msg="Olá! Gostaria de agendar uma maquiagem." className="mt-5">Agendar pelo WhatsApp</WhatsButton>
    </footer>
  );
}

export function SectionTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">{kicker}</p>
      <h1 className="mt-3 text-4xl md:text-5xl">{title}</h1>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
