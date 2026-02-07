"use client";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaMobileAlt, 
  FaRobot, 
  FaCloudUploadAlt, 
  FaPaintBrush 
} from 'react-icons/fa';

const techCategories = [
  {
    title: "Frontend & Web",
    icon: <FaCode />,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Shadcn/ui", "HTML5/CSS3"]
  },
  {
    title: "Backend & Database",
    icon: <FaServer />,
    skills: ["Node.js (Express)", "Python (Flask)", "GoLang", "Laravel", "Java Spring", "PostgreSQL", "MongoDB", "MySQL", "Supabase"]
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt />,
    skills: ["Flutter", "React Native", "Expo", "Firebase", "Mobile UI/UX"]
  },
  {
    title: "AI & Automation",
    icon: <FaRobot />,
    skills: ["TensorFlow", "PyTorch", "LLM Fine-tuning", "n8n", "Airflow", "HuggingFace", "LangChain"]
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloudUploadAlt />,
    skills: ["Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Vercel", "Alibaba Cloud", "Git"]
  },
  {
    title: "Design & Creative",
    icon: <FaPaintBrush />,
    skills: ["Figma", "Adobe After Effects", "Adobe Premiere", "UI Prototyping", "User Flow"]
  }
];

export default function TechGrid() {
  return (
    <section className="section-padding bg-light">
      <Container>
        <div className="text-center mb-5">
            <h6 className="text-primary-blue fw-bold text-uppercase ls-2">Our Technology Stack</h6>
            <h2 className="fw-bold display-5" style={{ color: '#002a62' }}>Tools of the Trade</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                We leverage a modern, enterprise-grade tech stack to build scalable and future-proof digital solutions for our clients.
            </p>
        </div>

        <Row className="g-4">
            {techCategories.map((cat, idx) => (
                <Col lg={4} md={6} key={idx}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="h-100"
                    >
                        <Card className="border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="bg-primary-blue text-white rounded p-3 d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}>
                                        {cat.icon}
                                    </div>
                                    <h5 className="fw-bold mb-0" style={{ color: '#002a62' }}>{cat.title}</h5>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    {cat.skills.map((skill, skillIdx) => (
                                        <span key={skillIdx} className="badge bg-light text-dark border fw-normal py-2 px-3" style={{ fontSize: '0.9rem' }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
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