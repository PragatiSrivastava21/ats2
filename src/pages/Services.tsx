import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/sections/CtaBlock";
import { motion } from "framer-motion";
import { Activity, Waves, Cpu, Wind, Shield, ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Structural Analysis",
    desc: "End-to-end structural assessment for new and existing telecom infrastructure.",
    bullets: ["Linear & non-linear analysis", "Code compliance: TIA / EN / IS", "Foundation verification"],
  },
  {
    icon: Waves,
    title: "Fatigue & Lifing",
    desc: "Quantify remaining life of legacy towers under decades of cyclic loading.",
    bullets: ["Crack initiation & growth", "Spectrum loading", "Inspection interval planning"],
  },
  {
    icon: Cpu,
    title: "FEA Modelling",
    desc: "Detailed finite element work for connections, joints and complex geometries.",
    bullets: ["Bolted & welded joints", "Plate buckling", "Connection optimisation"],
  },
  {
    icon: Wind,
    title: "CFD Wind Studies",
    desc: "Computational fluid dynamics for accurate wind load distribution.",
    bullets: ["Gust & vortex shedding", "Antenna shielding", "Site-specific terrain"],
  },
  {
    icon: Shield,
    title: "Tower Audit",
    desc: "Climb-based inspection paired with engineering certification report.",
    bullets: ["Visual & dimensional survey", "Coating & corrosion check", "Compliance certificate"],
  },
  {
    icon: ArrowUpRight,
    title: "Upgrade Design",
    desc: "Reinforcement and retrofit design to absorb new equipment loads.",
    bullets: ["5G / MIMO retrofits", "Bracing & strengthening", "Foundation upgrades"],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title={<>Engineering, end-to-end. <span className="text-gradient-gold">No outsourcing.</span></>}
        subtitle="Every discipline you need to design, audit, certify and upgrade telecom towers — under one roof."
      />

      <section className="bg-background py-24">
        <div className="container-wide">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:border-gold/40 hover:shadow-elegant"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/0 transition-all duration-500 group-hover:bg-gold/15 group-hover:blur-2xl" />
                  <div className="flex items-start gap-5">
                    <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-gradient-gold text-navy shadow-glow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold text-navy">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      <ul className="mt-5 space-y-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="h-4 w-4 flex-none text-orange" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBlock />
    </Layout>
  );
};

export default Services;
