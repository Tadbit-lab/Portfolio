import React from 'react';

const About = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Tailwind CSS", "API Integration", "Role-Based Access Control (RBAC)"
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-20 lg:px-40 bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
          <span className="text-zinc-500 mr-4 font-mono text-xl">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              15-year-old developer solving real-world problems with research and code. Currently building enterprise-level safety systems for Simvo Africa.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Beyond my professional work, I actively teach JavaScript to my peers and regularly contribute to the web development community on r/webdev.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-zinc-200">Technologies I work with:</h3>
            <ul className="grid grid-cols-2 gap-3 text-zinc-400">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center text-sm md:text-base">
                  <span className="text-white mr-2 text-xs">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
