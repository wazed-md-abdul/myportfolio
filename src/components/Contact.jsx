"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  return (
    <section className="px-margin py-lg max-w-5xl mx-auto" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-headline text-5xl md:text-7xl text-on-background mb-6 font-bold tracking-tighter">Initialize <span className="text-surface-tint">Contact</span></h2>
        <p className="text-on-surface-variant text-xl opacity-60">Ready to build the next generation of secure web apps? Let's connect.</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="liquid-glass p-8 md:p-16 rounded-3xl glow-accent border border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <span className="material-symbols-outlined text-9xl">alternate_email</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-headline text-xs font-bold uppercase tracking-[0.2em] block mb-2 opacity-50 ml-1">Identity</label>
              <input 
                required
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl p-5 text-on-surface focus:border-surface-tint focus:ring-1 focus:ring-surface-tint/50 outline-none transition-all placeholder:opacity-20" 
                placeholder="user@network" 
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-headline text-xs font-bold uppercase tracking-[0.2em] block mb-2 opacity-50 ml-1">Protocol</label>
              <input 
                required
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl p-5 text-on-surface focus:border-surface-tint focus:ring-1 focus:ring-surface-tint/50 outline-none transition-all placeholder:opacity-20" 
                placeholder="client@protocol.com" 
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-headline text-xs font-bold uppercase tracking-[0.2em] block mb-2 opacity-50 ml-1">Transmission</label>
            <textarea 
              required
              className="w-full bg-slate-950/60 border border-white/10 rounded-xl p-5 text-on-surface focus:border-surface-tint focus:ring-1 focus:ring-surface-tint/50 outline-none transition-all placeholder:opacity-20 resize-none" 
              placeholder="Detailed brief of your requirements..." 
              rows={5}
            ></textarea>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className={`w-full font-headline font-bold py-5 rounded-xl transition-all relative overflow-hidden flex items-center justify-center gap-3 ${
              isSent ? "bg-green-500 text-white" : "bg-primary-container text-on-primary-container"
            }`} 
            type="submit"
          >
            {isSubmitting ? (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-on-primary-container border-t-transparent rounded-full"
              />
            ) : isSent ? (
              <>
                <span className="material-symbols-outlined">check_circle</span>
                Transmission Successful
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">send</span>
                Execute Transmission
              </>
            )}
            
            {!isSent && !isSubmitting && <div className="absolute inset-0 neo-glow-border opacity-30" />}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
