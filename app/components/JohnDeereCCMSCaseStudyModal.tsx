'use client'

import React, { useEffect, useRef } from 'react'
import Script from 'next/script'
import Image from 'next/image'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'ccms-deep-dive', label: 'CCMS Deep Dive' },
  { id: 'impact', label: 'Impact' },
  { id: 'my-contributions', label: 'My Contributions' },
  { id: 'strategic-context', label: 'Strategic Context' },
];

export default function JohnDeereCCMSCaseStudyModal({ onClose }: { onClose?: () => void }) {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      const modalContent = document.querySelector('.jd-modal-content');
      if (!modalContent) return;
      
      const scrollTop = modalContent.scrollTop;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && scrollTop + 120 >= el.offsetTop) {
          current = section.id;
        }
      }
      document.querySelectorAll('.jd-nav-link').forEach((link) => {
        link.classList.remove('bg-jd-green');
        if (link.getAttribute('data-section') === current) {
          link.classList.add('bg-jd-green');
        }
      });
    };

    const modalContent = document.querySelector('.jd-modal-content');
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

  // Fallback for close if onClose is not provided
  const handleClose = () => {
    if (onClose) onClose();
    else if (typeof window !== 'undefined') window.history.back();
  };

  useEffect(() => {
    // Chart.js initialization
    const operationalCtx = (document.getElementById('operationalImpactChartModal') as HTMLCanvasElement)?.getContext('2d');
    if (operationalCtx) {
      new (window as any).Chart(operationalCtx, {
        type: 'bar',
        data: {
          labels: ['Fuel Savings (AutoTrac)', 'CO2e Emission Reduction Target (Customer)'],
          datasets: [{
            label: 'Percentage / Target',
            data: [10, 15],
            backgroundColor: ['#367C2B', '#FFDE00'],
            borderColor: ['#367C2B', '#FFDE00'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value: number) { return value + '%' }
              }
            }
          },
          plugins: {
            legend: { display: false },
            title: { display: true, text: 'Key Operational & Sustainability Impacts' },
            tooltip: {
              callbacks: {
                label: function(context: any) {
                  let label = context.dataset.label || '';
                  if (label) { label += ': '; }
                  if (context.parsed.y !== null) { label += context.parsed.y + '%'; }
                  return label;
                }
              }
            }
          }
        }
      });
    }

    const agileCtx = (document.getElementById('agileMetricsChartModal') as HTMLCanvasElement)?.getContext('2d');
    if (agileCtx) {
      new (window as any).Chart(agileCtx, {
        type: 'bar',
        data: {
          labels: ['Time-to-Market Reduction', 'Cycle Time Reduction (Supply Chain)', 'Cost Reduction (Supply Chain)', 'SaaS Revenue Target', 'CO2e Emission Reduction Target'],
          datasets: [{
            label: 'Percentage Improvement / Target',
            data: [50, 79, 20, 10, 15],
            backgroundColor: ['#367C2B', '#4CAF50', '#8BC34A', '#FFDE00', '#FFC107'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                callback: function(value: number) { return value + '%' }
              }
            }
          },
          plugins: {
            legend: { display: false },
            title: { display: true, text: 'John Deere Digital Transformation Metrics' },
            tooltip: {
              callbacks: {
                label: function(context: any) {
                  let label = context.dataset.label || '';
                  if (label) { label += ': '; }
                  if (context.parsed.x !== null) { label += context.parsed.x + '%'; }
                  return label;
                }
              }
            }
          }
        }
      });
    }

    // Active Nav Link Styling (for modal)
    const sections = document.querySelectorAll(".jd-modal-content section");
    const navLinks = document.querySelectorAll(".jd-modal-content header nav a.nav-link");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id") || "";
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans scroll-smooth max-h-[80vh] overflow-y-auto px-2">
      {/* Sticky Nav Bar (centered, max width, no overlap) */}
      <div ref={navRef} className="sticky top-0 z-50 bg-white shadow-md border-b">
        <div className="max-w-screen-md mx-auto px-4 pr-8">
          <nav className="flex gap-1 flex-wrap justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                className="jd-nav-link text-[#367C2B] px-3 py-1.5 rounded-md hover:bg-gray-200 transition font-semibold text-sm"
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

      <main className="px-2 md:px-6">
        {/* Overview */}
        <section id="overview" className="pt-24 pb-12 bg-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-[#367C2B] text-center mb-2">Driving Service Excellence with CCMS</h1>
          <p className="text-center max-w-3xl mx-auto text-gray-700 mb-2">
            This case study explores John Deere's Case and Content Management System (CCMS), a pivotal component in its digital ecosystem. Discover how CCMS enhances service efficiency, optimizes customer support, and aligns with John Deere's strategic goals, and my role as an Associate Product Manager in its success.
          </p>
          <h2 className="text-xl font-semibold text-[#367C2B] text-center mt-6 mb-2">John Deere Equipment Showcase</h2>
          <p className="text-center max-w-2xl mx-auto text-gray-700 mb-4">
            As an Associate Product Manager, I led cross-functional teams to deliver significant software updates, developed product strategies that increased market share, and spearheaded feature integrations that markedly improved user satisfaction and efficiency for the CCMS platform.
          </p>
        </section>

        {/* CCMS Deep Dive */}
        <section id="ccms-deep-dive" className="pt-24 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#367C2B] text-center mb-4">CCMS Deep Dive: Core Functionalities</h2>
          <p className="text-center max-w-3xl mx-auto text-gray-700 mb-8">
            CCMS is more than just a ticketing system. It's an intelligent platform that integrates deeply with John Deere's connected machinery and dealer workflows to provide proactive and efficient support. Let's explore its key features.
          </p>

          {/* Mockup Images Section */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-[#367C2B] text-center mb-2">CCMS Platform Mockups</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="flex flex-col items-center">
                <img
                  src="/images/portfolio/jd-ccms-open-case.png"
                  alt="CCMS Open Case UI Mockup"
                  className="rounded shadow max-h-64 w-auto object-contain mb-2"
                  style={{ maxWidth: '100%' }}
                />
                <span className="text-sm text-gray-600">Open Case UI</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/portfolio/jd-ccms-solution-search.png"
                  alt="CCMS Solution Search UI Mockup"
                  className="rounded shadow max-h-64 w-auto object-contain mb-2"
                  style={{ maxWidth: '100%' }}
                />
                <span className="text-sm text-gray-600">Solution Search UI</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Ecosystem Integration */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#367C2B] mb-2">CCMS Ecosystem Integration</h3>
              <p className="text-gray-700 mb-2">CCMS is central to John Deere's digital ecosystem, connecting JDLink telematics, the Operations Center, dealer tools, and sustainability initiatives.</p>
              <div className="bg-gray-100 rounded p-3 text-center text-2xl mb-2">
                📡 JDLink APIs (Machine Data)
                <div>↓</div>
                ⚙️ CCMS Platform
                <div>↓</div>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  <span>🛠️ Dealer Portals</span>
                  <span>📱 Ops Center Mobile</span>
                  <span>📊 Analytics</span>
                  <span>🌿 Sustainability Hub</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">This integration enables a seamless flow of information for proactive support and data-driven decisions.</p>
            </div>
            {/* Automated Case Creation */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#367C2B] mb-2">Automated Case Creation</h3>
              <p className="text-gray-700 mb-2">CCMS automatically creates support cases from Diagnostic Trouble Codes (DTCs) transmitted by JDLink-connected machines, ensuring rapid response.</p>
              <div className="bg-gray-100 rounded p-3 text-center text-2xl mb-2">
                🚜 Machine Transmits DTC
                <div>↓</div>
                🔗 JDLink Relays Data
                <div>↓</div>
                📄 CCMS Auto-Creates Case
                <div>↓</div>
                👨‍🔧 Dealer Notified / Remote Diagnosis
              </div>
              <p className="text-sm text-gray-600 mt-2">This proactive system minimizes downtime by addressing issues before they escalate.</p>
            </div>
            {/* Content Management & Smart Search */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#367C2B] mb-2">Content Management & Smart Search</h3>
              <p className="text-gray-700 mb-2">A robust knowledge base with "Smart Search" allows support staff to quickly find solutions and "Expert Alerts", ensuring consistent and accurate information.</p>
              <div className="bg-gray-100 rounded p-3 text-center text-2xl mb-2">CCMS Solution Search UI</div>
              <p className="text-sm text-gray-600">Users can search by keyword, context, or machine information to leverage historical data for faster resolutions.</p>
              <p className="text-gray-700 mt-2">This was a key area of focus, ensuring information accessibility significantly improved technician efficiency.</p>
            </div>
            {/* ExpertConnect Integration */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#367C2B] mb-2">ExpertConnect Integration</h3>
              <p className="text-gray-700 mb-2">CCMS seamlessly integrates with dealer tools like ExpertConnect, allowing for efficient escalation and information sharing without data duplication.</p>
              <p className="text-sm text-gray-600 mt-2">This ensures a unified support experience and streamlined dealer workflows.</p>
            </div>
            {/* Remote Diagnostics & Programming */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#367C2B] mb-2">Remote Diagnostics & Programming</h3>
              <p className="text-gray-700 mb-2">Dealers can remotely troubleshoot, reset codes, and even perform software updates, reducing technician travel and downtime.</p>
              <p className="text-sm text-gray-600 mt-2">CCMS documents these remote interventions, ensuring a complete service history.</p>
            </div>
            {/* CCMS Case Management UI */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#367C2B] mb-2">CCMS Case Management UI</h3>
              <p className="text-gray-700 mb-2">The user interface provides a comprehensive view of each case, including contact details, product information, problem descriptions, and links to ExpertConnect tickets.</p>
              <div className="bg-gray-100 rounded p-3 text-center text-2xl mb-2">CCMS Open Case UI</div>
              <p className="text-sm text-gray-600">Features like priority setting and seamless information sharing were refined to enhance usability.</p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="pt-24 pb-12 bg-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-[#367C2B] text-center mb-4">Measurable Impact of CCMS</h2>
          <p className="text-center max-w-3xl mx-auto text-gray-700 mb-6">
            The implementation and continuous improvement of CCMS, driven by a product-centric agile approach, have yielded significant operational benefits and enhanced customer value. These impacts are reflected in service efficiency, support quality, and predictive capabilities.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-semibold text-[#367C2B] mb-4">Operational & Sustainability Gains</h3>
              <div className="mb-6">
                <img src="/images/Key Operational & Sustainability Impacts.png" alt="Key Operational & Sustainability Impacts" className="w-full h-auto rounded shadow" style={{maxHeight: 300}} />
              </div>
              <p className="text-gray-700 mb-2">CCMS contributes to John Deere's operational excellence and sustainability targets by enabling optimized maintenance, reducing fuel consumption, and improving fleet utilization.</p>
              <p className="text-sm text-gray-600 mt-2">Data from Table 2 & 3 in the case study, highlighting key quantitative benefits like targeted CO2e emission reductions and fuel savings potential through optimized operations enabled by connected support.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#367C2B] mb-4">Key Benefits Realized:</h3>
              <ul className="space-y-2">
                <li><span className="text-[#367C2B] mr-2">✔</span><b>Enhanced Service Efficiency</b><br /><span className="text-gray-700">Reduced downtime and accelerated repairs through remote diagnostics and prepared technicians.</span></li>
                <li><span className="text-[#367C2B] mr-2">✔</span><b>Optimized Customer Support</b><br /><span className="text-gray-700">Consistent, data-driven support with quick access to solutions, boosting customer satisfaction and loyalty.</span></li>
                <li><span className="text-[#367C2B] mr-2">✔</span><b>Proactive Predictive Maintenance</b><br /><span className="text-gray-700">Transformation of machine alerts into actionable service cases, preventing failures and maximizing uptime.</span></li>
                <li><span className="text-[#367C2B] mr-2">✔</span><b>Improved Fleet Utilization</b><br /><span className="text-gray-700">Data-driven insights for optimal resource deployment and maintenance planning.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* My Contributions Section */}
        <section id="my-contributions" className="pt-24 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#367C2B] text-center mb-4">My Contributions & Leadership as APM</h2>
          <p className="text-center max-w-3xl mx-auto text-gray-700 mb-6">
            As Associate Product Manager for the CCMS, I was instrumental in driving its growth and enhancing its market fit. My focus was on cross-functional leadership, strategic planning, and continuous improvement, delivering tangible results.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="p-4 bg-white rounded-lg shadow kpi-card text-center">
              <div className="text-3xl font-bold text-[#367C2B]">10%</div>
              <div className="font-semibold">Increase in Customer Retention</div>
              <div className="text-sm text-gray-600 mt-1">Achieved through stakeholder management and delivering 8 major software updates on time and within budget.</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow kpi-card text-center">
              <div className="text-3xl font-bold text-[#367C2B]">15%</div>
              <div className="font-semibold">Increase in Market Share</div>
              <div className="text-sm text-gray-600 mt-1">Resulting from strategic planning, customer insight analysis, and prioritizing features that resolved key pain points.</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow kpi-card text-center">
              <div className="text-3xl font-bold text-[#367C2B]">35%</div>
              <div className="font-semibold">Reduction in User Clicks</div>
              <div className="text-sm text-gray-600 mt-1">By consolidating three applications into a unified platform with intuitive design, improving user satisfaction by 20%.</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow kpi-card text-center">
              <div className="text-3xl font-bold text-[#367C2B]">60+</div>
              <div className="font-semibold">Usability Issues Resolved</div>
              <div className="text-sm text-gray-600 mt-1">Boosting customer satisfaction by another 20% and reducing support tickets by 15% through continuous improvement initiatives.</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow kpi-card text-center">
              <div className="font-semibold text-[#367C2B] mb-1">End-to-End Product Lifecycle Management</div>
              <div className="font-semibold">For Case & Content Management System</div>
              <div className="text-sm text-gray-600 mt-1">Drove product growth and market fit with a data-driven approach, managing the entire lifecycle.</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow kpi-card text-center">
              <div className="font-semibold text-[#367C2B] mb-1">Cross-Functional Team Leadership</div>
              <div className="font-semibold">Engineering, Design, Marketing, Sales</div>
              <div className="text-sm text-gray-600 mt-1">Successfully led diverse teams to deliver complex software updates and achieve strategic product goals.</div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-left max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-[#367C2B] mb-2">Feature Development Example: UI Consolidation</h3>
            <p className="text-gray-700 mb-2">One key project was consolidating three legacy applications into the unified CCMS platform. This involved:</p>
            <div className="flex flex-col md:flex-row justify-around items-center gap-4">
              <div>
                <h4 className="font-semibold text-gray-500">Before: Fragmented Experience</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  <li>3 separate applications</li>
                  <li>Repetitive navigation (5+ clicks)</li>
                  <li>Siloed information</li>
                </ul>
              </div>
              <div className="text-2xl text-[#367C2B] mx-4">➔</div>
              <div>
                <h4 className="font-semibold text-[#367C2B]">After: Unified CCMS Platform</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  <li>Single dashboard, intuitive tabs</li>
                  <li>35% fewer clicks</li>
                  <li>Unified search, proactive alerts</li>
                  <li>20% improved user satisfaction</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">This consolidation significantly reduced user friction and enabled more efficient cross-functional workflows, directly impacting user satisfaction and operational efficiency.</p>
          </div>
        </section>

        {/* Strategic Context Section */}
        <section id="strategic-context" className="pt-24 pb-12 bg-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-[#367C2B] text-center mb-4">Strategic Context & Future Outlook</h2>
          <p className="text-center max-w-3xl mx-auto text-gray-700 mb-6">
            CCMS is strategically positioned within John Deere's Agile transformation and its vision for a future driven by SaaS, advanced technologies, and enhanced connectivity, all while addressing key industry challenges.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-semibold text-[#367C2B] mb-4">Agile Transformation & Digital Metrics</h3>
              <div className="mb-6">
                <img src="/images/John Deere Digital Transformation Metrics.png" alt="John Deere Digital Transformation Metrics" className="w-full h-auto rounded shadow" style={{maxHeight: 300}} />
              </div>
              <p className="text-gray-700 mb-2">John Deere's shift to an Agile, product-centric model has accelerated innovation. CCMS development benefits directly from these efficiencies, enabling faster feature delivery and responsiveness.</p>
              <p className="text-sm text-gray-600 mt-2">Data from Table 3 in the case study, showcasing improvements like faster time-to-market and SaaS revenue targets.</p>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-2xl mr-2">📈</span>
                <b>SaaS Model Integration</b>
                <p className="text-gray-700">CCMS aligns with John Deere's goal of 10% revenue from as-a-service by 2030, offering continuous value through cloud-based support and content.</p>
              </div>
              <div>
                <span className="text-2xl mr-2">🤖</span>
                <b>Leveraging AI/ML & Autonomy</b>
                <p className="text-gray-700">Future CCMS versions will likely incorporate AI for intelligent case routing, enhanced smart search, and more precise predictive maintenance, integrating with autonomous offerings like See & Spray™.</p>
              </div>
              <div>
                <span className="text-2xl mr-2">🔧</span>
                <b>Addressing "Right-to-Repair"</b>
                <p className="text-gray-700">CCMS can play a role by providing transparent repair information, supporting John Deere's commitments to data transparency (ADT seal) and repair access.</p>
              </div>
              <div>
                <span className="text-2xl mr-2">🛰️</span>
                <b>Enhanced Connectivity (Starlink)</b>
                <p className="text-gray-700">Partnership with SpaceX will expand rural connectivity, increasing data flow and making CCMS even more critical for remote support and diagnostics.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sagar Pise | John Deere CCMS Case Study</p>
      </footer>

      <style jsx global>{`
        .jd-modal-content {
          scroll-behavior: smooth;
          position: relative;
          isolation: isolate;
        }
        .jd-modal-content .jd-nav-link {
          color: #367C2B !important;
        }
        .jd-modal-content .jd-nav-link.bg-jd-green {
          background-color: #367C2B;
          color: white !important;
        }
      `}</style>
    </div>
  );
}