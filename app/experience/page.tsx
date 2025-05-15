'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Experience />
      </main>
      <Footer />
    </div>
  )
} 