"use client";
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Discovery", desc: "We dive deep into your business goals, user needs, and technical requirements to map out a winning strategy." },
  { number: "02", title: "Architecture", desc: "Our engineers design a scalable, secure foundation while designers prototype intuitive user experiences." },
  { number: "03", title: "Development", desc: "We build your product in agile sprints, keeping you updated with demos and progress reports every week." },
  { number: "04", title: "Launch & Scale", desc: "After rigorous testing, we deploy your solution and monitor performance to ensure a smooth takeoff." },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white position-relative overflow-hidden">
      <Container>
        <div className="text-center mb-5">
            <h6 className="text-primary-blue fw-bold text-uppercase ls-2">How We Work</h6>
            <h2 className="fw-bold display-5" style={{ color: '#002a62' }}>From Concept to Code</h2>
        </div>

        <Row className="g-4 position-relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="d-none d-lg-block position-absolute top-50 start-0 w-100 border-top border-2 border-light" style={{ zIndex: 0, transform: 'translateY(-20px)' }}></div>

            {steps.map((step, idx) => (
                <Col lg={3} md={6} key={idx} className="position-relative" style={{ zIndex: 1 }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="bg-white p-4 h-100 text-center"
                    >
                        <div 
                            className="d-flex align-items-center justify-content-center bg-primary-blue text-white rounded-circle mx-auto mb-4 fw-bold fs-4 shadow-sm"
                            style={{ width: '60px', height: '60px' }}
                        >
                            {step.number}
                        </div>
                        <h4 className="fw-bold mb-3" style={{ color: '#002a62' }}>{step.title}</h4>
                        <p className="text-muted small mb-0">
                            {step.desc}
                        </p>
                    </motion.div>
                </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}