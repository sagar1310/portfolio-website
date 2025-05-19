'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ArrowPathIcon,
  CloudIcon,
  ChartPieIcon,
  MapIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProjectDetails {
  overview: string;
  challenges: string[];
  solutions: string[];
  impact: string[];
  technologies: string[];
  features: Feature[];
  modalImage?: string; // Optional modal-specific image
}

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  details: ProjectDetails;
}

const projects: Project[] = [
  {
    title: 'Lynx Fleet Mobile App',
    description: 'Led the development of a mobile solution for Carrier\'s temperature-controlled fleet management platform',
    image: '/images/portfolio/Lynx_Fleet_Mobile_App.avif',
    category: 'Mobile App Development',
    details: {
      overview: 'Developed and launched the Lynx Fleet Mobile app, a critical component of Carrier\'s digital cold chain solution, enabling real-time temperature monitoring and fleet management on mobile devices.',
      modalImage: '/images/portfolio/Lynx Fleet Mobile mockups.png',
      challenges: [
        'Complex integration with existing Lynx Fleet platform',
        'Real-time temperature monitoring requirements',
        'Multi-stakeholder coordination across fleet managers and drivers',
        'Strict compliance with cold chain regulations'
      ],
      solutions: [
        'Implemented real-time temperature tracking and alerts',
        'Developed intuitive mobile interface for fleet management',
        'Created unified platform for asset tracking and monitoring',
        'Enhanced operational efficiency through mobile accessibility'
      ],
      impact: [
        'Improved fleet management efficiency by enabling mobile access',
        'Enhanced temperature monitoring compliance',
        'Reduced product waste through proactive alerts',
        'Increased customer satisfaction with real-time visibility'
      ],
      technologies: [
        'IoT Integration',
        'Real-time Analytics',
        'Mobile Development',
        'Cloud Infrastructure'
      ],
      features: [
        {
          icon: DevicePhoneMobileIcon,
          title: 'Mobile-First Design',
          description: 'Intuitive interface optimized for on-the-go fleet management'
        },
        {
          icon: ArrowPathIcon,
          title: 'Real-Time Updates',
          description: 'Live temperature monitoring and instant alerts'
        },
        {
          icon: CloudIcon,
          title: 'Cloud Integration',
          description: 'Seamless connection with Lynx Fleet platform'
        },
        {
          icon: ChartPieIcon,
          title: 'Analytics Dashboard',
          description: 'Comprehensive fleet performance insights'
        },
        {
          icon: MapIcon,
          title: 'Asset Tracking',
          description: 'GPS-based location tracking and geofencing'
        },
        {
          icon: ChartBarIcon,
          title: 'Performance Metrics',
          description: 'Detailed operational efficiency analytics'
        }
      ]
    }
  },
  {
    title: 'Predictive Maintenance System',
    description: 'Developed an AI-powered system for predicting equipment maintenance needs and optimizing service schedules.',
    image: '/images/portfolio/lynx-fleet-inside cover screen .avif',
    category: 'Machine Learning',
    details: {
      overview: 'Created an advanced predictive maintenance system using machine learning to optimize equipment maintenance schedules and reduce downtime.',
      challenges: [
        'Large volumes of sensor data processing',
        'Complex equipment behavior patterns',
        'Integration with existing maintenance systems',
        'Real-time prediction requirements'
      ],
      solutions: [
        'Implemented machine learning models for failure prediction',
        'Developed real-time data processing pipeline',
        'Created intuitive maintenance scheduling interface',
        'Integrated with existing service management systems'
      ],
      impact: [
        'Reduced unplanned downtime by 60%',
        'Decreased maintenance costs by 25%',
        'Improved equipment lifespan',
        'Enhanced maintenance team efficiency'
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'Azure ML',
        'Power BI'
      ],
      features: [
        {
          icon: ChartBarIcon,
          title: 'Predictive Analytics',
          description: 'Advanced ML models for failure prediction'
        },
        {
          icon: ArrowPathIcon,
          title: 'Real-Time Monitoring',
          description: 'Continuous equipment health tracking'
        },
        {
          icon: CloudIcon,
          title: 'Cloud Processing',
          description: 'Scalable data processing infrastructure'
        },
        {
          icon: ChartPieIcon,
          title: 'Performance Insights',
          description: 'Comprehensive equipment analytics'
        },
        {
          icon: MapIcon,
          title: 'Maintenance Planning',
          description: 'Optimized scheduling and resource allocation'
        },
        {
          icon: DevicePhoneMobileIcon,
          title: 'Mobile Access',
          description: 'On-the-go maintenance updates and alerts'
        }
      ]
    }
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

const ProjectModal = ({ project, isOpen, onClose }: { project: Project, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={handleModalClick}
        >
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-accent-primary hover:bg-accent-primary/90 transition-colors shadow-md flex items-center justify-center"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-5 h-5 text-white" />
          </button>

          <div className="space-y-6 pt-8">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={project.details.modalImage || project.image}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary mb-4">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">Overview</h4>
              <p className="text-text-secondary">{project.details.overview}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">Key Challenges</h4>
              <ul className="list-disc list-inside text-text-secondary space-y-1">
                {project.details.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">Solutions</h4>
              <ul className="list-disc list-inside text-text-secondary space-y-1">
                {project.details.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.details.features.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex items-start p-4 bg-background rounded-xl"
                  >
                    <Icon className="w-6 h-6 text-accent-primary shrink-0 mt-1" />
                    <div className="ml-4">
                      <h5 className="text-lg font-medium text-text-primary">{title}</h5>
                      <p className="text-text-secondary">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">Impact & Results</h4>
              <ul className="list-disc list-inside text-text-secondary space-y-1">
                {project.details.impact.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.details.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background rounded-full text-sm text-text-primary border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-background">
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
            Portfolio
          </motion.h2>
          <motion.p 
            className="text-lg text-text-secondary max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Showcasing innovative solutions and impactful projects
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-background-alt rounded-2xl shadow-soft p-6 cursor-pointer hover:shadow-lg transition-shadow"
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.details.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-background rounded-full text-sm text-text-primary border border-border"
                  >
                    {tech}
                  </span>
                ))}
                {project.details.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-background rounded-full text-sm text-text-primary border border-border">
                    +{project.details.technologies.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
} 