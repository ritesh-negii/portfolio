'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'InterviewAI',
    image: '/interviewai.png', // Changed from /projects/interviewai.png
    description: 'Built an AI-powered interview practice platform simulating technical and behavioral interviews with dynamically generated questions. Implemented resume parsing using PDFjs to extract candidate skills and generate role-specific interview questions via Google Gemini AI.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Google Gemini AI'],
    github: 'https://github.com/ritesh-negii/interviewly-ai',
    demo: 'https://interviewly-ai.vercel.app'
  },
  {
    id: 2,
    title: 'ExpenseIQ',
    image: '/expenseiq.png', // Changed from /projects/expenseiq.png
    description: 'Developed a full-stack AI-powered expense analysis platform allowing users to upload CSV/XLSX files and query spending using natural language. Built a Python FastAPI backend to validate expense files, process transactions with Pandas, and generate category-wise insights.',
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'Google Gemini AI'],
    github: 'https://github.com/ritesh-negii/expenseiq',
    demo: 'https://expenseiq-lyart.vercel.app'
  },
  {
    id: 3,
    title: 'TypeRace',
    image: '/typerace.png', // Changed from /projects/typerace.png
    description: 'Developed a real-time 1v1 multiplayer typing game with room-based matchmaking using Socket.io and WebSockets. Implemented live WPM tracking and race synchronization with low-latency WebSocket communication.',
    tech: ['Next.js', 'TypeScript', 'WebSockets', 'Railway'],
    github: 'https://github.com/ritesh-negii/typerace',
    demo: 'https://typerace-virid.vercel.app'
  },
  {
    id: 4,
    title: 'LearnForge',
    image: '/learnforge.png', // Changed from /projects/learnforge.png
    description: 'Built an AI-powered learning platform generating personalized study roadmaps with 15-20 topic modules based on user skill level, improving learning efficiency by 40%. Designed a dashboard with separate workflows for roadmap generation and quiz assessment using Tailwind CSS and Shadcn components.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Clerk', 'Google Gemini AI'],
    github: 'https://github.com/ritesh-negii/learnforge',
    demo: 'https://learnforge-rho.vercel.app'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[60%] after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-blue-600 after:rounded"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/[0.02] border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500 hover:translate-y-[-5px] transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-blue-500/10 to-blue-600/10 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex gap-3 text-xs">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-500 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}