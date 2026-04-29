"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="px-margin py-lg bg-slate-950" id="experience">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl md:text-6xl text-on-background mb-20 text-center font-bold tracking-tight"
        >
          Expertise & <span className="text-surface-tint">Values</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BentoCard 
            index={0}
            span="md:col-span-2"
            icon="architecture"
            title="Clean Code Architecture"
            description="Building maintainable, modular, and high-performance applications using the latest industry standards and design patterns."
            accent
          />
          <BentoCard 
            index={1}
            icon="responsive_layout"
            title="Responsive UI"
            description="Seamless experiences across all devices, from mobile to ultra-wide displays."
          />
          <BentoCard 
            index={2}
            icon="shield_with_heart"
            title="Security Mindset"
            description="Proactive security integration from initial design to final deployment."
          />
          <BentoCard 
            index={3}
            span="md:col-span-2"
            icon="lightbulb"
            title="Problem Solving"
            description="Transforming complex business requirements into elegant, functional digital products with a focus on UX efficiency."
            accent
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({ icon, title, description, span = "", accent, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.01 }}
      className={`${span} liquid-glass p-10 rounded-3xl border border-white/5 group hover:border-surface-tint/20 transition-all duration-500 relative overflow-hidden ${accent ? 'glow-accent' : ''}`}
    >
      <div className="relative z-10">
        <span className="material-symbols-outlined text-surface-tint text-5xl mb-8 block group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">{icon}</span>
        <h3 className="font-headline text-2xl mb-4 font-bold text-white">{title}</h3>
        <p className="text-on-surface-variant text-lg leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{description}</p>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-surface-tint/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
