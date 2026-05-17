import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projectsData from "../data/projects.json";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  // Dynamically extract unique tags from the projects data
  const uniqueTags = useMemo(() => {
    const tags = projectsData.flatMap((project) => project.tags);
    return ["All", ...new Set(tags)];
  }, []);

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter((project) => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-2">My Projects</h2>
          <div className="h-[3px] w-[60px] bg-gradient-to-r from-accent to-secondary rounded-full mb-4"></div>
          <p className="text-[#9ca3af] text-lg">Things I have built</p>
        </div>

        {/* Dynamic Tag Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium border ${
                filter === tag
                  ? "bg-accent border-accent text-white shadow-lg shadow-indigo-500/20"
                  : "bg-transparent border-gray-700 text-gray-400 hover:border-gray-500"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden flex flex-col h-full"
              >
                {/* Project Image Container */}
                <div className="relative h-[200px] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent"></div>
                  
                  {/* Featured Badge (Only for the first project) */}
                  {project.id === 1 && (
                    <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-lg">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-accent/10 text-accent text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-6">
                    {project.description}
                  </p>

                  {/* Divider and Footer Links */}
                  <div className="mt-auto">
                    <div className="h-[1px] w-full bg-[#1f1f1f] mb-4"></div>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-accent text-sm font-semibold hover:underline"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
                      >
                        <FaGithub /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;