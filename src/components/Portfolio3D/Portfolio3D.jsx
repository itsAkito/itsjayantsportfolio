import React, { useState, useRef, useEffect } from "react";
import './Portfolio3D.css';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

const Portfolio3D = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: "Medical Hub",
            desc: "Health Platform",
            color: "#3b82f6",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            image: "/images/DoctorAppointment.png",
            category: "fullstack",
            details: "A comprehensive telehealth platform connecting patients with healthcare providers. Features include video consultations, appointment scheduling, and medical records management.",
            link: "#",
            github: "https://github.com/",
            contributions: [
                "Built RESTful APIs for patient and doctor management using Node.js/Express",
                "Developed responsive React components for appointment scheduling and video consultation interface",
                "Implemented MongoDB database schema for secure medical records storage and retrieval",
                "Integrated real-time notifications for appointment confirmations and reminders"
            ]
        },
        {
            id: 2,
            title: "AI Blog",
            desc: "Blog platform with CMS Support",
            color: "#8b5cf6",
            tech: ["React.js", "MongoDB", "Node.js", "Tailwind", "Express.js"],
            image: "/images/AiBlogs.png",
            category: "fullstack",
            details: "A blogging platform with Content Management System (CMS) support allowing users to create, edit, and publish articles seamlessly.",
            link: "https://blogging-website1-nine.vercel.app/",
            github: "https://github.com/",
            contributions: [
                "Developed full CMS backend with Node.js/Express for article management and publishing workflows",
                "Created responsive React components with Tailwind CSS for rich text editing and article previews",
                "Designed MongoDB data models for efficient blog post storage, categories, and user comments",
                "Implemented user authentication and role-based access control for content creators"
            ]
        },
        {
            id: 3,
            title: "SaaS Application",
            desc: "Modern SaaS platform with multiple features",
            color: "#10b981",
            tech: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
            image: "/images/SaaS Application.png",
            category: "fullstack",
            details: "A modern SaaS Application with Article generation, image generation, review resume, remove bg and more features.",
            link: "https://saaa-application.vercel.app/",
            github: "https://github.com/itsAkito/SaaS-Application",
            contributions: [
                "Architected multi-feature SaaS platform with scalable Node.js backend and PostgreSQL database",
                "Integrated AI APIs for article generation and advanced image processing capabilities",
                "Built interactive React UI with Tailwind CSS for seamless feature access and user workflows",
                "Implemented secure payment processing and subscription management systems"
            ]
        },
        {
            id: 4,
            title: "Portfolio Website",
            desc: "Personal Showcase",
            color: "#f59e0b",
            tech: ["React", "Tailwind", "Three.js"],
            image: "/images/MyPortimage.png",
            category: "frontend",
            details: "Interactive 3D portfolio website with smooth animations and modern design showcasing projects and skills.",
            link: "https://my-portfolio-phi-three-51.vercel.app/",
            github: "https://github.com/",
            contributions: [
                "Created immersive 3D experience using Three.js with smooth camera transitions and animations",
                "Designed responsive React components with Tailwind CSS for modern, visually appealing layout",
                "Implemented scroll-based animations and parallax effects for enhanced user engagement",
                "Optimized performance and accessibility across all devices and browsers"
            ]
        },
        {
            id: 5,
            title: "Hotel Management Application",
            desc: "Management System with Booking features",
            color: "#06b6d4",
            tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Node.js"],
            image: "/images/HotelPhoto.png",
            category: "fullstack",
            details: "A modern full-stack application built with Next.js, TypeScript, and Prisma that enables hotel owners to manage properties and bookings while guests can seamlessly search, book, and pay online.",
            link: "#",
            github: "https://github.com/",
            contributions: [
                "Built full-stack hotel management system using Next.js with TypeScript for type safety",
                "Designed Prisma ORM schema for complex property, booking, and guest relationships",
                "Developed admin dashboard with real-time inventory and reservation management features",
                "Integrated secure payment gateway and email notifications for booking confirmations"
            ]
        },
        {
            id: 6,
            title: "Expense Tracker System",
            desc: "Finance Management",
            color: "#10b981",
            tech: ["JavaScript", "HTML", "CSS"],
            image: "/images/Expense Tracker.png",
            category: "frontend",
            details: "A simple expense tracker system that helps users to manage their daily expenses effectively with an intuitive interface.",
            link: "#",
            github: "https://github.com/itsAkito/Expense-Tracker",
            contributions: [
                "Built interactive expense tracking UI with vanilla JavaScript and modern CSS Grid layout",
                "Implemented local storage persistence for automatic saving of expense data",
                "Created dynamic charts and visualizations for expense analytics and spending patterns",
                "Designed responsive interface with intuitive category management and filtering options"
            ]
        },
        {
            id: 7,
            title: "TrustHire Blue-Collar Platform",
            desc: "Modern Blue Collar Platform with verified workers",
            color: "#10b981",
            tech: ["React.js", "Express.js", "Node.js", "PostgreSQL", "CSS", "Tailwind CSS"],
            image: "/images/TrustHire.png",
            category: "fullstack",
            details: "TrustHire is a blue-collar hiring platform that connects skilled workers with employers through verified, secure, and mobile-friendly access. With OTP authentication, ratings, and document checks, it ensures trust and reliability.",
            link: "https://trusthire-platform.vercel.app/",
            github: "https://github.com/itsAkito/TrustHire",
            contributions: [
                "Built secure OTP authentication and user verification system for workers and employers",
                "Implemented real-time worker search and matching algorithm with location-based filtering",
                "Designed rating and review system to build trust within the blue-collar marketplace",
                "Integrated document verification and background checks for worker credibility"
            ]
        },
    ];

    // Scroll visibility tracking
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const start = rect.top - window.innerHeight * 0.8;
                const end = rect.bottom - window.innerHeight * 0.2;
                const progress = Math.max(0, Math.min(1, 1 - start / (end - start)));
                setScrollProgress(progress);
                setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Auto-scroll carousel when section is visible
    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 5000); // Change project every 5 seconds

        return () => clearInterval(interval);
    }, [isVisible, projects.length]);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const project = projects[currentIndex];

    return (
        <section
            ref={sectionRef}
            id="portfolio"
            className="relative w-full py-20 px-6 z-10"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-40 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 max-w-full px-0">
                {/* Section Title */}
                <div className="mb-16 text-center max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            My Projects
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Projects Carousel */}
                <div className="relative">
                    {/* Main Project Card - Alternating Layout */}
                    <div className={`flex gap-8 mb-16 mx-auto max-w-7xl items-center transition-all duration-500 opacity-0 animate-fadeIn ${currentIndex % 2 === 0 ? '' : 'flex-row-reverse'}`} style={{animation: 'fadeIn 0.6s ease-in-out forwards'}}>
                        <style>{`
                          @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                          }
                          .animate-fadeIn { animation: fadeIn 0.6s ease-in-out forwards; }
                        `}</style>
                        {/* Image */}
                        <div className="relative h-80 lg:h-96 w-full lg:w-1/2 flex-shrink-0 rounded-2xl overflow-hidden group">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1"
                                style={{ backgroundColor: project.color }}
                            ></div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6 w-full lg:w-1/2 flex flex-col justify-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p
                                    className="text-lg font-semibold"
                                    style={{ color: project.color }}
                                >
                                    {project.desc}
                                </p>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                {project.details}
                            </p>

                            {/* Tech Stack */}
                            <div className="space-y-3">
                                <h4 className="text-white font-semibold">Tech Stack:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 rounded-full text-sm font-medium text-white"
                                            style={{
                                                backgroundColor: project.color + "30",
                                                border: `1px solid ${project.color}`,
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 pt-4">
                                {project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl transition-all"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        Live Demo
                                    </a>
                                )}
                                {project.github !== "#" && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-semibold rounded-xl transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex items-center justify-between mt-12">
                        <button
                            onClick={prevProject}
                            className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full text-white transition-all hover:border-blue-500 group"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover:text-blue-400" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex gap-3">
                            {projects.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        idx === currentIndex
                                            ? "bg-blue-500 w-8"
                                            : "bg-gray-600 hover:bg-gray-500"
                                    }`}
                                ></button>
                            ))}
                        </div>

                        <button
                            onClick={nextProject}
                            className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full text-white transition-all hover:border-blue-500 group"
                        >
                            <ChevronRight className="w-6 h-6 group-hover:text-blue-400" />
                        </button>
                    </div>

                    {/* Project Counter */}
                    <div className="text-center mt-8">
                        <p className="text-gray-400">
                            Project <span className="text-blue-400 font-bold">{currentIndex + 1}</span> of{" "}
                            <span className="text-blue-400 font-bold">{projects.length}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio3D;
// import React, { useState, useRef, useEffect } from "react";
// import ProjectCard from "../../projects/ProjectCard";
// import ProjectModal from "../../projects/ProjectModel";

// const Portfolio3D = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [filter, setFilter] = useState("all");
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const sectionRef = useRef(null);

//   const projects = [
//     {
//       id: 1,
//       title: "Medical Hub",
//       desc: "Telehealth Platform",
//       color: "#3b82f6",
//       tech: ["React", "Node", "MongoDB","Express"],
//       image: "/images/DoctorAppointment.png",
//       category: "fullstack",
//       details:
//         "A comprehensive telehealth platform connecting patients with healthcare providers. Features include video consultations, appointment scheduling, and medical records management.",
//       link: "#",
//       github: "https://github.com/",
//     },
//     {
//       id: 2,
//       title: "AI Blog",
//       desc: "Real-time Analytics",
//       color: "#8b5cf6",
//       tech: ["React.js", "MongoDB", "Node.js","Tailwind","Express.js"],
//       image:
//         "/images/AiBlogs.png",
//       category: "full Stack",
//       details:
//         "Real-time cryptocurrency analytics dashboard with live price tracking, portfolio management, and market analysis tools.",
//       link: "#",
//       github: "https://github.com/",
//     },
//     {
//       id: 3,
//       title: "E-Commerce",
//       desc: "3D Product Configurator",
//       color: "#ef4444",
//       tech: ["Three.js", "Shopify API"],
//       image:
//         "https://via.placeholder.com/400x300/ef4444/ffffff?text=E-Com+Nike",
//       category: "3d",
//       details:
//         "Interactive 3D e-commerce platform with product customization, AR preview, and seamless checkout integration.",
//       link: "#",
//       github: "https://github.com/",
//     },
//     {
//       id: 4,
//       title: "SaaS Application",
//       desc: "A modern SaaS solution that streamlines your operations, boosts productivity, and delivers real‑time insights — all in one intuitive dashboard.",
//       color: "#10b981",
//       tech: ["React.js", "Node.js","PostgresSQL","Tailwind css"],
//       image:
//         "/images/SaaS Application.png",
//       category: "fullstack",
//       details:
//         "Complete SaaS dashboard with user management, analytics, reporting, and real-time data visualization.",
//       link: "https://saaa-application.vercel.app/",
//       github: "https://github.com/itsAkito/SaaS-Application",
//     },
//     {
//       id: 5,
//       title: "Portfolio Website",
//       desc: "Personal Showcase",
//       color: "#f59e0b",
//       tech: ["React", "Tailwind", "Three.js"],
//       image:
//         "/images/MyPortimage.png",
//       category: "frontend",
//       details:
//         "Interactive 3D portfolio website with smooth animations and modern design showcasing projects and skills.",
//       link: "https://my-portfolio-phi-three-51.vercel.app/",
//       github: "https://github.com/",
//     },
//     {
//       id: 6,
//       title: "Chat Application",
//       desc: "Real-time Messaging",
//       color: "#06b6d4",
//       tech: ["Socket.io", "Express", "React"],
//       image:
//         "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Chat+App",
//       category: "fullstack",
//       details:
//         "Real-time chat application with user authentication, message history, and group chat functionality.",
//       link: "#",
//       github: "#",
//     },
//   ];

//   const filteredProjects =
//     filter === "all"
//       ? projects
//       : projects.filter((p) => p.category === filter);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
//         setScrollProgress(progress);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="portfolio"
//       className="relative w-full min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Featured Projects
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg mb-8">
//             Explore my latest work and interactive projects
//           </p>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {[
//             { label: "All Projects", value: "all" },
//             { label: "Fullstack", value: "fullstack" },
//             { label: "Frontend", value: "frontend" },
//             { label: "3D & Animation", value: "3d" },
//           ].map((btn) => (
//             <button
//               key={btn.value}
//               onClick={() => setFilter(btn.value)}
//               className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
//                 filter === btn.value
//                   ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
//                   : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
//               }`}
//             >
//               {btn.label}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {filteredProjects.map((project, index) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               index={index}
//               onClick={() => setSelectedProject(project)}
//               scrollProgress={scrollProgress}
//             />
//           ))}
//         </div>

//         {/* Project Modal */}
//         {selectedProject && (
//           <ProjectModal
//             project={selectedProject}
//             onClose={() => setSelectedProject(null)}
//           />
//         )}

//         {/* CTA Section */}
//         <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30">
//           <h3 className="text-2xl font-bold text-white mb-4">
//             Want to see more projects?
//           </h3>
//           <p className="text-gray-400 mb-6">
//             Check out my GitHub for more code and contributions
//           </p>
//           <a
//             href="https://github.com/"
//             className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition font-semibold text-white"
//           >
//             Visit My GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio3D;
