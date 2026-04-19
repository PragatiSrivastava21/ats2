import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/sections/CtaBlock";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import t1 from "@/assets/tower-1.jpg";
import t2 from "@/assets/tower-2.jpg";
import t3 from "@/assets/tower-3.jpg";
import t4 from "@/assets/tower-4.jpg";
import fea from "@/assets/fea-viz.jpg";

const posts = [
  { img: fea, cat: "Engineering", date: "Apr 14, 2026", read: "8 min", title: "Why fatigue is the silent killer of legacy telecom towers" },
  { img: t2, cat: "Field Notes", date: "Apr 02, 2026", read: "5 min", title: "What 600 climbs taught us about anchor bolt corrosion" },
  { img: t3, cat: "5G", date: "Mar 18, 2026", read: "6 min", title: "Designing for MIMO: load studies that actually work" },
  { img: t4, cat: "Connections", date: "Mar 04, 2026", read: "7 min", title: "Bolted joint optimisation across a portfolio" },
  { img: t1, cat: "Codes", date: "Feb 22, 2026", read: "10 min", title: "TIA-222-H vs EN 1993: a practical comparison" },
  { img: t2, cat: "CFD", date: "Feb 09, 2026", read: "9 min", title: "Vortex shedding on slender monopoles: a CFD walkthrough" },
];

const Blog = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Blog"
        title={<>Notes from the <span className="text-gradient-gold">field & the simulator</span>.</>}
        subtitle="Engineering essays, codes deep-dives and lessons learned across our project portfolio."
      />

      <section className="bg-background py-24">
        <div className="container-wide">
          {/* Featured */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group mb-12 grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:shadow-elegant lg:grid-cols-12"
          >
            <div className="relative aspect-[16/9] overflow-hidden lg:col-span-7 lg:aspect-auto">
              <img src={posts[0].img} alt={posts[0].title} loading="lazy" width={1600} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy">Featured</span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{posts[0].cat}</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">{posts[0].title}</h2>
              <p className="mt-4 text-muted-foreground">A deep dive into how cyclic loads silently erode the safety margins of telecom towers — and how to plan inspections accordingly.</p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{posts[0].date}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {posts[0].read}</span>
              </div>
            </div>
          </motion.a>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((p, i) => (
              <motion.a
                href="#"
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-elegant"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={500} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest">
                    <span className="text-orange">{p.cat}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{p.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy">{p.title}</h3>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-navy/60 transition-colors group-hover:text-orange">
                    Read article <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </Layout>
  );
};

export default Blog;
