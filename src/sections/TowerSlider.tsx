import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import t1 from "@/assets/tower-1.jpg";
import t2 from "@/assets/tower-2.jpg";
import t3 from "@/assets/tower-3.jpg";
import t4 from "@/assets/tower-4.jpg";

const slides = [
  { img: t2, eyebrow: "Macro Sites", title: "Designed for the long horizon", caption: "Monopole and lattice towers engineered for 50-year service life." },
  { img: t3, eyebrow: "Inspection & Audit", title: "Climbed, measured, certified", caption: "Field-validated digital twins of every joint, weld and bolt." },
  { img: t4, eyebrow: "Joint Detailing", title: "Where stress meets steel", caption: "Connection design with full FEA validation to global codes." },
  { img: t1, eyebrow: "Network Resilience", title: "Built to survive the worst day", caption: "Cyclone, ice and seismic-rated structural performance." },
];

export const TowerSlider = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-background py-24">
      <div className="container-wide">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Field Portfolio</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold text-navy sm:text-5xl">
              Steel, signal & sky.
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            A glimpse of the structures we analyse, audit and re-engineer every week.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl shadow-elegant">
          <div className="relative aspect-[16/9] w-full bg-navy">
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
                  alt={slides[i].title}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`txt-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-2xl text-white"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{slides[i].eyebrow}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{slides[i].title}</h3>
                  <p className="mt-2 max-w-md text-sm text-white/70">{slides[i].caption}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute right-6 top-6 flex gap-2">
              <button onClick={prev} aria-label="Previous slide" className="grid h-11 w-11 place-items-center rounded-full glass-dark text-white transition hover:bg-white/20">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} aria-label="Next slide" className="grid h-11 w-11 place-items-center rounded-full glass-dark text-white transition hover:bg-white/20">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 right-8 hidden items-center gap-2 sm:flex">
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
          </div>
        </div>
      </div>
    </section>
  );
};
