"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 py-12 md:py-20 bg-slate-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20 mb-16 md:mb-20">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-md"
           >
              {/* KEYWORD: Brand Logo Text */}
              <div className="text-2xl font-black tracking-tighter text-cyan-400 mb-6">
                 ANTIGRAVITY
              </div>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed opacity-60">
                 {/* KEYWORD: Footer Description */}
                 Crafting elite digital experiences where technical precision meets security-first engineering. Based in the digital frontier.
              </p>
           </motion.div>

           <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 w-full md:w-auto">
              <FooterSection title="Navigation" links={["About", "Skills", "Projects", "Services"]} />
              <FooterSection title="Social" links={["LinkedIn", "GitHub", "Twitter", "Email"]} />
              <div className="hidden lg:block">
                 <h4 className="font-headline text-[10px] font-bold uppercase tracking-widest text-white mb-6">Status</h4>
                 <div className="flex items-center gap-2 text-green-500">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Operational</span>
                 </div>
              </div>
           </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 gap-6"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-slate-600 text-center md:text-left">
            {/* KEYWORD: Copyright Name */}
            © {currentYear} Liquid Glass Systems. All rights reserved.
          </div>
          <div className="flex gap-6 md:gap-8 text-[10px] uppercase tracking-[0.3em] font-mono text-slate-600">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decorative Text */}
      {/* KEYWORD: Background Large Text */}
      <div className="absolute bottom-0 left-0 text-[12vw] font-black text-white/[0.01] -translate-x-10 translate-y-16 md:translate-y-20 select-none pointer-events-none">
         ANTIGRAVITY
      </div>
    </footer>
  );
}

function FooterSection({ title, links }) {
  return (
    <div>
      <h4 className="font-headline text-[10px] font-bold uppercase tracking-widest text-white mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map(link => (
          <li key={link}>
            <a 
              href={`#${link.toLowerCase()}`}
              className="text-on-surface-variant text-sm opacity-60 hover:opacity-100 hover:text-cyan-400 transition-all block"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
