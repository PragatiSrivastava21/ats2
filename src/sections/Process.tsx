import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Discover", d: "Site survey, drawings, load history and as-built conditions." },
  { n: "02", t: "Model", d: "Geometry digitised, mesh prepared, code parameters defined." },
  { n: "03", t: "Analyse", d: "Linear, non-linear, fatigue and CFD simulations executed." },
  { n: "04", t: "Certify", d: "Engineering report, drawings, calculations and sign-off." },
];

export const Process = () => {
  return (
    <section className="bg-background py-28">
      <div className="container-wide">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Our process</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
            From climb to certificate, in four phases.
          </h2>
        </div>

        <div className="relative">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card shadow-card">
                  <span className="font-display text-lg font-bold text-gradient-gold">{s.n}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy">{s.t}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
