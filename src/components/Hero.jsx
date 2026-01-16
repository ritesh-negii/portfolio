import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-[#0f0f0f]">
        <div className="absolute inset-0 bg-grid" />
        
        {/* Gradient Orbs */}
        <div 
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-15 bg-gradient-to-r from-blue-500 to-blue-600"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 bg-gradient-to-r from-blue-400 to-blue-500"
          style={{ animation: 'float 8s ease-in-out infinite 2s' }}
        />
      </div>

      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Resume />
      <Contact />
      
      <footer className="text-center py-10 text-gray-600 mt-20">
        <p>Designed & Built by Ritesh Negi © 2024</p>
      </footer>
    </main>
  );
}