'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 relative">
      <div className="max-w-3xl w-full text-center">
        {/* Circular Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto rounded-full border-4 border-blue-500 shadow-[0_0_30px_rgba(74,144,226,0.5)] overflow-hidden">
            <img 
              src="/ritesh.jpg" 
              alt="Ritesh Negi" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
            Hi, I'm <span className="gradient-text">Ritesh Negi</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-blue-500 font-medium mb-8 text-lg">
            <span>📍</span>
            <span>Haryana, India</span>
          </div>

          <p className="text-lg text-gray-400 mb-4 leading-relaxed max-w-2xl mx-auto">
            A Full Stack Developer specializing in building scalable, 
            high-performance applications with modern technologies.
          </p>
          
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Expert in Node.js, Python, React, and AI integration. 
            Passionate about creating seamless user experiences and solving complex problems.
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow-[0_4px_15px_rgba(74,144,226,0.3)] hover:shadow-[0_8px_25px_rgba(74,144,226,0.4)] hover:translate-y-[-3px] transition-all duration-300"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 hover:translate-y-[-3px] transition-all duration-300"
            >
              View Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}