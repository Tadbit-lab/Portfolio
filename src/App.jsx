import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-50 selection:bg-zinc-700 selection:text-white">
      <header className="fixed w-full top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold tracking-tighter">OI.</a>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-6 text-center text-zinc-500 text-sm bg-zinc-950 border-t border-zinc-900">
        <p className="font-mono text-xs">Built by Oluwatobiloba Ilesanmi. React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
