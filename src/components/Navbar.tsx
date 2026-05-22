import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(2, 6, 23, 0.7)',
        backdropFilter: 'blur(15px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        <div style={{ fontSize: '1.6rem', fontWeight: '800', letterSpacing: '-0.05em' }} className="gradient-text">
          {portfolioData.logo}
        </div>
        <ul style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li><motion.a whileHover={{ color: '#fff' }} href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>About</motion.a></li>
          <li><motion.a whileHover={{ color: '#fff' }} href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Projects</motion.a></li>
          <li><motion.a whileHover={{ color: '#fff' }} href="#skills" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Skills</motion.a></li>
          <li><motion.a whileHover={{ color: '#fff' }} href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Contact</motion.a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
