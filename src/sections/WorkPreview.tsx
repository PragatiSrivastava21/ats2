import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import t2 from "@/assets/tower-2.jpg";
import t3 from "@/assets/tower-3.jpg";
import t4 from "@/assets/tower-4.jpg";

const cases = [
  { img: t2, tag: "Cyclone Retrofit", title: "Coastal monopole reinforced for 220 km/h gust", k: "+38% capacity" },
  { img: t3, tag: "5G Upgrade", title: "Lattice tower re-engineered for MIMO arrays", k: "12 sites" },
  { img: t4, tag: "Joint Redesign", title: "Bolted connection optimisation across portfolio", k: "−22% fatigue" },
];

export const WorkPreview = () => {
  return (
    <section className="bg-background py-28">
      <div className="container-wide">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Our work</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
              Selected case studies.
            </h2>
          </div>
          <Link to="/work" className="group inline-flex items-center gap-2 text-sm font-semibold text-navy">
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full glass-dark px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">
                  {c.tag}
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                  <p className="font-display text-sm font-semibold">{c.k}</p>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-navy">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
