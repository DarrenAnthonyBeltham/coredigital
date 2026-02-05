"use client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WorkSlider from '@/components/WorkSlider';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WorksPage() {
  return (
    <main>
        <Navigation />
        
        <section className="bg-light" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={8}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h5 className="text-primary-blue fw-bold text-uppercase mb-3">Portfolio</h5>
                            <h1 className="display-4 fw-bold mb-4" style={{ color: '#002a62' }}>
                                Selected Works
                            </h1>
                            <p className="lead text-muted">
                                A curated selection of digital products we have engineered, designed, and optimized for market leaders.
                            </p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="section-padding bg-white">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <WorkSlider />
                        </motion.div>
                    </Col>
                </Row>

                <div className="text-center mt-5">
                    <p className="text-muted mb-3">Want to see more detailed case studies?</p>
                    <Link href="/#contact" className="btn-primary-custom px-5 py-3">
                        Request Full Portfolio
                    </Link>
                </div>
            </Container>
        </section>
        
        <Footer />
    </main>
  );
}