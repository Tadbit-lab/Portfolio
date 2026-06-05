import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="py-8 text-center text-gray-500 text-xs bg-black border-t border-gray-900 font-heading">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <a href="mailto:oluwatonilobailesanmi0001@gmail.com" className="hover:text-white transition-colors">oluwatonilobailesanmi0001@gmail.com</a>
          <span className="hidden sm:inline text-gray-800">|</span>
          <a href="tel:+2348060696104" className="hover:text-white transition-colors">+234 806 069 6104</a>
          <span className="hidden sm:inline text-gray-800">|</span>
          <a href="https://github.com/Tadbit-lab" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
