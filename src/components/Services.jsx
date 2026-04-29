"use client";

import { motion } from "framer-motion";

function ServiceCard({ title, description, accent, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative liquid-glass p-10 rounded-2xl border border-white/5 transition-all duration-500 group overflow-hidden ${accent ? 'border-t-2 border-t-surface-tint' : 'hover:border-surface-tint/30'}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-surface-tint/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <h3 className="font-headline text-2xl mb-6 font-bold text-white group-hover:text-surface-tint transition-colors">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{description}</p>
      
      <div className="mt-10 flex items-center gap-2 text-surface-tint opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
        <span className="text-xs font-bold uppercase tracking-widest">Learn More</span>
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-surface-tint/5 rounded-full blur-2xl group-hover:bg-surface-tint/10 transition-all" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="px-margin py-lg max-w-7xl mx-auto" id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="font-headline text-4xl md:text-6xl text-on-background mb-6 font-bold tracking-tight">Technical <span className="text-surface-tint">Services</span></h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-xl opacity-60">Architecting high-performance digital ecosystems with a focus on security and scalability.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard index={0} title="Web Engineering" description="Full-stack solutions using React, Next.js and robust cloud architectures." />
        <ServiceCard index={1} title="UI/UX Prototyping" description="High-fidelity interactive prototypes converted into pixel-perfect web interfaces." />
        <ServiceCard index={2} title="Security Audit" description="Comprehensive penetration testing and vulnerability assessments for web apps." accent />
        <ServiceCard index={3} title="Cloud Hardening" description="Expert guidance on infrastructure security and DevSecOps workflows." />
      </div>
    </section>
  );
}
