'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'
import Image from 'next/image'

export default function JohnDeereCCMSCaseStudy() {
  useEffect(() => {
    // Chart.js initialization
    const operationalCtx = (document.getElementById('operationalImpactChart') as HTMLCanvasElement)?.getContext('2d');
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

    const agileCtx = (document.getElementById('agileMetricsChart') as HTMLCanvasElement)?.getContext('2d');
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

    // Active Nav Link Styling
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("header nav a.nav-link");

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
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive" />
      <style jsx global>{`
        body { 
          font-family: 'Inter', sans-serif; 
          scroll-behavior: smooth; 
        }
        .jd-green { color: #367C2B; }
        .bg-jd-green { background-color: #367C2B; }
        .border-jd-green { border-color: #367C2B; }
        .jd-yellow { color: #FFDE00; }
        .bg-jd-yellow { background-color: #FFDE00; }
        .section-title { 
          font-size: 2.25rem; 
          font-weight: 700; 
          margin-bottom: 1.5rem; 
          color: #1a202c; 
        }
        .section-intro { 
          font-size: 1.125rem; 
          color: #4a5568; 
          margin-bottom: 2rem; 
          max-width: 800px; 
          margin-left: auto; 
          margin-right: auto; 
        }
        .chart-container { 
          position: relative; 
          width: 100%; 
          max-width: 700px; 
          margin-left: auto; 
          margin-right: auto; 
          height: 350px; 
          max-height: 400px; 
          padding: 1rem; 
          background-color: #fff; 
          border-radius: 0.5rem; 
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); 
        }
        @media (min-width: 768px) { 
          .chart-container { height: 400px; } 
        }
        .kpi-card { 
          background-color: white; 
          border-radius: 0.5rem; 
          padding: 1.5rem; 
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); 
          text-align: center; 
        }
        .kpi-value { 
          font-size: 2.5rem; 
          font-weight: 700; 
          color: #367C2B; 
        }
        .kpi-label { 
          font-size: 1rem; 
          color: #4a5568; 
          margin-top: 0.5rem; 
        }
        .flow-diagram { 
          background-color: #f7fafc; 
          border: 1px solid #e2e8f0; 
          border-radius: 0.5rem; 
          padding: 1.5rem; 
        }
        .flow-step { 
          background-color: white; 
          border-radius: 0.375rem; 
          padding: 1rem; 
          margin-bottom: 1rem; 
          box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06); 
          display: flex; 
          align-items: center; 
        }
        .flow-icon { 
          font-size: 1.5rem; 
          margin-right: 0.75rem; 
          color: #367C2B; 
        }
        .arrow-down { 
          text-align: center; 
          font-size: 1.5rem; 
          color: #718096; 
          margin-bottom: 1rem; 
        }
        .nav-link { 
          padding: 0.5rem 1rem; 
          border-radius: 0.375rem; 
          transition: background-color 0.3s ease; 
        }
        .nav-link:hover { 
          background-color: #e2e8f0; 
        }
        .nav-link.active { 
          background-color: #367C2B; 
          color: white; 
        }
      `}</style>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold jd-green">John Deere CCMS Case Study</a>
          <div className="space-x-4">
            <a href="#overview" className="nav-link text-gray-700">Overview</a>
            <a href="#ccms-deep-dive" className="nav-link text-gray-700">CCMS Deep Dive</a>
            <a href="#impact" className="nav-link text-gray-700">Impact</a>
            <a href="#my-contributions" className="nav-link text-gray-700">My Contributions</a>
            <a href="#strategic-context" className="nav-link text-gray-700">Strategic Context</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="overview" className="py-16 px-6 text-center bg-gray-100">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold jd-green mb-6">Driving Service Excellence with CCMS</h1>
            <p className="section-intro">
              This case study explores John Deere's Case and Content Management System (CCMS), a pivotal component in its digital ecosystem. Discover how CCMS enhances service efficiency, optimizes customer support, and aligns with John Deere's strategic goals, and my role as an Associate Product Manager in its success.
            </p>
            <div className="relative w-full max-w-4xl mx-auto h-[400px] rounded-lg shadow-xl mb-8">
              <Image
                src="https://via.placeholder.com/1200x400.png?text=John+Deere+Connected+Support"
                alt="John Deere Equipment Showcase"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              As an Associate Product Manager, I led cross-functional teams to deliver significant software updates, developed product strategies that increased market share, and spearheaded feature integrations that markedly improved user satisfaction and efficiency for the CCMS platform.
            </p>
          </div>
        </section>

        <section id="ccms-deep-dive" className="py-16 px-6">
          <div className="container mx-auto text-center">
            <h2 className="section-title">CCMS Deep Dive: Core Functionalities</h2>
            <p className="section-intro">
              CCMS is more than just a ticketing system. It's an intelligent platform that integrates deeply with John Deere's connected machinery and dealer workflows to provide proactive and efficient support. Let's explore its key features.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold jd-green mb-3">CCMS Ecosystem Integration</h3>
                <p className="text-gray-700 mb-4">CCMS is central to John Deere's digital ecosystem, connecting JDLink telematics, the Operations Center, dealer tools, and sustainability initiatives.</p>
                <div className="flow-diagram">
                  <div className="flow-step"><span className="flow-icon">📡</span> JDLink APIs (Machine Data)</div>
                  <div className="arrow-down">↓</div>
                  <div className="flow-step bg-jd-green text-white"><span className="flow-icon">⚙️</span> CCMS Platform</div>
                  <div className="arrow-down">↓</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flow-step text-sm"><span className="flow-icon">🛠️</span> Dealer Portals</div>
                    <div className="flow-step text-sm"><span className="flow-icon">📱</span> Ops Center Mobile</div>
                    <div className="flow-step text-sm"><span className="flow-icon">📊</span> Analytics</div>
                    <div className="flow-step text-sm"><span className="flow-icon">🌿</span> Sustainability Hub</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">This integration enables a seamless flow of information for proactive support and data-driven decisions.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold jd-green mb-3">Automated Case Creation</h3>
                <p className="text-gray-700 mb-4">CCMS automatically creates support cases from Diagnostic Trouble Codes (DTCs) transmitted by JDLink-connected machines, ensuring rapid response.</p>
                <div className="flow-diagram">
                  <div className="flow-step"><span className="flow-icon">🚜</span> Machine Transmits DTC</div>
                  <div className="arrow-down">↓</div>
                  <div className="flow-step"><span className="flow-icon">🔗</span> JDLink Relays Data</div>
                  <div className="arrow-down">↓</div>
                  <div className="flow-step"><span className="flow-icon">📄</span> CCMS Auto-Creates Case</div>
                  <div className="arrow-down">↓</div>
                  <div className="flow-step"><span className="flow-icon">👨‍🔧</span> Dealer Notified / Remote Diagnosis</div>
                </div>
                <p className="text-sm text-gray-600 mt-3">This proactive system minimizes downtime by addressing issues before they escalate.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold jd-green mb-3">Content Management & Smart Search</h3>
                <p className="text-gray-700 mb-2">A robust knowledge base with "Smart Search" allows support staff to quickly find solutions and "Expert Alerts", ensuring consistent and accurate information.</p>
                <div className="relative w-full h-[200px] rounded-md shadow-md mb-3">
                  <Image
                    src="https://via.placeholder.com/600x400.png?text=Solution+Search+UI"
                    alt="CCMS Solution Search UI"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <p className="text-sm text-gray-600">Users can search by keyword, context, or machine information to leverage historical data for faster resolutions.</p>
                <p className="text-gray-700 mt-2">This was a key area of focus, ensuring information accessibility significantly improved technician efficiency.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold jd-green mb-3">ExpertConnect Integration</h3>
                <p className="text-gray-700">CCMS seamlessly integrates with dealer tools like ExpertConnect, allowing for efficient escalation and information sharing without data duplication.</p>
                <p className="text-sm text-gray-600 mt-3">This ensures a unified support experience and streamlined dealer workflows.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold jd-green mb-3">Remote Diagnostics & Programming</h3>
                <p className="text-gray-700">Dealers can remotely troubleshoot, reset codes, and even perform software updates, reducing technician travel and downtime.</p>
                <p className="text-sm text-gray-600 mt-3">CCMS documents these remote interventions, ensuring a complete service history.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold jd-green mb-3">CCMS Case Management UI</h3>
                <p className="text-gray-700 mb-2">The user interface provides a comprehensive view of each case, including contact details, product information, problem descriptions, and links to ExpertConnect tickets.</p>
                <div className="relative w-full h-[200px] rounded-md shadow-md mb-3">
                  <Image
                    src="https://via.placeholder.com/600x400.png?text=CCMS+Open+Case+UI"
                    alt="CCMS Open Case UI"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <p className="text-sm text-gray-600">Features like priority setting and seamless information sharing were refined to enhance usability.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="py-16 px-6 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="section-title">Measurable Impact of CCMS</h2>
            <p className="section-intro">
              The implementation and continuous improvement of CCMS, driven by a product-centric agile approach, have yielded significant operational benefits and enhanced customer value. These impacts are reflected in service efficiency, support quality, and predictive capabilities.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-left">Operational & Sustainability Gains</h3>
                <p className="text-left text-gray-700 mb-6">CCMS contributes to John Deere's operational excellence and sustainability targets by enabling optimized maintenance, reducing fuel consumption, and improving fleet utilization.</p>
                <div className="chart-container">
                  <canvas id="operationalImpactChart"></canvas>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-left">Data from Table 2 & 3 in the case study, highlighting key quantitative benefits like targeted CO2e emission reductions and fuel savings potential through optimized operations enabled by connected support.</p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits Realized:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="jd-green mr-2 text-xl">✔</span>
                    <div>
                      <h4 className="font-semibold text-lg">Enhanced Service Efficiency</h4>
                      <p className="text-gray-700">Reduced downtime and accelerated repairs through remote diagnostics and prepared technicians.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="jd-green mr-2 text-xl">✔</span>
                    <div>
                      <h4 className="font-semibold text-lg">Optimized Customer Support</h4>
                      <p className="text-gray-700">Consistent, data-driven support with quick access to solutions, boosting customer satisfaction and loyalty.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="jd-green mr-2 text-xl">✔</span>
                    <div>
                      <h4 className="font-semibold text-lg">Proactive Predictive Maintenance</h4>
                      <p className="text-gray-700">Transformation of machine alerts into actionable service cases, preventing failures and maximizing uptime.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="jd-green mr-2 text-xl">✔</span>
                    <div>
                      <h4 className="font-semibold text-lg">Improved Fleet Utilization</h4>
                      <p className="text-gray-700">Data-driven insights for optimal resource deployment and maintenance planning.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="my-contributions" className="py-16 px-6">
          <div className="container mx-auto text-center">
            <h2 className="section-title">My Contributions & Leadership as APM</h2>
            <p className="section-intro">
              As Associate Product Manager for the CCMS, I was instrumental in driving its growth and enhancing its market fit. My focus was on cross-functional leadership, strategic planning, and continuous improvement, delivering tangible results.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="kpi-card">
                <div className="kpi-value">10%</div>
                <div className="kpi-label">Increase in Customer Retention</div>
                <p className="text-sm text-gray-600 mt-2">Achieved through stakeholder management and delivering 8 major software updates on time and within budget.</p>
              </div>
              <div className="kpi-card">
                <div className="kpi-value">15%</div>
                <div className="kpi-label">Increase in Market Share</div>
                <p className="text-sm text-gray-600 mt-2">Resulting from strategic planning, customer insight analysis, and prioritizing features that resolved key pain points.</p>
              </div>
              <div className="kpi-card">
                <div className="kpi-value">35%</div>
                <div className="kpi-label">Reduction in User Clicks</div>
                <p className="text-sm text-gray-600 mt-2">By consolidating three applications into a unified platform with intuitive design, improving user satisfaction by 20%.</p>
              </div>
              <div className="kpi-card">
                <div className="kpi-value">60+</div>
                <div className="kpi-label">Usability Issues Resolved</div>
                <p className="text-sm text-gray-600 mt-2">Boosting customer satisfaction by another 20% and reducing support tickets by 15% through continuous improvement initiatives.</p>
              </div>
              <div className="kpi-card">
                <div className="text-xl font-semibold jd-green mb-2">End-to-End Product Lifecycle Management</div>
                <div className="kpi-label">For Case & Content Management System</div>
                <p className="text-sm text-gray-600 mt-2">Drove product growth and market fit with a data-driven approach, managing the entire lifecycle.</p>
              </div>
              <div className="kpi-card">
                <div className="text-xl font-semibold jd-green mb-2">Cross-Functional Team Leadership</div>
                <div className="kpi-label">Engineering, Design, Marketing, Sales</div>
                <p className="text-sm text-gray-600 mt-2">Successfully led diverse teams to deliver complex software updates and achieve strategic product goals.</p>
              </div>
            </div>
            <div className="mt-12 p-6 bg-white rounded-lg shadow-lg text-left max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold jd-green mb-3">Feature Development Example: UI Consolidation</h3>
              <p className="text-gray-700 mb-4">One key project was consolidating three legacy applications into the unified CCMS platform. This involved:</p>
              <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="mb-4 md:mb-0">
                  <h4 className="font-semibold text-lg text-gray-500">Before: Fragmented Experience</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    <li>3 separate applications</li>
                    <li>Repetitive navigation (5+ clicks)</li>
                    <li>Siloed information</li>
                  </ul>
                </div>
                <div className="text-2xl jd-green mx-4">➔</div>
                <div>
                  <h4 className="font-semibold text-lg jd-green">After: Unified CCMS Platform</h4>
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
          </div>
        </section>

        <section id="strategic-context" className="py-16 px-6 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="section-title">Strategic Context & Future Outlook</h2>
            <p className="section-intro">
              CCMS is strategically positioned within John Deere's Agile transformation and its vision for a future driven by SaaS, advanced technologies, and enhanced connectivity, all while addressing key industry challenges.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-left">Agile Transformation & Digital Metrics</h3>
                <p className="text-left text-gray-700 mb-6">John Deere's shift to an Agile, product-centric model has accelerated innovation. CCMS development benefits directly from these efficiencies, enabling faster feature delivery and responsiveness.</p>
                <div className="chart-container">
                  <canvas id="agileMetricsChart"></canvas>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-left">Data from Table 3 in the case study, showcasing improvements like faster time-to-market and SaaS revenue targets.</p>
              </div>
              <div className="text-left space-y-6">
                <div>
                  <h4 className="font-semibold text-lg jd-green flex items-center"><span className="text-2xl mr-2">📈</span>SaaS Model Integration</h4>
                  <p className="text-gray-700">CCMS aligns with John Deere's goal of 10% revenue from as-a-service by 2030, offering continuous value through cloud-based support and content.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg jd-green flex items-center"><span className="text-2xl mr-2">🤖</span>Leveraging AI/ML & Autonomy</h4>
                  <p className="text-gray-700">Future CCMS versions will likely incorporate AI for intelligent case routing, enhanced smart search, and more precise predictive maintenance, integrating with autonomous offerings like See & Spray™.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg jd-green flex items-center"><span className="text-2xl mr-2">🔧</span>Addressing "Right-to-Repair"</h4>
                  <p className="text-gray-700">CCMS can play a role by providing transparent repair information, supporting John Deere's commitments to data transparency (ADT seal) and repair access.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg jd-green flex items-center"><span className="text-2xl mr-2">🛰️</span>Enhanced Connectivity (Starlink)</h4>
                  <p className="text-gray-700">Partnership with SpaceX will expand rural connectivity, increasing data flow and making CCMS even more critical for remote support and diagnostics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Sagar Pise | John Deere CCMS Case Study</p>
          <p className="text-sm text-gray-400 mt-1">This interactive case study was generated based on public information and project experience.</p>
        </div>
      </footer>
    </>
  )
} 