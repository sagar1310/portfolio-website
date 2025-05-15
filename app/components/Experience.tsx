'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  BriefcaseIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  icon: React.ElementType;
  companyLogo: string;
}

const experiences: Experience[] = [
  {
    title: 'Digital Product Manager Co-Op',
    company: 'Carrier Corporation',
    location: 'Beverly, MA',
    period: 'June 2024 – December 2024',
    description: [
      'Spearheaded the Asset Recommendation System initiative, enhancing the customer experience across enterprise clients',
      'Orchestrated successful go-to-market strategies, fostering early adoption among industry leaders',
      'Led platform optimization efforts for the Lynx Fleet ecosystem, driving operational excellence'
    ],
    technologies: ['Strategic Planning', 'Product Innovation', 'Enterprise Solutions'],
    icon: BriefcaseIcon,
    companyLogo: '/images/companies/Carrier.png'
  },
  {
    title: 'Associate Product Manager',
    company: 'John Deere',
    location: 'Pune, India',
    period: 'May 2022 – Aug 2023',
    description: [
      'Directed cross-functional initiatives to enhance core platform capabilities and user engagement',
      'Pioneered strategic product developments that expanded market presence in key segments',
      'Championed user experience improvements through innovative platform consolidation'
    ],
    technologies: ['Product Strategy', 'Market Analysis', 'Digital Transformation'],
    icon: BuildingOfficeIcon,
    companyLogo: '/images/companies/john-deere.avif'
  },
  {
    title: 'Associate Consultant',
    company: 'Atos',
    location: 'Pune, India',
    period: 'Oct 2019 – April 2022',
    description: [
      'Architected enterprise API solutions to streamline business processes and enhance efficiency',
      'Fostered strong client relationships through strategic consultation and solution design',
      'Drove agile development initiatives to deliver high-impact business solutions'
    ],
    technologies: ['Enterprise Solutions', 'Strategic Consulting', 'Solution Architecture'],
    icon: ComputerDesktopIcon,
    companyLogo: '/images/companies/Atos.png'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-text-secondary max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Building innovative products and leading high-performing teams
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-accent-primary via-accent-primary/50 to-accent-primary/20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.div
            className="relative space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                variants={itemVariants}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-accent-primary bg-background flex items-center justify-center">
                    <experience.icon className="w-4 h-4 text-accent-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-background-alt p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 relative flex-shrink-0 bg-white rounded-xl p-2 shadow-sm">
                        <Image
                          src={experience.companyLogo}
                          alt={`${experience.company} logo`}
                          fill
                          className="object-contain"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">
                          {experience.title}
                        </h3>
                        <p className="text-accent-primary font-medium">{experience.company}</p>
                        <p className="text-text-secondary text-sm mt-1">
                          {experience.period} • {experience.location}
                        </p>
                      </div>
                    </div>

                    <ul className="text-text-secondary space-y-3 mb-4">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-primary"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent-primary/5 rounded-full text-sm text-accent-primary border border-accent-primary/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 