"use client";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaServer, 
  FaBug, 
  FaMagic, 
  FaPuzzlePiece, 
  FaTachometerAlt, 
  FaGlobe, 
  FaPalette 
} from 'react-icons/fa';

const services = [
  { 
    icon: <FaServer size={32} />, 
    title: "Full-Cycle Architecture", 
    desc: "Web, Apps, & Server. We build whole applications from scratch with robust, scalable architecture." 
  },
  { 
    icon: <FaBug size={32} />, 
    title: "Debugging & Fixes", 
    desc: "Identifying and resolving critical errors to ensure your software runs smoothly." 
  },
  { 
    icon: <FaMagic size={32} />, 
    title: "System Redesign", 
    desc: "Modernizing legacy interfaces and codebases for better usability and performance." 
  },
  { 
    icon: <FaPuzzlePiece size={32} />, 
    title: "Feature Expansion", 
    desc: "Seamlessly adding new modules or additional features to your existing platforms." 
  },
  { 
    icon: <FaTachometerAlt size={32} />, 
    title: "Performance Optimization", 
    desc: "Speeding up load times, database queries, and overall server response." 
  },
  { 
    icon: <FaGlobe size={32} />, 
    title: "High-Conversion Landing Pages", 
    desc: "Single-page sites designed specifically to capture leads and market products." 
  },
  { 
    icon: <FaPalette size={32} />, 
    title: "UI Design & Templates", 
    desc: "Clean, professional templates and custom designs that align with your brand identity." 
  },
];

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
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="d-flex align-items-stretch">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-100"
              >
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
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}