import React from 'react';

const projectsData = [
  {
    title: "National Industrial Safety Reporting System",
    role: "Current Professional Contract",
    tech: ["React", "Role-Based Dashboards", "Nigerian State/Sector Data"],
    description: "Building secure, role-based reporting with pending approval workflows. Includes tailored dashboards for Admins, HSE, and Regulators.",
    github: "#",
    live: "#"
  },
  {
    title: "Stock Dashboard",
    role: "Completed Course Project",
    tech: ["React", "External API", "Data Visualization"],
    description: "Real-time financial data visualization handling complex external API integrations and data rendering.",
    github: "#",
    live: "#"
  },
  {
    title: "Craps Game Simulator",
    role: "Completed Course Project",
    tech: ["JavaScript", "Game Logic"],
    description: "A probability simulator with an interactive UI, focusing on pure JavaScript logic and DOM manipulation.",
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-20 lg:px-40 bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
          <span className="text-zinc-500 mr-4 font-mono text-xl">02.</span> Featured Projects
        </h2>

        <div className="grid gap-12">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg hover:border-zinc-700 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-zinc-400 text-sm font-mono">{project.role}</p>
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" aria-label="GitHub Link">
                    GitHub
                  </a>
                  <a href={project.live} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" aria-label="Live Demo">
                    Live Demo
                  </a>
                </div>
              </div>
              <p className="text-zinc-300 mb-6 text-lg leading-relaxed max-w-3xl">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3">
                {project.tech.map((techItem, techIndex) => (
                  <li key={techIndex} className="bg-zinc-800 text-zinc-300 px-3 py-1 text-sm rounded-full font-medium">
                    {techItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
