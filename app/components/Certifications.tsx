'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

const certifications = [
  {
    title: 'Certified Scrum Product Owner®',
    organization: 'Scrum Alliance',
    date: 'December 20, 2024',
    icon: AcademicCapIcon,
    description: 'Expertise in Agile product ownership, backlog management, and value optimization.',
    credentialId: '001717142'
  },
  {
    title: 'Product Roadmapping Micro-Certification',
    organization: 'Product School',
    date: '04-03-2024',
    icon: AcademicCapIcon,
    description: 'Specialized training in strategic product roadmapping and planning.',
    credentialId: 'cert_mr3bgq'
  },
  {
    title: 'Certified Pega Senior System Architect',
    organization: 'Pegasystems Inc.',
    date: 'Jan 10, 2025',
    icon: AcademicCapIcon,
    description: 'Advanced certification in Pega platform architecture v8.8 and enterprise application design.',
    credentialId: 'Version 8.8'
  },
  {
    title: 'Certified Pega System Architect',
    organization: 'Pegasystems Inc.',
    date: 'Jul 13, 2021',
    icon: AcademicCapIcon,
    description: 'Expertise in designing and implementing Pega applications v8.5 following best practices.',
    credentialId: 'Version 8.5'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1]
    }
  }
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
            variants={itemVariants}
          >
            Certifications
          </motion.h2>
          <motion.p 
            className="text-lg text-text-secondary max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Professional certifications and achievements
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {certifications.map((cert) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                className="bg-background-alt p-6 rounded-2xl shadow-soft hover:shadow-hover transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent-purple" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-accent-teal font-medium mb-1">
                      {cert.organization}
                    </p>
                    <p className="text-text-secondary text-sm mb-3">
                      {cert.date}
                    </p>
                    <p className="text-text-secondary mb-3">
                      {cert.description}
                    </p>
                    <p className="text-sm text-text-secondary">
                      Credential ID: {cert.credentialId}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
} 