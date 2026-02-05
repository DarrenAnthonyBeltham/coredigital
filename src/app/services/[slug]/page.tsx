import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { servicesData } from '@/data/services';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import * as motion from "framer-motion/client";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);
  
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | CoreDigital Services`,
    description: service.desc,
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.id === slug);

  if (!service) {
    return (
      <main className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="fw-bold">Service Not Found</h1>
          <Link href="/" className="btn btn-primary mt-3">Go Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-light">
        <Navigation />
        
        <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={9} className="text-center">
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="d-inline-flex align-items-center justify-content-center bg-white shadow-sm text-primary-blue rounded-circle mb-4" 
                          style={{ width: '100px', height: '100px', color: '#004aad' }}
                        >
                            {service.icon}
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Badge bg="light" text="dark" className="border mb-3 px-3 py-2 fw-normal text-uppercase tracking-wider">
                            Professional Service
                          </Badge>
                          <h1 className="display-4 fw-bold mb-4" style={{ color: '#002a62', letterSpacing: '-1px' }}>
                            {service.title}
                          </h1>
                          <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '700px', lineHeight: '1.8' }}>
                              {service.longDesc}
                          </p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="py-5 bg-white">
          <Container>
            <Row className="justify-content-center">
                <Col lg={10}>
                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="p-5 rounded-5 border bg-white shadow-lg"
                      style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}
                    >
                        <div className="text-center mb-5">
                          <h3 className="fw-bold" style={{ color: '#002a62' }}>What We Deliver</h3>
                          <div className="mx-auto mt-3" style={{ width: '60px', height: '4px', background: '#004aad', borderRadius: '2px' }}></div>
                        </div>

                        <Row className="g-4">
                            {service.features.map((feature: string, idx: number) => (
                                <Col md={6} key={idx}>
                                    <motion.div 
                                      whileHover={{ x: 10 }}
                                      className="d-flex align-items-center p-3 rounded-3 h-100"
                                      style={{ background: '#f8fbff', borderLeft: '4px solid #004aad' }}
                                    >
                                        <FaCheckCircle className="text-primary-blue me-3 flex-shrink-0" size={20} />
                                        <span className="fw-bold text-dark">{feature}</span>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                        
                        <div className="text-center mt-5 pt-4">
                            <h4 className="fw-bold mb-4">Ready to upgrade your business?</h4>
                            <Link href="/#contact" className="btn-primary-custom px-5 py-3 d-inline-flex align-items-center gap-2">
                                Book This Service <FaArrowRight />
                            </Link>
                        </div>
                    </motion.div>
                </Col>
            </Row>
          </Container>
        </section>

        <Footer />
    </main>
  );
}