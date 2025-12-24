"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Preserve existing classes and add antialiased for font smoothing
  useEffect(() => {
    if (!document?.body) return;
    document.body.classList.add("antialiased");
  }, []);

  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
        className="antialiased"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
