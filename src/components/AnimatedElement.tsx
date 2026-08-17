"use client";
import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  type?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "stagger-parent" | "stagger-child" | "float" | "marquee";
  delay?: number;
  className?: string;
  style?: CSSProperties;
  hoverLift?: boolean;
}

export default function AnimatedElement({ 
  children, 
  type = "slide-up",
  delay = 0, 
  className = "",
  style,
  hoverLift = false
}: Props) {
  
  if (type === "float") {
    return (
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }

  if (type === "marquee") {
    return (
      <div className={`overflow-hidden w-100 ${className}`} style={style}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ display: 'flex', width: 'fit-content' }}
        >
          {children}
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === "stagger-parent") {
    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: delay }
          }
        }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }

  if (type === "stagger-child") {
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
        }}
        whileHover={hoverLift ? { y: -10, transition: { duration: 0.3, ease: "easeOut" } } : undefined}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }

  const getVariants = () => {
    switch (type) {
      case "slide-up": return { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } };
      case "slide-left": return { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } };
      case "slide-right": return { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } };
      case "scale": return { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } };
      default: return { hidden: { opacity: 0 }, show: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={getVariants()}
      whileHover={hoverLift ? { y: -10, transition: { duration: 0.3, ease: "easeOut" } } : undefined}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}