import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const DustParticles = () => {
  // Create a fixed number of dust particles - Reduced count slightly for mobile performance
  const particles = Array.from({ length: 15 });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/10 rounded-full animate-dust will-change-transform"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDuration: Math.random() * 20 + 20 + 's',
            animationDelay: '-' + Math.random() * 20 + 's',
            opacity: Math.random() * 0.3 + 0.1,
          }}
        />
      ))}
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for scroll performance
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Journal', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'The Visionaries', path: '/admins' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform ${
        scrolled 
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-3 md:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent py-4 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
              <div className="absolute inset-0 border border-white/20 rotate-45 group-hover:rotate-90 group-hover:border-cinema-gold/50 transition-all duration-1000 ease-out" />
              <div className="w-1 h-1 bg-cinema-gold rounded-full shadow-[0_0_10px_rgba(217,119,6,0.8)]" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-[0.2em] text-white/90 uppercase group-hover:text-cinema-gold group-hover:tracking-[0.25em] transition-all duration-700">
              Ray of Roads
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
                    isActive ? 'text-cinema-gold' : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute -bottom-2 left-0 right-0 h-[1px] bg-cinema-gold shadow-[0_0_15px_rgba(217,119,6,0.8)]"
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cinema-gold transition-colors duration-500 p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-0 left-0 w-full bg-[#050505] border-b border-white/10 overflow-hidden flex flex-col items-center justify-center z-40"
          >
            <div className="absolute inset-0 bg-spotlight-warm opacity-10 pointer-events-none" />
             <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-cinema-gold transition-colors p-2"
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
            <div className="space-y-6 text-center relative z-10 w-full px-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-xl md:text-2xl font-display uppercase tracking-[0.2em] transition-all duration-500 py-2 ${
                      isActive
                        ? 'text-cinema-gold'
                        : 'text-gray-600 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Footer = () => (
  <footer className="relative bg-[#020202] border-t border-white/5 pt-20 md:pt-32 pb-12 md:pb-16 overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 pointer-events-none" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
      <div className="mb-8 md:mb-10 group cursor-default">
         <span className="font-display text-xl md:text-3xl tracking-[0.3em] md:tracking-[0.4em] text-white/80 group-hover:text-cinema-gold/80 transition-colors duration-1000 block">RAY OF ROADS</span>
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:space-x-12 mb-10 md:mb-12 max-w-sm md:max-w-none mx-auto">
        <NavLink to="/admins" className="text-gray-600 hover:text-cinema-gold text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase transition-colors duration-500">The Team</NavLink>
        <NavLink to="/blog" className="text-gray-600 hover:text-cinema-gold text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase transition-colors duration-500">Stories</NavLink>
        <NavLink to="/gallery" className="text-gray-600 hover:text-cinema-gold text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase transition-colors duration-500">Photography</NavLink>
      </div>

      {/* Social links removed from global footer, now only on Contact and Admins pages */}

      <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 md:mb-10" />

      <div className="space-y-3 md:space-y-4">
        <p className="text-sm font-script text-gray-600">"Storytelling Through Every Road"</p>
        <p className="text-[8px] md:text-[9px] text-gray-800 tracking-[0.3em] uppercase">&copy; {new Date().getFullYear()} Cinematic Production. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-film-black text-gray-200 relative selection:bg-cinema-gold/30 selection:text-white">
      <div className="film-grain" />
      <DustParticles />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 pointer-events-none z-[2]" />
      <Header />
      <main className="flex-grow relative z-[5]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
