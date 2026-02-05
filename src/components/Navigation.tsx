"use client";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Works', path: '/works' },
  ];

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
      className={`fixed-top transition-all ${scrolled || expanded ? 'bg-white shadow-sm py-3' : 'bg-white/90 py-4'}`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <Container>
        <Link href="/" className="navbar-brand fw-bold fs-3 d-flex align-items-center" style={{ color: '#004aad' }}>
          CoreDigital
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-4 mt-3 mt-lg-0">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.path} className="text-decoration-none">
                <motion.span 
                  className="nav-link fw-medium text-dark text-nowrap px-0" 
                  whileHover={{ y: -2, color: '#004aad' }}
                  onClick={() => setExpanded(false)}
                  style={{ cursor: 'pointer', fontSize: '1rem' }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
            <div className="ms-lg-2 mt-3 mt-lg-0 w-100 w-lg-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/#contact" className="btn-primary-custom px-4 py-2 text-nowrap" onClick={() => setExpanded(false)} style={{ fontSize: '0.9rem' }}>
                  Get Started
                </Link>
              </motion.div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}