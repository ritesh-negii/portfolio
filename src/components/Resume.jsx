'use client';

import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="
          relative overflow-hidden
          rounded-2xl border border-emerald-500/20
          bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent
          backdrop-blur-xl
          p-10 md:p-12
          flex items-center justify-between gap-8 flex-wrap
        "
      >
        {/* ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/10 blur-3xl rounded-full" />
        </div>

        {/* text */}
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Check out my{' '}
            <span className="text-emerald-400">Resume</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Grab a copy to explore my detailed experience, projects,
            and technical skill set.
          </p>
        </div>

        {/* button */}
        <motion.a
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          href="https://drive.google.com/file/d/16x64_a7LWdcaaSYM5u6TVdDNeNwJf50i/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative z-10
            inline-flex items-center gap-3
            px-8 py-4 rounded-xl
            bg-emerald-500 text-black font-semibold
            shadow-[0_10px_30px_rgba(16,185,129,0.35)]
            hover:bg-emerald-400
            transition-all duration-300
          "
        >
          View Resume
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 3h7m0 0v7m0-7L10 14M5 5v14a2 2 0 002 2h14"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
