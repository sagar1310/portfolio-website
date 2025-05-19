'use client'

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="pt-16">
          <About />
        </section>
        <section id="portfolio" className="pt-16">
          <Portfolio />
        </section>
        <section id="timeline" className="pt-16">
          <Timeline />
        </section>
        <section id="skills" className="pt-16">
          <Skills />
        </section>
        <section id="certifications" className="pt-16">
          <Certifications />
        </section>
        <section id="contact" className="pt-16">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
} 