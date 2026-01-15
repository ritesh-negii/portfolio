export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-16"
    >
      <div className="grid md:grid-cols-2 gap-20 max-w-7xl w-full items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Ritesh Negi
            </span>
          </h1>

          <p className="text-blue-400 text-lg mb-6">
            📍 Haryana, India
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Full Stack Developer building scalable, high-performance applications.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Strong in React, Node.js, Python & AI integrations.
          </p>

          <div className="flex gap-6 mt-10 flex-wrap">
            <a
              href="#contact"
              className="px-10 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:-translate-y-1 transition"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="px-10 py-4 rounded-xl font-semibold border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 transition"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Placeholder Card */}
        <div className="hidden md:flex h-[500px] rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 items-center justify-center text-[120px] font-bold text-white/10">
          RN
        </div>
      </div>
    </section>
  );
}
