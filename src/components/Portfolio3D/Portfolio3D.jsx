import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "../../projects/ProjectCard";
import ProjectModal from "../../projects/ProjectModel";
import { Code, LayoutGrid, Zap, Sparkles } from 'lucide-react';
import './Portfolio3D.css';

const Portfolio3D = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState("all");
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Filter categories data for cleaner rendering
    const categories = [
        { label: "All Projects", value: "all", icon: LayoutGrid },
        { label: "Fullstack", value: "fullstack", icon: Zap },
        { label: "Frontend", value: "frontend", icon: Code }, // Using Code for 3D since it relates to unique tech
    ];

    const projects = [
        {
            id: 1,
            title: "Medical Hub",
            desc: "Health Platform",
            color: "#3b82f6",
            tech: ["React", "Node.js", "MongoDB", "Express",""],
            image: "/images/DoctorAppointment.png",
            category: "fullstack",
            details:
                "A comprehensive telehealth platform connecting patients with healthcare providers. Features include video consultations, appointment scheduling, and medical records management.",
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
            image:
                "/images/AiBlogs.png",
            category: "fullstack",
            details:
                "A blogging platform with Content Management System (CMS) support allowing users to create ,edit,and publish articles seamlessly.",
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
            tech: ["React.js", "Node.js", "PostgresSQL", "Tailwind css"],
            image:
                "/images/SaaS Application.png",
            category: "fullstack",
            details:
                "A modern SaaS Application with Article generation, image generation, review resume, remove bg and more features.",
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
            id: 5,
            title: "Portfolio Website",
            desc: "Personal Showcase",
            color: "#f59e0b",
            tech: ["React", "Tailwind", "Three.js"],
            image:"/images/MyPortimage.png",
            category: "frontend",
            contributions: [
                "Created immersive 3D experience using Three.js with smooth camera transitions and animations",
                "Designed responsive React components with Tailwind CSS for modern, visually appealing layout",
                "Implemented scroll-based animations and parallax effects for enhanced user engagement",
                "Optimized performance and accessibility across all devices and browsers"
            ],
            details:
                "Interactive 3D portfolio website with smooth animations and modern design showcasing projects and skills.",
            link: "https://my-portfolio-phi-three-51.vercel.app/",
            github: "https://github.com/",
        },
        {
            id: 5,
            title: "Hotel Management Application",
            desc: "Management System with Booking features",
            color: "#06b6d4",
            tech: ["Next.js","TypeScript","Prisma","Tailwind CSS","Node.js"],
            image:
                "/images/HotelPhoto.png",
            category: "fullstack",
            details:
                "A modern full‑stack application built with Next.js, TypeScript, and Prisma that enables hotel owners to manage properties and bookings while guests can seamlessly search, book, and pay online.",
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
            tech: ["JavaScript","HTML","CSS"],
            image:
                "/images/Expense Tracker.png",
            category: "frontend",
            details:
                "A simple expense tracker system that helps users to manage their daily expenses effectively with an intuitive interface.",
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
            desc: "Modern Blue Collar Platform with verified workers, trusted opportunities",
            color: "#10b981",
            tech: ["React.js","Express.js", "Node.js", "PostgresSQL", "CSS", "Tailwind css"],
            image: "/images/TrustHire.png",
            category: "fullstack",
            details: "TrustHire is a blue‑collar hiring platform that connects skilled workers with employers through verified, secure, and mobile‑friendly access. With OTP authentication, ratings, and document checks, it ensures trust and reliability. Employers quickly find nearby talent, while workers showcase skills without resumes, making recruitment faster, safer, and more transparent.",
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


    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter((p) => p.category === filter);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                // Calculate progress: 1 when section enters view from top, 0 when it leaves from bottom
                const start = rect.top - window.innerHeight * 0.8;
                const end = rect.bottom - window.innerHeight * 0.2;
                const progress = Math.max(0, Math.min(1, 1 - start / (end - start)));
                setScrollProgress(progress);
                
                // Check if section is visible
                setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Clean up the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="portfolio"
            className="relative w-full min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 portfolio-section"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-8 text-center section-header">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300 font-medium">Portfolio Showcase</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 section-title">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-2 section-subtitle">
                        Explore my latest work and interactive projects
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full divider"></div>
                </div>

                {/* Sub-Header and Divider */}
                <div className="text-center mb-12 sub-header">
                    <h3 className="text-xl font-semibold text-gray-300 mb-4">
                        Innovative Solutions Across the Stack
                    </h3>
                    <hr className="border-t border-gray-700 max-w-lg mx-auto" />
                </div>


                {/* Filter Buttons (Pill-shaped tabs) */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 filter-buttons">
                    {categories.map((btn) => (
                        <button
                            key={btn.value}
                            onClick={() => setFilter(btn.value)}
                            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm filter-btn ${
                                filter === btn.value
                                    ? "bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-md shadow-blue-500/30 transform scale-105"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-blue-500/30"
                            }`}
                        >
                            <btn.icon className="w-4 h-4" />
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 projects-grid auto-rows-max">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <div key={project.id} className="animate-fadeIn project-grid-item h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                                <ProjectCard
                                    project={project}
                                    index={index}
                                    onClick={() => setSelectedProject(project)}
                                    scrollProgress={scrollProgress}
                                />
                            </div>
                        ))
                    ) : (
                        // Empty State UI
                        <div className="col-span-full text-center py-20 bg-gray-800/50 rounded-xl border border-gray-700 empty-state">
                            <h3 className="text-2xl font-bold text-gray-300 mb-2">
                                No Projects Found
                            </h3>
                            <p className="text-gray-500">
                                Try selecting "All Projects" or checking back later.
                            </p>
                            {/* Clear filter button */}
                            {filter !== 'all' && (
                                <button
                                    onClick={() => setFilter('all')}
                                    className="mt-4 px-4 py-2 text-sm text-blue-400 border border-blue-500/30 rounded-full hover:bg-blue-500/10 transition"
                                >
                                    Show All Projects
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Project Modal */}
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}

                {/* CTA Section */}
                <div className="mt-16 text-center p-10 rounded-2xl bg-gradient-to-r from-gray-700/50 to-gray-800/70 border border-gray-700 backdrop-blur-sm">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Curious for more code?
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Find a complete list of repositories, contributions, and open-source work on my GitHub.
                    </p>
                    <a
                        href="https://github.com/"
                        className="inline-block px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition font-bold text-white transform hover:scale-[1.02]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit My GitHub
                    </a>
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