import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app" style={{ position: 'relative' }}>
      {/* Classy & Shiny Background Layering */}
      <div className="bg-master" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: 'var(--bg-darker)',
        overflow: 'hidden'
      }}>
        {/* Deep Mesh Gradient Base */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(192, 132, 252, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(79, 70, 229, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(129, 140, 248, 0.1) 0%, transparent 50%)
          `
        }}></div>

        {/* Dynamic Luminous Points */}
        <motion.div 
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: '-10%',
            left: '20%',
            width: '80%',
            height: '60%',
            background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Moving Highlight for "Shine" */}
        <motion.div 
          animate={{
            x: ['-100%', '100%'],
            y: ['-100%', '100%'],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.03) 50%, transparent 55%)',
            pointerEvents: 'none',
          }}
        />

        {/* Animated Blobs for Extra Class */}
        <motion.div 
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.1) 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />

        {/* Subtle Noise Texture for Quality */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.02,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
