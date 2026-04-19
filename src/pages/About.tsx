import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CtaBlock } from "@/sections/CtaBlock";
import { motion } from "framer-motion";
import t3 from "@/assets/tower-3.jpg";

const values = [
  { t: "Engineering first", d: "Every recommendation is backed by calculation, not guesswork." },
  { t: "Field-grounded", d: "We climb the towers we model. Reality always wins over assumption." },
  { t: "Code-aligned", d: "TIA-222, EN 1993, IS 802 — designs certified to global standards." },
  { t: "Lifecycle thinking", d: "We design for the next 50 years, not the next site visit." },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="About ATSS"
        title={<>Specialist engineers for the <span className="text-gradient-gold">towers that carry the world</span>.</>}
        subtitle="We are a niche engineering practice serving telecom operators, EPCs and tower companies with structural, fatigue and CFD work."
      />

      <section className="bg-background py-24">
        <div className="container-wide grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Our story</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy">Built by engineers, for engineers.</h2>
            <p className="mt-5 text-muted-foreground">
              ATSS was founded by a small team of structural specialists who saw the same problem repeated across
              the telecom sector — networks evolving faster than the steel carrying them. We exist to close that gap.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today we work with tower companies and operators on four continents, delivering analysis, audit and
              upgrade design that operators can stand behind — literally.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat k="2014" v="Founded" />
              <Stat k="42" v="Engineers" />
              <Stat k="18" v="Countries" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={t3} alt="Engineer at work" loading="lazy" width={1920} height={1080} className="w-full" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-elegant md:block">
              <p className="text-[10px] uppercase tracking-widest text-orange">Mission</p>
              <p className="mt-2 max-w-xs font-display text-sm font-semibold text-navy">
                Make every tower stronger, safer and ready for what comes next.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="container-wide">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Our values</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy">What we hold ourselves to.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <div className="font-display text-3xl font-bold text-gradient-gold">0{i + 1}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </Layout>
  );
};

const Stat = ({ k, v }: { k: string; v: string }) => (
  <div>
    <div className="font-display text-2xl font-bold text-navy">{k}</div>
    <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{v}</div>
  </div>
);

export default About;
