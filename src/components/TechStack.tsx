"use client";
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiGo, 
  SiPostgresql, 
  SiMongodb, 
  SiFlutter, 
  SiFirebase, 
  SiTensorflow, 
  SiDocker, 
  SiFigma 
} from 'react-icons/si';

const icons = [
  { component: <SiNextdotjs />, name: "Next.js" },
  { component: <SiReact />, name: "React" },
  { component: <SiTypescript />, name: "TypeScript" },
  { component: <SiNodedotjs />, name: "Node.js" },
  { component: <SiPython />, name: "Python" },
  { component: <SiGo />, name: "Go" },
  { component: <SiPostgresql />, name: "PostgreSQL" },
  { component: <SiMongodb />, name: "MongoDB" },
  { component: <SiFlutter />, name: "Flutter" },
  { component: <SiFirebase />, name: "Firebase" },
  { component: <SiTensorflow />, name: "TensorFlow" },
  { component: <SiDocker />, name: "Docker" },
  { component: <SiFigma />, name: "Figma" },
];

export default function TechStack() {
  return (
    <section className="py-5 border-top border-bottom bg-white overflow-hidden">
      <Container fluid>
        <p className="text-center text-muted small fw-bold text-uppercase mb-5 tracking-wider">Powered by Modern Technology</p>
        
        <div className="d-flex position-relative overflow-hidden">
            <div className="position-absolute top-0 start-0 h-100 w-25 bg-gradient-to-r from-white to-transparent z-2" style={{ background: 'linear-gradient(to right, white, transparent)' }}></div>
            <div className="position-absolute top-0 end-0 h-100 w-25 bg-gradient-to-l from-white to-transparent z-2" style={{ background: 'linear-gradient(to left, white, transparent)' }}></div>
            
            <motion.div 
                className="d-flex gap-5 px-5"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                style={{ width: "fit-content" }}
            >
                {[...icons, ...icons, ...icons].map((tech, idx) => (
                    <div key={idx} className="d-flex align-items-center gap-2 text-muted opacity-50 grayscale hover-grayscale-0 transition-all" style={{ fontSize: '2.5rem' }}>
                        {tech.component}
                    </div>
                ))}
            </motion.div>
        </div>
      </Container>
    </section>
  );
}