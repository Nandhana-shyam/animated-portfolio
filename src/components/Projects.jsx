import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
<section id="projects"></section>

const projects = [
  {
    id: 1,
    title: "Food Ordering UI",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    description:
      "A modern food ordering frontend built using React with responsive layouts, animated cards and smooth user interactions.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },

  {
    id: 2,
    title: "Weather App",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    description:
      "A responsive weather application with real-time API integration and animated UI components.",
    tech: ["React", "API", "CSS"],
  },

  {
    id: 3,
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "A premium animated portfolio with cinematic scrolling and interactive frontend experiences.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },

  {
    id: 4,
    title: "Admin Dashboard",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description:
      "A modern analytics dashboard UI with charts, responsive layouts and admin components.",
    tech: ["React", "Charts", "Tailwind"],
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative min-h-[90vh] bg-[#0a0a0a] text-white px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="relative z-10 text-5xl md:text-7xl mb-16 text-center"
        style={{ fontFamily: "Playfair Display" }}
      >
        Projects
      </motion.h2>

      {/* Responsive Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(project)}
            className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer border border-purple-500/20 bg-[#111111]"
          >
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border border-purple-500/20 group-hover:border-purple-400 transition duration-500 shadow-[0_0_30px_rgba(168,85,247,0.15)]"></div>

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

            {/* Project Title */}
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl bg-[#111111] rounded-3xl overflow-hidden grid lg:grid-cols-2"
            >
              {/* Image */}
              <div className="h-[300px] md:h-[500px] lg:h-full">
                <img
                  src={selectedProject.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">

                <h2 className="text-4xl md:text-6xl mb-6">
                  {selectedProject.title}
                </h2>

                <p className="text-zinc-400 leading-8 text-lg mb-8">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-4 mb-10">
                  {selectedProject.tech.map((item, index) => (
                    <div
                      key={index}
                      className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">

                  <button className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 transition">
                    Live Demo
                  </button>

                  <button className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition">
                    GitHub
                  </button>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-2xl border border-red-500/30 hover:border-red-400 transition"
                  >
                    Close
                  </button>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;