import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0d0d0e] text-zinc-100 font-sans selection:bg-white selection:text-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 backdrop-blur-lg bg-[#0d0d0e]/80 border-b border-zinc-800/40">
        <div className="text-xl font-bold tracking-[0.25em] text-white hover:opacity-80 transition-opacity cursor-pointer">
          ALICE.
        </div>
        <div className="flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">About</a>
          <a href="#work" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">Selected Work</a>
          <a href="#contact" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-40 pb-20 px-8 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[90vh]">
        
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs uppercase tracking-[0.2em] text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for freelance
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.95] text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">Alice.</span> <br />
            <span className="text-3xl md:text-5xl font-light tracking-wide text-zinc-400 block mt-4">
              Visual & Digital Designer
            </span>
          </h1>

          <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed font-light">
            I craft minimalist digital environments where function meets aesthetic refinement. Specializing in art direction, modern web interfaces, and high-end visual production.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <a 
              href="#work" 
              className="group px-8 py-4 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all rounded-full flex items-center gap-2 shadow-lg shadow-white/5"
            >
              View Selected Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-zinc-800 text-zinc-300 font-semibold text-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-all rounded-full"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Image Area */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[380px] aspect-[3/4] group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl transition-all duration-500 hover:border-zinc-700 hover:shadow-white/5">
            <Image
              src="/alic.jpeg" 
              alt="Alic Portrait"
              fill
              priority
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
            />
            {/* Overlay Gradient เพื่อให้รูปดูกลมกลืนและลึกซึ้งขึ้น */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
        </div>

      </main>

      {/* Selected Work Section */}
      <section id="work" className="py-28 px-8 md:px-16 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-2">// SELECTED WORKS</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Featured Projects</h2>
          </div>
          <span className="text-sm text-zinc-500 hover:text-white cursor-pointer transition-colors">See all archives (12) ↗</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[16/10] bg-zinc-950 border border-zinc-900 rounded-2xl mb-6 overflow-hidden relative shadow-lg">
              <Image 
                src="/alic.jpeg" 
                alt="Project Thumbnail" 
                fill 
                className="object-cover opacity-50 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-700"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium text-white group-hover:text-zinc-300 transition-colors">Aetherial Identity</h3>
                <p className="text-sm text-zinc-500 mt-1">Creative Direction & Branding</p>
              </div>
              <span className="text-zinc-600 group-hover:text-white transition-colors text-lg">↗</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[16/10] bg-zinc-950 border border-zinc-900 rounded-2xl mb-6 overflow-hidden relative shadow-lg">
              <Image 
                src="/alic.jpeg" 
                alt="Project Thumbnail" 
                fill 
                className="object-cover opacity-50 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-700"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium text-white group-hover:text-zinc-300 transition-colors">Luminal Web Space</h3>
                <p className="text-sm text-zinc-500 mt-1">Interaction Design & Front-end Development</p>
              </div>
              <span className="text-zinc-600 group-hover:text-white transition-colors text-lg">↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 px-8 md:px-16 border-t border-zinc-900 text-center bg-[#0a0a0b]">
        <div className="max-w-xl mx-auto space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Let's build something beautiful</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Have a project in mind?</h2>
          <p className="text-zinc-400 font-light">
            I'm currently accepting new projects and collaborations. Drop me a line and let's make it happen.
          </p>
          <div className="pt-4">
            <a 
              href="mailto:hello@aliceportfolio.com" 
              className="text-xl md:text-2xl text-white font-medium hover:text-zinc-300 underline underline-offset-8 decoration-zinc-700 hover:decoration-white transition-all"
            >
              hello@alicportfolio.com
            </a>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-zinc-900/60 text-xs text-zinc-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Alic Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">Dribbble</span>
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">Instagram</span>
          </div>
        </div>
      </footer>
    </div>
  );
}