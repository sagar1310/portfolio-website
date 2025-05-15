'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Skills />
      </main>
      <Footer />
    </div>
  )
} 