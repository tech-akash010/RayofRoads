import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';
import { Star, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const AdminProfile: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const isAkash = member.name.includes('Akash');
  const cinematicTitle = isAkash ? "THE CREATOR" : "THE VISUAL MIND";
  const cinematicSub = isAkash ? "Architect of Narratives" : "Director of Photography";
  const alignRight = index % 2 !== 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // Smooth cinematic ease
      className={`flex flex-col ${alignRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 md:gap-12 lg:gap-32 py-16 md:py-32 min-h-[auto] lg:min-h-[90vh] relative`}
    >
      {/* Atmospheric Background Glow specific to role */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] radial-gradient opacity-20 pointer-events-none blur-[80px] md:blur-[120px] mix-blend-screen transition-opacity duration-1000 ${isAkash ? 'bg-spotlight-warm' : 'bg-spotlight-cool'}`}
      />

      {/* Visual / Character Poster */}
      <div className="w-full lg:w-1/2 relative group perspective-1000 z-10 px-4 lg:px-0">
         <motion.div
           whileHover={{ rotateY: alignRight ? -2 : 2, rotateX: 2, scale: 1.01 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className={`relative aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl border border-white/5 transition-shadow duration-1000 will-change-transform ${isAkash ? 'hover:shadow-[0_20px_60px_rgba(217,119,6,0.1)]' : 'hover:shadow-[0_20px_60px_rgba(17,94,89,0.15)]'}`}
         >
            {/* Cinematic Layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
            <div className={`absolute inset-0 mix-blend-overlay z-10 ${isAkash ? 'bg-orange-500/10' : 'bg-teal-500/10'}`} />
            
            <img 
              src={member.imageUrl} 
              alt={member.name} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale brightness-[0.7] contrast-[1.2] group-hover:grayscale-0 group-hover:brightness-95 transition-all duration-[1.5s] ease-in-out"
            />

            {/* Subtle name fade-in on poster */}
            <div className="absolute bottom-6 md:bottom-12 left-0 w-full text-center z-20">
               <p className="font-display text-2xl md:text-4xl tracking-[0.3em] text-white/10 group-hover:text-white/90 uppercase transition-colors duration-1000 ease-in-out">{member.name.split(' ')[0]}</p>
            </div>
         </motion.div>

         {/* Decorative Lines - Thinner and more subtle */}
         <div className={`absolute -bottom-4 md:-bottom-6 ${alignRight ? '-left-4 md:-left-6' : '-right-4 md:-right-6'} w-16 h-16 md:w-40 md:h-40 border-b border-r border-cinema-gold/20 opacity-30 transition-all duration-700 group-hover:opacity-60 group-hover:w-20 group-hover:h-20 md:group-hover:w-44 md:group-hover:h-44`} />
         <div className={`absolute -top-4 md:-top-6 ${alignRight ? '-right-4 md:-right-6' : '-left-4 md:-left-6'} w-16 h-16 md:w-40 md:h-40 border-t border-l border-white/10 opacity-30 transition-all duration-700 group-hover:opacity-60`} />
      </div>

      {/* Text / Script */}
      <div className="w-full lg:w-1/2 space-y-6 md:space-y-10 text-center lg:text-left z-10 relative px-4">
        <div className="overflow-hidden">
          <motion.div
             initial={{ y: "100%" }}
             whileInView={{ y: 0 }}
             transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <h4 className="text-cinema-gold/80 font-bold tracking-[0.4em] text-[10px] uppercase mb-2 md:mb-4 flex items-center justify-center lg:justify-start gap-3">
              <Star size={10} className="fill-cinema-gold" /> Starring
            </h4>
          </motion.div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-3xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-2 tracking-tight drop-shadow-2xl">
            {cinematicTitle}
          </h2>
          <p className="text-lg md:text-2xl font-serif italic text-gray-500 tracking-wide">{cinematicSub}</p>
        </div>

        <div className="w-16 h-[1px] bg-gradient-to-r from-white/30 to-transparent mx-auto lg:mx-0" />

        <p className="text-base md:text-xl lg:text-2xl text-gray-300 font-serif italic leading-relaxed max-w-lg mx-auto lg:mx-0 tracking-wide font-light">
          "{member.bio}"
        </p>

        <div className="pt-6 md:pt-10 space-y-6">
           <div className="mt-0 text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em] flex items-center justify-center lg:justify-start gap-2">
             <span className="w-2 h-2 bg-cinema-gold/50 rounded-full animate-pulse" /> Role: {member.role}
           </div>

           <div className="flex items-center justify-center lg:justify-start gap-6">
              {member.socials?.instagram && (
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cinema-gold transition-colors duration-500 hover:scale-110 transform">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              )}
              {member.socials?.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors duration-500 hover:scale-110 transform">
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
              )}
              {member.socials?.facebook && (
                <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors duration-500 hover:scale-110 transform">
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
              )}
              {member.socials?.youtube && (
                <a href={member.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors duration-500 hover:scale-110 transform">
                  <Youtube size={20} strokeWidth={1.5} />
                </a>
              )}
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const Admins = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
      className="min-h-screen pt-24 md:pt-32 pb-20 px-6 overflow-hidden"
    >
      <div className="fixed inset-0 pointer-events-none">
        {/* Deep atmospheric gradient from top */}
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-[#0a0a0a] to-transparent opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-40 relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(15px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-bold text-white/[0.04] uppercase tracking-widest absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          >
            Executive
          </motion.h1>
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
             className="relative z-10 pt-12 md:pt-16"
          >
            <h1 className="text-4xl md:text-7xl font-serif text-white/90 drop-shadow-lg">Cast & Crew</h1>
            <p className="text-cinema-gold/70 font-mono text-[10px] uppercase tracking-[0.5em] mt-4 md:mt-6">Ray of Roads</p>
          </motion.div>
        </div>

        <div className="space-y-20 md:space-y-32">
          {TEAM_MEMBERS.map((member, idx) => (
             <AdminProfile key={idx} member={member} index={idx} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Admins;