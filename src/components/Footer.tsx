"use client";
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h4 className="fw-bold mb-3">CoreDigital</h4>
            <p className="text-white-50">Innovating your digital presence with modern technology.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0 text-white-50">&copy; {new Date().getFullYear()} CoreDigital. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}