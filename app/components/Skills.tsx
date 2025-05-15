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
  level: 'Expert' | 'Advanced' | 'Intermediate';
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
      { name: 'Aha!', icon: PresentationChartLineIcon, level: 'Expert' },
      { name: 'Jira', icon: CogIcon, level: 'Expert' },
      { name: 'Miro', icon: PencilSquareIcon, level: 'Expert' },
      { name: 'Confluence', icon: WindowIcon, level: 'Expert' }
    ]
  },
  {
    category: 'Programming Languages',
    description: 'Languages I code with',
    icon: CodeBracketIcon,
    items: [
      { name: 'Java', icon: CodeBracketIcon, level: 'Intermediate' },
      { name: 'PEGA PRPC', icon: CircleStackIcon, level: 'Advanced' },
      { name: 'C', icon: CpuChipIcon, level: 'Intermediate' }
    ]
  },
  {
    category: 'Frameworks & Methodologies',
    description: 'Approaches I follow for project success',
    icon: PuzzlePieceIcon,
    items: [
      { name: 'Agile', icon: ClockIcon, level: 'Expert' },
      { name: 'SCRUM', icon: UserGroupIcon, level: 'Expert' },
      { name: 'SAFe', icon: PuzzlePieceIcon, level: 'Advanced' }
    ]
  },
  {
    category: 'Platforms',
    description: 'Technologies I work with',
    icon: CloudIcon,
    items: [
      { name: 'IoT', icon: CloudIcon, level: 'Expert' },
      { name: 'SaaS', icon: ServerIcon, level: 'Expert' },
      { name: 'Cloud Infrastructure', icon: CloudIcon, level: 'Advanced' }
    ]
  }
]

const SkillCard = ({ skill, index }: { skill: SkillItem; index: number }) => {
  const Icon = skill.icon
  const levelColors = {
    Expert: 'from-accent-teal to-accent-primary',
    Advanced: 'from-accent-purple to-accent-primary',
    Intermediate: 'from-accent-peach to-accent-primary'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${levelColors[skill.level]} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      <div className="relative p-6 rounded-2xl bg-background-alt/50 backdrop-blur-sm border border-accent-primary/10 
        group-hover:border-accent-primary/30 transition-all duration-300 h-full">
        <div className="flex items-center gap-4 mb-3">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${levelColors[skill.level]} bg-opacity-10`}>
            <Icon className="w-6 h-6 text-accent-primary" />
          </div>
          <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-br ${levelColors[skill.level]} bg-opacity-10`}>
            {skill.level}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
          {skill.name}
        </h3>
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

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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