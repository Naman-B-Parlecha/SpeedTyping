import React from "react";
import { motion } from "framer-motion";
import { Formatter } from "../../utils/accuracyFormatter.jsx";

export default function ResultModal({ erros, accuracy, characters }) {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };
  return (
    <motion.ul className="flex flex-col items-center text-amber-200 space-y-4">
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0 }}
        className="text-xl font-semibold"
      >
        Result Modal
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}
      >
        Accuracy: {Formatter(10)}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1 }}
        className="text-red-500"
      >
        Errors: 10
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.5 }}
      >
        Characters: 56
      </motion.li>
    </motion.ul>
  );
}
