import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "../../projects/ProjectCard";
import ProjectModal from "../../projects/ProjectModel";

const Portfolio3D = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Medical Hub",
      desc: "Telehealth Platform",
      color: "#3b82f6",
      tech: ["React", "Node", "MongoDB"],
      image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Medical+Hub",
      category: "fullstack",
      details:
        "A comprehensive telehealth platform connecting patients with healthcare providers. Features include video consultations, appointment scheduling, and medical records management.",
      link: "#",
      github: "https://github.com/",
    },
    {
      id: 2,
      title: "Crypto Dashboard",
      desc: "Real-time Analytics",
      color: "#8b5cf6",
      tech: ["Next.js", "Web3", "Tailwind"],
      image:
        "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Crypto+Dashboard",
      category: "frontend",
      details:
        "Real-time cryptocurrency analytics dashboard with live price tracking, portfolio management, and market analysis tools.",
      link: "#",
      github: "https://github.com/",
    },
    {
      id: 3,
      title: "E-Com Nike",
      desc: "3D Product Configurator",
      color: "#ef4444",
      tech: ["Three.js", "Shopify API"],
      image:
        "https://via.placeholder.com/400x300/ef4444/ffffff?text=E-Com+Nike",
      category: "3d",
      details:
        "Interactive 3D e-commerce platform with product customization, AR preview, and seamless checkout integration.",
      link: "#",
      github: "https://github.com/",
    },
    {
      id: 4,
      title: "SaaS Application",
      desc: "SaaS Management",
      color: "#10b981",
      tech: ["Vue", "Firebase"],
      image:
        "https://via.placeholder.com/400x300/10b981/ffffff?text=Admin+Panel",
      category: "fullstack",
      details:
        "Complete SaaS dashboard with user management, analytics, reporting, and real-time data visualization.",
      link: "#",
      github: "https://github.com/itsAkito/SaaS-Application",
    },
    {
      id: 5,
      title: "Portfolio Website",
      desc: "Personal Showcase",
      color: "#f59e0b",
      tech: ["React", "Tailwind", "Three.js"],
      image:
        "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Portfolio",
      category: "frontend",
      details:
        "Interactive 3D portfolio website with smooth animations and modern design showcasing projects and skills.",
      link: "#",
      github: "https://github.com",
    },
    {
      id: 6,
      title: "Chat Application",
      desc: "Real-time Messaging",
      color: "#06b6d4",
      tech: ["Socket.io", "Express", "React"],
      image:
        "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Chat+App",
      category: "fullstack",
      details:
        "Real-time chat application with user authentication, message history, and group chat functionality.",
      link: "#",
      github: "#",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-full min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Explore my latest work and interactive projects
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "All Projects", value: "all" },
            { label: "Fullstack", value: "fullstack" },
            { label: "Frontend", value: "frontend" },
            { label: "3D & Animation", value: "3d" },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === btn.value
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to see more projects?
          </h3>
          <p className="text-gray-400 mb-6">
            Check out my GitHub for more code and contributions
          </p>
          <a
            href="https://github.com/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition font-semibold text-white"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio3D;