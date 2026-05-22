import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Folder } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>{portfolioData.projects.title}</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            {portfolioData.projects.description}
          </p>
        </motion.div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {portfolioData.projects.list.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ 
                height: '220px', 
                background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(192, 132, 252, 0.1))`,
                borderRadius: '12px',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <Folder size={60} color="rgba(192, 132, 252, 0.3)" />
              </div>
              
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', fontWeight: 700 }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.8rem', flexGrow: 1, lineHeight: 1.6 }}>{project.description}</p>
              
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.3rem 0.8rem', 
                    background: 'rgba(99, 102, 241, 0.1)', 
                    borderRadius: '50px',
                    color: '#a5b4fc',
                    fontWeight: 600,
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                  }}>{tag}</span>
                ))}
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                  {project.github.map((git, i) => (
                    <motion.a 
                      key={i}
                      whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                      href={git.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', fontSize: '0.85rem' }}
                    >
                      <Code2 size={16} /> {git.label}
                    </motion.a>
                  ))}
                </div>
                {project.demo && project.demo !== "#" && (
                  <motion.a 
                    whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}
                  >
                    <ExternalLink size={18} /> Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
