import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={28} />,
      url: 'https://www.instagram.com/rayofroads/',
      color: 'hover:text-pink-500',
      border: 'group-hover:border-pink-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={28} />,
      url: 'https://www.facebook.com/rayofroads',
      color: 'hover:text-blue-500',
      border: 'group-hover:border-blue-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
    },
    {
      name: 'YouTube',
      icon: <Youtube size={28} />,
      url: 'https://www.youtube.com/@rayofroads',
      color: 'hover:text-red-500',
      border: 'group-hover:border-red-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="bg-film-black min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 relative overflow-hidden flex flex-col items-center justify-center"
    >
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-cinema-gold/5 via-transparent to-transparent blur-[100px] pointer-events-none" />
        
        {/* Cinematic Content */}
        <div className="max-w-4xl mx-auto w-full relative z-10">
            
            {/* Header Section */}
            <div className="text-center mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <span className="text-cinema-gold font-mono text-[10px] uppercase tracking-[0.4em] block mb-4 md:mb-6">The Studio</span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 md:mb-8 tracking-tighter leading-none drop-shadow-2xl">
                        CONNECT
                    </h1>
                    <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6 md:mb-8" />
                    <p className="font-serif text-lg md:text-3xl text-gray-400 italic leading-relaxed max-w-2xl mx-auto px-4">
                        "Join the journey across platforms. Every road leads to a story."
                    </p>
                </motion.div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                
                {/* Email Card - Dominant */}
                <motion.a 
                    href="mailto:hello@rayofroads.com"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="col-span-1 md:col-span-2 group relative overflow-hidden bg-white/5 border border-white/10 hover:border-cinema-gold/50 p-8 md:p-14 flex flex-col md:flex-row items-center md:items-center justify-between transition-all duration-700 hover:bg-white/[0.07] gap-6 md:gap-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                    
                    <div className="relative z-10 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3 text-cinema-gold">
                             <Mail size={16} />
                             <span className="font-mono text-[9px] uppercase tracking-[0.25em]">Inquiries</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-5xl font-display text-white group-hover:text-cinema-gold transition-colors duration-500 break-all md:break-normal">hello@rayofroads.com</h3>
                    </div>
                    
                    <div className="relative z-10 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                        <ArrowUpRight size={24} className="text-white group-hover:text-cinema-gold md:w-8 md:h-8" />
                    </div>
                </motion.a>

                {/* Social Cards */}
                {socialLinks.map((social, idx) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (idx * 0.1), duration: 1 }}
                        className={`group relative bg-white/5 border border-white/10 ${social.border} ${social.glow} p-8 md:p-12 flex flex-col items-center justify-center gap-4 md:gap-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.08]`}
                    >
                        <div className={`text-gray-400 ${social.color} transition-colors duration-500 transform group-hover:scale-110`}>
                            {social.icon}
                        </div>
                        <span className="font-display text-lg md:text-xl text-white tracking-widest uppercase group-hover:text-white/90">{social.name}</span>
                        <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                            Follow
                        </div>
                    </motion.a>
                ))}

            </div>

            {/* Footer Note */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-center mt-16 md:mt-32"
            >
                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.4em]">
                    Ray of Roads Productions
                </p>
            </motion.div>

        </div>
    </motion.div>
  );
};

export default Contact;