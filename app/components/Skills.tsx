'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CommandLineIcon, 
  CpuChipIcon,
  CloudIcon,
  ChartBarIcon,
  CogIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  PuzzlePieceIcon,
  ClockIcon,
  BeakerIcon,
  SparklesIcon,
  ServerIcon,
  CodeBracketIcon,
  CircleStackIcon,
  WindowIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline'

interface SkillItem {
  name: string;
  icon: React.ElementType;
}

interface SkillCategory {
  category: string;
  description: string;
  icon: React.ElementType;
  items: SkillItem[];
}

const skills: SkillCategory[] = [
  {
    category: 'Product Management Tools',
    description: 'Tools I use for product strategy and execution',
    icon: PresentationChartLineIcon,
    items: [
      { name: 'Aha! Roadmaps', icon: PresentationChartLineIcon },
      { name: 'Jira', icon: CogIcon },
      { name: 'Miro', icon: PencilSquareIcon },
      { name: 'Confluence', icon: WindowIcon }
    ]
  },
  {
    category: 'Programming Languages',
    description: 'Languages I code with',
    icon: CodeBracketIcon,
    items: [
      { name: 'Java', icon: CodeBracketIcon },
      { name: 'PEGA PRPC', icon: CircleStackIcon },
      { name: 'C', icon: CpuChipIcon }
    ]
  },
  {
    category: 'Frameworks & Methodologies',
    description: 'Approaches I follow for project success',
    icon: PuzzlePieceIcon,
    items: [
      { name: 'Agile', icon: ClockIcon },
      { name: 'SCRUM', icon: UserGroupIcon },
      { name: 'SAFe', icon: PuzzlePieceIcon }
    ]
  },
  {
    category: 'Platforms',
    description: 'Technologies I work with',
    icon: CloudIcon,
    items: [
      { name: 'IoT', icon: CloudIcon },
      { name: 'SaaS', icon: ServerIcon },
      { name: 'Cloud Infrastructure', icon: CloudIcon }
    ]
  }
]

const SkillCard = ({ skill, index }: { skill: SkillItem; index: number }) => {
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative"
    >
      <div className="relative p-4 rounded-xl bg-background-alt/50 backdrop-blur-sm border border-accent-primary/10 
        group-hover:border-accent-primary/30 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent-primary/10">
            <Icon className="w-5 h-5 text-accent-primary" />
          </div>
          <h3 className="text-base font-medium text-text-primary group-hover:text-accent-primary transition-colors duration-300">
            {skill.name}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

const CategorySection = ({ category }: { category: SkillCategory }) => {
  const Icon = category.icon

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-start gap-4 mb-8"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-accent-primary/20 rounded-2xl blur-xl" />
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-transparent backdrop-blur-sm border border-accent-primary/20">
            <Icon className="w-8 h-8 text-accent-primary" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-text-primary via-accent-primary to-text-primary bg-clip-text text-transparent">
            {category.category}
          </h2>
          <p className="text-text-secondary mt-1">{category.description}</p>
        </div>
      </motion.div>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {category.items.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-background-alt overflow-hidden">
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
            Skills
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mt-6">
            Technical and managerial capabilities that drive product success
          </p>
        </motion.div>

        <div className="space-y-24">
          {skills.map((category) => (
            <CategorySection key={category.category} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
} 