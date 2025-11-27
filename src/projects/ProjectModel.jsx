
import React, { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition"
        >
          ✕
        </button>

        {/* Project Image */}
        <div className="relative h-64 md:h-96 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}30, transparent)`,
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {project.title}
          </h2>
          <p className="text-lg text-gray-400 mb-6">{project.desc}</p>

          {/* Project Details */}
          <div className="mb-8 p-6 rounded-lg bg-gray-800/50 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-3">Project Details</h3>
            <p className="text-gray-300 leading-relaxed">{project.details}</p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 font-semibold"
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
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-center hover:shadow-lg hover:shadow-blue-500/50 transition"
            >
              View Live Project
            </a>
            <a
              href={project.github}
              className="flex-1 px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-bold text-center hover:bg-blue-500/10 transition"
            >
              View Source Code
            </a>
          </div>

          {/* Related Info */}
          <div className="mt-8 pt-8 border-t border-gray-700 grid grid-cols-3 gap-4">
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
              <p className="text-gray-400 text-sm">Year</p>
              <p className="text-white font-bold">2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;