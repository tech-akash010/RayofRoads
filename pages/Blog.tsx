import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import { Search, ArrowRight } from 'lucide-react';

const BlogCard: React.FC<{ post: BlogPost, index: number }> = ({ post, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  // Subtle vertical shift relative to scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }}
      transition={{ delay: index * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`group cursor-pointer flex flex-col ${index % 2 !== 0 ? 'md:translate-y-24' : ''}`}
    >
      <NavLink to={`/blog/${post.id}`} className="block h-full flex flex-col">
        {/* Image Container with Cinematic Aspect Ratio */}
        <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-[#080808] mb-6 md:mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-40 z-20 pointer-events-none" />
          <div className="absolute inset-0 border border-white/5 z-30 transition-colors duration-700 group-hover:border-white/20 pointer-events-none" />
          
          {/* Parallax Image Wrapper */}
          <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%] will-change-transform">
             <img 
              src={post.imageUrl} 
              alt={post.title} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale-[0.3] brightness-[0.8] contrast-[1.1] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.8s] ease-[0.22,1,0.36,1]"
            />
          </motion.div>
          
          {/* Date Stamp overlay (replacing category marks) */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-30 overflow-hidden">
             <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
               <span className="text-white/80 font-mono text-[9px] uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 border border-white/10">
                 {post.date}
               </span>
             </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-3 md:space-y-6 px-2 relative">
          <h3 className="text-2xl md:text-5xl font-display text-white/90 leading-[1.1] group-hover:text-white transition-colors duration-500">
            {post.title}
          </h3>

          <p className="text-gray-500 font-serif text-base md:text-xl leading-relaxed line-clamp-2 max-w-md group-hover:text-gray-400 transition-colors duration-500">
            {post.excerpt}
          </p>

          <div className="pt-2 md:pt-4 flex items-center gap-3 text-white/40 group-hover:text-cinema-gold transition-colors duration-500 text-[10px] uppercase tracking-[0.25em] font-bold">
             Read Story <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2 } }}
      className="bg-film-black min-h-screen py-24 md:py-40 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cinematic Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-32 border-b border-white/5 pb-8 md:pb-12">
          <div className="max-w-2xl w-full">
            <motion.span 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="text-cinema-gold font-mono text-[10px] uppercase tracking-[0.4em] block mb-4 md:mb-6"
            >
              The Archives
            </motion.span>
            <motion.h1 
              initial={{ y: 30, opacity: 0, filter: 'blur(20px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0)' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-5xl md:text-8xl lg:text-9xl font-display font-bold text-white uppercase tracking-tight leading-[0.9] opacity-90"
            >
              The Script
            </motion.h1>
          </div>

          <div className="mt-10 md:mt-0 relative group w-full md:w-auto">
            <div className="relative w-full md:w-80">
                <input 
                type="text" 
                placeholder="SEARCH SCENES..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-b border-white/10 py-3 pl-8 pr-4 text-white font-serif italic text-lg md:text-xl focus:outline-none focus:border-cinema-gold transition-all w-full placeholder-gray-700/50"
                />
                <Search size={16} className="absolute left-0 top-4 text-gray-600 group-focus-within:text-cinema-gold transition-colors" />
            </div>
          </div>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-16 md:gap-y-32">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <BlogCard key={post.id} post={post} index={idx} />
            ))}
          </AnimatePresence>
        </div>
        
        {/* End of list spacer */}
        <div className="h-20 md:h-32" />
      </div>
    </motion.div>
  );
};

export default Blog;