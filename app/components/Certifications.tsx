'use client'

import React from 'react'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Certification {
  title: string;
  organization: string;
  date: string;
  description: string;
  credentialId: string;
}

const certifications: Certification[] = [
  {
    title: 'Certified Scrum Product Owner®',
    organization: 'Scrum Alliance',
    date: 'December 20, 2024',
    description: 'Expertise in Agile product ownership, backlog management, and value optimization.',
    credentialId: '001717142'
  },
  {
    title: 'Product Roadmapping Micro-Certification',
    organization: 'Product School',
    date: '04-03-2024',
    description: 'Specialized training in strategic product roadmapping and planning.',
    credentialId: 'cert_mr3bgq'
  },
  {
    title: 'Certified Pega Senior System Architect',
    organization: 'Pegasystems Inc.',
    date: 'Jan 10, 2025',
    description: 'Advanced certification in Pega platform architecture v8.8 and enterprise application design.',
    credentialId: 'Version 8.8'
  },
  {
    title: 'Certified Pega System Architect',
    organization: 'Pegasystems Inc.',
    date: 'Jul 13, 2021',
    description: 'Expertise in designing and implementing Pega applications v8.5 following best practices.',
    credentialId: 'Version 8.5'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background-alt relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-primary/5 rounded-full blur-[100px] transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-purple/5 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-text-primary via-accent-primary to-text-primary bg-clip-text text-transparent pb-4">
            Certifications
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mt-6">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              className="bg-background-alt/50 backdrop-blur-sm rounded-2xl border border-accent-primary/10 p-8 flex flex-col justify-between h-full hover:border-accent-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 rounded-lg bg-accent-primary/10">
                  <AcademicCapIcon className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-primary mb-1">
                    {cert.title}
                  </h2>
                  <div className="font-semibold text-text-primary mb-1">
                    {cert.organization}
                  </div>
                  <div className="text-text-secondary text-sm mb-2">
                    {cert.date}
                  </div>
                  <div className="text-text-secondary text-base mb-2">
                    {cert.description}
                  </div>
                  <div className="text-text-secondary/70 text-sm">
                    Credential ID: {cert.credentialId}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 