import { motion } from "framer-motion";
import feaImg from "@/assets/fea-viz.jpg";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="relative overflow-hidden bg-navy py-28 text-white">
      <div className="absolute inset-0 grid-bg-dark opacity-40" />
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-orange/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

      <div className="container-wide relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Problem → Solution</p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              When old steel meets <span className="text-gradient-gold">new spectrum</span>.
            </h2>
            <p className="mt-5 max-w-lg text-white/70">
              Networks evolve faster than the towers carrying them. We rebuild confidence in legacy assets
              and engineer headroom for the next decade of equipment.
            </p>

            <div className="mt-10 space-y-5">
              <Row
                icon={AlertTriangle}
                tone="orange"
                title="Overloaded legacy towers"
                desc="5G arrays, MIMO panels and microwave dishes pushing structures past their design envelope."
              />
              <Row
                icon={CheckCircle2}
                tone="gold"
                title="Certified, codified, future-proof"
                desc="Reinforcement strategies validated through non-linear FEA — built to TIA, EN and IS codes."
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-elegant">
              <img src={feaImg} alt="FEA structural visualization" loading="lazy" width={1600} height={1200} className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-xl glass-dark px-4 py-3">
                <p className="text-[10px] uppercase tracking-widest text-gold">Live Simulation</p>
                <p className="font-display text-sm font-semibold">Wind load · 180 km/h · von Mises</p>
              </div>
            </div>
            {/* floating chip */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-4 -top-4 hidden rounded-2xl border border-white/10 bg-navy-2 p-4 shadow-elegant md:block"
            >
              <p className="text-[10px] uppercase tracking-widest text-gold">Safety Factor</p>
              <p className="font-display text-3xl font-bold text-white">2.41</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Row = ({ icon: Icon, tone, title, desc }: any) => (
  <div className="flex gap-4">
    <div className={`grid h-10 w-10 flex-none place-items-center rounded-xl ${
      tone === "orange" ? "bg-orange/20 text-orange" : "bg-gold/20 text-gold"
    }`}>
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-display text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-white/60">{desc}</p>
    </div>
  </div>
);
