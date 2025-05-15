'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  PresentationChartLineIcon,
  CogIcon,
  DocumentChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const companies = [
  {
    name: 'John Deere',
    logo: '/images/companies/john-deere.avif',
    description: 'Fortune 500 Agricultural Technology',
    alt: 'John Deere logo'
  },
  {
    name: 'Carrier',
    logo: '/images/companies/Carrier.png',
    description: 'Fortune 500 HVAC Solutions',
    alt: 'Carrier logo'
  },
  {
    name: 'Atos',
    logo: '/images/companies/Atos.png',
    description: 'Global IT Services Leader',
    alt: 'Atos logo'
  }
]

const competencies = [
  { icon: ChartBarIcon, title: 'Data-Driven Decision Making' },
  { icon: UserGroupIcon, title: 'Cross-Functional Leadership' },
  { icon: LightBulbIcon, title: 'Innovation Strategy' },
  { icon: PresentationChartLineIcon, title: 'Product Strategy' },
  { icon: CogIcon, title: 'Technical Architecture' },
  { icon: DocumentChartBarIcon, title: 'Market Analysis' },
  { icon: ChatBubbleBottomCenterTextIcon, title: 'Stakeholder Communication' },
  { icon: RocketLaunchIcon, title: 'Product Launch' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
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
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-text-secondary max-w-3xl mx-auto mb-4"
            variants={itemVariants}
          >
            A Product Manager passionate about driving innovation and delivering impactful solutions
          </motion.p>
          <motion.p
            className="text-md text-text-secondary max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Experienced in leading product initiatives at Fortune 500 companies, specializing in digital transformation and innovative solutions
          </motion.p>
        </motion.div>

        {/* Company Experience */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.map((company) => (
              <motion.div
                key={company.name}
                className="p-6 bg-background-alt rounded-2xl shadow-soft hover:shadow-hover transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center mb-4 h-32">
                  <div className="relative w-full h-full">
                    <Image
                      src={company.logo}
                      alt={company.alt}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary text-center mb-2">
                  {company.name}
                </h3>
                <p className="text-text-secondary text-center">
                  {company.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {competencies.map(({ icon: Icon, title }) => (
            <motion.div
              key={title}
              className="flex flex-col items-center p-6 bg-background-alt rounded-2xl shadow-soft hover:shadow-hover transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Icon className="w-8 h-8 text-accent-primary mb-4" />
              <h3 className="text-text-primary font-medium text-center">{title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 