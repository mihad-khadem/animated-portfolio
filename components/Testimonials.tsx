"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Testimonial, testimonials } from "../data/index";
import { cn } from "../lib/cn";

interface TestimonialsProps {
  testimonials: Testimonial[];
}
console.log(testimonials);

const Testimonials: React.FC = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle quotes every 4 seconds
  useEffect(() => {
    if (
      testimonials &&
      Array.isArray(testimonials) &&
      testimonials.length > 0
    ) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  // Return early if no testimonials
  if (
    !testimonials ||
    !Array.isArray(testimonials) ||
    testimonials.length === 0
  ) {
    return <div>No testimonials available</div>;
  }

  // Animation variants
  const quoteVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-100 dark:bg-gray-900 rounded-md"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Inspirational Quotes
        </motion.h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentIndex].id}
            className={cn(
              "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg",
              "hover:shadow-xl transition-shadow duration-300"
            )}
            variants={quoteVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic text-sm md:text-base">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {testimonials[currentIndex].author}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
