'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Certifications from '../components/Certifications'
import Footer from '../components/Footer'

export default function CertificationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Certifications />
      </main>
      <Footer />
    </div>
  )
} 