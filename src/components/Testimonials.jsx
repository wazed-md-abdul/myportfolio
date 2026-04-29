"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "The integration of security best practices into our frontend redesign was seamless. We didn't just get a faster website; we got a fortress.",
    author: "Marcus Chen",
    role: "CTO, Nebula Labs"
  },
  {
    quote: "The Antigravity background and fluid animations brought our brand to life in ways we didn't think possible. Truly elite work.",
    author: "Sarah Jenkins",
    role: "Founder, Quantum AI"
  },
  {
    quote: "Professional, security-conscious, and incredibly fast. The technical depth and eye for detail are unmatched in the industry.",
    author: "David Ross",
    role: "Head of Engineering, SecureStream"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-margin py-lg bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl text-on-background mb-16 text-center font-bold"
        >
          Trusted By <span className="text-surface-tint">Industry Leaders</span>
        </motion.h2>
        
        <div className="relative min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.6 }}
              className="liquid-glass p-12 md:p-16 rounded-3xl relative border border-white/10 text-center shadow-2xl"
            >
              <span className="material-symbols-outlined absolute -top-8 left-1/2 -translate-x-1/2 text-7xl text-surface-tint/20">format_quote</span>
              
              <p className="text-2xl md:text-3xl italic mb-10 relative z-10 leading-relaxed font-light opacity-90">
                "{testimonials[index].quote}"
              </p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-surface-tint to-cyan-200 p-1 shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                   <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-white uppercase tracking-tighter">
                      {testimonials[index].author[0]}
                   </div>
                </div>
                <div>
                  <div className="font-bold text-white text-xl">{testimonials[index].author}</div>
                  <div className="font-headline text-surface-tint text-xs font-bold uppercase tracking-widest mt-1 opacity-80">{testimonials[index].role}</div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute -bottom-10 flex gap-3">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${i === index ? "bg-surface-tint w-8" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
