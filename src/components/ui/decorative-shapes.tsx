import React from 'react';
import { motion } from 'framer-motion';

export const DecorativeShapes = () => {
  return (
    <>
      {/* Left side shape */}
      <motion.div
        className="absolute left-[-10%] top-1/4 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M200 0L400 200L200 400L0 200L200 0Z"
            fill="url(#paint0_linear_1_2)"
            fillOpacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2"
              x1="200"
              y1="0"
              x2="200"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Right side shape */}
      <motion.div
        className="absolute right-[-10%] bottom-1/4 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M200 0C310.457 0 400 89.5431 400 200C400 310.457 310.457 400 200 400C89.5431 400 0 310.457 0 200C0 89.5431 89.5431 0 200 0Z"
            fill="url(#paint0_linear_1_3)"
            fillOpacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_3"
              x1="200"
              y1="0"
              x2="200"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
};

export default DecorativeShapes;
