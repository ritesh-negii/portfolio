'use client';

import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[60%] after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-blue-600 after:rounded"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white/[0.02] border border-blue-500/20 rounded-xl p-6 flex items-center gap-6"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
          🎓
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">
            J.C. Bose University of Science and Technology
          </h3>
          <p className="text-gray-400 text-sm mb-1">
            Bachelor of Technology in Electronics and Communication Engineering
          </p>
          <p className="text-gray-500 text-sm mb-2">Faridabad, Haryana</p>
          <p className="text-blue-500 font-semibold">2022 - 2026</p>
        </div>
      </motion.div>
    </section>
  );
}