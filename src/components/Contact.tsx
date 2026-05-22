import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { portfolioData } from '../data/portfolio';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="glass-card" style={{ padding: '5rem 2rem', textAlign: 'center', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}>
          {/* Subtle decorative circle */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'var(--gradient-main)',
            opacity: 0.1,
            filter: 'blur(50px)',
            borderRadius: '50%'
          }}></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: 800 }}>Let's <span className="gradient-text">Connect</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.25rem', lineHeight: 1.6 }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '4rem' }}>
              {[
                { icon: <Mail size={28} />, href: `mailto:${portfolioData.social.email}`, label: "Email" },
                { icon: <FontAwesomeIcon icon={faGithub} style={{ fontSize: '28px' }} />, href: portfolioData.social.github, label: "GitHub" },
                { icon: <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '28px' }} />, href: portfolioData.social.linkedin, label: "LinkedIn" }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  whileHover={{ y: -8, scale: 1.1, color: 'var(--secondary)' }} 
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={item.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  style={{ 
                    color: 'var(--text-main)', 
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '1rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s',
                    width: '64px',
                    height: '64px'
                  }}
                  title={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${portfolioData.social.email}`}
              className="btn" 
              style={{ fontSize: '1.3rem', padding: '1.2rem 4rem', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
            >
              <Send size={24} /> Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <footer style={{ marginTop: '8rem', paddingBottom: '3rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '1rem' }}>
        <p style={{ marginBottom: '0.5rem' }}>{portfolioData.footer.text}</p>
        <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>{portfolioData.footer.copyright}</p>
      </footer>
    </section>
  );
};

export default Contact;
