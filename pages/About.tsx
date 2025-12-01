import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="bg-film-black min-h-screen text-gray-300"
    >
      {/* Cinematic Header */}
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-film-black/50 via-film-black/50 to-film-black" />
        
        <div className="relative z-10 text-center px-4">
          <motion.span 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="text-cinema-gold font-mono uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4 md:mb-6"
          >
            Behind The Scenes
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-8xl font-display font-bold text-white mb-6 md:mb-8 uppercase tracking-wide"
          >
            Our Philosophy
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="space-y-8 md:space-y-12 font-serif text-lg md:text-2xl leading-relaxed text-gray-400">
          <p>
            <span className="text-white font-display text-3xl md:text-4xl mr-2">R</span>ay of Roads is not just a travel blog; it is a cinematic archive of the world. In a digital age of fleeting moments, we strive to pause time.
          </p>
          <p>
            Our mission is to fuse the written word with the visual image, creating a cohesive narrative that transports you from your screen to the winding roads of the Himalayas or the bustling alleys of Varanasi.
          </p>
          <div className="border-l-2 border-cinema-gold pl-6 md:pl-8 my-8 md:my-12 py-2">
            <p className="italic text-white font-light text-base md:text-xl">
              "To travel is to discover that everyone is wrong about other countries." — Aldous Huxley
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center">
           <NavLink 
             to="/admins" 
             className="inline-flex items-center gap-4 px-8 py-3 md:px-10 md:py-4 border border-white/20 hover:border-cinema-gold text-white hover:text-cinema-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-500"
           >
             Meet The Creators <ArrowRight size={14} />
           </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default About;