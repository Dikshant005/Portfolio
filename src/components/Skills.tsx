import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Layout, 
  Server, 
  Box, 
  Zap, 
  Monitor,
  Terminal,
  Smartphone,
  Wifi,
  Cloud,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  Smartphone: <Smartphone size={18} />,
  Layout: <Layout size={18} />,
  Server: <Server size={18} />,
  Cpu: <Cpu size={18} />,
  Database: <Database size={18} />,
  Wifi: <Wifi size={18} />,
  Zap: <Zap size={18} />,
  Globe: <Globe size={18} />,
  Terminal: <Terminal size={18} />,
  Code2: <Code2 size={18} />,
  Monitor: <Monitor size={18} />,
  Box: <Box size={18} />,
  Layers: <Layers size={18} />,
  Cloud: <Cloud size={18} />
};

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'var(--h2-font)', marginBottom: '1rem', fontWeight: 800 }}>{portfolioData.skills.title}</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: 'var(--p-font)' }}>
            {portfolioData.skills.description}
          </p>
        </motion.div>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1.5rem' 
        }}>
          {portfolioData.skills.list.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="gradient-chip"
            >
              <span style={{ display: 'flex', alignItems: 'center', color: 'var(--secondary)' }}>
                {iconMap[skill.icon as keyof typeof iconMap]}
              </span>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
