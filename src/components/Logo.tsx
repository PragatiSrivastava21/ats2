import { motion } from "framer-motion";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-2.5">
    <div className="relative">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-gold shadow-glow"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-navy" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L18 22 H6 Z" />
          <path d="M9 14 H15" />
          <circle cx="12" cy="6" r="1.5" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
    <div className="flex flex-col leading-none">
      <span className={`font-display text-lg font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>ATSS</span>
      <span className={`text-[9px] uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-muted-foreground"}`}>Tower Engineering</span>
    </div>
  </div>
);
