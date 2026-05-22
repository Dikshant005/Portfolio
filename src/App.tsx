import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis for smooth "liquid" scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app" style={{ position: 'relative' }}>
      {/* Optimized Background Layering */}
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
        {/* Deep Mesh Gradient Base - Pre-rendered style with less paint cost */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(192, 132, 252, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(79, 70, 229, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(129, 140, 248, 0.08) 0%, transparent 50%)
          `,
          willChange: 'opacity'
        }}></div>

        {/* Dynamic Luminous Points - Using willChange for GPU acceleration */}
        <motion.div 
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: '-10%',
            left: '20%',
            width: '80%',
            height: '60%',
            background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            willChange: 'transform, opacity'
          }}
        />

        {/* Moving Highlight for "Shine" */}
        <motion.div 
          animate={{
            x: ['-100%', '100%'],
            y: ['-100%', '100%'],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.02) 50%, transparent 55%)',
            pointerEvents: 'none',
            willChange: 'transform'
          }}
        />

        {/* Animated Blobs - Optimized blur and sizes */}
        <motion.div 
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.08) 0%, transparent 70%)',
            filter: 'blur(90px)',
            willChange: 'transform'
          }}
        />

        {/* Noise Texture Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.015,
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
