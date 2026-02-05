"use client";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { servicesData } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-light">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="fw-bold mb-3" style={{ color: '#002a62' }}>Our Services</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            From architectural planning to debugging and optimization, we handle the entire software lifecycle.
          </p>
        </motion.div>

        <Row className="g-4 justify-content-center">
          {servicesData.map((service, index) => (
            <Col md={6} lg={4} key={index} className="d-flex align-items-stretch">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-100"
              >
                <Link href={`/services/${service.id}`} style={{ textDecoration: 'none' }}>
                    <Card className="service-card h-100 border-0 shadow-sm py-4 px-3">
                    <Card.Body className="service-card-body">
                        <div className="mb-3 d-inline-flex align-items-center justify-content-center bg-primary-blue text-white rounded-circle" style={{ width: '60px', height: '60px', flexShrink: 0 }}>
                        {service.icon}
                        </div>
                        <Card.Title className="fw-bold mt-2 mb-3" style={{ color: '#002a62' }}>
                        {service.title}
                        </Card.Title>
                        <Card.Text className="text-muted small">
                        {service.desc}
                        </Card.Text>
                        <div className="mt-auto pt-3 text-primary-blue fw-bold small">
                            Learn More &rarr;
                        </div>
                    </Card.Body>
                    </Card>
                </Link>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}