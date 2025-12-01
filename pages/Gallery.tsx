import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (id: string) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const currentImage = GALLERY_ITEMS.find(img => img.id === selectedImage);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
      className="bg-[#020202] min-h-screen py-24 md:py-32 px-4"
    >
      <div className="text-center mb-16 md:mb-32">
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.2em' }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 md:mb-8 tracking-[0.1em] md:tracking-[0.2em] uppercase opacity-90 drop-shadow-2xl"
        >
          Darkroom
        </motion.h1>
      </div>

      {/* Cinematic Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-10 space-y-4 md:space-y-10 max-w-[1800px] mx-auto mb-20 md:mb-32">
        {GALLERY_ITEMS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
            whileInView={{ opacity: 1, filter: 'blur(0)', y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 1.2, ease: "easeOut" }}
            className="break-inside-avoid relative group cursor-pointer will-change-transform"
            onClick={() => openLightbox(item.id)}
          >
            {/* Cinematic Frame Container */}
            <div className="relative overflow-hidden border border-white/10 bg-[#050505] shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform transition-transform duration-[1.5s] ease-out group-hover:scale-[1.01]">
              
              {/* Negative Film Strip Border */}
              <div className="absolute inset-0 border-[8px] md:border-[12px] border-black z-20 pointer-events-none opacity-90" />
              
              {/* Darkening Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-1000 z-10 pointer-events-none" />
              
              <img 
                src={item.src} 
                alt={item.caption} 
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 95vw, (max-width: 1024px) 45vw, 30vw"
                className="w-full block filter grayscale-[0.8] contrast-[1.1] brightness-[0.8] sepia-[0.2] group-hover:grayscale-0 group-hover:brightness-100 group-hover:sepia-0 transition-all duration-[2s] ease-in-out scale-100 group-hover:scale-110"
              />
              
              <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100 hidden md:block">
                <span className="text-white/80 font-mono text-[9px] uppercase tracking-[0.3em] bg-black/50 backdrop-blur px-3 py-1">
                  {item.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Spacer for Footer separation */}
      <div className="h-24 md:h-48" />

      {/* Cinematic Lightbox */}
      <AnimatePresence>
        {selectedImage && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center backdrop-blur-md p-4 cursor-pointer"
            onClick={closeLightbox}
          >
            <div className="absolute top-4 right-4 md:top-10 md:right-10 z-50">
               <button 
                 onClick={closeLightbox} 
                 className="text-white/70 hover:text-cinema-gold transition-colors duration-300 p-3 md:p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md"
               >
                 <X size={28} />
               </button>
            </div>

            <motion.div 
               initial={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
               animate={{ scale: 1, opacity: 1, filter: 'blur(0)' }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative max-w-7xl max-h-[90vh] flex flex-col items-center justify-center cursor-default w-full"
               onClick={(e) => e.stopPropagation()}
            >
              <div className="relative shadow-[0_0_100px_rgba(0,0,0,0.8)] max-h-[70vh] md:max-h-[80vh] w-full flex items-center justify-center">
                <img 
                  src={currentImage.src} 
                  alt={currentImage.caption}
                  className="max-h-[60vh] md:max-h-[80vh] max-w-full object-contain border border-white/5"
                  decoding="async"
                />
              </div>
              
              <div className="mt-6 md:mt-12 text-center space-y-2 md:space-y-3 px-4">
                 <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl md:text-3xl font-display text-white tracking-wide"
                 >
                   {currentImage.caption}
                 </motion.h2>
                 <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-cinema-gold font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em]"
                 >
                   {currentImage.location}
                 </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;