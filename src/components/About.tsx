import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, ShieldCheck, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  Code2: <Code2 size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  Palette: <Palette size={20} />
};

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', fontWeight: 800 }}>{portfolioData.about.title.split(' ')[0]} <span className="gradient-text">{portfolioData.about.title.split(' ')[1]}</span></h2>
            {portfolioData.about.bio.map((paragraph, index) => (
              <p key={index} style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {paragraph}
              </p>
            ))}
            
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem' }}>
              {portfolioData.about.roles.map((role, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ color: index % 2 === 0 ? 'var(--secondary)' : 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                    {iconMap[role.icon as keyof typeof iconMap]} {role.title}
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{role.description}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ position: 'relative' }}
          >
            <div style={{ 
              position: 'absolute', 
              top: '-20px', 
              right: '-20px', 
              width: '100%', 
              height: '100%', 
              background: 'var(--gradient-main)', 
              borderRadius: '24px', 
              zIndex: -1, 
              opacity: 0.2,
              filter: 'blur(20px)'
            }}></div>
            <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', borderRadius: '24px' }}>
              <div style={{ 
                width: '180px', 
                height: '180px', 
                borderRadius: '50%', 
                background: 'var(--gradient-main)',
                margin: '0 auto 2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'
              }}>
                <User size={80} color="white" />
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 700 }}>{portfolioData.about.card.name}</h3>
              <p style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>{portfolioData.about.card.role}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{portfolioData.about.card.tagline}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
