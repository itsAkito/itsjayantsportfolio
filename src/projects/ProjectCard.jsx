import React, { useState } from "react";
// Import Icons for cleaner button appearance
import { ExternalLink, Github, Eye } from "lucide-react"; 

const ProjectCard = ({ project, index, onClick, scrollProgress }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define fallback values
  const accentColor = project.color || '#3b82f6'; // Default to blue

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer h-full"
      style={{
        // Using the passed scrollProgress for the unique motion effect
        transform: `translateY(${Math.sin(scrollProgress * Math.PI + index) * 20}px)`,
        opacity: 0.6 + scrollProgress * 0.4,
      }}
    >
      <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 transition-all duration-500 hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
        
        {/* Card Background Accent */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-0"
            style={{
              // Using fallback color: project.color is assumed to be a hex string like #RRGGBB
              background: `linear-gradient(135deg, ${accentColor}20, transparent)`,
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
        <div className="relative p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            {/* Added line-clamp to prevent height shifts on short descriptions */}
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech, i) => ( // Show max 4 tags
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* --- Consolidated Footer / Action Area --- */}
          <div className="pt-4 border-t border-gray-700">
            {isHovered ? (
              <div className="flex gap-3 pt-1 animate-[fadeIn_0.3s_ease-out]">
                {/* View Live Link (Primary Action) */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition"
                  // Stop onClick propagation to prevent the card detail modal from opening simultaneously
                  onClick={(e) => e.stopPropagation()} 
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
                {/* GitHub Link (Secondary Action) */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-blue-600 text-blue-400 rounded-lg text-sm font-semibold hover:bg-blue-500/10 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            ) : (
              // Default State: View Details
              <button className="w-full py-2 bg-gray-800 text-blue-400 rounded-lg text-sm font-semibold transition border border-gray-700 group-hover:border-blue-500/50 flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                View Details
              </button>
            )}
          </div>
        </div>

        {/* Accent Line */}
        <div
          className="absolute top-0 left-0 h-1 transition-all duration-500 group-hover:w-full"
          style={{ width: isHovered ? "100%" : "0%", backgroundColor: accentColor }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;