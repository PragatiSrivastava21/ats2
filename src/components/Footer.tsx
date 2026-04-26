import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 grid-bg-dark opacity-40" />
      <div className="absolute -top-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-wide relative py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Specialist engineering for telecom infrastructure. From structural analysis to fatigue and CFD —
              ATSS keeps the world connected, safely.
            </p>
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "X", "YouTube"].map((s) => (
                <a key={s} href="#" className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/70 transition hover:border-gold/40 hover:text-gold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <FooterCol title="Company" items={[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
            ]} />
            <FooterCol title="Services" items={[
              { label: "Structural Analysis", to: "/services" },
              { label: "Fatigue & Lifing", to: "/services" },
              { label: "FEA / CFD", to: "/services" },
              { label: "Tower Audit", to: "/services" },
            ]} />
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Reach Us</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Engineering HQ, Pune, India</li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold" /> hello@atss.engineering</li>
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-gold" /> +91 98XX XXX XXX</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© 2026 ATSS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, items }: { title: string; items: { label: string; to: string }[] }) => (
  <div>
    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{title}</h4>
    <ul className="mt-5 space-y-3 text-sm">
      {items.map((i) => (
        <li key={i.label}>
          <Link to={i.to} className="text-white/70 transition hover:text-gold">
            {i.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
