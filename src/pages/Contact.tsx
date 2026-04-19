import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Message sent — we'll be in touch within 24h.");
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s engineer something <span className="text-gradient-gold">that lasts</span>.</>}
        subtitle="Tell us about your tower, network or project. A senior engineer will respond within one business day."
      />

      <section className="bg-background py-24">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
              <h2 className="font-display text-2xl font-semibold text-navy">Send a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">All fields except phone are required.</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" value={form.name} onChange={handle} placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handle} placeholder="jane@company.com" />
                <Field label="Phone (optional)" name="phone" value={form.phone} onChange={handle} placeholder="+91 98xxx xxxxx" />
                <div className="hidden sm:block" />
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handle}
                    placeholder="Tell us about the tower, the loads and what you need."
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-0 transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:bg-navy-2"
              >
                {sent ? <><CheckCircle2 className="h-4 w-4 text-gold" /> Sent</> : <>Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-navy p-8 text-white shadow-elegant sm:p-10">
              <h3 className="font-display text-xl font-semibold">Reach us directly</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <Info icon={MapPin} title="Headquarters" v="Engineering HQ, Pune, Maharashtra, India" />
                <Info icon={Mail} title="Email" v="hello@atss.engineering" />
                <Info icon={Phone} title="Phone" v="+91 98XX XXX XXX" />
              </ul>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[4/3] bg-navy-2">
                  <div className="absolute inset-0 grid-bg-dark opacity-60" />
                  <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-gold shadow-glow">
                        <MapPin className="h-6 w-6 text-navy" />
                      </div>
                      <p className="mt-3 text-sm text-white/70">Map placeholder</p>
                      <p className="text-xs text-white/50">18.52° N · 73.85° E</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

const Field = ({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
  <div>
    <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</label>
    <input
      {...props}
      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
    />
  </div>
);

const Info = ({ icon: Icon, title, v }: any) => (
  <li className="flex items-start gap-4">
    <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-white/10 text-gold">
      <Icon className="h-4 w-4" />
    </div>
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-gold">{title}</p>
      <p className="mt-0.5 text-white/85">{v}</p>
    </div>
  </li>
);

export default Contact;
