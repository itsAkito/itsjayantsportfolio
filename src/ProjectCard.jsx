import React, { useState } from "react";

const ProjectCard = ({ project, index, onClick, scrollProgress }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer h-full"
      style={{
        transform: `translateY(${Math.sin(scrollProgress * Math.PI + index) * 20}px)`,
        opacity: 0.6 + scrollProgress * 0.4,
      }}
    >
      <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 transition-all duration-500 hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
        {/* Card Background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}20, transparent)`,
            }}
          ></div>
        </div>

        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 mb-4">{project.desc}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Hover State */}
          {isHovered && (
            <div className="flex gap-3 pt-4 border-t border-gray-700 animate-fadeIn">
              <a
                href={project.link}
                className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition text-center"
              >
                View Live
              </a>
              <a
                href={project.github}
                className="flex-1 px-3 py-2 border border-blue-600 text-blue-400 rounded-lg text-sm font-semibold hover:bg-blue-500/10 transition text-center"
              >
                GitHub
              </a>
            </div>
          )}

          {/* View Details Button */}
          {!isHovered && (
            <button className="w-full py-2 bg-gray-800 text-blue-400 rounded-lg text-sm font-semibold group-hover:bg-gray-700 transition border border-gray-700 group-hover:border-blue-500/50">
              View Details →
            </button>
          )}
        </div>

        {/* Accent Line */}
        <div
          className="absolute top-0 left-0 h-1 transition-all duration-500 group-hover:w-full"
          style={{ width: isHovered ? "100%" : "0%", backgroundColor: project.color }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;