"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function About() {
  return (
    <section className="px-margin py-lg max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-surface-tint/10 blur-2xl rounded-xl group-hover:bg-surface-tint/20 transition-all duration-500"></div>
          <motion.div 
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2D7OU9AiKf_YB9FJOzxMNZzmJvCbLNsaqIlfEJdBw8fHoQMf1kDmNUYRNU2dSI8f_RKUq8pMnbtfOf0oU67xB2kfru9K-wGXO1IfgD5p7ARvAo4y22wmLcQRpqaFqWBb-oiS28MTjwf62NNmFIi3PKQSVZMAHqOfE7laAVjmPL41EfOvNe3HwWiGi78QnM93P-7otJ1pr36WAnoP_p70Mr83_rtMsJC51vhH_6apG7luAlz__Iy-LGj5NcqAUV3YPVl5h3gIoAo4"
              alt="About Me"
              width={800}
              height={600}
              className="grayscale hover:grayscale-0 transition-all duration-1000 object-cover scale-110 group-hover:scale-100"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2 variants={fadeInUp} className="font-headline text-3xl md:text-6xl text-on-background mb-8 font-bold leading-tight">
            {/* KEYWORD: About Heading */}
            Pioneering <span className="text-surface-tint underline decoration-surface-tint/30 underline-offset-8">Secure</span> Web Solutions
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-on-surface-variant mb-8 leading-relaxed opacity-80">
            {/* KEYWORD: About Description 1 */}
            I bridge the gap between aesthetic excellence and iron-clad security. My approach is client-centric, focusing on delivering scalable platforms that are architected to withstand the evolving digital landscape.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-on-surface-variant mb-12 leading-relaxed opacity-80">
            {/* KEYWORD: About Description 2 */}
            By integrating DevSecOps principles into the development lifecycle, I ensure every line of code is optimized for performance and hardened against vulnerabilities.
          </motion.p>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-10">
            <div className="border-l-2 border-surface-tint pl-6">
              <div className="text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Projects Delivered</div>
            </div>
            <div className="border-l-2 border-surface-tint pl-6">
              <div className="text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Security Compliance</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
