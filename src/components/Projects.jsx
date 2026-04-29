"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function ProjectCard({ title, description, tags, image, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="group relative"
    >
      <div className="relative rounded-2xl overflow-hidden mb-8 liquid-glass aspect-[16/10] border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-surface-tint/30">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex gap-4 mb-4">
            {tags.map(tag => (
              <span key={tag} className="font-headline text-[10px] font-bold tracking-widest text-surface-tint bg-surface-tint/10 px-3 py-1 rounded-full border border-surface-tint/20 uppercase">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-2">
        <h3 className="font-headline text-3xl mb-3 font-bold text-white group-hover:text-surface-tint transition-colors flex items-center gap-3">
          {title}
          <span className="material-symbols-outlined text-xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">arrow_forward</span>
        </h3>
        <p className="text-on-surface-variant text-lg mb-6 leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{description}</p>
        
        <motion.button 
          whileHover={{ x: 10 }}
          className="text-surface-tint font-headline text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn"
        >
          View Case Study 
          <div className="w-10 h-[1px] bg-surface-tint/30 group-hover/btn:w-20 transition-all" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="px-margin py-lg" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-5xl md:text-7xl text-on-background font-bold tracking-tighter">Featured <br /> <span className="text-surface-tint">Production</span></h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-on-surface-variant max-w-md text-xl leading-relaxed opacity-60 mt-8 md:mt-0"
          >
            A curated selection of high-performance web applications and security-focused platforms.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <ProjectCard 
            index={0}
            title="Quantum SaaS"
            description="Enterprise monitoring platform with real-time data streaming and advanced visualization."
            tags={["Next.js", "WebGL", "Security"]}
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCgD5HLAO1RH780lbbabbxaZHHQmTNQgn3Y8PXcZWCowjP3U2yys0Dqes_YtjYMqjE41HBuJVPZisjckuermTGHOQKF4i7Z3zLncL6X8nA4rSy6bPPpqxQaa_SZhEhPTn8197rmaAz7Si6yEznz_YCXs7Ntm0cHlyYIEL4m8dboOTnZCYGvrbHejNYahYje0di9WvVOmyzxb5b-n3Q_cN9HuEhv0VKYjXJupWtgz4SAAgXGNJPhPmXJuBMr1shi9u-7nOiVXldTcXM"
          />
          <ProjectCard 
            index={1}
            title="Astra Commerce"
            description="Premium eCommerce experience with bespoke animations and fortified checkout security."
            tags={["React", "Stripe", "Auth"]}
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuD0f5FjJNHHex9qx8TSvucDH5NGQpamRdhzPj1j4jB41UXDBALiK78pfgPyJVY7na0vvlrHscPTkW63BOh4ZbZU-d1-QF4-XrmPh0o3EZ4XzAmKjHCFE4ADz1hngCDXcMwUqWDyxZBx8-tVhIBTf3FibfbeI0gI2lL903VPM-kkNGmhC07TeU-Hc1WOy4rbQDemjm07aJlh9qrQ-28U7MbqzOxD_QbaTrAtHi9BZOHx7plLg9_psfZQoCxBte1ufroyvZZUY6E8byM"
          />
        </div>
      </div>
    </section>
  );
}
