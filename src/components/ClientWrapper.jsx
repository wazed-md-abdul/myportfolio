"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useLenis from "@/hooks/useLenis";
import CustomCursor from "@/components/CustomCursor";

export default function ClientWrapper({ children }) {
  useLenis();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(currentProgress / scrollHeight);
      }
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <>
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-surface-tint origin-left z-[100]"
        style={{ scaleX: progress }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
