import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-20 lg:px-40 bg-black text-white">
      <div className="max-w-4xl">
        <p className="text-blue-500 font-heading font-bold text-sm tracking-wider mb-4">&gt; WHOAMI</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight font-heading">
          Full Stack Developer | Building Secure Industrial Systems
        </h1>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed font-sans">
          15-year-old developer solving real-world problems with research and AI.
        </p>

        <div className="flex flex-wrap gap-4 font-heading font-bold">
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors duration-150"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-gray-800 hover:border-gray-600 text-gray-300 hover:text-white text-sm rounded-md transition-colors duration-150"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
