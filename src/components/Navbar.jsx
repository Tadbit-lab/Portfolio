import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = "text-blue-500 font-bold border-b border-blue-500 pb-1";
  const inactiveStyle = "text-gray-400 hover:text-white transition-colors duration-155 pb-1";

  return (
    <header className="fixed w-full top-0 z-50 bg-black border-b border-gray-900 font-heading">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold tracking-tight text-white hover:text-blue-500 transition-colors">
          OI.IO
        </Link>
        
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : inactiveStyle} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            Contact
          </NavLink>
          
          <a 
            href="https://github.com/Tadbit-lab" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-4 px-3 py-1.5 text-xs text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-150 font-bold"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-450 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-black border-b border-gray-900 px-6 py-4 flex flex-col gap-4 text-sm">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-400"} 
            onClick={() => setIsOpen(false)}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-400"} 
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-400"} 
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-400"} 
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <a 
            href="https://github.com/Tadbit-lab" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full text-center px-3 py-2 text-xs text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-150 mt-2 block font-bold"
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
