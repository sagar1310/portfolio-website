'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary font-bold">
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
            <a href="#portfolio" onClick={(e) => scrollToSection(e, '#portfolio')}>
              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-accent-primary text-white rounded-2xl font-medium text-lg hover:bg-accent-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
              </motion.button>
            </a>
            
            <a href="/Sagar_Pise_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-accent-secondary text-white rounded-2xl font-medium text-lg hover:bg-accent-secondary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Resume
              </motion.button>
            </a>
            
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
              <motion.button
                className="w-full sm:w-auto px-8 py-4 border border-text-secondary/20 text-text-primary rounded-2xl font-medium text-lg hover:bg-text-primary/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 