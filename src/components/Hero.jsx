import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 bg-zinc-950 text-white">
      <div className="max-w-4xl">
        <p className="text-zinc-400 text-lg mb-2">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Oluwatobiloba Ilesanmi.
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-zinc-300 mb-6">
          Full Stack Developer | Building Secure Industrial Systems
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
          Specializing in React, Node.js, and scalable safety reporting architectures.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-6 py-3 bg-white text-zinc-950 font-medium rounded hover:bg-zinc-200 transition-colors">
            View Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-zinc-700 text-white font-medium rounded hover:bg-zinc-800 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
