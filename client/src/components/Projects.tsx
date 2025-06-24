import { motion } from "framer-motion";
import { usePortfolioView } from "../hooks/usePortfolioView";

const Projects = () => {
  const { projects } = usePortfolioView();

  if (!projects || projects.length === 0) {
    return null; // Don't render the section if there are no projects
  }

  return (
    <section id="projects" className="section bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Personal Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-poppins text-navy mb-2">{project.title}</h3>
                <p className="text-slate mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-xs text-navy rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
