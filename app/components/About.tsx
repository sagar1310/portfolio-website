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
  RocketLaunchIcon,
  HeartIcon,
  ChartPieIcon,
  CodeBracketIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

const coreValues = [
  { 
    icon: UserGroupIcon, 
    title: 'User-Centric Thinking',
    description: 'Putting users at the heart of every product decision'
  },
  { 
    icon: ChartBarIcon, 
    title: 'Data-Driven Decisions',
    description: 'Leveraging analytics to guide strategic choices'
  },
  { 
    icon: RocketLaunchIcon, 
    title: 'Agile Leadership',
    description: 'Adapting and leading through changing landscapes'
  },
  { 
    icon: ChatBubbleBottomCenterTextIcon, 
    title: 'Cross-Functional Collaboration',
    description: 'Building bridges across teams for unified success'
  }
]

const coreCompetencies = [
  { 
    icon: PresentationChartLineIcon, 
    title: 'Product Strategy',
    description: 'Developing roadmaps that align with business goals'
  },
  { 
    icon: ChartPieIcon, 
    title: 'Data Analytics',
    description: 'Transforming data into actionable insights'
  },
  { 
    icon: CodeBracketIcon, 
    title: 'API Integration',
    description: 'Creating seamless system interconnections'
  },
  { 
    icon: ArrowPathIcon, 
    title: 'Agile Methodologies',
    description: 'Implementing efficient development processes'
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

export default function About() {
  return (
    <section id="about" className="py-24 bg-background-alt relative overflow-hidden">
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
            About Me
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mt-6">
            Building innovative products that drive impact
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-text-primary leading-relaxed mb-8">
            Hi, I'm Sagar Pise—a Product Manager passionate about building scalable, user-focused solutions that drive impact. With experience in IoT, SaaS, and API products, I believe in leveraging technology to bridge gaps and create seamless digital experiences.
          </p>
          <div className="inline-block">
            <span className="text-lg font-medium italic text-accent-primary">
              "I believe in building products that not only solve current problems but also anticipate future challenges."
            </span>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">
            Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="group bg-background-alt/50 backdrop-blur-sm p-6 rounded-2xl border border-accent-primary/10 hover:border-accent-primary/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-text-secondary">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreCompetencies.map((competency) => {
              const Icon = competency.icon
              return (
                <motion.div
                  key={competency.title}
                  className="group bg-background-alt/50 backdrop-blur-sm p-6 rounded-2xl border border-accent-primary/10 hover:border-accent-primary/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                      {competency.title}
                    </h4>
                    <p className="text-text-secondary">
                      {competency.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 