
import React, { useEffect } from "react";
import { X, Code, ExternalLink, Github, Zap, Award } from "lucide-react"; // Import Icons

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  // Define key contributions data (assuming project prop has a contributions array)
  // For robustness, we define a fallback structure here.
  const contributions = project.contributions || [
    "Implemented the full CRUD API layer using Node.js/Express and MongoDB.",
    "Designed and developed the responsive front-end components using React and Tailwind CSS.",
    "Utilized Clerk/Stripe for secure authentication and payment processing."
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl animate-[fadeIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-800 hover:bg-red-500/20 text-white transition border border-gray-700 hover:border-red-500 text-lg"
          title="Close"
        >
          <X className="w-5 h-5 mx-auto" />
        </button>

        {/* Project Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color || '#3b82f6'}30, transparent)`,
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            {project.title}
          </h2>
          <p className="text-xl text-gray-400 mb-6">{project.desc}</p>

          {/* Project Details */}
          <div className="mb-8 p-6 rounded-xl bg-gray-800/60 border border-gray-700/70">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" /> Key Contributions & Learnings
            </h3>
            <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                {contributions.map((contribution, index) => (
                    <li key={index} className="pl-1">
                        {contribution}
                    </li>
                ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" /> Core Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 font-semibold text-sm transition-all hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl font-bold text-center hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-0.5"
            >
              <ExternalLink className="w-5 h-5" />
              View Live Project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-xl font-bold text-center hover:bg-blue-500/10 transition"
            >
              <Github className="w-5 h-5" />
              View Source Code
            </a>
          </div>

          {/* Related Info */}
          <div className="mt-10 pt-8 border-t border-gray-700 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Category</p>
              <p className="text-white font-bold capitalize">
                {project.category}
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">Status</p>
              <p className="text-green-400 font-bold">Completed</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">Focus</p>
              <p className="text-white font-bold">Full Stack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;