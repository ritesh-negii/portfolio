'use client';

import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-12 flex items-center justify-between flex-wrap gap-6"
      >
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Check out my <span className="text-emerald-400">Resume</span>
          </h2>
          <p className="text-gray-400">
            Grab a copy to see my detailed work history and skills.
          </p>
        </div>

        <a
          href="https://drive.google.com/file/d/16x64_a7LWdcaaSYM5u6TVdDNeNwJf50i/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_10px_30px_rgba(16,185,129,0.4)] flex items-center gap-2"
        >
          View Resume
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}