import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Activity, Waves, Cpu, Wind, Shield, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Activity, title: "Structural Analysis", desc: "Full code-compliant analysis for new and existing telecom structures.", tone: "gold" },
  { icon: Waves, title: "Fatigue & Lifing", desc: "Crack initiation, propagation and remaining-life assessment.", tone: "orange" },
  { icon: Cpu, title: "FEA Modelling", desc: "Non-linear finite element analysis for connections and joints.", tone: "gold" },
  { icon: Wind, title: "CFD Wind Studies", desc: "Computational fluid dynamics for wind, gust and vortex shedding.", tone: "pink" },
  { icon: Shield, title: "Tower Audit", desc: "Climb-based inspection with engineering certification report.", tone: "orange" },
  { icon: ArrowUpRight, title: "Upgrade Design", desc: "Reinforcement design for 5G, equipment add-ons and lifespan.", tone: "gold" },
];

export const Services = () => {
  return (
    <section className="relative bg-background py-24">
      <div className="container-wide">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">What we do</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
              Engineering services that{" "}
              <span className="text-gradient-fire">keep the network up</span>.
            </h2>
          </div>
          <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-navy">
            All services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:border-gold/40 hover:shadow-elegant"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/0 transition-all duration-500 group-hover:bg-gold/15 group-hover:blur-2xl" />
                <div className={`grid h-12 w-12 place-items-center rounded-xl ${
                  s.tone === "gold" ? "bg-gold/15 text-gold" :
                  s.tone === "orange" ? "bg-orange/15 text-orange" :
                  "bg-pink/15 text-pink"
                }`}>
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-navy/60 transition-colors group-hover:text-orange">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
