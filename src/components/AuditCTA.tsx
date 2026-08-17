"use client";

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowRight, FaBolt, FaCheckCircle, FaChartLine, FaCrosshairs } from 'react-icons/fa';

interface Props {
  variant?: 'button' | 'inline-form';
}

export default function AuditCTA({ variant = 'button' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOpen = (e?: FormEvent) => {
    if (e) e.preventDefault();
    setIsOpen(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setIsSuccess(false), 500);
  };

  return (
    <>
      {variant === 'button' ? (
        <button 
          onClick={handleOpen}
          className="btn d-inline-flex align-items-center gap-3 text-white text-decoration-none text-uppercase fw-bolder fs-5 rounded-0 border-0 p-0" 
          style={{ borderBottom: '2px solid #ff4e00', paddingBottom: '8px', letterSpacing: '1px', background: 'transparent' }}
        >
          Audit My Website <FaArrowRight style={{ color: '#ff4e00' }} />
        </button>
      ) : (
        <form onSubmit={handleOpen} className="d-flex flex-column flex-md-row border-bottom pb-4 mt-5" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
          <input 
            type="text" 
            inputMode="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="form-control border-0 bg-transparent px-0 shadow-none fw-bolder text-white fs-2" 
            placeholder="ENTER YOUR WEBSITE URL" 
            required 
            style={{ borderRadius: '0' }}
          />
          <button type="submit" className="btn text-dark fw-black text-uppercase px-5 py-4 mt-4 mt-md-0 fs-5 transition-all" style={{ backgroundColor: '#ff4e00', borderRadius: '16px', letterSpacing: '1px' }}>
            Audit Now
          </button>
        </form>
      )}

      <AnimatePresence>
        {isOpen && (
          <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ zIndex: 9999 }}>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="position-absolute w-100 h-100"
              style={{ background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(12px)' }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="position-relative w-100 overflow-hidden shadow-lg"
              style={{ maxWidth: '1000px', backgroundColor: '#0a0a0a', borderRadius: '24px', border: '1px solid rgba(255, 78, 0, 0.2)' }}
            >
              <button 
                onClick={closeModal} 
                className="position-absolute top-0 end-0 m-4 btn btn-link text-white-50 hover-text-white border-0 p-0"
                style={{ zIndex: 10 }}
              >
                <FaTimes className="fs-4" />
              </button>

              <div className="row g-0">
                <div className="col-md-5 p-5 position-relative d-none d-md-block" style={{ backgroundColor: '#111111', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ background: 'radial-gradient(circle at top left, #ff4e00 0%, transparent 60%)' }}></div>
                  <div className="position-relative z-2">
                    <FaBolt style={{ color: '#ff4e00', fontSize: '2rem', marginBottom: '2rem' }} className="mb-4" />
                    <h3 className="fw-black text-white text-uppercase fs-2 mb-4" style={{ letterSpacing: '-1px' }}>
                      The Growth <br/> Blueprint.
                    </h3>
                    <p className="text-white-50 fw-medium mb-5" style={{ lineHeight: '1.6' }}>
                      We do not send automated PDF reports. You will receive a custom, engineered breakdown of exactly why you are losing conversions and search volume.
                    </p>
                    
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-4">
                      {[
                        { icon: <FaCrosshairs />, text: 'Funnel Drop-off Analysis' },
                        { icon: <FaChartLine />, text: 'Competitor Gap Strategy' },
                        { icon: <FaCheckCircle />, text: 'Core Web Vitals Audit' }
                      ].map((item, i) => (
                        <li key={i} className="d-flex align-items-center gap-3">
                          <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '32px', height: '32px', backgroundColor: 'rgba(255, 78, 0, 0.1)', color: '#ff4e00' }}>
                            {item.icon}
                          </div>
                          <span className="fw-bold text-white text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-md-7 p-4 p-md-5">
                  <AnimatePresence mode="wait">
                    {!isSuccess ? (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onSubmit={handleSubmit}
                        className="d-flex flex-column h-100 justify-content-center"
                      >
                        <h4 className="fw-black text-white text-uppercase mb-2 fs-3" style={{ letterSpacing: '-1px' }}>Request Your Audit</h4>
                        <p className="text-white-50 mb-4 fw-medium">Enter your details below to secure your spot.</p>

                        <div className="mb-4">
                          <label className="form-label text-uppercase fw-bold text-white-50" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>Website URL</label>
                          <input 
                            type="text" 
                            inputMode="url"
                            className="form-control bg-transparent border-0 border-bottom text-white px-0 shadow-none fs-5 fw-bold" 
                            style={{ borderColor: 'rgba(255,255,255,0.2)', borderRadius: '0' }}
                            placeholder="yoursite.com"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required 
                          />
                        </div>

                        <div className="row g-4 mb-4">
                          <div className="col-sm-6">
                            <label className="form-label text-uppercase fw-bold text-white-50" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>Full Name</label>
                            <input type="text" className="form-control bg-transparent border-0 border-bottom text-white px-0 shadow-none fs-5 fw-bold" style={{ borderColor: 'rgba(255,255,255,0.2)', borderRadius: '0' }} placeholder="John Doe" required />
                          </div>
                          <div className="col-sm-6">
                            <label className="form-label text-uppercase fw-bold text-white-50" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>Work Email</label>
                            <input type="email" className="form-control bg-transparent border-0 border-bottom text-white px-0 shadow-none fs-5 fw-bold" style={{ borderColor: 'rgba(255,255,255,0.2)', borderRadius: '0' }} placeholder="john@company.com" required />
                          </div>
                        </div>

                        <div className="mb-5">
                          <label className="form-label text-uppercase fw-bold text-white-50" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>Current Monthly Revenue</label>
                          <select className="form-select bg-transparent border-0 border-bottom text-white px-0 shadow-none fs-5 fw-bold" style={{ borderColor: 'rgba(255,255,255,0.2)', borderRadius: '0', cursor: 'pointer' }} required>
                            <option value="" className="bg-dark text-white-50">Select Range...</option>
                            <option value="under_10k" className="bg-dark text-white">Under $10,000</option>
                            <option value="10k_50k" className="bg-dark text-white">$10,000 - $50,000</option>
                            <option value="over_50k" className="bg-dark text-white">$50,000+</option>
                          </select>
                        </div>

                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="btn w-100 text-dark fw-black text-uppercase py-3 fs-5 transition-all d-flex align-items-center justify-content-center gap-3" 
                          style={{ backgroundColor: '#ff4e00', borderRadius: '12px', letterSpacing: '1px' }}
                        >
                          {isSubmitting ? (
                            <span className="spinner-border spinner-border-sm text-dark" role="status" aria-hidden="true"></span>
                          ) : (
                            <>Analyze Core Vitals <FaArrowRight /></>
                          )}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="d-flex flex-column align-items-center justify-content-center h-100 text-center py-5"
                      >
                        <div className="d-flex align-items-center justify-content-center rounded-circle mb-4" style={{ width: '80px', height: '80px', backgroundColor: 'rgba(255, 78, 0, 0.1)', color: '#ff4e00', fontSize: '2.5rem' }}>
                          <FaCheckCircle />
                        </div>
                        <h4 className="fw-black text-white text-uppercase mb-3 fs-2" style={{ letterSpacing: '-1px' }}>Audit Initiated</h4>
                        <p className="text-white-50 mb-0 fw-medium lead" style={{ maxWidth: '400px' }}>
                          Our engineering team is scanning <span className="text-white">{url || 'your site'}</span>. We will reach out to your email shortly with the execution plan.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}