'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  AcademicCapIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  period: string;
  location: string;
  icon: React.ElementType;
  logo?: string;
}

const timelineItems: TimelineItem[] = [
  {
    type: 'education',
    title: 'Master of Science in Computer Science',
    organization: 'SUNY Binghamton University',
    period: 'August 2023 - May 2025',
    location: 'Binghamton, NY',
    icon: AcademicCapIcon,
    logo: '/images/universities/binghamton.png'
  },
  {
    type: 'experience',
    title: 'Digital Product Manager Co-Op',
    organization: 'Carrier Corporation',
    period: 'June 2024 - December 2024',
    location: 'Beverly, MA',
    icon: BriefcaseIcon,
    logo: '/images/companies/Carrier.png'
  },
  {
    type: 'experience',
    title: 'Associate Product Manager',
    organization: 'John Deere',
    period: 'May 2022 - August 2023',
    location: 'Pune, India',
    icon: BriefcaseIcon,
    logo: '/images/companies/john-deere.avif'
  },
  {
    type: 'experience',
    title: 'Associate Consultant',
    organization: 'Atos',
    period: 'October 2019 - April 2022',
    location: 'Pune, India',
    icon: BriefcaseIcon,
    logo: '/images/companies/Atos.png'
  },
  {
    type: 'education',
    title: 'Bachelor of Engineering in Information Technology',
    organization: 'RTM Nagpur University',
    period: 'August 2015 - May 2019',
    location: 'Nagpur, India',
    icon: AcademicCapIcon,
    logo: '/images/universities/rtmnu.png'
  }
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

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-background">
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
            Education & Experience
          </motion.h2>
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
            {timelineItems.map((item, index) => (
              <motion.div
                key={`${item.type}-${item.organization}`}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                variants={itemVariants}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full border-2 ${
                    item.type === 'education' 
                      ? 'border-accent-tertiary bg-accent-tertiary/10' 
                      : 'border-accent-primary bg-accent-primary/10'
                  } flex items-center justify-center`}>
                    <item.icon className={`w-4 h-4 ${
                      item.type === 'education' ? 'text-accent-tertiary' : 'text-accent-primary'
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className={`p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 ${
                    item.type === 'education' ? 'bg-accent-tertiary/5' : 'bg-background-alt'
                  }`}>
                    <div className="flex items-start gap-4">
                      {item.logo && (
                        <div className="w-16 h-16 relative flex-shrink-0 bg-white rounded-xl p-2 shadow-sm">
                          <Image
                            src={item.logo}
                            alt={`${item.organization} logo`}
                            fill
                            className="object-contain"
                            sizes="64px"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">
                          {item.title}
                        </h3>
                        <p className={`font-medium ${
                          item.type === 'education' ? 'text-accent-tertiary' : 'text-accent-primary'
                        }`}>
                          {item.organization}
                        </p>
                        <p className="text-text-secondary text-sm mt-1">
                          {item.period} • {item.location}
                        </p>
                      </div>
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