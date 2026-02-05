"use client";
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '60px', background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="text-center text-lg-start z-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-4" style={{ color: '#002a62', lineHeight: '1.1' }}>
                Solid Architecture. <br />
                <span style={{ color: '#004aad' }}>Seamless Applications.</span>
              </h1>
              <p className="lead text-muted mb-5" style={{ maxWidth: '600px', margin: '0 auto 3rem 0' }}>
                CoreDigital specializes in full-cycle development. We architect, build, debug, and optimize complex systems for Web and Mobile.
              </p>
              
              <div className="d-flex flex-column flex-lg-row gap-3 justify-content-center justify-content-lg-start">
                <a href="#contact" className="btn-primary-custom">
                  Consult Your Architecture
                </a>
                <a href="#services" className="btn-outline-custom">
                  View Service List
                </a>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={5} className="mt-5 mt-lg-0 position-relative text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '450px' }}
            >
              <div style={{ 
                width: '100%', 
                height: '400px', 
                background: 'linear-gradient(45deg, #004aad, #007bff)', 
                borderRadius: '30px', 
                boxShadow: '0 20px 40px rgba(0,74,173,0.3)' 
              }}></div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '-20px',
                  background: 'white',
                  padding: '15px 25px',
                  borderRadius: '16px',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                  fontWeight: 'bold',
                  color: '#002a62',
                  zIndex: 2,
                  textAlign: 'left'
                }}
              >
                <div>⚡ 99% Speed</div>
                <small className="text-muted fw-normal">Optimized Core</small>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                  position: 'absolute',
                  bottom: '50px',
                  left: '-30px',
                  background: 'white',
                  padding: '15px 25px',
                  borderRadius: '16px',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                  fontWeight: 'bold',
                  color: '#002a62',
                  zIndex: 2,
                  textAlign: 'left'
                }}
              >
                 <div>🛡️ Bug-Free</div>
                 <small className="text-muted fw-normal">Clean Architecture</small>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}