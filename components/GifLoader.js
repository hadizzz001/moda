"use client";

import { motion } from "framer-motion"; 
import { useState, useEffect } from "react";

const SLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2000); // Hide after 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null; // Hide component after animation

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#fff] z-[9999]">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img
          src="https://res.cloudinary.com/dmyudwjwx/image/upload/v1750090557/ico_atse4z.webp"
          alt="S Loader"
          width={150}
          height={150}
          className="w-48 h-48 object-contain"
        />
      </motion.div>
    </div>
  );
};

export default SLoader;
