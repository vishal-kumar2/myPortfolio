import { Link } from "react-router-dom";
import projects from "../data/projectData";

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="min-h-screen py-13 px-5   text-black dark:text-white ">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block underline bg-violet-600 hover:bg-violet-700 text-white text-sm px-4 py-2 rounded transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/projects"
          className="text-violet-600 hover:underline text-lg font-semibold"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
};

export default Projects;
