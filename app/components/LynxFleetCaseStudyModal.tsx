'use client'

import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenges', label: 'Key Challenges' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'features', label: 'Features' },
  { id: 'impact', label: 'Impact' },
  { id: 'tech', label: 'Technologies' },
];

export default function LynxFleetCaseStudyModal({ onClose }: { onClose?: () => void }) {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      const modalContent = document.querySelector('.lynx-modal-content');
      if (!modalContent) return;
      
      const scrollTop = modalContent.scrollTop;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && scrollTop + 120 >= el.offsetTop) {
          current = section.id;
        }
      }
      document.querySelectorAll('.lynx-nav-link').forEach((link) => {
        link.classList.remove('bg-carrier-blue');
        if (link.getAttribute('data-section') === current) {
          link.classList.add('bg-carrier-blue');
        }
      });
    };

    const modalContent = document.querySelector('.lynx-modal-content');
    if (modalContent) {
      modalContent.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => modalContent.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative lynx-modal-content">
      {/* Sticky Nav Bar */}
      <div ref={navRef} className="sticky top-0 z-40 bg-white shadow-md border-b">
        <div className="flex justify-center">
          <nav className="flex gap-1 flex-wrap justify-center bg-white px-4 py-2 rounded-b-lg">
            {sections.map((section) => (
              <button
                key={section.id}
                className="lynx-nav-link text-carrier-blue px-3 py-1.5 rounded-md hover:bg-gray-200 transition font-semibold text-sm"
                data-section={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{ minWidth: 90 }}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Close Button - Positioned above nav bar */}
      <button 
        onClick={onClose}
        className="fixed top-3 right-3 p-2 rounded-full bg-accent-primary hover:bg-accent-primary/90 transition-colors shadow-md flex items-center justify-center z-[60]"
        aria-label="Close modal"
      >
        <XMarkIcon className="w-5 h-5 text-white" />
      </button>

      <style jsx global>{`
        .lynx-modal-content {
          scroll-behavior: smooth;
          position: relative;
          isolation: isolate;
        }
        .lynx-modal-content .lynx-nav-link {
          color: #0056B3 !important;
        }
        .lynx-modal-content .lynx-nav-link.bg-carrier-blue {
          background-color: #0056B3;
          color: white !important;
        }
      `}</style>

      <div className="space-y-10 pt-16">
        {/* Hero Section */}
        <section id="overview" className="py-12 sm:py-16 px-4 sm:px-6 text-center bg-gray-100">
          <div className="container mx-auto">
            <h1 className="text-4xl font-extrabold text-carrier-blue mb-6 text-center">Lynx Fleet Mobile App</h1>
            <div className="relative w-full max-w-4xl h-96 mx-auto mb-8 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/portfolio/Lynx Fleet Mobile mockups.png"
                alt="Lynx Fleet Mobile App Hero Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <p className="section-intro text-base sm:text-lg text-center mx-auto max-w-3xl">
              As the lead for the Lynx Fleet Mobile app, I spearheaded the development and launch of a critical component for Carrier's digital cold chain solution, enabling real-time temperature monitoring and comprehensive fleet management directly from mobile devices, significantly enhancing operational efficiency and compliance.
            </p>
          </div>
        </section>

        {/* Challenges */}
        <section id="challenges" className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-carrier-blue mb-8 text-center">Key Challenges</h2>
            <p className="section-intro text-base sm:text-lg text-center mb-8">
              Developing a robust mobile solution for cold chain management presented several complex hurdles, requiring innovative approaches to ensure reliability and compliance.
            </p>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Complex Platform Integration</h3>
                <p className="text-gray-700 text-sm sm:text-base">Integrating the mobile app seamlessly with the existing Lynx Fleet platform was crucial to ensure data consistency and real-time functionality across the ecosystem.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Real-time Monitoring Demands</h3>
                <p className="text-gray-700 text-sm sm:text-base">Meeting stringent requirements for real-time temperature monitoring and instant alerts was paramount for maintaining cold chain integrity.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Multi-Stakeholder Coordination</h3>
                <p className="text-gray-700 text-sm sm:text-base">Coordinating the diverse needs and workflows of fleet managers and drivers required careful design and communication strategies.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Strict Regulatory Compliance</h3>
                <p className="text-gray-700 text-sm sm:text-base">Ensuring the app adhered to strict cold chain regulations and industry standards was a non-negotiable aspect of the development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-carrier-blue mb-8 text-center">Solutions Implemented</h2>
            <p className="section-intro text-base sm:text-lg text-center mb-8">
              To address the identified challenges, we developed and implemented a suite of solutions focused on real-time data, intuitive design, and unified accessibility.
            </p>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Real-time Temperature Tracking & Alerts</h3>
                <p className="text-gray-700 text-sm sm:text-base">Implemented robust systems for live temperature monitoring and instant, configurable alerts to ensure proactive cold chain management.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Intuitive Mobile Interface</h3>
                <p className="text-gray-700 text-sm sm:text-base">Designed and developed a user-friendly mobile interface, optimized for on-the-go fleet management by both managers and drivers.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Unified Asset Tracking Platform</h3>
                <p className="text-gray-700 text-sm sm:text-base">Created a single, unified platform for comprehensive asset tracking and monitoring, consolidating data for a holistic fleet view.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Enhanced Mobile Accessibility</h3>
                <p className="text-gray-700 text-sm sm:text-base">Significantly enhanced overall operational efficiency by providing critical fleet management capabilities directly through mobile devices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-carrier-blue mb-8 text-center">Key Features of Lynx Fleet Mobile App</h2>
            <p className="section-intro text-base sm:text-lg text-center mb-8">
              The Lynx Fleet Mobile app is packed with features designed to empower fleet managers and drivers with critical information and control at their fingertips.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
              <div className="p-6 bg-white rounded-lg shadow-lg feature-card flex flex-col">
                <div className="feature-card-visual h-36 flex items-center justify-center mb-4">
                  <Image src="/images/portfolio/mobile.png" alt="Mobile-First Design UI" width={600} height={338} className="rounded-md shadow-md w-full h-full object-cover" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Mobile-First Design</h3>
                <p className="text-gray-700 text-sm sm:text-base">An intuitive interface specifically optimized for efficient on-the-go fleet management, ensuring ease of use in dynamic environments.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg feature-card flex flex-col">
                <div className="feature-card-visual h-36 flex items-center justify-center mb-4">
                  <Image src="/images/portfolio/Real time.png" alt="Real-Time Updates" width={600} height={338} className="rounded-md shadow-md w-full h-full object-contain" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Real-Time Updates</h3>
                <p className="text-gray-700 text-sm sm:text-base">Provides live temperature monitoring and instant alerts, crucial for maintaining product integrity throughout the cold chain.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg feature-card flex flex-col">
                <div className="feature-card-visual h-36 flex items-center justify-center mb-4">
                  <span className="icon text-3xl text-[#0056B3]">☁️</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Cloud Integration</h3>
                <p className="text-gray-700 text-sm sm:text-base">Ensures seamless connection with the broader Lynx Fleet platform, enabling centralized data management and accessibility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section id="impact" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-carrier-blue mb-8 text-center">Impact & Results</h2>
            <p className="section-intro text-base sm:text-lg text-center mb-8">
              The launch of the Lynx Fleet Mobile app has delivered significant improvements across Carrier's cold chain operations, enhancing efficiency, compliance, and customer satisfaction.
            </p>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start text-left">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="carrier-blue mr-3 text-2xl">✔</span>
                  <div>
                    <h4 className="font-extrabold text-xl sm:text-2xl">Improved Fleet Management Efficiency</h4>
                    <p className="text-gray-700 text-base sm:text-lg">By enabling mobile access, fleet managers gained unprecedented flexibility and control over their operations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="carrier-blue mr-3 text-2xl">✔</span>
                  <div>
                    <h4 className="font-extrabold text-xl sm:text-2xl">Enhanced Temperature Monitoring Compliance</h4>
                    <p className="text-gray-700 text-base sm:text-lg">Real-time alerts and comprehensive tracking ensured strict adherence to cold chain regulations, minimizing risks.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="carrier-blue mr-3 text-2xl">✔</span>
                  <div>
                    <h4 className="font-extrabold text-xl sm:text-2xl">Reduced Product Waste</h4>
                    <p className="text-gray-700 text-base sm:text-lg">Proactive alerts for temperature deviations allowed for timely interventions, significantly reducing spoilage and waste.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="carrier-blue mr-3 text-2xl">✔</span>
                  <div>
                    <h4 className="font-extrabold text-xl sm:text-2xl">Increased Customer Satisfaction</h4>
                    <p className="text-gray-700 text-base sm:text-lg">Real-time visibility into cold chain conditions provided customers with greater assurance and transparency.</p>
                  </div>
                </li>
              </ul>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-extrabold text-carrier-blue mb-3 text-center">Operational Flow Enhancement</h3>
                <p className="text-gray-700 text-sm sm:text-base mb-4 text-center">The Lynx Fleet Mobile app streamlined the entire cold chain monitoring process, from data collection to actionable insights.</p>
                <div className="flow-diagram bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flow-step bg-white rounded-md p-4 mb-2 flex items-center shadow-md"><span className="flow-icon text-2xl mr-3">🌡️</span> Sensors Collect Temp Data</div>
                  <div className="arrow-down text-center text-xl text-gray-400 mb-2">↓</div>
                  <div className="flow-step bg-white rounded-md p-4 mb-2 flex items-center shadow-md"><span className="flow-icon text-2xl mr-3">☁️</span> Data Sent to Cloud Platform</div>
                  <div className="arrow-down text-center text-xl text-gray-400 mb-2">↓</div>
                  <div className="flow-step bg-[#0056B3] text-white rounded-md p-4 mb-2 flex items-center shadow-md"><span className="flow-icon text-2xl mr-3">📱</span> Lynx Fleet Mobile App Access</div>
                  <div className="arrow-down text-center text-xl text-gray-400 mb-2">↓</div>
                  <div className="flow-step bg-white rounded-md p-4 flex items-center shadow-md"><span className="flow-icon text-2xl mr-3">🚨</span> Real-Time Alerts & Insights for User</div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-3 text-center">This simplified flow ensures critical information reaches stakeholders instantly, enabling quick decision-making.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section id="tech" className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-carrier-blue mb-8 text-center">Technologies Used</h2>
            <p className="section-intro text-base sm:text-lg text-center mb-8">
              The development of the Lynx Fleet Mobile App leveraged cutting-edge technologies to ensure robust performance, scalability, and real-time capabilities.
            </p>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="kpi-card p-4 sm:p-6">
                <div className="kpi-value text-2xl sm:text-3xl">🛰️</div>
                <div className="font-extrabold text-lg sm:text-xl text-carrier-blue mt-2 mb-1">IoT Integration</div>
                <div className="kpi-label text-sm sm:text-base">Seamless connectivity with temperature sensors and fleet hardware.</div>
              </div>
              <div className="kpi-card p-4 sm:p-6">
                <div className="kpi-value text-2xl sm:text-3xl">📊</div>
                <div className="font-extrabold text-lg sm:text-xl text-carrier-blue mt-2 mb-1">Real-time Analytics</div>
                <div className="kpi-label text-sm sm:text-base">Processing and visualization of live data streams for immediate insights.</div>
              </div>
              <div className="kpi-card p-4 sm:p-6">
                <div className="kpi-value text-2xl sm:text-3xl">📱</div>
                <div className="font-extrabold text-lg sm:text-xl text-carrier-blue mt-2 mb-1">Mobile Development</div>
                <div className="kpi-label text-sm sm:text-base">Building intuitive and high-performance applications for iOS and Android platforms.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 