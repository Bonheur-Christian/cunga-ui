"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function FuturisticBackground() {
  // Generate stable random positions only once on client
  const particles = useMemo(() => {
    return [...Array(5)].map((_, i) => ({
      id: i,
      left: (i * 19.7) % 100, // Use deterministic positioning instead of Math.random()
      top: (i * 23.4) % 100,
      duration: 4 + i,
      delay: i * 0.5,
    }));
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden -z-20">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-l from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/2 w-72 h-72 bg-gradient-to-t from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -25, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Animated grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="url(#gridGradient)"
              strokeWidth="0.5"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-teal-400 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
