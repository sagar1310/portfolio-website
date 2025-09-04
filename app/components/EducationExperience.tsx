'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  BriefcaseIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  BeakerIcon,
  BookOpenIcon,
  StarIcon
} from '@heroicons/react/24/outline'

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  icon: React.ElementType;
  logo?: string;
  achievements?: string[];
  courses?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Digital Product Manager',
    organization: 'Carrier Corporation',
    location: 'Beverly, MA',
    period: 'June 2024 – December 2024',
    description: [
      'Spearheaded the Asset Recommendation System initiative, enhancing the customer experience across enterprise clients',
      'Orchestrated successful go-to-market strategies, fostering early adoption among industry leaders',
      'Led platform optimization efforts for the Lynx Fleet ecosystem, driving operational excellence'
    ],
    technologies: ['Strategic Planning', 'Product Innovation', 'Enterprise Solutions'],
    icon: BriefcaseIcon,
    logo: '/images/companies/Carrier.png'
  },
  {
    type: 'education',
    title: 'Master of Science in Computer Science',
    organization: 'Binghamton University',
    location: 'Binghamton, NY',
    period: 'Expected May 2025',
    description: [
      'Specialization in Data Science and Machine Learning',
      'Research focus on AI-driven Product Management methodologies'
    ],
    achievements: [
      'Dean\'s List - Fall 2023, Spring 2024',
      'Graduate Research Assistant - AI/ML Lab',
      'President, Product Management Club'
    ],
    courses: [
      'Advanced Machine Learning',
      'Data Mining',
      'Cloud Computing',
      'Product Management in Tech'
    ],
    icon: AcademicCapIcon
  },
  {
    type: 'experience',
    title: 'Associate Product Manager',
    organization: 'John Deere',
    location: 'Pune, India',
    period: 'May 2022 – Aug 2023',
    description: [
      'Directed cross-functional initiatives to enhance core platform capabilities and user engagement',
      'Pioneered strategic product developments that expanded market presence in key segments',
      'Championed user experience improvements through innovative platform consolidation'
    ],
    technologies: ['Product Strategy', 'Market Analysis', 'Digital Transformation'],
    icon: BuildingOfficeIcon,
    logo: '/images/companies/john-deere.avif'
  },
  {
    type: 'education',
    title: 'Bachelor of Engineering in Computer Science',
    organization: 'Savitribai Phule Pune University',
    location: 'Pune, India',
    period: '2015 - 2019',
    description: [
      'First Class with Distinction',
      'Computer Science and Engineering'
    ],
    achievements: [
      'University Rank Holder',
      'Technical Lead - College Tech Club',
      'Best Project Award - Final Year'
    ],
    courses: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Software Engineering',
      'Web Technologies'
    ],
    icon: BookOpenIcon
  },
  {
    type: 'experience',
    title: 'Product Analyst',
    organization: 'Atos',
    location: 'Pune, India',
    period: 'Oct 2019 – April 2022',
    description: [
      'Architected enterprise API solutions to streamline business processes and enhance efficiency',
      'Fostered strong client relationships through strategic consultation and solution design',
      'Drove agile development initiatives to deliver high-impact business solutions'
    ],
    technologies: ['Enterprise Solutions', 'Strategic Consulting', 'Solution Architecture'],
    icon: ComputerDesktopIcon,
    logo: '/images/companies/Atos.png'
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

export default function EducationExperience() {
  return (
    <section id="education-experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-primary/5 rounded-full blur-[100px] transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-tertiary/5 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-text-primary via-accent-primary to-accent-tertiary bg-clip-text text-transparent pb-4"
            variants={itemVariants}
          >
            Education & Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-text-secondary max-w-3xl mx-auto"
            variants={itemVariants}
          >
            My academic and professional journey
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-accent-primary via-accent-tertiary to-accent-primary/20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
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
                  <motion.div 
                    className={`w-8 h-8 rounded-full border-2 ${
                      item.type === 'education' 
                        ? 'border-accent-tertiary bg-background' 
                        : 'border-accent-primary bg-background'
                    } flex items-center justify-center backdrop-blur-sm`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon className={`w-4 h-4 ${
                      item.type === 'education' 
                        ? 'text-accent-tertiary' 
                        : 'text-accent-primary'
                    }`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div 
                    className="group bg-background-alt p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 border border-border/5 backdrop-blur-sm"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      {item.logo ? (
                        <div className="w-16 h-16 relative flex-shrink-0 bg-white rounded-xl p-2 shadow-sm overflow-hidden group-hover:shadow-md transition-shadow">
                          <Image
                            src={item.logo}
                            alt={`${item.organization} logo`}
                            fill
                            className="object-contain"
                            sizes="64px"
                          />
                        </div>
                      ) : (
                        <div className={`w-16 h-16 relative flex-shrink-0 rounded-xl p-2 ${
                          item.type === 'education' 
                            ? 'bg-accent-tertiary/10' 
                            : 'bg-accent-primary/10'
                        } flex items-center justify-center`}>
                          <item.icon className={`w-8 h-8 ${
                            item.type === 'education' 
                              ? 'text-accent-tertiary' 
                              : 'text-accent-primary'
                          }`} />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className={`font-medium ${
                          item.type === 'education' 
                            ? 'text-accent-tertiary' 
                            : 'text-accent-primary'
                        }`}>
                          {item.organization}
                        </p>
                        <p className="text-text-secondary text-sm mt-1">
                          {item.period} • {item.location}
                        </p>
                      </div>
                    </div>

                    <ul className="text-text-secondary space-y-3 mb-4">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                            item.type === 'education' 
                              ? 'bg-accent-tertiary' 
                              : 'bg-accent-primary'
                          }`}></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {item.type === 'education' && (
                      <>
                        {item.achievements && (
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold text-text-primary mb-2 flex items-center">
                              <StarIcon className="w-5 h-5 text-accent-tertiary mr-2" />
                              Achievements
                            </h4>
                            <ul className="text-text-secondary space-y-2">
                              {item.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start">
                                  <BeakerIcon className="w-5 h-5 text-accent-tertiary mr-2 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {item.courses && (
                          <div>
                            <h4 className="text-lg font-semibold text-text-primary mb-2 flex items-center">
                              <BookOpenIcon className="w-5 h-5 text-accent-tertiary mr-2" />
                              Key Courses
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.courses.map((course) => (
                                <motion.span
                                  key={course}
                                  className="px-3 py-1 bg-accent-tertiary/5 rounded-full text-sm text-accent-tertiary border border-accent-tertiary/10 hover:bg-accent-tertiary/10 transition-colors cursor-default"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                  {course}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {item.type === 'experience' && item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-accent-primary/5 rounded-full text-sm text-accent-primary border border-accent-primary/10 hover:bg-accent-primary/10 transition-colors cursor-default"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 