"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isLoading: boolean;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const spinnerVariants = {
  initial: { rotate: 0 },
  rotate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "linear",
    },
  },
};

const LoadingScreen: React.FC<Props> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed left-0 top-0 z-30 flex h-screen w-screen flex-col items-center justify-center bg-black text-white"
          variants={containerVariants}
          initial="visible"
          exit="exit"
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="h-12 w-12 rounded-full border-4 border-b-transparent border-l-transparent border-r-transparent border-t-white"
            variants={spinnerVariants}
            initial="initial"
            animate="rotate"
          ></motion.div>
          <motion.h1 className="mt-4 font-league text-4xl tracking-wider">
            Loading...
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
