import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { BLOG_POSTS, GALLERY_ITEMS } from '../constants';
import { BlogPost } from '../types';

const Hero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1.1, 1.25]); // Slower, more cinematic zoom
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 150]); // Parallax text movement
  const beamOpacity = useTransform(scrollY, [0, 300], [0.6, 0]);

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden -mt-[80px] md:-mt-[88px] z-0">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          style={{ scale }}
          className="w-full h-full will-change-transform"
        >
          <img 
            src="https://github.com/tech-akash010/Assets/blob/main/home.jpeg?raw=true" 
            alt="Cinematic Road" 
            className="w-full h-full object-cover brightness-[0.35] contrast-110 saturate-[0.9]"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-vignette pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black pointer-events-none" />
      
      {/* Moving Light Beam - Subtle atmospheric addition */}
      <motion.div 
        style={{ opacity: beamOpacity }}
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[1000px] bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-[100px] pointer-events-none transform-gpu will-change-transform"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-[95vw] md:max-w-[90vw]">
        <motion.div 
          style={{ y }}
          className="space-y-6 md:space-y-8 will-change-transform"
        >
          {/* Title Container */}
          <div className="relative overflow-hidden py-4">
            <motion.h1 
              initial={{ opacity: 0, y: 100, filter: 'blur(20px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }} // "Cinematic Rise" curve
              className="text-[2.5rem] sm:text-5xl md:text-8xl lg:text-[10rem] xl:text-[11rem] font-display font-bold text-white tracking-[-0.02em] leading-none drop-shadow-2xl opacity-90 mix-blend-screen"
            >
              RAY OF ROADS
            </motion.h1>
          </div>
          
          <div className="overflow-hidden">
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-2xl text-cinema-gold/90 font-serif italic tracking-widest relative inline-block px-4 max-w-xs sm:max-w-none mx-auto"
            >
              <span className="relative z-10">“Storytelling Through Every Road”</span>
              {/* Subtle gentle backlight for subtitle */}
              <span className="absolute inset-0 bg-cinema-gold/20 blur-xl -z-10" />
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Breathing Scroll Cue */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown size={28} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

const FeaturedStoryCard: React.FC<{ post: BlogPost, index: number }> = ({ post, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  // Parallax effect: image moves slightly slower than container
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1.2, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      <NavLink to={`/blog/${post.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden mb-6 md:mb-8 bg-[#080808] border border-white/5 shadow-2xl">
          {/* Vignette Overlay on Hover */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-1000 z-20 pointer-events-none" />
          
          {/* Parallax Image Wrapper */}
          <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%] will-change-transform">
             <img 
              src={post.imageUrl} 
              alt={post.title} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-110 opacity-70 group-hover:opacity-100 sepia-[0.2]"
            />
          </motion.div>

          {/* Cinematic Text Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-700 z-30">
              <p className="text-cinema-gold/90 font-mono text-[10px] uppercase tracking-[0.2em] mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{post.date}</p>
              <h3 className="text-xl md:text-2xl font-serif text-white/90 leading-tight group-hover:text-white transition-colors">{post.title}</h3>
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
};

const FeaturedStories = () => {
  return (
    <section className="py-16 md:py-40 bg-film-black relative z-10">
      {/* Soft Light Sweep Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Vignette behind text to focus */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial-gradient from-white/5 to-transparent blur-3xl pointer-events-none opacity-30" />

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-24 border-b border-white/5 pb-8 relative gap-6">
          <div className="space-y-3 relative z-10 w-full md:w-auto text-center md:text-left">
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-3xl md:text-6xl font-display text-white tracking-wide bg-clip-text"
              >
                The Journal
              </motion.h2>
            </div>
          </div>
          <NavLink to="/blog" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-500 font-serif italic group text-sm md:text-lg mx-auto md:mx-0">
            View All Entries <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {BLOG_POSTS.slice(0, 3).map((post, idx) => (
            <FeaturedStoryCard key={post.id} post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryPreview = () => {
  return (
    <section className="py-16 md:py-40 bg-[#030303] relative overflow-hidden">
      {/* Ambient Gradient Motion */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-cinema-teal/5 to-transparent pointer-events-none blur-3xl will-change-transform" 
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-32">
          <h2 className="text-3xl md:text-7xl font-display text-white mb-6 md:mb-8 tracking-wider">Visual Anthology</h2>
          <p className="font-serif italic text-gray-500 max-w-2xl mx-auto text-base md:text-xl leading-relaxed px-4">
            "A collection of frozen moments, directed by the light of the world."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {GALLERY_ITEMS.slice(0, 4).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0)" }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 1.5, ease: "easeOut" }}
              className={`relative aspect-[3/4] overflow-hidden group ${idx % 2 === 1 ? 'mt-8 md:mt-16' : ''}`}
            >
              {/* Thin Black Border for Film Strip Feel */}
              <div className="absolute inset-0 border-[1px] border-black/80 z-20 pointer-events-none" />
              
              <img 
                src={item.src} 
                alt={item.caption} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-[2.5s] ease-in-out group-hover:scale-115 grayscale brightness-[0.8] contrast-[1.15] group-hover:grayscale-0 group-hover:brightness-100 sepia-[0.1]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-1000 z-10" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-40 flex justify-center">
           <NavLink 
             to="/gallery" 
             className="relative px-10 md:px-14 py-4 md:py-5 border border-white/10 hover:border-cinema-gold/50 text-white/80 hover:text-cinema-gold font-bold tracking-[0.25em] uppercase text-[10px] transition-all duration-700 bg-white/0 hover:bg-white/5 overflow-hidden group"
           >
             <span className="relative z-10">Enter Gallery</span>
             {/* Button Glow Effect */}
             <div className="absolute inset-0 bg-cinema-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 blur-md" />
           </NavLink>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
      className="bg-film-black"
    >
      <Hero />
      <FeaturedStories />
      <GalleryPreview />
    </motion.div>
  );
};

export default Home;