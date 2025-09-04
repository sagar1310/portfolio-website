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
    title: 'Digital Product Manager',
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
    title: 'Product Analyst',
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
    <section id="timeline" className="py-24 bg-background-alt relative overflow-hidden">
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
            Education & Experience
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mt-6">
            My academic and professional journey
          </p>
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
                  <div className="relative">
                    {/* Background circle to hide the line */}
                    <div className="absolute inset-0 w-8 h-8 rounded-full bg-background-alt" />
                    {/* Icon circle */}
                    <div className={`relative w-8 h-8 rounded-full border-2 ${
                      item.type === 'education' 
                        ? 'border-accent-tertiary bg-accent-tertiary/10' 
                        : 'border-accent-primary bg-accent-primary/10'
                    } flex items-center justify-center`}>
                      <item.icon className={`w-4 h-4 ${
                        item.type === 'education' ? 'text-accent-tertiary' : 'text-accent-primary'
                      }`} />
                    </div>
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