"use client";
import { Carousel, Badge } from 'react-bootstrap';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    desc: "A full-stack marketplace with real-time inventory and payment processing.",
    bg: "#004aad", 
  },
  {
    id: 2,
    title: "Finance Dashboard",
    category: "UI/UX Design",
    desc: "Investment tracking dashboard with interactive charts and dark mode.",
    bg: "#002a62",
  },
  {
    id: 3,
    title: "Logistics Mobile App",
    category: "Mobile App",
    desc: "Driver tracking and route optimization app for a logistics company.",
    bg: "#007bff",
  },
];

export default function WorkSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} pause="hover" className="shadow-lg rounded-4 overflow-hidden">
      {projects.map((project) => (
        <Carousel.Item key={project.id}>
          <div 
            className="d-flex align-items-end" 
            style={{ 
              height: '500px', 
              backgroundColor: project.bg,
              background: `linear-gradient(to bottom, ${project.bg}, #000000)`,
              position: 'relative'
            }}
          >
             {/* If you have real images, use: <img src={project.image} className="d-block w-100 h-100 object-fit-cover" /> */}
            
            <div className="p-5 w-100 text-white" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <Badge bg="light" text="dark" className="mb-2 px-3 py-2">{project.category}</Badge>
                <h2 className="fw-bold mb-2">{project.title}</h2>
                <p className="lead mb-0 text-white-50" style={{ fontSize: '1.1rem' }}>{project.desc}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}