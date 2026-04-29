"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
              ? "py-3 px-8"
              : "py-6 px-12"
            }`}
        >
          <div className={`max-w-7xl mx-auto flex justify-between items-center px-8 py-4 rounded-full transition-all duration-500 ${scrolled
              ? "bg-slate-950/60 backdrop-blur-xl border border-white/10 shadow-2xl"
              : "bg-transparent"
            }`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_8px_rgba(0,217,255,0.5)] cursor-pointer"
            >
              ANTIGRAVITY
            </motion.div>

            <div className="hidden md:flex items-center space-x-10 font-headline text-xs font-bold uppercase tracking-widest text-slate-400">
              {["About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ color: "#00d9ff", y: -2 }}
                  className="transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4">


              <button className="hidden lg:block bg-surface-tint/10 text-surface-tint border border-surface-tint/30 px-5 py-2 rounded-full font-headline text-[10px] font-bold uppercase tracking-widest hover:bg-surface-tint hover:text-on-primary-container transition-all">
                Let's Talk
              </button>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
