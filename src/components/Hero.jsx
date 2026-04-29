"use client";

import { motion } from "framer-motion";
import AntigravityBackground from "./AntigravityBackground";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-margin overflow-hidden bg-slate-950">
      <AntigravityBackground />
      
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-4xl text-center z-10"
      >
        <motion.div 
          variants={fadeInUp}
          className="inline-block mb-4 px-4 py-1 rounded-full border border-surface-tint/30 bg-surface-tint/5 text-surface-tint text-label-caps font-headline text-xs tracking-widest"
        >
          ELITE WEB DEVELOPMENT & SECURITY
        </motion.div>
        
        <motion.h1 
          variants={fadeInUp}
          className="font-headline text-6xl md:text-8xl text-on-background mb-6 font-bold tracking-tighter"
        >
          Building Fast, Modern <br />
          <span className="text-surface-tint drop-shadow-[0_0_15px_rgba(0,217,255,0.3)]">Secure Solutions</span>
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Premium Web Developer crafting high-performance, visually stunning, and architecturally hardened digital experiences.
        </motion.p>
        
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="relative group bg-primary-container text-on-primary-container font-headline font-bold px-10 py-5 rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            <div className="absolute inset-0 neo-glow-border opacity-50" />
          </button>
          
          <button className="liquid-glass text-on-surface font-headline font-bold px-10 py-5 rounded-lg hover:bg-white/10 transition-all border border-white/10 active:scale-95">
            View Case Studies
          </button>
        </motion.div>
      </motion.div>

      {/* Parallax Decorative Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-64 h-64 bg-surface-tint/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
}
