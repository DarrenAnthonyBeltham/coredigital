"use client";
import { Carousel, Badge, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "E-Commerce Ecosystem",
    category: "Full Stack Development",
    desc: "A comprehensive marketplace solution processing over 10k transactions daily with real-time inventory management.",
    bg: "#0b2545",
  },
  {
    id: 2,
    title: "FinTech Dashboard",
    category: "UI/UX & Frontend",
    desc: "High-performance trading interface with sub-millisecond data updates and institutional-grade security.",
    bg: "#134074",
  },
  {
    id: 3,
    title: "Logistics Command Center",
    category: "Mobile & Cloud",
    desc: "AI-powered route optimization system reducing fleet fuel consumption by 30% for a national carrier.",
    bg: "#13315c",
  },
];

export default function WorkSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect} 
      interval={4000} 
      pause="hover" 
      controls={false}
      className="shadow-lg rounded-5 overflow-hidden"
    >
      {projects.map((project) => (
        <Carousel.Item key={project.id}>
          <div 
            className="d-flex align-items-center" 
            style={{ 
              minHeight: '550px', 
              background: `linear-gradient(135deg, ${project.bg} 0%, #000000 100%)`,
            }}
          >
            <div className="container px-5">
              <div className="row align-items-center">
                <div className="col-lg-8">
                    <Badge bg="white" text="dark" className="mb-3 px-3 py-2 fw-bold text-uppercase tracking-wider">
                        {project.category}
                    </Badge>
                    <h2 className="display-4 fw-bold text-white mb-4" style={{ letterSpacing: '-1px' }}>
                        {project.title}
                    </h2>
                    <p className="lead text-white-50 mb-5" style={{ maxWidth: '600px' }}>
                        {project.desc}
                    </p>
                    <Button variant="outline-light" className="rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2">
                        View Case Study <FaArrowRight />
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}