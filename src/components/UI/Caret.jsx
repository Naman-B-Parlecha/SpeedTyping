import React from "react";
import { easeInOut, motion } from "framer-motion";

export default function Caret() {
  return (
    <motion.div
      aria-hidden={true}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="inline-block bg-amber-200 w-0.5 h-7"
      transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
