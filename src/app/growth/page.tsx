import Link from 'next/link';
import { FaBolt, FaSearchDollar, FaCrosshairs, FaCogs, FaChartBar, FaDatabase } from 'react-icons/fa';
import AnimatedElement from '@/components/AnimatedElement';
import AuditCTA from '@/components/AuditCTA';

export const metadata = {
  title: 'Digital Engine | Powered by CoreDigital',
  description: 'Turn traffic into revenue. High-conversion landing pages, elite SEO, and automated lead generation engineered for modern businesses.',
};

export default function GrowthHome() {
  return (
    <main style={{ backgroundColor: '#050505', color: '#ffffff', overflowX: 'hidden' }}>
      
      <nav className="py-4 position-absolute w-100 z-3" style={{ background: 'transparent' }}>
        <div className="container-fluid px-4 px-md-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <Link href="/growth" className="text-decoration-none">
              <AnimatedElement type="slide-left">
                <div className="d-flex align-items-center gap-3">
                  <FaBolt style={{ color: '#ff4e00', fontSize: '1.2rem' }} />
                  <span className="fw-bolder fs-4 text-white text-uppercase" style={{ letterSpacing: '2px' }}>
                    Digital Engine
                  </span>
                </div>
              </AnimatedElement>
            </Link>
            <AnimatedElement type="slide-right">
              <Link href="https://coredigital.com" className="text-white-50 text-decoration-none small fw-bold text-uppercase tracking-wider hover-text-white transition-all">
                By CoreDigital &rarr;
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </nav>

      <section className="d-flex flex-column justify-content-center position-relative" style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <div className="position-absolute top-0 end-0 w-50 h-100" style={{ background: 'radial-gradient(circle at top right, rgba(255, 78, 0, 0.15) 0%, transparent 60%)', zIndex: 1 }}></div>
        
        <div className="container-fluid px-4 px-md-5 position-relative" style={{ zIndex: 2 }}>
          <AnimatedElement type="stagger-parent">
            <AnimatedElement type="stagger-child">
              <p className="text-uppercase fw-bold mb-4" style={{ color: '#ff4e00', letterSpacing: '3px', fontSize: '1rem' }}>
                [ Data-Driven Growth Agency ]
              </p>
            </AnimatedElement>
            
            <AnimatedElement type="stagger-child">
              <h1 className="fw-black text-white text-uppercase" style={{ fontSize: 'clamp(4rem, 10vw, 12rem)', lineHeight: '0.85', letterSpacing: '-3px' }}>
                Traffic <br />
                Is Good. <br />
                <span style={{ color: '#ff4e00' }}>Revenue</span> <br />
                Is Better.
              </h1>
            </AnimatedElement>

            <div className="row mt-5 pt-4">
              <div className="col-lg-5">
                <AnimatedElement type="stagger-child">
                  <p className="lead text-white-50 mb-5" style={{ fontSize: '1.4rem', lineHeight: '1.6' }}>
                    We combine elite software engineering with aggressive SEO and programmatic lead automation to build digital engines that scale automatically.
                  </p>
                </AnimatedElement>
                <AnimatedElement type="stagger-child">
                  {/* REPLACED THE LINK WITH THE MODAL TRIGGER */}
                  <AuditCTA variant="button" />
                </AnimatedElement>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <AnimatedElement type="marquee" className="py-4 border-top border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05) !important', backgroundColor: '#0a0a0a' }}>
        <div className="d-flex align-items-center gap-5 px-4 text-white-50 fs-2 fw-black text-uppercase tracking-wider">
          <span className="ms-5">Technical SEO</span> <FaBolt style={{ color: '#ff4e00' }} />
          <span>Next.js Funnels</span> <FaBolt style={{ color: '#ff4e00' }} />
          <span>Lead Automation</span> <FaBolt style={{ color: '#ff4e00' }} />
          <span>A/B Testing</span> <FaBolt style={{ color: '#ff4e00' }} />
          <span>CRM Integration</span> <FaBolt style={{ color: '#ff4e00' }} />
        </div>
      </AnimatedElement>

      <section id="services" className="py-5 position-relative">
        <div className="container-fluid px-4 px-md-5 py-5 my-5">
          <div className="row mb-5 pb-4">
            <div className="col-lg-8">
              <AnimatedElement type="slide-up">
                <h2 className="text-uppercase fw-black text-white" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: '0.9', letterSpacing: '-2px' }}>
                  Engineered <br /> Dominance.
                </h2>
              </AnimatedElement>
            </div>
            <div className="col-lg-4 d-flex align-items-end">
              <AnimatedElement type="slide-up" delay={0.2}>
                <p className="text-white-50 fs-5 fw-medium mb-0">
                  The architecture of growth. No bloated templates. Just raw speed, precise tracking, and psychological conversion design.
                </p>
              </AnimatedElement>
            </div>
          </div>

          <AnimatedElement type="stagger-parent" className="row g-4">
            <div className="col-lg-7">
              <AnimatedElement type="stagger-child" hoverLift className="h-100">
                <div className="p-5 h-100 d-flex flex-column" style={{ backgroundColor: '#111111', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <FaCrosshairs style={{ fontSize: '3.5rem', color: '#ff4e00', marginBottom: '2rem' }} />
                  <h3 className="fw-black text-uppercase fs-1 mb-4" style={{ letterSpacing: '-1px' }}>High-Conversion <br/> Funnels</h3>
                  <p className="text-white-50 fs-5 mb-0 mt-auto" style={{ lineHeight: '1.8' }}>
                    Stop losing visitors to slow loading times. We build lightning-fast, psychologically designed Next.js landing pages heavily A/B tested to maximize visitor-to-lead conversion rates.
                  </p>
                </div>
              </AnimatedElement>
            </div>
            
            <div className="col-lg-5">
              <AnimatedElement type="stagger-child" hoverLift className="h-100">
                <div className="p-5 h-100 d-flex flex-column" style={{ backgroundColor: '#ff4e00', borderRadius: '24px' }}>
                  <FaSearchDollar style={{ fontSize: '3.5rem', color: '#ffffff', marginBottom: '2rem' }} />
                  <h3 className="fw-black text-uppercase fs-1 text-white mb-4" style={{ letterSpacing: '-1px' }}>Technical <br/> SEO</h3>
                  <p className="text-white opacity-75 fs-5 mb-0 mt-auto fw-medium" style={{ lineHeight: '1.8' }}>
                    We engineer your site architecture, audit Core Web Vitals, and build programmatic SEO structures that consistently dominate Google&apos;s search algorithms.
                  </p>
                </div>
              </AnimatedElement>
            </div>

            <div className="col-lg-4">
              <AnimatedElement type="stagger-child" hoverLift className="h-100">
                <div className="p-5 h-100" style={{ backgroundColor: '#111111', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <FaCogs style={{ fontSize: '2.5rem', color: '#ff4e00', marginBottom: '1.5rem' }} />
                  <h3 className="fw-bolder text-uppercase fs-3 mb-3" style={{ letterSpacing: '-1px' }}>Lead Automation</h3>
                  <p className="text-white-50 mb-0" style={{ lineHeight: '1.7' }}>
                    Intelligent Python and n8n workflows routing leads, triggering sequences, and notifying your sales team in real-time. Never drop a lead again.
                  </p>
                </div>
              </AnimatedElement>
            </div>

            <div className="col-lg-4">
              <AnimatedElement type="stagger-child" hoverLift className="h-100">
                <div className="p-5 h-100" style={{ backgroundColor: '#111111', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <FaChartBar style={{ fontSize: '2.5rem', color: '#ff4e00', marginBottom: '1.5rem' }} />
                  <h3 className="fw-bolder text-uppercase fs-3 mb-3" style={{ letterSpacing: '-1px' }}>Data & Tracking</h3>
                  <p className="text-white-50 mb-0" style={{ lineHeight: '1.7' }}>
                    Custom analytics dashboards. We implement server-side tracking and Meta API integrations to give you absolute clarity on your ROI.
                  </p>
                </div>
              </AnimatedElement>
            </div>

            <div className="col-lg-4">
              <AnimatedElement type="stagger-child" hoverLift className="h-100">
                <div className="p-5 h-100" style={{ backgroundColor: '#111111', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <FaDatabase style={{ fontSize: '2.5rem', color: '#ff4e00', marginBottom: '1.5rem' }} />
                  <h3 className="fw-bolder text-uppercase fs-3 mb-3" style={{ letterSpacing: '-1px' }}>CRM Integration</h3>
                  <p className="text-white-50 mb-0" style={{ lineHeight: '1.7' }}>
                    Seamless connections between your high-speed landing pages and Salesforce, HubSpot, or custom databases engineered by our backend team.
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: '#ff4e00', color: '#050505' }}>
        <div className="container-fluid px-4 px-md-5 py-5 my-4">
          <div className="row align-items-center">
            <div className="col-lg-6 pe-lg-5 mb-5 mb-lg-0">
              <AnimatedElement type="stagger-parent">
                <AnimatedElement type="stagger-child">
                  <p className="text-uppercase fw-bold mb-4 text-dark" style={{ letterSpacing: '2px', fontSize: '1rem' }}>
                    [ The Unfair Advantage ]
                  </p>
                </AnimatedElement>
                
                <AnimatedElement type="stagger-child">
                  <h2 className="text-uppercase fw-black mb-5 text-dark" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '0.9', letterSpacing: '-2px' }}>
                    Marketers <br/> Guess. <br/> We Execute.
                  </h2>
                </AnimatedElement>
                
                <div className="d-flex flex-column gap-4">
                  {[
                    'Sub-second load speeds via Next.js',
                    'Custom data pipelines & tracking',
                    'Direct CRM & API integrations'
                  ].map((item, i) => (
                    <AnimatedElement type="stagger-child" key={i}>
                      <div className="d-flex align-items-start border-top pt-4" style={{ borderColor: 'rgba(0,0,0,0.1) !important' }}>
                        <span className="fw-black me-4 fs-4 text-white">0{i+1}</span>
                        <span className="fw-bolder text-uppercase fs-4 text-dark" style={{ letterSpacing: '-0.5px' }}>{item}</span>
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </AnimatedElement>
            </div>
            
            <div className="col-lg-6">
              <AnimatedElement type="scale">
                <div className="w-100 bg-black d-flex flex-column justify-content-center align-items-center text-center p-5 position-relative overflow-hidden" style={{ minHeight: '650px', borderRadius: '32px' }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ background: 'radial-gradient(circle at center, #004aad 0%, transparent 70%)' }}></div>
                  <AnimatedElement type="float" className="position-relative z-2">
                    <FaBolt style={{ color: '#ff4e00', fontSize: '5rem', marginBottom: '3rem' }} />
                  </AnimatedElement>
                  <h3 className="text-white text-uppercase fw-black mb-3 position-relative z-2" style={{ fontSize: '3rem', letterSpacing: '-2px', lineHeight: '1' }}>Built on<br/>CoreDigital</h3>
                  <p className="text-white-50 text-uppercase fw-bold position-relative z-2" style={{ letterSpacing: '3px' }}>Scalability &times; Performance</p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      <section id="audit" className="py-5" style={{ backgroundColor: '#050505' }}>
        <div className="container-fluid px-4 px-md-5 py-5 my-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <AnimatedElement type="slide-up">
                <h2 className="fw-black text-uppercase text-white mb-5" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', lineHeight: '0.85', letterSpacing: '-3px' }}>
                  Dominate <br/> Your Market.
                </h2>
                
                <AuditCTA variant="inline-form" />

              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 border-top" style={{ backgroundColor: '#0a0a0a', borderColor: 'rgba(255,255,255,0.05) !important' }}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row align-items-end">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-flex align-items-center gap-3 mb-4">
                <FaBolt style={{ color: '#ff4e00', fontSize: '1.2rem' }} />
                <span className="fw-bolder fs-4 text-white text-uppercase" style={{ letterSpacing: '2px' }}>
                  Digital Engine
                </span>
              </div>
              <p className="text-white-50 small fw-bold text-uppercase mb-0" style={{ letterSpacing: '2px' }}>
                &copy; {new Date().getFullYear()} All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="text-white-50 small fw-bold text-uppercase mb-0" style={{ letterSpacing: '2px' }}>
                Powered by <Link href="https://coredigital.com" className="text-white text-decoration-none border-bottom border-white pb-1 ms-2">CoreDigital</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}