"use client";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
      className={`fixed-top ${scrolled || expanded ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-3" style={{ color: '#004aad' }}>
          CoreDigital
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-lg-4 mt-3 mt-lg-0 bg-white px-3 pb-3 px-lg-0 pb-lg-0 w-100 w-lg-auto">
            <Nav.Link href="#services" className="fw-medium text-dark" onClick={() => setExpanded(false)}>Services</Nav.Link>
            <Nav.Link href="#process" className="fw-medium text-dark" onClick={() => setExpanded(false)}>Process</Nav.Link>
            <Nav.Link href="#about" className="fw-medium text-dark" onClick={() => setExpanded(false)}>About</Nav.Link>
            <div className="ms-lg-2 mt-3 mt-lg-0 w-100 w-lg-auto">
                <a href="#contact" className="btn-primary-custom px-4 py-2" onClick={() => setExpanded(false)} style={{ fontSize: '0.9rem' }}>
                  Get Started
                </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}