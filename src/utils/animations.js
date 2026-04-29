export const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const revealText = {
  initial: { y: "100%" },
  animate: { y: 0 },
  transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] },
};

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(0, 217, 255, 0.2)",
      "0 0 40px rgba(0, 217, 255, 0.4)",
      "0 0 20px rgba(0, 217, 255, 0.2)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const imageTilt = {
  whileHover: { scale: 1.05, rotate: 1 },
  transition: { type: "spring", stiffness: 300 },
};
