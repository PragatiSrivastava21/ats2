import { motion } from "framer-motion";

const stats = [
  { k: "1,200+", v: "Towers analysed" },
  { k: "18", v: "Countries served" },
  { k: "50 yrs", v: "Design service life" },
  { k: "99.98%", v: "On-time delivery" },
];

const logos = ["Airtel", "Jio", "Vodafone", "Nokia", "Ericsson", "American Tower", "Indus Towers", "BSNL"];

export const Trust = () => {
  return (
    <section className="bg-background py-24">
      <div className="container-wide">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-card sm:p-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Trusted by</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
                Operators, EPCs and tower companies — globally.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.v}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <div className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">{s.k}</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{s.v}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="mx-10 font-display text-2xl font-semibold text-muted-foreground/50 transition hover:text-navy">
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
