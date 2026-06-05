import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-[85vh] py-32 px-6 md:px-20 lg:px-40 bg-black text-white text-center flex flex-col justify-center font-sans">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-4 font-heading">
          &gt; Contact
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight font-heading">Get In Touch</h3>
        <p className="text-gray-405 text-sm mb-10 leading-relaxed max-w-lg mx-auto">
          I'm open to contract work, software development opportunities, and collaboration. Get in touch directly via email, phone, or view my GitHub profile.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 text-sm font-heading font-bold">
          <a 
            href="mailto:oluwatonilobailesanmi0001@gmail.com" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-150 w-full sm:w-auto text-center"
          >
            Email Me
          </a>
          <a 
            href="tel:+2348060696104" 
            className="px-6 py-3 border border-gray-800 hover:border-gray-650 text-gray-305 hover:text-white rounded-md transition-colors duration-150 w-full sm:w-auto text-center"
          >
            +234 806 069 6104
          </a>
          <a 
            href="https://github.com/Tadbit-lab" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-md transition-colors duration-150 w-full sm:w-auto text-center"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
