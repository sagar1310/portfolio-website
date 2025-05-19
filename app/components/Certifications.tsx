'use client'

import React from 'react'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

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
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 pb-4">
            Certifications
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto mt-2">
            Professional certifications and achievements
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-gray-100 rounded-2xl shadow-md p-8 flex flex-col justify-between h-full"
            >
              <div className="flex items-start gap-3 mb-2">
                <AcademicCapIcon className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {cert.title}
                  </h2>
                  <div className="font-semibold text-gray-800 mb-1">
                    {cert.organization}
                  </div>
                  <div className="text-gray-500 text-sm mb-2">
                    {cert.date}
                  </div>
                  <div className="text-gray-500 text-base mb-2">
                    {cert.description}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Credential ID: {cert.credentialId}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 