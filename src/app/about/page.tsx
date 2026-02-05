"use client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';

const stats = [
    { number: "50+", label: "Enterprise Projects" },
    { number: "98%", label: "Client Retention" },
    { number: "4+", label: "Years Experience" },
    { number: "24/7", label: "Support Coverage" },
];

const values = [
    { icon: <FaRocket />, title: "Innovation First", text: "We don't just follow trends; we engineer solutions that set new standards." },
    { icon: <FaUsers />, title: "Client Partnership", text: "We work as an extension of your team, not just a vendor." },
    { icon: <FaAward />, title: "Excellence", text: "Pixel-perfect design and clean, scalable code are our non-negotiables." },
    { icon: <FaHandshake />, title: "Transparency", text: "Clear communication and honest timelines from day one." },
];

export default function AboutPage() {
  return (
    <main>
        <Navigation />
        
        <section style={{ paddingTop: '160px', paddingBottom: '100px', background: '#f8f9fa' }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="mb-5 mb-lg-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h5 className="text-primary-blue fw-bold text-uppercase mb-3">About CoreDigital</h5>
                            <h1 className="display-4 fw-bold mb-4" style={{ color: '#002a62' }}>
                                Engineering the <br/>
                                <span className="text-primary-blue">Future of Business</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                We are a premium software house dedicated to transforming complex business challenges into elegant, scalable digital solutions.
                            </p>
                            <p className="text-muted mb-0">
                                Founded on the principles of engineering rigor and design excellence, CoreDigital bridges the gap between creative vision and technical execution. We don&apos;t just build software; we build the infrastructure for your company&apos;s growth.
                            </p>
                        </motion.div>
                    </Col>
                    <Col lg={6}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="position-relative"
                        >
                            <div className="rounded-5 shadow-lg" style={{ width: '100%', height: '450px', background: 'linear-gradient(45deg, #004aad, #002a62)', overflow: 'hidden', position: 'relative' }}>
                                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                                    <h3 className="fw-bold">CoreDigital HQ</h3>
                                    <p className="small opacity-75">Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="py-5 bg-white border-bottom">
            <Container>
                <Row className="g-4">
                    {stats.map((stat, idx) => (
                        <Col key={idx} md={3} xs={6}>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <h2 className="display-5 fw-bold text-primary-blue mb-0">{stat.number}</h2>
                                <p className="text-muted small text-uppercase tracking-wide fw-bold">{stat.label}</p>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

        <section className="section-padding">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold" style={{ color: '#002a62' }}>Our Core Values</h2>
                    <p className="text-muted">The principles that guide every line of code we write.</p>
                </div>
                <Row className="g-4">
                    {values.map((val, idx) => (
                        <Col key={idx} md={6}>
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="h-100"
                            >
                                <Card className="border-0 shadow-sm h-100 p-4">
                                    <Card.Body>
                                        <div className="mb-3 text-primary-blue fs-2">{val.icon}</div>
                                        <h4 className="fw-bold mb-3" style={{ color: '#002a62' }}>{val.title}</h4>
                                        <p className="text-muted mb-0">{val.text}</p>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

        <Footer />
    </main>
  );
}