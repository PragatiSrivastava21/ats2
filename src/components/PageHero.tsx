import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

export const PageHero = ({ eyebrow, title, subtitle }: PageHeroProps) => (
  <section className="relative -mt-24 overflow-hidden bg-navy pb-20 pt-44 text-white">
    <div className="absolute inset-0 grid-bg-dark opacity-40" />
    <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
    <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]" />

    <div className="container-wide relative">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);
