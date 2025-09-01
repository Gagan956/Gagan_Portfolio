'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glassmorphism';
  hover?: boolean;
  tilt?: boolean;
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
  tilt = false,
}: CardProps) {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300';
  
  const variants = {
    default: 'bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700',
    glassmorphism: 'glassmorphism dark:glassmorphism-dark',
  };

  const hoverClasses = hover ? 'hover-lift' : '';
  const tiltClasses = tilt ? 'tilt-card' : '';

  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${tiltClasses} ${className}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={classes}
    >
      {children}
    </motion.div>
  );
}
