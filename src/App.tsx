import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  CircleDashed, 
  ArrowRight, 
  Zap, 
  Quote, 
  Sparkles, 
  Globe, 
  Calendar, 
  Send, 
  Video, 
  FileText, 
  MessageCircle, 
  Mail, 
  Share2, 
  ThumbsUp,
  ArrowLeft,
  ChevronRight,
  X,
  Linkedin,
  Instagram,
  Palette
} from 'lucide-react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  key?: React.Key;
}

const FadeIn = ({ children, delay = 0, direction = 'up' }: FadeInProps) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: 'Posts Monthly', value: '52+', color: 'bg-primary', light: 'text-primary-fixed', bar: '100%' },
    { label: 'TikTok/Reels', value: '12', color: 'bg-secondary', light: 'text-secondary-fixed', bar: '85%' },
    { label: 'Missed Days', value: '0', color: 'bg-tertiary', light: 'text-tertiary-fixed', bar: '98%' },
  ];

  const services = [
    { title: 'Content Planning', icon: Calendar, color: 'text-primary', bg: 'bg-primary-fixed', hBorder: 'hover:border-primary', hBg: 'group-hover:bg-primary' },
    { title: 'Daily Posting', icon: Send, color: 'text-secondary', bg: 'bg-secondary-fixed', hBorder: 'hover:border-secondary', hBg: 'group-hover:bg-secondary' },
    { title: 'Reels & TikTok', icon: Video, color: 'text-tertiary', bg: 'bg-tertiary-fixed', hBorder: 'hover:border-tertiary', hBg: 'group-hover:bg-tertiary' },
    { title: 'Captions', icon: FileText, color: 'text-primary', bg: 'bg-primary-fixed', hBorder: 'hover:border-primary', hBg: 'group-hover:bg-primary' },
    { title: 'Engagement', icon: MessageCircle, color: 'text-secondary', bg: 'bg-secondary-fixed', hBorder: 'hover:border-secondary', hBg: 'group-hover:bg-secondary' },
  ];

  const projects = [
    {
      id: 'soft-fresh',
      title: 'Soft & Fresh Campaign',
      category: 'Cleaning Service',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn4UIjXRMzsMYXB-nbTbYUZDqoH7T3hUT8w1AV-T0TXf6BIN5PHlbJOOzUqDlK6Jx7_6hWGW03Ahzr6Rs4CZVef-A1cymdDQZ-059PyqrPimewEdSao3SBKJv-xplo0jnhaWnKB2NPC_3Ns9AYnzWlq-kjxx5pNnW_O7CXuKvzqN_6IyU7Mu14yaKRYSgnPZNoKuPRPFdhKX55BS3nqIQDaq8tiUDnkI5_d2qRxziPmgMJSNasezFqvFRCIpKSp9eYcC79EavTTDE',
      objective: 'To revitalize the digital presence of a premium laundry boutique and increase subscription sign-ups.',
      strategy: 'Implemented a "Softness first" aesthetic using high-quality macro videography combined with educational content about fabric care.',
      results: '35% increase in monthly subscribers within 60 days and a 200% boost in organic engagement on Reels.'
    },
    {
      id: 'premium-shine',
      title: 'The Premium Shine',
      category: 'Car Spa',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1c7yAlM33DHpkgVwwvUuTQha2yjLfv-wQrmowyhtgH9Zd1BATiSWTOfA41Nw-8ddX6_G6jY52-Ijn3OrSIJ6d3raGf1832A-X7AD3Wa5N21conf7OBSmKI-uJFD6zULoCUablNgW63I7KjyUMpaWklIbWZtTw-cPTBvHXO0PREmbg3kAOpEEX2IQToJYx9hLumtjsMHPPlH_NInbZiXlcEircdzYUXiVSdoA2vtEr17TX8DBJywdo8mCMmh84WCvtLKjoJ894WHw',
      objective: 'Position a local car spa as the go-to luxury choice for high-end vehicle owners in the city.',
      strategy: 'Developed a "Luxury in Every Detail" narrative focusing on time-lapse detailing videos and customer testimonials from luxury car owners.',
      results: 'Secured a 3-month waitlist for premium detailing services and grew the Instagram following by 5,000 active local users.'
    },
    {
      id: 'efficiency-reimagined',
      title: 'Efficiency Reimagined',
      category: 'Lifestyle',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxIqf7768Lsd-vDu9a7KC2StFgmbMgjTmTDw6fBA-h4Kf8nKUaLDEZne_9z1EUWB_uuH9raAw7oqehNofgxM3U5cccB6SbS1F53wa0jJMGDvdzRjYkowRmtrw_Yi_LVrV3rSy7CqbxTjZMDDe2WNjmf9yQ2e4jiD_GnE5eI4ezopkXnr3qK5YSPP5Q_2MSxIUUI7uU9pMy5lZ2IcOy4Quritcz_-YLXWmG4QJ-TnA1bVaEX2KPSZMcJdEKE8K3mRhkp9Cw7kErIvo',
      objective: 'Modernize a traditional home organization service for a busy influencer demographic.',
      strategy: 'Strategic partner management with micro-influencers and a "minimalist living" content pillar that emphasized peace of mind over just clean spaces.',
      results: 'Collaborated with 12 key influencers, resulting in a reach of 1.2M potential customers and a 50% increase in lead generation.'
    },
  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const ProjectModal = ({ project, onClose }: { project: typeof projects[0], onClose: () => void }) => {
    return (
      <AnimatePresence>
        <motion.div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div 
            className="bg-white rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col md:flex-row"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="md:w-1/2 h-[300px] md:h-auto sticky top-0 md:relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="md:w-1/2 p-8 md:p-12">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">{project.category}</span>
              <h2 className="font-serif text-4xl mb-8 leading-tight">{project.title}</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-zinc-900 text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Client Objective
                  </h4>
                  <p className="text-zinc-600 leading-relaxed font-serif italic text-lg">{project.objective}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-zinc-900 text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    Strategy Implemented
                  </h4>
                  <p className="text-zinc-600 leading-relaxed">{project.strategy}</p>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-900 text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-tertiary rounded-full" />
                    Results Achieved
                  </h4>
                  <div className="bg-tertiary-fixed p-6 rounded-2xl border border-tertiary/10">
                    <p className="text-tertiary font-bold leading-relaxed">{project.results}</p>
                  </div>
                </div>
              </div>

              <motion.button 
                onClick={() => window.location.href = '#contact'}
                className="mt-12 w-full bg-primary text-white font-bold py-4 rounded-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Own Project
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Modals Container */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {/* Navbar */}
      <nav className="bg-white/70 backdrop-blur-md sticky top-0 z-50 w-full px-6 py-4 border-b border-pink-100/20 shadow-xl shadow-pink-500/5">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div 
            className="flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <CircleDashed className="text-primary w-8 h-8 group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-2xl font-black text-primary tracking-tighter">SMM Creative</span>
          </motion.div>
          <div className="hidden md:flex gap-8 items-center font-serif italic text-lg tracking-tight">
            <a href="#services" className="text-primary font-bold border-b-2 border-primary pb-1">Portfolio</a>
            <a href="#about" className="text-zinc-600 font-medium hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-zinc-600 font-medium hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[750px] flex items-center px-margin-page py-section-gap overflow-hidden">
          {/* Drifting Backgrounds */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <motion.div 
              className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-container rounded-full blur-[120px]"
              animate={{ 
                x: [0, 20, -10, 0],
                y: [0, -30, 15, 0],
                rotate: [0, 2, -1, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary-container rounded-full blur-[100px]"
              animate={{ 
                x: [0, -20, 10, 0],
                y: [0, 30, -15, 0],
                rotate: [0, -2, 1, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full mb-12">
            <FadeIn delay={0.1} direction="left">
              <div className="max-w-xl relative">
                <h1 className="font-serif text-[4.5rem] lg:text-[7.5rem] leading-[0.85] text-primary mb-10 font-bold tracking-tight">
                  KYLA MARIE BIONG
                </h1>
                <p className="font-serif text-[1.8rem] lg:text-[2.8rem] leading-[1.2] italic text-zinc-600 mb-12">
                  A strategist behind the screens, turning digital noise into human connection.
                </p>
                <div className="glass-tagline inline-block px-10 py-6 rounded-full transform hover:scale-105 transition-all duration-500 cursor-default shadow-sm hover:shadow-md">
                  <span className="font-bold text-xs lg:text-sm text-primary tracking-[0.3em] uppercase">
                    Consistent content. Real output. Zero missed days.
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="right">
              <div className="relative flex flex-col items-center md:items-end gap-10">
                <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[540px] lg:h-[540px]">
                  <motion.div 
                    className="absolute inset-0 bg-tertiary-fixed rounded-[5rem]"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 8 }}
                    whileHover={{ rotate: 4 }}
                    transition={{ duration: 1, ease: "circOut" }}
                  />
                  <img 
                    alt="Kyla Marie Biong" 
                    className="absolute inset-0 w-full h-full object-cover rounded-[5rem] shadow-2xl border-8 border-white transition-all duration-700 hover:scale-[1.03]" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlyfvRTtRMMgATzmYsGyI4FYZ6OS-KS-qm3XqBLYhZclHSkxxZHt5OxxX0bjLCfD9ryiuYvCs7sYHi6_oZlrERgpg7JBY7Hi4o-yAMEHux-QRqXwbnMUOHcp9_pmh8b3FNLubKHkkolrj7eZi1xCVBOCN1yW7pRSnvS4FbZqq2w7fzGef35xiAZ8JgWvxuiibdHWRGqZXiHMTSjtA5XBX3jeTSyyvE0fb8RE4ykCrPwH7FjjfnU40fuIw0k_r2dT2K0HLPO3uGxNk"
                  />
                  {/* Floating Badge */}
                  <motion.div 
                    className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 bg-zinc-900 p-5 lg:p-8 rounded-[2.5rem] shadow-2xl flex items-center gap-4 z-20 ring-12 ring-white/20 backdrop-blur-md"
                    animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Zap className="text-tertiary-fixed-dim w-6 h-6 lg:w-10 lg:h-10" fill="currentColor" />
                    <div className="flex flex-col">
                      <span className="font-bold text-tertiary-fixed-dim text-[10px] lg:text-xs uppercase tracking-widest opacity-60">Success Velocity</span>
                      <span className="text-white font-serif italic text-sm lg:text-2xl leading-tight">High Growth</span>
                    </div>
                  </motion.div>
                </div>

                {/* Relocated Buttons */}
                <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-6 w-full md:w-auto mt-4 px-6 md:px-0">
                  <motion.a 
                    href="#contact"
                    className="bg-primary text-white font-bold px-12 py-6 rounded-full shadow-2xl flex items-center justify-center gap-4 ring-12 ring-primary/5 group"
                    whileHover={{ scale: 1.05, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">Book Discovery Call</span>
                    <ArrowRight size={24} className="text-primary-fixed group-hover:translate-x-2 transition-transform" />
                  </motion.a>
                  <motion.a 
                    href="#services"
                    className="bg-white border-4 border-primary-fixed text-primary font-bold px-12 py-6 rounded-full hover:bg-primary hover:text-white transition-all shadow-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.05, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">See Work</span>
                  </motion.a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="px-margin-page pb-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={0.2 * i} direction="up">
                <div className={`${stat.color} p-12 rounded-[3.5rem] text-white flex flex-col items-center text-center shadow-2xl group hover:shadow-3xl transition-all duration-700 relative overflow-hidden`}>
                  <motion.div 
                    className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" 
                  />
                  <span className="text-7xl lg:text-8xl font-serif font-bold mb-4 group-hover:scale-110 transition-transform duration-700 drop-shadow-lg">
                    {stat.value}
                  </span>
                  <span className={`font-bold uppercase tracking-[0.25em] ${stat.light} text-xs lg:text-sm`}>
                    {stat.label}
                  </span>
                  <div className="w-4/5 h-1.5 bg-white/10 mt-8 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 + (0.3 * i), ease: "circOut" }}
                      style={{ width: stat.bar }}
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* About Section - Bento Grid */}
        <section id="about" className="px-margin-page pb-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-surface-container-high p-16 rounded-[4rem] shadow-sm relative overflow-hidden group border border-zinc-100">
              <FadeIn>
                <div className="relative z-10">
                  <h2 className="font-serif text-6xl lg:text-7xl text-primary mb-8 leading-tight">The Human Behind The Screen</h2>
                  <p className="text-2xl text-zinc-600 max-w-2xl leading-relaxed font-serif italic">
                    I believe social media shouldn't feel like a chore. For the past years, I've helped boutique brands like Laundry Services and Car Spas find their voice in a crowded digital room.
                  </p>
                  <p className="text-xl text-zinc-500 mt-6 max-w-xl">
                    My strategy is simple: <span className="font-bold text-primary italic">Strategy First, Aesthetics Second, Results Always.</span>
                  </p>
                </div>
                <Quote className="absolute -bottom-12 -right-12 w-64 h-64 text-primary/5 select-none transition-transform group-hover:rotate-12 duration-1000 -rotate-12" />
                <span className="absolute top-8 right-12 font-signature text-3xl text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">My Mission</span>
              </FadeIn>
            </div>

            <div className="md:col-span-4 bg-secondary-fixed p-12 rounded-[4rem] flex flex-col justify-center shadow-sm relative group overflow-hidden border border-secondary/10">
              <FadeIn delay={0.1}>
                <div className="bg-white/40 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-sm">
                  <Sparkles className="text-secondary w-10 h-10 animate-pulse" />
                </div>
                <h3 className="font-bold text-3xl text-zinc-900 mb-4">Female Founded</h3>
                <p className="text-zinc-700 text-lg leading-relaxed">Empowering local businesses through dedicated creative partnership.</p>
              </FadeIn>
            </div>

            <div className="md:col-span-5 bg-tertiary-fixed p-12 rounded-[4rem] shadow-sm border border-tertiary/10 relative overflow-hidden group">
              <FadeIn delay={0.2}>
                <h3 className="font-bold text-3xl text-zinc-900 mb-6">Tools of Choice</h3>
                <div className="flex flex-wrap gap-4">
                  {['Canva', 'CapCut', 'Meta', 'Google Drive', 'Notion'].map((tool) => (
                    <motion.span 
                      key={tool} 
                      className="bg-white/60 backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-tertiary hover:bg-white transition-all cursor-default shadow-sm border border-white/20"
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
                <div className="absolute -bottom-6 -right-6 text-tertiary/5 font-black text-8xl uppercase tracking-tighter group-hover:scale-110 transition-transform duration-1000">Tools</div>
              </FadeIn>
            </div>

            <div className="md:col-span-7 bg-primary-fixed p-12 rounded-[4rem] flex flex-wrap items-center justify-between shadow-sm group border border-primary/10">
              <FadeIn delay={0.3}>
                <div className="max-w-md">
                  <h3 className="font-bold text-3xl text-zinc-900 mb-2">Based in Manila</h3>
                  <p className="text-zinc-700 text-lg">Working globally, growing locally. Bringing a fresh perspective to every timezone.</p>
                </div>
              </FadeIn>
              <motion.div 
                className="w-40 h-40 rounded-full bg-white/40 backdrop-blur-lg flex items-center justify-center shadow-xl border border-white/40"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              >
                <Globe className="text-primary w-16 h-16" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-margin-page pb-section-gap">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="font-bold text-primary uppercase tracking-[0.2em] block mb-4 text-sm">What I Can Do For You</span>
              <h2 className="font-serif text-5xl">Full-Service Management</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="up">
                <motion.div 
                  className={`bg-white p-8 rounded-[2rem] border border-zinc-200 text-center flex flex-col items-center cursor-pointer group h-full`}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -20px rgba(0,0,0,0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-full ${service.bg} flex items-center justify-center mb-6 transition-all duration-300 ${service.hBg} shadow-sm group-hover:shadow-lg`}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <service.icon className={`${service.color} group-hover:text-white transition-colors duration-300`} size={24} />
                  </motion.div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-zinc-900 transition-colors">{service.title}</h4>
                  <div className={`w-0 group-hover:w-8 h-1 ${service.bg.replace('-fixed', '')} rounded-full transition-all duration-300 mt-auto`} />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="pb-section-gap overflow-hidden">
          <div className="px-margin-page mb-10 flex flex-wrap justify-between items-end gap-4">
            <FadeIn direction="left">
              <h2 className="font-serif text-5xl mb-2">Latest Deliverables</h2>
              <p className="text-zinc-500 text-lg">A sneak peek into my content studio.</p>
            </FadeIn>
            <div className="flex gap-4">
              <button onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })} className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                <ArrowLeft size={20} />
              </button>
              <button onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })} className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex overflow-x-auto gap-8 no-scrollbar px-margin-page pb-8 snap-x">
            {projects.map((project, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="left">
                <motion.div 
                  className="min-w-[320px] md:min-w-[400px] group relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl snap-start cursor-pointer"
                  whileHover="hover"
                  onClick={() => setSelectedProject(project)}
                >
                  <motion.img 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={project.image}
                    variants={{ hover: { scale: 1.1 } }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-10">
                    <span className="text-orange-200 font-bold uppercase tracking-widest text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.category}
                    </span>
                    <h3 className="text-white font-serif text-3xl mb-4">{project.title}</h3>
                    <motion.button 
                      className="opacity-0 group-hover:opacity-100 bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all self-start"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      View Project
                    </motion.button>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-margin-page pb-section-gap">
          <FadeIn>
            <div className="bg-primary-container rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden group">
              <motion.div 
                className="absolute -top-24 -left-24 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-40"
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary rounded-full blur-[80px] opacity-40"
                animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
              />
              
              <h2 className="font-serif text-[4rem] leading-[1.1] mb-6 relative z-10 transition-transform group-hover:scale-105 duration-700">
                Let’s grow your business online
              </h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto relative z-10 text-primary-fixed">
                Ready to stop worrying about what to post? Let's build your brand strategy together.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
                <motion.a 
                  href="mailto:hello@kylamarie.com"
                  className="bg-white text-primary font-bold px-12 py-5 rounded-full shadow-2xl flex items-center justify-center gap-3 hover:bg-zinc-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Send Email
                </motion.a>
                <motion.a 
                  href="#"
                  className="bg-secondary-container text-zinc-900 font-bold px-12 py-5 rounded-full shadow-2xl flex items-center justify-center gap-3 hover:bg-orange-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={20} />
                  Direct Message
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 w-full py-12 px-8 rounded-t-[3rem] border-t border-orange-100 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start group cursor-default">
            <span className="text-xl font-black text-zinc-900 mb-2 group-hover:text-primary transition-colors">SMM Creative</span>
            <p className="text-zinc-500 font-serif text-sm uppercase tracking-widest italic">
              © 2024 Strategy First. Made with energy.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {['Services', 'Portfolio', 'Contact', 'Process'].map((link) => (
              <a key={link} href="#" className="text-zinc-500 font-serif text-sm uppercase tracking-widest hover:text-primary transition-all">
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:scale-125 transition-transform">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:scale-125 transition-transform">
              <Instagram size={24} />
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:scale-125 transition-transform">
              <Palette size={24} />
            </a>
            <Share2 className="text-orange-500 cursor-pointer hover:scale-125 transition-transform" />
            <ThumbsUp className="text-orange-500 cursor-pointer hover:scale-125 transition-transform" />
          </div>
        </div>
      </footer>
    </div>
  );
}
