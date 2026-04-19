import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/sections/CtaBlock";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import t1 from "@/assets/tower-1.jpg";
import t2 from "@/assets/tower-2.jpg";
import t3 from "@/assets/tower-3.jpg";
import t4 from "@/assets/tower-4.jpg";
import fea from "@/assets/fea-viz.jpg";

const projects = [
  { img: t2, tag: "Cyclone Retrofit · Coastal India", title: "Monopole reinforced for 220 km/h gust", k: "+38% capacity", body: "Site-specific CFD, base plate redesign, anchor bolt retrofit." },
  { img: fea, tag: "FEA · Pan-India", title: "Fatigue lifing of 600+ legacy towers", k: "600 sites", body: "Spectrum-load analysis with code-aligned remaining life report." },
  { img: t3, tag: "5G Upgrade · Africa", title: "MIMO array load study & strengthening", k: "12 sites", body: "Equipment loading model with bracing optimisation." },
  { img: t4, tag: "Joint Design · Middle East", title: "Bolted connection optimisation programme", k: "−22% fatigue", body: "Plate stress reduction across portfolio of monopoles." },
  { img: t1, tag: "Audit · South Asia", title: "Annual climb-and-certify programme", k: "240 climbs/yr", body: "End-to-end inspection with certified engineering reports." },
];

const Work = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Work"
        title={<>Real towers. Real loads. <span className="text-gradient-gold">Real results.</span></>}
        subtitle="A snapshot of recent engagements across structural, fatigue and CFD disciplines."
      />

      <section className="bg-background py-24">
        <div className="container-wide space-y-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.04 }}
              className={`grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:grid-cols-2 lg:items-stretch ${
                i % 2 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                <img src={p.img} alt={p.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full glass-dark px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">
                  {p.tag}
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="font-display text-4xl font-bold text-gradient-gold">{p.k}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-navy sm:text-3xl">{p.title}</h3>
                <p className="mt-4 text-muted-foreground">{p.body}</p>
                <a href="#" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  Read case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CtaBlock />
    </Layout>
  );
};

export default Work;
