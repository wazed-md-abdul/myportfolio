"use client";

import { motion } from "framer-motion";

function SecurityItem({ icon, title, description, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-surface-tint/20 transition-all group"
    >
      <div className="w-14 h-14 rounded-xl bg-surface-tint/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-surface-tint/20 transition-all">
        <span className="material-symbols-outlined text-surface-tint text-3xl">{icon}</span>
      </div>
      <div>
        <h4 className="font-bold text-white text-xl mb-2">{title}</h4>
        <p className="text-on-surface-variant leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Security() {
  return (
    <section className="px-margin py-lg bg-slate-900/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-8 text-surface-tint px-4 py-2 bg-surface-tint/5 rounded-full border border-surface-tint/20"
        >
          <span className="material-symbols-outlined text-xl">verified_user</span>
          <span className="font-headline font-bold tracking-[0.2em] text-[10px] uppercase">Fortified Engineering</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl md:text-5xl mb-16 font-bold text-white tracking-tight"
        >
          Hardened Security <span className="text-surface-tint">Protocols</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <SecurityItem index={0} icon="code_off" title="Secure Coding" description="Implementation of OWASP Top 10 mitigation strategies and input sanitation." />
          <SecurityItem index={1} icon="terminal" title="Hardened Linux" description="Server-side security, SSH protocols, and encrypted data transmission." />
          <SecurityItem index={2} icon="key" title="Auth Systems" description="Advanced JWT, OAuth2, and multi-factor authentication architectures." />
          <SecurityItem index={3} icon="security_update_good" title="Web Policies" description="Strict CORS, Content Security Policy (CSP), and SSL/TLS configuration." />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-surface-tint/5 rounded-full blur-[120px] -translate-x-1/2 -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px] translate-x-1/4 -z-0" />
    </section>
  );
}
