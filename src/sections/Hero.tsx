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
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dolorum atque inventore ratione voluptatum, numquam sint cumque excepturi! Culpa, amet?",
  },
  {
    img: t2,
    alt: "Monopole tower against sky",
    headlinePre: "Monopoles built to",
    headlineAccent: "withstand",
    headlinePost: "every storm.",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aut ratione ut quaerat corrupti possimus eveniet deleniti ex, facilis recusandae?",
  },
  {
    img: t3,
    alt: "Lattice tower inspection",
    headlinePre: "Lattice towers,",
    headlineAccent: "inspected",
    headlinePost: "down to every bolt.",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus a sed obcaecati praesentium corporis ab temporibus totam quasi explicabo asperiores.",
  },
  {
    img: t4,
    alt: "Tower joint detailing",
    headlinePre: "Connection detailing",
    headlineAccent: "engineered",
    headlinePost: "for zero failure.",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum impedit sequi cupiditate assumenda porro, quisquam rerum in soluta repellat praesentium?",
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

          <AnimatePresence mode="wait">
            <motion.h1
              key={`h-${i}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              {slides[i].headlinePre}{" "}
              <span className="relative inline-block">
                <span className="text-gradient-gold">{slides[i].headlineAccent}</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9 Q 50 2, 100 6 T 198 4" stroke="hsl(var(--gold))" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              {slides[i].headlinePost}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`p-${i}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            >
              {slides[i].subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {/* <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-navy shadow-glow transition-all hover:shadow-[0_0_80px_hsl(var(--gold)/0.6)]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link> */}
            {/* <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore Services
            </Link> */}
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
      </div>
    </section>
  );
};
