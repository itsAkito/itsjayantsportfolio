import React, { useState } from "react";
// Import Icons for cleaner button appearance
import { ExternalLink, Github, Eye, Zap } from "lucide-react"; 
import './ProjectCard.css';

const ProjectCard = ({ project, index, onClick, scrollProgress }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Define fallback values
  const accentColor = project.color || '#3b82f6'; // Default to blue

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group cursor-pointer h-full project-card-wrapper"
      style={{
        // Using the passed scrollProgress for the unique motion effect
        transform: `translateY(${Math.sin(scrollProgress * Math.PI + index) * 20}px)`,
        opacity: 0.6 + scrollProgress * 0.4,
      }}
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 transition-all duration-500 hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20 project-card"
        style={{
          background: isHovered 
            ? `linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))`
            : 'linear-gradient(to bottom right, rgb(31, 41, 55), rgb(17, 24, 39))',
        }}
      >
        
        {/* Glow Effect on Hover */}
        {isHovered && (
          <div
            className="absolute w-40 h-40 rounded-full blur-3xl pointer-events-none glow-effect"
            style={{
              left: mousePosition.x - 80,
              top: mousePosition.y - 80,
              background: `radial-gradient(circle, ${accentColor}40, transparent)`,
            }}
          />
        )}
        
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
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 project-image-container">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 project-image"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
          
          {/* Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white flex items-center gap-1 project-badge">
            <Zap className="w-3 h-3" />
            Featured
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors project-title">
              {project.title}
            </h3>
            {/* Added line-clamp to prevent height shifts on short descriptions */}
            <p className="text-sm text-gray-400 mb-4 line-clamp-2 project-desc">{project.desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4 tech-stack">
              {project.tech.slice(0, 4).map((tech, i) => ( // Show max 4 tags
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300 tech-tag"
                  style={{
                    transitionDelay: isHovered ? `${i * 50}ms` : '0ms',
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* --- Consolidated Footer / Action Area --- */}
          <div className="pt-4 border-t border-gray-700 action-area">
            {isHovered ? (
              <div className="flex gap-3 pt-1 animate-fadeIn button-group">
                {/* View Live Link (Primary Action) */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition duration-300 action-btn primary"
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
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-blue-600 text-blue-400 rounded-lg text-sm font-semibold hover:bg-blue-500/10 transition duration-300 action-btn secondary"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            ) : (
              // Default State: View Details
              <button className="w-full py-2 bg-gray-800 text-blue-400 rounded-lg text-sm font-semibold transition border border-gray-700 group-hover:border-blue-500/50 flex items-center justify-center gap-2 view-details">
                <Eye className="w-4 h-4" />
                View Details
              </button>
            )}
          </div>
        </div>

        {/* Accent Line */}
        <div
          className="absolute top-0 left-0 h-1 transition-all duration-500 accent-line"
          style={{ width: isHovered ? "100%" : "0%", backgroundColor: accentColor }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;