'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Education & Experience', href: '#timeline' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Get all sections
      const sections = navigation.map(item => item.href.substring(1))
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/95 backdrop-blur-xl shadow-soft' : 'bg-background'
    }`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center">
                  <motion.div 
                    className="text-xl font-semibold text-accent-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    SP
                  </motion.div>
                </a>
              </div>
              
              {/* Desktop menu */}
              <div className="hidden sm:flex sm:items-center">
                <div className="flex space-x-1 bg-background-alt rounded-lg p-1">
                  {navigation.map((item) => (
                    <motion.div
                      key={item.name}
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          activeSection === item.href
                            ? 'bg-accent-primary text-white'
                            : 'text-text-primary hover:bg-accent-primary/10'
                        }`}
                      >
                        {item.name}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-accent-primary/10 transition-colors">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`block px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                    activeSection === item.href
                      ? 'bg-accent-primary text-white'
                      : 'text-text-primary hover:bg-accent-primary/10'
                  }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} 