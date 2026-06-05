import React from 'react';

const projectsData = [
  {
    title: "National Industrial Safety Reporting System",
    tag: "Professional Contract (In Progress)",
    tech: ["React", "RBAC", "Nigerian State/Sector Data"],
    description: "Role-based dashboards (Company Admin, HSE Officer, Safety Professional, Regulator) for Nigerian safety reporting. Onboarding with state/sector data.",
    github: "https://github.com/Tadbit-lab",
    live: "https://simvo-safety-reporting.vercel.app/"
  },
  {
    title: "Stock Dashboard",
    tag: "Course Exercise (Completed)",
    tech: ["React", "API Integration", "Data Viz."],
    description: "Real-time financial data visualization using external APIs.",
    github: "https://github.com/Tadbit-lab",
    live: "https://tadbit-lab.github.io/personal-website/"
  },
  {
    title: "Craps Game Simulator",
    tag: "Course Exercise (Completed)",
    tech: ["JavaScript", "Game Logic"],
    description: "Probability simulator with interactive UI and game logic.",
    github: "https://github.com/Tadbit-lab",
    live: "https://tadbit-lab.github.io/personal-website/"
  }
];

const Projects = () => {
  return (
    <section className="min-h-[85vh] py-24 px-6 md:px-20 lg:px-40 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-12 flex items-center">
          <span className="text-blue-500 mr-3">&gt;</span> Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-black border border-gray-900 p-6 rounded-md hover:border-blue-500 transition-colors duration-150 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-heading font-bold text-blue-400 bg-blue-900/10 border border-blue-900/20 px-2 py-0.5 rounded-md inline-block mb-3">
                  {project.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-heading">
                  {project.title}
                </h3>
                <p className="text-gray-405 mb-6 text-sm font-sans leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((techItem, techIndex) => (
                    <li key={techIndex} className="bg-black text-gray-400 px-2 py-0.5 text-xs rounded-sm border border-gray-900 font-mono">
                      {techItem}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 border-t border-gray-900 pt-4 font-heading font-bold text-xs">

                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    [Live Demo]
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
