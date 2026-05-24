export const portfolioData = {
  name: "Dikshant Ahalawat",
  role: "Software Developer | Full-Stack & Mobile",
  logo: "Dikshant.DEV",
  hero: {
    badge: "Available for new projects",
    title: "Building Exceptional Digital Products",
    description: "I'm a Software Developer dedicated to crafting scalable backend architectures and immersive user experiences with modern web and mobile technology."
  },
  about: {
    title: "My Story",
    bio: [
      "I am a results-oriented developer who thrives in fast-paced environments, actively building systems that are both highly performant and user-centric. My passion lies in solving complex architectural challenges, from real-time communication protocols to secure data management.",
      "With expertise spanning frontend mobile development and robust backend engineering, I bridge the gap between seamless UI design and scalable infrastructure, ensuring every application I build is efficient, secure, and ready for production."
    ],
    roles: [
      {
        title: "Developer",
        description: "Clean, Scalable & Efficient Code",
        icon: 'Code2'
      },
      {
        title: "Architect",
        description: "Secure Backend & Real-Time Systems",
        icon: 'ShieldCheck'
      }
    ],
    card: {
      name: "Dikshant Ahalawat",
      role: "Software Developer",
      tagline: "Helping brands grow through robust engineering and digital innovation."
    }
  },
  projects: {
    title: "Featured Projects",
    description: "A selection of my recent work where I combine system design thinking with modern development frameworks.",
    list: [
      {
        title: "ConnectHub",
        description: "A real-time video conferencing application featuring seamless peer-to-peer connection handling and advanced state management.",
        tags: ["Flutter", "React", "WebRTC", "Socket.IO", "GetX"],
        github: [
          { label: "App", url: "https://github.com/Dikshant005/connecthub-app" },
          { label: "Backend", url: "https://github.com/Dikshant005/ConnectHub" },
          { label: "Frontend", url: "https://github.com/Dikshant005/ConnectHub-frontend" }
        ],
        demo: "https://connect-hub-frontend-beryl.vercel.app/"
      },
      {
        title: "Titan Strength",
        description: "An end-to-end gym management system featuring Role-Based Access Control (RBAC), automated subscription billing, and secure payment gateway integration.",
        tags: ["React", "Node.js", "MongoDB", "RBAC", "Payment API"],
        github: [
          { label: "Backend", url: "https://github.com/Dikshant005/titan-strength" },
          { label: "Frontend", url: "https://github.com/Dikshant005/titan-strength-frontend" }
        ],
        demo: "https://titan-strength-frontend.vercel.app/"
      }
    ]
  },
  skills: {
    title: "Technical Skills",
    description: "The tools and technologies I use to bring ideas to life. Each one represents a unique set of challenges and solutions.",
    list: [
      { name: "Flutter", icon: 'Smartphone' },
      { name: "React", icon: 'Layout' },
      { name: "Node.js", icon: 'Server' },
      { name: "Riverpod", icon: 'Layers' },
      { name: "PostgreSQL", icon: 'Database' },
      { name: "MongoDB", icon: 'Database' },
      { name: "AWS", icon: 'Cloud' },
      { name: "Docker", icon: 'Box' },
      { name: "WebRTC", icon: 'Wifi' },
      { name: "Socket.IO", icon: 'Zap' },
      { name: "Nginx", icon: 'Globe' },
      { name: "GetX", icon: 'Smartphone' },
      { name: "REST APIs", icon: 'Terminal' }
    ]
  },
  footer: {
    text: "Designed & Developed with Passion",
    copyright: `© ${new Date().getFullYear()} Dikshant Ahalawat Portfolio.`
  },
  social: {
    github: "https://github.com/Dikshant005/",
    linkedin: "https://www.linkedin.com/in/dikshant-ahalawat-6a9375293/",
    email: "dikshantahalawat2005@gmail.com"
  }
};
