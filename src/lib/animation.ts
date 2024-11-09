export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
export const wordAnimation = {
  initial: {
    y: 70,
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7,
    },
  },
  exit: {
    scale: 0.6,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.5,
    },
  },
};
