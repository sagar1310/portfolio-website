'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1]
    }
  }
}

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-radial from-background via-background to-background/50 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center space-y-16">
          {/* Subtle badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-block"
          >
            <span className="px-4 py-1.5 text-sm font-medium bg-accent-primary/10 text-accent-primary rounded-full">
              Product Manager & Digital Innovator
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary">
                Sagar Pise
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences that transform ideas into impactful products.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Link href="/portfolio">
              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-accent-primary text-white rounded-2xl font-medium text-lg hover:bg-accent-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                className="w-full sm:w-auto px-8 py-4 border border-text-secondary/20 text-text-primary rounded-2xl font-medium text-lg hover:bg-text-primary/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-5 h-9 border-2 border-text-secondary/20 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-text-secondary/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 