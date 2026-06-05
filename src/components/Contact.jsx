import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 lg:px-40 bg-zinc-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4 font-mono">
          03. What's Next?
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h3>
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          I'm currently open for new opportunities and collaborations. Whether you have a question, a project idea, or just want to connect, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a href="mailto:oluwatonilobailesanmi0001@gmail.com" className="px-8 py-4 bg-white text-zinc-950 font-bold rounded hover:bg-zinc-200 transition-colors w-full sm:w-auto">
            Email Me
          </a>
          <a href="tel:+2348060696104" className="px-8 py-4 border border-zinc-700 text-white font-bold rounded hover:bg-zinc-800 transition-colors w-full sm:w-auto">
            +234 806 069 6104
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-16 text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">r/webdev</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
