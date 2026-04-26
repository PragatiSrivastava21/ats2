import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Radio } from "lucide-react";
import t1 from "@/assets/tower-1.jpg";
import t2 from "@/assets/tower-2.jpg";
import t3 from "@/assets/tower-3.jpg";
import t4 from "@/assets/tower-4.jpg";

const slides = [
  {
    img: t1,
    alt: "Telecom tower at twilight",
    headlinePre: "Engineering the",
    headlineAccent: "backbone",
    headlinePost: "of modern connectivity.",
    subtitle:
      "Specialist structural, fatigue and FEA/CFD engineering for telecom towers. We turn complex loads into safe, certified, future-ready infrastructure.",
  },
  {
    img: t2,
    alt: "Monopole tower against sky",
    headlinePre: "Monopoles built to",
    headlineAccent: "withstand",
    headlinePost: "every storm.",
    subtitle:
      "Wind, ice and seismic loads modelled to international codes — delivering slender monopole designs that stay vertical for decades.",
  },
  {
    img: t3,
    alt: "Lattice tower inspection",
    headlinePre: "Lattice towers,",
    headlineAccent: "inspected",
    headlinePost: "down to every bolt.",
    subtitle:
      "Detailed structural audits, fatigue assessments and retrofit plans that extend the service life of legacy lattice assets.",
  },
  {
    img: t4,
    alt: "Tower joint detailing",
    headlinePre: "Connection detailing",
    headlineAccent: "engineered",
    headlinePost: "for zero failure.",
    subtitle:
      "Joint-level FEA, weld and bolt verification — because the smallest detail decides whether a tower stands or falls.",
  },
];

export const Hero = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative -mt-24 min-h-[100svh] overflow-hidden bg-navy text-white">
      {/* Slider background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slides[i].img}
              alt={slides[i].alt}
              width={1920}
              height={1280}
              className="h-full w-full object-cover opacity-60"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-transparent" />
      </div>

      {/* Mesh / glow */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]" />

      {/* Signal rings */}
      <div className="pointer-events-none absolute right-[12%] top-[28%] hidden lg:block">
        <div className="relative h-3 w-3">
          <div className="absolute inset-0 rounded-full bg-gold shadow-glow" />
          <div className="signal-ring inset-0 h-3 w-3" />
          <div className="signal-ring inset-0 h-3 w-3" style={{ animationDelay: "1s" }} />
          <div className="signal-ring inset-0 h-3 w-3" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      {/* Content */}
      <div className="container-wide relative flex min-h-[100svh] items-center pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur"
          >
            <Radio className="h-3.5 w-3.5 text-gold" />
            Trusted by operators across 18 countries
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Engineering the{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold">backbone</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 9 Q 50 2, 100 6 T 198 4" stroke="hsl(var(--gold))" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            of modern connectivity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Specialist structural, fatigue and FEA/CFD engineering for telecom towers. We turn complex loads
            into safe, certified, future-ready infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-navy shadow-glow transition-all hover:shadow-[0_0_80px_hsl(var(--gold)/0.6)]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Talk to an Engineer
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              { k: "1,200+", v: "Towers Engineered" },
              { k: "18", v: "Countries Served" },
              { k: "99.98%", v: "Uptime Standard" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-white sm:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs text-white/55">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute right-6 top-32 z-10 flex gap-2 sm:right-10">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur transition hover:bg-white/15"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur transition hover:bg-white/15"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === idx ? "w-10 bg-gold" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs text-white/40"
        >
          ↓ scroll
        </motion.div>
      </div>
    </section>
  );
};
