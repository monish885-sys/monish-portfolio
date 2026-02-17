"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ROLES = ["AI Engineer", "QA Specialist", "Fintech Enthusiast"];

export function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const role = ROLES[index];
    if (!reverse && subIndex < role.length) {
      const timeout = setTimeout(() => setSubIndex((s) => s + 1), 80);
      return () => clearTimeout(timeout);
    }
    if (!reverse && subIndex === role.length) {
      const timeout = setTimeout(() => setReverse(true), 1800);
      return () => clearTimeout(timeout);
    }
    if (reverse && subIndex > 0) {
      const timeout = setTimeout(() => setSubIndex((s) => s - 1), 45);
      return () => clearTimeout(timeout);
    }
    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((i) => (i + 1) % ROLES.length);
    }
  }, [index, subIndex, reverse]);

  const display = ROLES[index].slice(0, subIndex);

  const suffix =
    index === 0
      ? " | QA Specialist | Fintech Enthusiast"
      : index === 1
        ? " | Fintech Enthusiast"
        : "";

  return (
    <span className="min-h-[1.5em] inline-block text-blue-400">
      {display}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="inline-block w-0.5 h-[1em] align-middle bg-blue-400 ml-0.5"
        aria-hidden
      />
      <span className="text-slate-500">{suffix}</span>
    </span>
  );
}
