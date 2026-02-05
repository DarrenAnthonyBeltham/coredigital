import { ReactNode } from 'react';
import { 
  FaServer, 
  FaBug, 
  FaMagic, 
  FaPuzzlePiece, 
  FaTachometerAlt, 
  FaGlobe, 
  FaPalette 
} from 'react-icons/fa';

export interface ServiceItem {
  id: string;
  icon: ReactNode;
  title: string;
  desc: string;
  longDesc: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  { 
    id: "architecture",
    icon: <FaServer size={32} />, 
    title: "Full-Cycle Architecture", 
    desc: "Web, Apps, & Server. We build whole applications from scratch with robust, scalable architecture.",
    longDesc: "Building a digital product is like building a skyscraper; if the foundation is weak, it will collapse. Our architecture service covers the entire stack: database design (SQL/NoSQL), backend API structure (REST/GraphQL), and frontend state management. We ensure your app can handle 10 users today and 100,000 users tomorrow.",
    features: ["Database Schema Design", "Microservices vs Monolith Strategy", "Cloud Infrastructure Setup (AWS/GCP)", "Security & Auth Implementation"]
  },
  { 
    id: "debugging",
    icon: <FaBug size={32} />, 
    title: "Debugging & Fixes", 
    desc: "Identifying and resolving critical errors to ensure your software runs smoothly.",
    longDesc: "Do you have a bug that no one can fix? We specialize in forensic code analysis. We dig deep into your logs, reproduce elusive errors, and patch security vulnerabilities. We don't just fix the symptom; we cure the root cause to prevent recurrence.",
    features: ["Error Log Analysis", "Performance Bottleneck Detection", "Security Patching", "Legacy Code Refactoring"]
  },
  { 
    id: "redesign",
    icon: <FaMagic size={32} />, 
    title: "System Redesign", 
    desc: "Modernizing legacy interfaces and codebases for better usability and performance.",
    longDesc: "Software ages fast. If your system looks like it's from 2015, you're losing users. We take your existing logic and wrap it in a modern, responsive, and beautiful interface using the latest frameworks like Next.js and Tailwind, without breaking your business logic.",
    features: ["UI/UX Refresh", "Mobile Responsiveness", "Tech Stack Migration", "User Flow Optimization"]
  },
  { 
    id: "features",
    icon: <FaPuzzlePiece size={32} />, 
    title: "Feature Expansion", 
    desc: "Seamlessly adding new modules or additional features to your existing platforms.",
    longDesc: "Need a payment gateway? A chat system? AI integration? We plug new features into your existing codebase cleanly. We write modular code that integrates perfectly with what you already have, ensuring no regression bugs.",
    features: ["Payment Gateway Integration", "Real-time Chat Systems", "Third-party API Connections", "Admin Dashboard Modules"]
  },
  { 
    id: "optimization",
    icon: <FaTachometerAlt size={32} />, 
    title: "Performance Optimization", 
    desc: "Speeding up load times, database queries, and overall server response.",
    longDesc: "Slow apps kill business. We audit your Core Web Vitals, optimize heavy database queries, and implement caching strategies (Redis/CDN). We aim for sub-second load times and 99/100 Lighthouse scores.",
    features: ["Database Indexing", "Image & Asset Compression", "Server-side Caching", "Code Splitting & Lazy Loading"]
  },
  { 
    id: "landing-pages",
    icon: <FaGlobe size={32} />, 
    title: "High-Conversion Landing Pages", 
    desc: "Single-page sites designed specifically to capture leads and market products.",
    longDesc: "A landing page has one job: conversion. We build high-speed, SEO-optimized landing pages designed to turn visitors into customers. We focus on clear CTAs, A/B testing readiness, and persuasive layout hierarchy.",
    features: ["SEO Optimization", "Fast Loading Speed", "Analytics Integration", "Lead Capture Forms"]
  },
  { 
    id: "ui-design",
    icon: <FaPalette size={32} />, 
    title: "UI/UX Design", 
    desc: "Clean, professional templates and custom designs that align with your brand identity.",
    longDesc: "We don't just write code; we design experiences. We create high-fidelity Figma prototypes before writing a single line of code, ensuring the final product matches your vision perfectly. We deliver pixel-perfect CSS implementation.",
    features: ["Figma Prototyping", "Design System Creation", "Logo & Brand Identity", "Interactive Mockups"]
  },
];