"use client";
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Contact() {
  const [validated, setValidated] = useState(false);

  // Fix 1: Added type for the event
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      alert("Form submitted! (Connect API here)");
    }
    setValidated(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#f0f4ff' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-5 rounded-4 shadow"
            >
              {/* Fix 2: Changed "Let's" to "Let&apos;s" to fix ESLint error */}
              <h2 className="fw-bold text-center mb-4">Let&apos;s Work Together</h2>
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control required type="text" placeholder="John Doe" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control required type="email" placeholder="name@company.com" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control required as="textarea" rows={4} />
                </Form.Group>
                <div className="text-center">
                  <Button type="submit" className="btn-primary-custom w-100 py-3 rounded-pill">
                    Send Message
                  </Button>
                </div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}