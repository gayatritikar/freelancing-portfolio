import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  User, 
  Mail, 
  ExternalLink, 
  Code, 
  Smartphone, 
  Cpu, 
  Layout, 
  Database, 
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import './App.css';

// Components
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'}`}>
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold font-heading">
          Next<span className="gradient-text">Nova</span> Studio
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Services', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-muted hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm">Start Project</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass m-4 p-6 flex flex-col gap-4 md:hidden"
          >
            {['About', 'Services', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10" />
    <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full -z-10" />
    
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
          We Build Modern <span className="gradient-text">Websites</span>, Apps & AI Solutions
        </h1>
        <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
          Creative software development studio specializing in full-stack engineering, 
          AI/ML systems, and scalable digital products. Founded by Gayatri Tikar & Abhishek Gase.
        </p>
        <div className="flex flex-wrap gap-4 hero-btns">
          <a href="#projects" className="btn-primary">
            View Projects <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn-outline">
            Free Consultation
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative hero-image-container"
      >
        <div className="glass p-2 relative z-10">
          <img 
            src="/assets/hero-visual.png" 
            alt="Software Studio Visual" 
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
        {/* Floating Badges */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute -top-6 -right-6 glass px-4 py-2 flex items-center gap-2 z-20"
        >
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider">Available for Hire</span>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: 'Web Development', icon: <Layout />, desc: 'Modern responsive websites for startups and personal brands.' },
    { title: 'Mobile Apps', icon: <Smartphone />, desc: 'Scalable Android applications with React Native and Firebase.' },
    { title: 'AI & ML', icon: <Cpu />, desc: 'Custom AI solutions including computer vision and automation tools.' },
    { title: 'Backend & APIs', icon: <Database />, desc: 'Robust server-side systems using Spring Boot and Node.js.' },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-muted max-w-2xl mx-auto">
            We provide end-to-end digital engineering solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl mb-3">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'tailtrips',
      title: 'TailTrips Hotel Ecosystem',
      desc: 'A complete travel-tech infrastructure including a Flutter mobile app, Node.js backend, and a specialized Admin management portal.',
      tags: ['Flutter', 'Node.js', 'PostgreSQL', 'Firebase'],
      fullDesc: `
        TailTrips is a comprehensive hotel booking ecosystem designed to handle end-to-end travel operations. 
        It features a high-performance consumer app, a partner management portal, and a scalable cloud backend.
      `,
      features: [
        'Real-time Room Inventory & Dynamic Pricing',
        'Custom Reward Wallet & Loyalty Engine',
        'Advanced Coupon & Promotion Management',
        'Multi-role Auth (User, Partner, Admin)',
        'Automated Booking Confirmation System'
      ],
      techDetails: {
        frontend: 'Flutter (Mobile) & React/JS (Admin)',
        backend: 'Node.js, Express.js',
        database: 'PostgreSQL (Neon), Firebase',
        infrastructure: 'REST APIs, Cloud Migrations'
      }
    },
    {
      id: 'ai-pothole',
      title: 'AI Pothole Detection',
      desc: 'Computer vision system for real-time road infrastructure monitoring using TensorFlow and high-speed data processing.',
      tags: ['Python', 'TensorFlow', 'OpenCV'],
      features: ['Real-time Object Detection', 'Geotagging Anomalies', 'Admin Reporting Dashboard'],
    },
    {
      id: 'recommendation',
      title: 'Smart ML Recommendation',
      desc: 'A personalized content discovery engine using collaborative filtering and user behavior analysis.',
      tags: ['Python', 'Scikit-Learn', 'Node.js'],
      features: ['Personalized Feeds', 'A/B Testing Support', 'High-speed Inference'],
    }
  ];

  return (
    <section id="projects" className="section-padding bg-[#050505]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
            <p className="text-muted">Explore the engineering behind our most complex products.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="glass overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(p)}
            >
              <div className="aspect-video bg-[#111] p-8 flex items-center justify-center relative">
                <Code size={48} className="text-primary/20 group-hover:text-primary/40 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <span className="btn-primary py-2 px-4 text-xs">View Case Study</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-muted border border-white/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl mb-3">{p.title}</h3>
                <p className="text-muted text-sm line-clamp-2">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
            >
              <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 p-8 md:p-12"
              >
                <button 
                  className="absolute top-6 right-6 text-muted hover:text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={32} />
                </button>
                
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Case Study</span>
                <h2 className="text-3xl md:text-5xl mb-8">{selectedProject.title}</h2>
                
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2">
                    <h4 className="text-xl mb-4">The Challenge</h4>
                    <p className="text-muted mb-8 leading-relaxed">
                      {selectedProject.fullDesc || selectedProject.desc}
                    </p>
                    
                    <h4 className="text-xl mb-4">Key Features</h4>
                    <ul className="space-y-3 mb-12">
                      {selectedProject.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted">
                          <CheckCircle2 size={18} className="text-primary mt-1" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    
                    {selectedProject.id === 'tailtrips' && (
                      <div className="p-6 glass border-primary/20 bg-primary/5 rounded-2xl mb-8">
                        <h4 className="text-lg mb-4 text-white">Project Impact</h4>
                        <p className="text-sm text-muted italic">
                          "Successfully integrated real-time inventory management with a Node.js backend, 
                          transitioning from Firebase to a hybrid PostgreSQL architecture to support complex 
                          relational queries and reporting for the Admin Portal."
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-8">
                    <div className="glass p-6">
                      <h4 className="text-sm uppercase tracking-wider text-muted mb-4">Architecture</h4>
                      <div className="space-y-4">
                        {selectedProject.techDetails && Object.entries(selectedProject.techDetails).map(([key, val]) => (
                          <div key={key}>
                            <div className="text-[10px] uppercase font-bold text-primary mb-1">{key}</div>
                            <div className="text-sm">{val}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <a href="#contact" className="btn-primary w-full text-center">Start Similiar Project</a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="section-padding">
    <div className="container">
      <div className="glass p-12 md:p-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        
        <div className="grid md:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl mb-8">Let's Build Something <span className="gradient-text">Amazing</span> Together</h2>
            <p className="text-lg text-muted mb-12">
              Have a project in mind? Tell us about it and we'll help you turn it into a real product.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted hover:text-white transition-colors cursor-pointer">
                <div className="w-12 h-12 glass flex items-center justify-center rounded-full text-primary">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-primary">Gayatri Tikar</span>
                  <span className="text-sm">tikargayatri4@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted hover:text-white transition-colors cursor-pointer">
                <div className="w-12 h-12 glass flex items-center justify-center rounded-full text-primary">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-primary">Abhishek Gase</span>
                  <span className="text-sm">abhigase@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted hover:text-white transition-colors cursor-pointer">
                <div className="w-12 h-12 glass flex items-center justify-center rounded-full text-secondary">
                  <MessageSquare size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-secondary">WhatsApp Support</span>
                  <span className="text-sm">+91 8767948245 / 8390642150</span>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="glass bg-white/5 border-white/10 w-full p-4 focus:border-primary outline-none transition-colors" />
              <input type="email" placeholder="Business Email" className="glass bg-white/5 border-white/10 w-full p-4 focus:border-primary outline-none transition-colors" />
            </div>
            <select className="glass bg-white/5 border-white/10 w-full p-4 focus:border-primary outline-none transition-colors text-muted">
              <option>Select Project Type</option>
              <option>Web Application</option>
              <option>Mobile App</option>
              <option>AI/ML Solution</option>
            </select>
            <textarea placeholder="Tell us about your project..." rows="5" className="glass bg-white/5 border-white/10 w-full p-4 focus:border-primary outline-none transition-colors"></textarea>
            <button className="btn-primary w-full py-5 text-lg group">
              Send Inquiry <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { name: 'S. Patil', role: 'Project Manager', text: 'Professional UI and smooth execution. The TailTrips ecosystem is a testament to their full-stack capabilities.' },
    { name: 'K. Deshmukh', role: 'Tech Lead', text: 'Highly impressed with the AI Pothole detection system. Clean code and robust architecture.' }
  ];

  return (
    <section className="section-padding bg-white/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">What Our Partners Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="glass p-8 border-white/5">
              <p className="text-muted italic mb-6">"{r.text}"</p>
              <div>
                <div className="font-bold">{r.name}</div>
                <div className="text-xs text-primary uppercase tracking-widest">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-xl font-bold font-heading">
        Next<span className="gradient-text">Nova</span> Studio
      </div>
      <div className="flex gap-6 text-muted">
        <a href="#" className="hover:text-primary transition-colors"><Globe size={20} /></a>
        <a href="#" className="hover:text-primary transition-colors"><User size={20} /></a>
        <a href="#" className="hover:text-primary transition-colors"><Mail size={20} /></a>
      </div>
      <div className="text-sm text-muted">
        © 2026 Gayatri Tikar & Abhishek Gase.
      </div>
    </div>
  </footer>
);

const About = () => {
  const team = [
    {
      name: 'Gayatri Tikar',
      role: 'Full Stack Developer & AI/ML Engineer',
      bio: 'Expert in building scalable Flutter applications and custom Machine Learning solutions. Passionate about creating intuitive UI/UX experiences.',
      skills: ['Flutter', 'React', 'Python', 'AI/ML']
    },
    {
      name: 'Abhishek Gase',
      role: 'Backend Architect & API Specialist',
      bio: 'Specializes in high-performance backend systems and complex database architectures. Expert in Node.js, Spring Boot, and cloud infrastructure.',
      skills: ['Node.js', 'PostgreSQL', 'Spring Boot', 'Cloud']
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">The Team Behind the Studio</h2>
          <p className="text-muted max-w-2xl mx-auto">
            We are passionate developers focused on creating high-quality digital experiences 
            that combine technology, creativity, and problem-solving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass p-8 md:p-12 relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${i === 0 ? 'bg-primary/5' : 'bg-secondary/5'} blur-3xl -z-10`} />
              <h3 className="text-3xl mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-6 uppercase tracking-widest text-xs">{member.role}</p>
              <p className="text-muted leading-relaxed mb-8">{member.bio}</p>
              
              <div className="flex flex-wrap gap-2">
                {member.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 glass text-[10px] font-bold text-white/70 uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp for Quick CTA */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform"
      >
        <MessageSquare color="white" fill="white" size={28} />
      </a>
    </div>
  );
}

export default App;
