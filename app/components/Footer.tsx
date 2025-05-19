'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sagar-pise/',
    icon: FaLinkedin,
    isExternal: true
  },
  {
    name: 'GitHub',
    href: 'https://github.com/sagar1310/',
    icon: FaGithub,
    isExternal: true
  },
  {
    name: 'Email',
    href: '#contact',
    icon: FaEnvelope,
    isExternal: false
  },
]

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      
      // If it's the contact section, focus the name input after scrolling
      if (href === '#contact') {
        setTimeout(() => {
          const nameInput = document.getElementById('name')
          if (nameInput) {
            nameInput.focus()
          }
        }, 800) // Wait for scroll animation to complete
      }
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
              <motion.div 
                className="text-xl font-semibold text-accent-primary inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SP
              </motion.div>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed">
              Transforming ideas into impactful digital experiences through innovative product management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-primary">More</h3>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-primary">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={!item.isExternal ? (e) => scrollToSection(e, item.href) : undefined}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-text-secondary">
              &copy; {new Date().getFullYear()} Sagar Pise. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 