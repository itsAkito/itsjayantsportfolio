import React, { useState } from "react";
import { 
  Download, 
  GraduationCap, 
  Code, 
  ExternalLink, 
  Sparkles, 
  Lightbulb,
  Zap,
  Database,
  Cloud,
  CreditCard,
  Lock,
  Package,
  Layers, 
  Notebook,
  FileJson,
  Cpu,
  Braces,
  Palette,
  BarChart3,
  Workflow,
  Boxes,
  Settings,
  Wrench,
  MonitorPlay,
  Rocket
} from "lucide-react";

// 1. Data defining the tools used in projects
const projectTools = [
  { name: "Next.js 16", icon: Code, color: "blue" },
  { name: "TypeScript", icon: Layers, color: "blue" },
  { name: "Prisma ORM", icon: Zap, color: "green" },
  { name: "PostgreSQL", icon: Database, color: "purple" },
  { name: "Docker", icon: Database, color: "seaBlue" },
  { name: "Tailwind CSS", icon: Package, color: "cyan" },
  { name: "Clerk Auth", icon: Lock, color: "yellow" },

  { name: "Stripe Payments", icon: CreditCard, color: "pink" },
  { name: "Rozarpay", icon: CreditCard, color: "orange"},
  { name: "Framer Motion", icon: Rocket, color: "pink" },
];

const About = () => {
  const skills = [
    { name: "HTML5", icon: Code, color: "from-orange-600 to-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", hover: "hover:border-orange-500/70 hover:bg-orange-500/20" },
    { name: "CSS3", icon: Palette, color: "from-blue-600 to-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", hover: "hover:border-blue-500/70 hover:bg-blue-500/20" },
    { name: "JavaScript", icon: Braces, color: "from-yellow-600 to-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30", hover: "hover:border-yellow-500/70 hover:bg-yellow-500/20" },
    { name: "React", icon: MonitorPlay, color: "from-cyan-600 to-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", hover: "hover:border-cyan-500/70 hover:bg-cyan-500/20" },
    { name: "Node.js", icon: Cpu, color: "from-green-600 to-green-400", bg: "bg-green-500/10", border: "border-green-500/30", hover: "hover:border-green-500/70 hover:bg-green-500/20" },
    { name: "MongoDB", icon: Database, color: "from-green-700 to-green-500", bg: "bg-green-600/10", border: "border-green-600/30", hover: "hover:border-green-600/70 hover:bg-green-600/20" },
    { name: "Tailwind CSS", icon: Zap, color: "from-cyan-700 to-cyan-500", bg: "bg-cyan-600/10", border: "border-cyan-600/30", hover: "hover:border-cyan-600/70 hover:bg-cyan-600/20" },
    { name: "Python", icon: FileJson, color: "from-blue-700 to-blue-500", bg: "bg-blue-600/10", border: "border-blue-600/30", hover: "hover:border-blue-600/70 hover:bg-blue-600/20" },
    { name: "Three.js", color: "from-purple-600 to-purple-400", icon: Boxes, bg: "bg-purple-500/10", border: "border-purple-500/30", hover: "hover:border-purple-500/70 hover:bg-purple-500/20" },
    { name: "TypeScript", icon: Layers, color: "from-blue-800 to-blue-600", bg: "bg-blue-700/10", border: "border-blue-700/30", hover: "hover:border-blue-700/70 hover:bg-blue-700/20" },
    { name: "Power BI", icon: BarChart3, color: "from-yellow-700 to-yellow-500", bg: "bg-yellow-600/10", border: "border-yellow-600/30", hover: "hover:border-yellow-600/70 hover:bg-yellow-600/20" },
    { name: "Docker", icon: Boxes, color: "from-blue-900 to-blue-700", bg: "bg-blue-800/10", border: "border-blue-800/30", hover: "hover:border-blue-800/70 hover:bg-blue-800/20" }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "SRMS CET Bareilly",
      year: "2022 - 2026",
      score: "CGPA: 6.6/10"
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "CLVPSVMIC Pilibhit",
      year: "2019 - 2021",
      score: "Grade: 72%"
    }
  ];

  const handleDownloadResume = () => {
    const resumeUrl = "/JAYANT KUMAR RAJPOOTcv.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Jayant_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
      {/* ABOUT SECTION - More Prominent */}
      <section
        id="about"
        className="relative w-full py-20 px-6 z-10"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 w-full">
          {/* Section Title */}
          <div className="mb-16 text-left pl-6 md:pl-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Professional Profile</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl">Full-Stack Developer passionate about building innovative solutions and learning new technologies</p>
          </div>

          {/* About Content - Left Aligned */}
          <div className="pl-6 md:pl-12 pr-6 md:pr-0 max-w-2xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">Who am I?</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm a passionate student developer who loves turning ideas into real, working applications.
                  I enjoy exploring both frontend and backend technologies, building projects that challenge me,
                  and constantly improving my problem‑solving skills. My goal is to create meaningful digital
                  experiences while learning something new every day.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">My Journey</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Currently bridging the gap between academic theory and real-world deployment through complex projects
                  involving AI integration and modern UI/UX. I specialize in building scalable full-stack applications
                  with a focus on user experience and code quality.
                </p>
              </div>

              {/* Resume & Links Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 text-base"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>

                <a
                  href="https://www.linkedin.com/in/jayant-kumar-428a9b359/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-semibold rounded-xl transition-all text-base"
                >
                  <ExternalLink className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - Separate & Prominent */}
      <section className="relative w-full py-20 px-6 z-10">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full"></div>
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <Lightbulb className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-300 font-medium">Technical Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Skills 
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive toolkit spanning frontend, backend, and modern development practices</p>
          </div>

          {/* Infinite Mirror Carousel - Right to Left */}
          <div className="relative w-full py-8">
            <style>{`
              @keyframes infiniteScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .infinite-carousel-row {
                display: flex;
                gap: 1rem;
                width: fit-content;
                animation: infiniteScroll 30s linear infinite;
              }
              .infinite-carousel-row:hover {
                animation-play-state: paused;
              }
              .skill-item {
                flex-shrink: 0;
                min-width: fit-content;
              }
            `}</style>
            
            <div className="space-y-6 overflow-hidden">
              {/* Row 1 */}
              <div className="overflow-hidden">
                <div className="infinite-carousel-row">
                  {[...skills.slice(0, 6), ...projectTools.slice(0, 5), ...skills.slice(0, 6)].map((item, idx) => (
                    <div
                      key={`row1-${idx}`}
                      className="skill-item group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-xl bg-transparent"
                      style={{
                        borderColor: item.color === 'blue' ? 'rgba(96, 165, 250, 0.5)' : item.color === 'green' ? 'rgba(34, 197, 94, 0.5)' : item.color === 'purple' ? 'rgba(168, 85, 247, 0.5)' : item.color === 'cyan' ? 'rgba(34, 211, 238, 0.5)' : item.color === 'yellow' ? 'rgba(234, 179, 8, 0.5)' : item.color === 'pink' ? 'rgba(236, 72, 153, 0.5)' : item.color === 'orange' ? 'rgba(249, 115, 22, 0.5)' : item.color === 'seaBlue' ? 'rgba(96, 165, 250, 0.5)' : 'rgba(107, 114, 128, 0.5)',
                      }}
                    >
                      <div className={`p-2 rounded-lg ${item.color ? `bg-gradient-to-br ${item.color}` : 'bg-gray-600'} shadow-lg shadow-black/20 group-hover:shadow-lg group-hover:shadow-current transition-all`}>
                        {item.icon && <item.icon className="w-5 h-5 text-white\" />}
                      </div>
                      <span className="text-xs font-semibold text-center group-hover:text-white transition-colors whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 */}
              <div className="overflow-hidden">
                <div className="infinite-carousel-row" style={{ animationDelay: '-10s' }}>
                  {[...projectTools.slice(5, 11), ...skills.slice(6, 12), ...projectTools.slice(5, 11)].map((item, idx) => (
                    <div
                      key={`row2-${idx}`}
                      className="skill-item group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-xl bg-transparent"
                      style={{
                        borderColor: item.color === 'blue' ? 'rgba(96, 165, 250, 0.5)' : item.color === 'green' ? 'rgba(34, 197, 94, 0.5)' : item.color === 'purple' ? 'rgba(168, 85, 247, 0.5)' : item.color === 'cyan' ? 'rgba(34, 211, 238, 0.5)' : item.color === 'yellow' ? 'rgba(234, 179, 8, 0.5)' : item.color === 'pink' ? 'rgba(236, 72, 153, 0.5)' : item.color === 'orange' ? 'rgba(249, 115, 22, 0.5)' : item.color === 'seaBlue' ? 'rgba(96, 165, 250, 0.5)' : 'rgba(107, 114, 128, 0.5)',
                      }}
                    >
                      <div className={`p-2 rounded-lg ${item.color ? `bg-gradient-to-br ${item.color}` : 'bg-gray-600'} shadow-lg shadow-black/20 group-hover:shadow-lg group-hover:shadow-current transition-all`}>
                        {item.icon && <item.icon className="w-5 h-5 text-white" />}
                      </div>
                      <span className="text-xs font-semibold text-center group-hover:text-white transition-colors whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>


            </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default About;
// import React, { useState } from "react";
// import { Download, GraduationCap, Award, Code, ExternalLink, FileText, Sparkles, Loader, Lightbulb } from "lucide-react";

// const About = () => {

//   const skills = [
//     { name: "HTML & CSS", level: 90 },
//     { name: "JavaScript", level: 85 },
//     { name: "React JS", level: 88 },
//     { name: "Tailwind CSS", level: 92 },
//     { name: "Node.js", level: 80 },
//     { name: "MongoDB", level: 82 },
//     { name: "Python", level: 75 },
//     { name: "PowerBi", level: 70 },
//     { name: "Three.js", level: 70 },
//   ];

//   const education = [
//     {
//       degree: "B.Tech in Computer Science",
//       institution: "SRMS CET Bareilly",
//       year: "2022 - 2026",
//       score: "CGPA: 6.6/10"
//     },
//     {
//       degree: "Higher Secondary (12th)",
//       institution: "CLVPSVMIC Pilibhit",
//       year: "2019 - 2021",
//       score: "Grade: 72%"
//     }
//   ];

//   const handleDownloadResume = () => {
//     const resumeUrl = "/MyResume.pdf";
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "Jayant_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };


//   return (
//     <section
//       id="about"
//       className="relative w-full min-h-screen py-20 px-6 z-10"
//     >
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/20 to-gray-900/60"></div>
//       </div>

//       <div className="max-w-6xl mx-auto bg-gray-900/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">

//         {/* Section Title */}
//         <div className="mb-12 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               About Me
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
//         </div>

//         {/* Content Grid */}
//         <div className="grid md:grid-cols-2 gap-12">

//           {/* Left Side - Bio & Education */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
//                 <span className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Code className="w-5 h-5" /></span>
//                 Who am I?
//               </h3>
//               <div>
//                 <p className="text-gray-300 leading-relaxed">
//                   I'm a passionate student developer who loves turning ideas into real, working applications.
//                   I enjoy exploring both frontend and backend technologies, building projects that challenge me,
//                   and constantly improving my problem‑solving skills. My goal is to create meaningful digital
//                   experiences while learning something new every day.
//                 </p>
//               </div>

//               <p className="text-gray-300 mt-4 leading-relaxed">
//                 Currently bridging the gap between academic theory and real-world deployment through complex projects involving AI integration and modern UI/UX.
//               </p>
//             </div>

//             {/* Resume & Links Buttons */}
//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={handleDownloadResume}
//                 className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-1"
//               >
//                 <Download className="w-5 h-5" />
//                 Download Resume
//               </button>

//               <a
//                 href="https://www.linkedin.com/in/jayant-kumar-428a9b359/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-semibold rounded-xl transition-all"
//               >
//                 <ExternalLink className="w-5 h-5" />
//                 LinkedIn
//               </a>
//             </div>

//             {/* Education Timeline */}
//             <div>
//               <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
//                 <span className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><GraduationCap className="w-5 h-5" /></span>
//                 Education
//               </h3>
//               <div className="space-y-4">
//                 {education.map((edu, index) => (
//                   <div key={index} className="flex gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-colors">
//                     <div className="flex flex-col">
//                       <h4 className="text-white font-semibold">{edu.degree}</h4>
//                       <span className="text-blue-400 text-sm">{edu.institution}</span>
//                       <div className="flex gap-4 mt-2 text-xs text-gray-400">
//                         <span>{edu.year}</span>
//                         <span>•</span>
//                         <span className="text-green-400">{edu.score}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Stats & Skills */}
//           <div>
//             {/* Stats Row */}
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               <div className="p-4 bg-gray-800/40 rounded-xl border border-gray-700 text-center">
//                 <div className="text-2xl font-bold text-white flex justify-center items-center gap-2">
//                   32+ <span className="text-yellow-500 text-sm"><Award className="w-4 h-4" /></span>
//                 </div>
//                 <p className="text-xs text-gray-400 mt-1">GeekForGeeks Problems</p>
//               </div>
//             </div>

//             {/* Skills Bars */}
//             <h3 className="text-xl font-bold mb-6 text-white">Technical Arsenal (Skills)</h3>
//             <div className="space-y-5">
//               {skills.map((skill, index) => (
//                 <div key={index} className="group">
//                   <div className="flex justify-between mb-1.5">
//                     <span className="text-gray-300 font-medium text-sm group-hover:text-blue-400 transition-colors">{skill.name}</span>
//                     <span className="text-gray-500 text-xs">{skill.level}%</span>
//                   </div>
//                   <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden border border-gray-700/50">
//                     <div
//                       className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
//                       style={{ width: `${skill.level}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;