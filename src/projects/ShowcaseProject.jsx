// import React, { useRef, useState, useMemo } from 'react'
// import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import { Text, Html, Stars, Float, useCursor, Environment, ContactShadows } from '@react-three/drei'
// import * as THREE from 'three'
// import { motion } from 'framer-motion' // For non-3D UI elements

// // --- 1. MOCK DATA ---
// const projects = [
//   {
//     id: 1,
//     title: "Medical Hub",
//     desc: "Telehealth Platform",
//     color: "#3b82f6", // Blue
//     tech: ["React", "Node", "MongoDB"],
//     link: "#"
//   },
//   {
//     id: 2,
//     title: "Crypto Dashboard",
//     desc: "Real-time Analytics",
//     color: "#8b5cf6", // Purple
//     tech: ["Next.js", "Web3", "Tailwind"],
//     link: "#"
//   },
//   {
//     id: 3,
//     title: "E-Com Nike",
//     desc: "3D Product Configurator",
//     color: "#ef4444", // Red
//     tech: ["Three.js", "Shopify API"],
//     link: "#"
//   },
//   {
//     id: 4,
//     title: "Admin Panel",
//     desc: "SaaS Management",
//     color: "#10b981", // Emerald
//     tech: ["Vue", "Firebase"],
//     link: "#"
//   }
// ]

// // --- 2. 3D COMPONENTS ---

// // A single Project Card in 3D space
// const ProjectCard = ({ project, position, rotation, onClick }) => {
//   const meshRef = useRef()
//   const [hovered, setHover] = useState(false)
  
//   // Change cursor on hover
//   useCursor(hovered)

//   // Animate the card on every frame
//   useFrame((state, delta) => {
//     if (!meshRef.current) return
    
//     // Smooth hover animation logic
//     const targetScale = hovered ? 1.15 : 1
//     meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    
//     // Slight floating rotation when idle
//     if(!hovered) {
//         meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
//         meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05 + rotation[1]
//     }
//   })

//   return (
//     <group position={position} rotation={rotation}>
//       <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
//         <mesh 
//           ref={meshRef}
//           onPointerOver={() => setHover(true)}
//           onPointerOut={() => setHover(false)}
//           onClick={() => onClick(project)}
//           castShadow
//           receiveShadow
//         >
//           {/* Card Shape */}
//           <boxGeometry args={[2.2, 3.2, 0.2]} />
//           <meshStandardMaterial 
//             color={project.color} 
//             roughness={0.3} 
//             metalness={0.8}
//             envMapIntensity={1}
//           />

//           {/* HTML Overlay: This renders DOM elements "stuck" to the 3D object */}
//           <Html 
//             transform 
//             occlude 
//             position={[0, 0, 0.11]} 
//             style={{ 
//               width: '200px', 
//               height: '300px', 
//               pointerEvents: 'none' // Let clicks pass through to the mesh
//             }}
//           >
//             <div className={`flex flex-col items-center justify-center h-full p-4 text-center select-none rounded-xl transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-80'}`}>
//               <h3 className="text-3xl font-black text-white drop-shadow-lg tracking-tighter uppercase">
//                 {project.title}
//               </h3>
//               <p className="mt-2 text-xs font-bold text-white/90 bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
//                 {project.desc}
//               </p>
//               {hovered && (
//                 <div className="mt-4 flex flex-wrap gap-1 justify-center">
//                   {project.tech.map(t => (
//                     <span key={t} className="text-[8px] bg-white text-black px-1.5 py-0.5 rounded-sm font-bold">
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </Html>
//         </mesh>
//       </Float>
//     </group>
//   )
// }

// // The main 3D Scene
// const PortfolioScene = ({ onSelectProject }) => {
//   const { viewport } = useThree()
  
//   // Responsive scaling
//   const isMobile = viewport.width < 5

//   return (
//     <>
//       {/* Lighting */}
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
//       <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />

//       {/* Background Environment */}
//       <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
//       <Environment preset="city" />

//       {/* Projects arranged in a semi-circle */}
//       <group position={[0, -0.5, 0]}>
//         {projects.map((project, i) => {
//           // Calculate position in a wide arc
//           const xOffset = (i - (projects.length - 1) / 2) * (isMobile ? 2 : 3)
//           const zOffset = Math.abs(xOffset) * 0.2 // Curve it slightly back
//           const rotationY = -xOffset * 0.1 // Rotate slightly towards center

//           return (
//             <ProjectCard 
//               key={project.id}
//               project={project}
//               position={[xOffset, 0, -zOffset]}
//               rotation={[0, rotationY, 0]}
//               onClick={onSelectProject}
//             />
//           )
//         })}
//       </group>

//       {/* Floor Reflections */}
//       <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={20} blur={2} far={4.5} />
//     </>
//   )
// }

// // --- 3. MAIN COMPONENT ---

// const Portfolio3D = () => {
//   const [activeProject, setActiveProject] = useState(null)

//   return (
//     <div className='relative w-full h-screen bg-gray-900 overflow-hidden'>
      
//       {/* 1. The 3D Canvas Layer */}
//       <div className='absolute inset-0 z-0'>
//         <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
//            {/* Fog to hide the edges of the universe */}
//            <fog attach="fog" args={['#111827', 5, 20]} />
//            <PortfolioScene onSelectProject={setActiveProject} />
//         </Canvas>
//       </div>

//       {/* 2. The 2D UI Overlay Layer (Header/Footer) */}
//       <div className='absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8'>
        
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className='flex justify-between items-center'
//         >
//           <div>
//             <h1 className='text-4xl font-black text-white tracking-tighter'>
//               JAYANT<span className='text-blue-500'>.DEV</span>
//             </h1>
//             <p className='text-gray-400 text-sm'>Creative Developer & UI Engineer</p>
//           </div>
//           <button className='pointer-events-auto px-6 py-2 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all font-medium text-sm backdrop-blur-md'>
//             Contact Me
//           </button>
//         </motion.div>

//         {/* Footer Instructions */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className='text-center'
//         >
//           <p className='text-gray-500 text-xs uppercase tracking-widest'>
//             Hover cards to interact • Click to view details
//           </p>
//         </motion.div>
//       </div>

//       {/* 3. Project Detail Modal (Overlay) */}
//       {activeProject && (
//         <div className='absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'>
//           <motion.div 
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className='bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl'
//           >
//             <div className={`h-32 w-full flex items-center justify-center`} style={{ backgroundColor: activeProject.color }}>
//               <h2 className='text-4xl font-bold text-white'>{activeProject.title}</h2>
//             </div>
            
//             <div className='p-8'>
//               <div className='flex justify-between items-start mb-6'>
//                 <div>
//                   <h3 className='text-xl font-bold text-gray-800'>Project Overview</h3>
//                   <p className='text-gray-500 text-sm'>Built with {activeProject.tech.join(" + ")}</p>
//                 </div>
//                 <button 
//                   onClick={() => setActiveProject(null)}
//                   className='text-gray-400 hover:text-gray-800 font-bold text-xl'
//                 >
//                   ✕
//                 </button>
//               </div>

//               <p className='text-gray-600 leading-relaxed mb-8'>
//                 This is a detailed description of the <strong>{activeProject.title}</strong>. 
//                 In a real scenario, this would contain challenges faced, solutions implemented, 
//                 and the impact of the project. This project highlights my ability to work 
//                 with {activeProject.tech[0]} and create seamless user experiences.
//               </p>

//               <div className='flex gap-4'>
//                 <button className='flex-1 bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition'>
//                   View Live Demo
//                 </button>
//                 <button className='flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-50 transition'>
//                   View GitHub
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}

//     </div>
//   )
// }

// export default Portfolio3D



import React, { useState, useRef, useEffect } from "react";
import ProjectModel from "../ProjectModel";
import ProjectModal from "../ProjectModel";
import ProjectCard from "../ProjectCard";

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
      github: "#",
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
      github: "#",
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
      github: "#",
    },
    {
      id: 4,
      title: "Admin Panel",
      desc: "SaaS Management",
      color: "#10b981",
      tech: ["Vue", "Firebase"],
      image:
        "https://via.placeholder.com/400x300/10b981/ffffff?text=Admin+Panel",
      category: "fullstack",
      details:
        "Complete SaaS admin dashboard with user management, analytics, reporting, and real-time data visualization.",
      link: "#",
      github: "#",
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
      github: "#",
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
            href="#"
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