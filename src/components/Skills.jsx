"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

function SkillCategory({ title, skills, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="liquid-glass p-8 rounded-2xl border border-white/10 hover:border-surface-tint/50 transition-colors group"
    >
      <h3 className="font-headline text-xs font-bold text-surface-tint mb-8 uppercase tracking-[0.2em] group-hover:scale-105 transition-transform origin-left">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.span 
            key={skill} 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 217, 255, 0.15)", color: "#fff" }}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-on-surface-variant font-medium transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="px-margin py-lg max-w-7xl mx-auto" id="skills">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-headline text-4xl md:text-5xl text-on-background mb-16 text-center font-bold"
      >
        Technical <span className="text-surface-tint">Arsenal</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory index={0} title="Languages" skills={["JavaScript", "Python", "C++", "Java", "SQL"]} />
        <SkillCategory index={1} title="Frontend" skills={["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"]} />
        <SkillCategory index={2} title="Backend & Auth" skills={["Node.js", "Better Auth", "JWT", "OAuth", "Stripe"]} />
        <SkillCategory index={3} title="Databases" skills={["MongoDB", "PostgreSQL", "MySQL", "Redis"]} />
        <SkillCategory index={4} title="DevSecOps" skills={["Linux", "Docker", "Git", "PenTesting", "SSH"]} />
        <SkillCategory index={5} title="Tools" skills={["VS Code", "Figma", "pnpm", "Postman", "Vercel"]} />
      </div>
    </section>
  );
}
