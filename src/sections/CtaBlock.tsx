import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CtaBlock = () => {
  return (
    <section className="bg-background pb-28 pt-12">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white shadow-elegant sm:p-16"
        >
          <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
          <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gold/15 blur-[120px]" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Ready when you are</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Bring us your hardest tower.{" "}
                <span className="text-gradient-gold">We&apos;ll bring the math.</span>
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Get a free 30-minute consult with a senior structural engineer.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link to="/about" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-navy shadow-glow">
                Learn about us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur">
                See services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
