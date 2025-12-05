// import React from "react";

// const About = () => {
//   const skills = [
//     { name: "HTML & CSS", level: 90 },
//     { name: "JavaScript", level: 85 },
//     { name: "React JS", level: 88 },
//     { name: "Tailwind CSS", level: 92 },
//     { name: "Node.js", level: 80 },
//     { name: "MongoDB", level: 82 },
//     { name: 'PostgreSQL', level: 78 },
//     { name: "Python", level: 75 },
//     { name: "Three.js", level: 70 },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative w-full min-h-screen py-20 px-6 bg-gray-900"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Section Title */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               About Me
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
//         </div>

//         {/* Content */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Description */}
//           <div>
//             <h3 className="text-2xl font-bold mb-6 text-white">
//               I'm a passionate Fullstack Developer
//             </h3>
//             <p className="text-gray-400 mb-4 leading-relaxed">
//               I'm a motivated Fullstack Developer currently building my skills through hands‑on projects and
//               real‑world learning.
//               I enjoy creating scalable web applications and exploring
//               both frontend and backend technologies.
//               As a student, I’m passionate about improving every day,
//               sharing what I learn, and helping others grow alongside me
//             </p>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               I love turning complex problems into simple, beautiful, and
//               intuitive designs. I enjoy the challenge of creating clean user experiences
//               and meaningful solutions through thoughtful design and development. As a student,
//               I take pride in learning, experimenting, and constantly improving my skills to build projects
//               that are both functional and visually engaging.
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4">
//               <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg border border-blue-500/30">
//                 <h4 className="text-2xl font-bold text-blue-400">8+</h4>
//                 <p className="text-sm text-gray-400">Projects Completed</p>
//               </div>

//               <div className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg border border-purple-500/30">
//                 <h4 className="text-2xl font-bold text-purple-400">9+</h4>
//                 <p className="text-sm text-gray-400">Technologies Learned</p>
//               </div>

//               {/* <div className="p-4 bg-gradient-to-br from-pink-500/20 to-pink-500/10 rounded-lg border border-pink-500/30">
//                 <h4 className="text-2xl font-bold text-pink-400">20+</h4>
//                 <p className="text-sm text-gray-400">Coding Challenges Solved</p>
//               </div> */}
//             </div>
//           </div>

//           {/* Right Side - Skills */}
//           <div>
//             <h3 className="text-2xl font-bold mb-8 text-white">
//               Technical Skills
//             </h3>
//             <div className="space-y-6">
//               {skills.map((skill, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-gray-300 font-medium">{skill.name}</span>
//                     <span className="text-blue-400">{skill.level}%</span>
//                   </div>
//                   <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
//                     <div
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000"
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


import React, { useState } from "react";
import { Download, GraduationCap, Award, Code, ExternalLink, FileText, Sparkles, Loader, Lightbulb } from "lucide-react";

const About = () => {

  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React JS", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 82 },
    { name: "Python", level: 75 },
    { name: "PowerBi", level: 70 },
    { name: "Three.js", level: 70 },
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
    const resumeUrl = "/MyResume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Jayant_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-20 px-6 z-10"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/20 to-gray-900/60"></div>
      </div>

      <div className="max-w-6xl mx-auto bg-gray-900/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">

        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side - Bio & Education */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <span className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Code className="w-5 h-5" /></span>
                Who am I?
              </h3>
              <div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate student developer who loves turning ideas into real, working applications.
                  I enjoy exploring both frontend and backend technologies, building projects that challenge me,
                  and constantly improving my problem‑solving skills. My goal is to create meaningful digital
                  experiences while learning something new every day.
                </p>
              </div>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Currently bridging the gap between academic theory and real-world deployment through complex projects involving AI integration and modern UI/UX.
              </p>
            </div>

            {/* Resume & Links Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>

              <a
                href="https://www.linkedin.com/in/jayant-kumar-428a9b359/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-semibold rounded-xl transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <span className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><GraduationCap className="w-5 h-5" /></span>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-colors">
                    <div className="flex flex-col">
                      <h4 className="text-white font-semibold">{edu.degree}</h4>
                      <span className="text-blue-400 text-sm">{edu.institution}</span>
                      <div className="flex gap-4 mt-2 text-xs text-gray-400">
                        <span>{edu.year}</span>
                        <span>•</span>
                        <span className="text-green-400">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stats & Skills */}
          <div>
            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-gray-800/40 rounded-xl border border-gray-700 text-center">
                <div className="text-2xl font-bold text-white flex justify-center items-center gap-2">
                  32+ <span className="text-yellow-500 text-sm"><Award className="w-4 h-4" /></span>
                </div>
                <p className="text-xs text-gray-400 mt-1">GeekForGeeks Problems</p>
              </div>
            </div>

            {/* Skills Bars */}
            <h3 className="text-xl font-bold mb-6 text-white">Technical Arsenal (Skills)</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-gray-300 font-medium text-sm group-hover:text-blue-400 transition-colors">{skill.name}</span>
                    <span className="text-gray-500 text-xs">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden border border-gray-700/50">
                    <div
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;