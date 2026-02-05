"use client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WorkSlider from '@/components/WorkSlider';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function WorksPage() {
  return (
    <main>
        <Navigation />
        <section className="section-padding" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
            <Container>
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="fw-bold mb-3" style={{ color: '#002a62' }}>Our Recent Works</h1>
                            <p className="lead text-muted">
                                Explore some of the successful projects we&apos;ve delivered for our clients.
                            </p>
                        </motion.div>
                    </Col>
                </Row>
                
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <WorkSlider />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Footer />
    </main>
  );
}