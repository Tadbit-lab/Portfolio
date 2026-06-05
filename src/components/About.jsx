import React from 'react';

const About = () => {
  const skills = [
    "React", "Node.js", "Tailwind CSS", "API Integration", "Role-Based Access Control (RBAC)"
  ];

  return (
    <section className="min-h-[85vh] py-24 px-6 md:px-20 lg:px-40 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 flex items-center">
          <span className="text-blue-500 mr-3 font-mono text-lg">&gt;</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-5 gap-12 items-start font-sans text-sm md:text-base leading-relaxed">
          <div className="md:col-span-3">
            <p className="text-gray-305 mb-6">
              I build scalable systems using React, Node.js, and AI-driven research. Currently leading the frontend for the National Industrial Safety Reporting System (Nigeria).
            </p>
            <p className="text-gray-400 text-sm font-mono border-l-2 border-blue-600 pl-4 py-1">
              Community: Engaging with r/webdev, r/FullStack, and r/learnprogramming.
            </p>
          </div>
          
          <div className="md:col-span-2 border border-gray-900 p-6 rounded-md bg-black">
            <h3 className="text-sm font-bold font-heading mb-4 text-gray-200 border-b border-gray-900 pb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="border border-gray-800 text-gray-350 px-2.5 py-1 text-xs rounded-md font-sans"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
