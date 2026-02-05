"use client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main>
        <Navigation />
        <section className="section-padding" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="mb-5 mb-lg-0">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="fw-bold mb-4" style={{ color: '#002a62' }}>Who We Are</h1>
                            <p className="lead text-muted mb-4">
                                CoreDigital is a team of passionate engineers and designers dedicated to building robust digital infrastructure.
                            </p>
                            <p className="text-muted">
                                Founded on the principles of clean code and scalable architecture, we treat every project not just as a job, but as a long-term partnership. We believe that good software is invisible—it just works, seamlessly and efficiently.
                            </p>
                        </motion.div>
                    </Col>
                    <Col lg={6}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, #f0f4ff 0%, #eef2ff 100%)', borderRadius: '20px' }}
                        ></motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Footer />
    </main>
  );
}