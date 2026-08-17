import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const WorkSlider = dynamic(() => import('@/components/WorkSlider'));

export const metadata = {
  title: 'Selected Works | CoreDigital',
  description: 'A curated selection of digital products we have engineered, designed, and optimized for market leaders.',
};

export default function WorksPage() {
  return (
    <main>
        <Navigation />
        
        <section className="bg-light" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={8}>
                        <h5 className="text-primary-blue fw-bold text-uppercase mb-3">Portfolio</h5>
                        <h1 className="display-4 fw-bold mb-4" style={{ color: '#002a62' }}>
                            Selected Works
                        </h1>
                        <p className="lead text-muted">
                            A curated selection of digital products we have engineered, designed, and optimized for market leaders.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="section-padding bg-white">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12}>
                        <WorkSlider />
                    </Col>
                </Row>

                <div className="text-center mt-5">
                    <p className="text-muted mb-3">Want to see more detailed case studies?</p>
                    <Link href="/#contact" className="btn-primary-custom px-5 py-3 d-inline-block">
                        Request Full Portfolio
                    </Link>
                </div>
            </Container>
        </section>
        
        <Footer />
    </main>
  );
}