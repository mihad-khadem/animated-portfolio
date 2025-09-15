"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/cn";

interface NavItem {
  name: string;
  link: string; // e.g., "#about"
  icon?: JSX.Element;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // Show/hide on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const direction = latest - previous;

    if (latest < 50) setVisible(true); // Always visible at top
    else setVisible(direction < 0); // Hide on scroll down, show on scroll up
  });

  // Smooth scroll handler
  const handleClick = (link: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(link);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md shadow-md z-[5000] px-6 py-2 items-center justify-center space-x-6",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={`link-${idx}`}
            onClick={handleClick(navItem.link)}
            className={cn(
              "flex items-center space-x-1 text-white hover:text-purple-400 transition-colors text-sm font-medium cursor-pointer"
            )}
          >
            {navItem.icon && <span className="sm:hidden">{navItem.icon}</span>}
            <span>{navItem.name}</span>
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
