'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const skills = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
];

const moreSkills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'WebSockets', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
];

export default function Skills() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-16 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[60%] after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-blue-600 after:rounded"
      >
        Technical Skills
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        {/* Main Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/[0.02] border border-blue-500/15 rounded-xl p-5 flex items-center gap-4 hover:bg-blue-500/10 hover:border-blue-500 hover:translate-y-[-5px] transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 flex-shrink-0">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-gray-200 font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* More Skills Grid (Hidden by default) */}
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8"
          >
            {moreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/[0.02] border border-blue-500/15 rounded-xl p-5 flex items-center gap-4 hover:bg-blue-500/10 hover:border-blue-500 hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className="w-10 h-10 flex-shrink-0">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-gray-200 font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* See More Button */}
        <div className="text-right">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-500 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            {showMore ? 'See less ↑' : 'See more ↓'}
          </button>
        </div>
      </div>
    </section>
  );
}