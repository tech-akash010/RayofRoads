import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Share2 } from 'lucide-react';

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <div className="text-white">Story not found</div>;

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="bg-film-black min-h-screen pb-24 md:pb-32 text-gray-300"
    >
      {/* Cinematic Header Image (Full Viewport) */}
      <div className="relative h-[60vh] md:h-screen w-full overflow-hidden">
         <motion.div 
           initial={{ scale: 1.1, filter: 'blur(5px)' }}
           animate={{ scale: 1, filter: 'blur(0)' }}
           transition={{ duration: 2.5, ease: "easeOut" }}
           className="w-full h-full will-change-transform"
         >
           <img 
            src={post.imageUrl} 
            alt="Cover" 
            className="w-full h-full object-cover brightness-50"
            loading="eager"
            decoding="async"
          />
         </motion.div>
         <div className="absolute inset-0 bg-gradient-to-t from-film-black via-transparent to-transparent" />
         
         <div className="absolute bottom-8 md:bottom-24 left-0 w-full px-6 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <p className="text-cinema-gold font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6">Presents</p>
              <h1 className="text-3xl sm:text-4xl md:text-8xl font-display font-bold text-white mb-4 md:mb-8 tracking-wide uppercase drop-shadow-2xl max-w-5xl mx-auto leading-tight">
                {post.title}
              </h1>
            </motion.div>
         </div>
      </div>

      {/* Screenplay Content */}
      <div className="max-w-3xl mx-auto px-6 mt-12 md:mt-24">
        <NavLink to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-10 md:mb-16 text-[10px] md:text-xs uppercase tracking-widest font-mono">
           <ArrowLeft size={14} /> Back to Scene Selection
        </NavLink>

        <div className="font-serif text-base md:text-xl leading-loose space-y-8 text-gray-300">
           {/* Scene Header */}
           <div className="font-mono text-gray-500 text-[10px] md:text-sm uppercase tracking-widest mb-8 md:mb-12 border-b border-white/10 pb-2">
             <span className="text-cinema-gold">INT.</span> {post.category.toUpperCase()} — {post.date.toUpperCase()}
           </div>
           
           {/* Dropcap Style Content */}
           <div 
             className="first-letter:text-5xl md:first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-white first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left first-letter:leading-none"
             dangerouslySetInnerHTML={{ __html: post.content }}
           />
           
           <div className="flex justify-center py-8 md:py-12">
             <span className="text-lg md:text-2xl tracking-[1em] text-gray-700">* * *</span>
           </div>
        </div>

        {/* Footer */}
        <div className="mt-12 md:mt-24 pt-8 md:pt-12 border-t border-white/10 flex justify-between items-center">
          <div className="text-[10px] md:text-xs font-mono text-gray-600 uppercase tracking-widest">
            End of Scene
          </div>
          <button className="text-gray-500 hover:text-cinema-gold transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default Post;