// import React from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import jayant from '../../assets/jayant.jpg'
// // import resume from './public/resume.pdf'
// const HeroSection = () => {
//   return (
//     <section
//       id="home"
//       className="relative w-full min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center">
//         {/* Greeting Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 mt-8">
//           <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//           <p className="text-sm text-blue-300">Welcome to my portfolio</p>
//         </div>
//         <div className="profile-container">
//           <div className="">
//             <img
//               src={jayant}
//               alt="Jayant Kumar"
//               className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto shadow-lg"
//             ></img>
//           </div>
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//           <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Hi, I'm Jayant Kumar
//           </span>
//           <br />
//           <span className="text-gray-300">Fullstack Developer</span>
//         </h1>

//         {/* Description */}
//         <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
//        A Full Stack Developer specializing in **AI/ML integration** and building exceptional digital experiences. Currently focused on creating intelligent, human-centered products.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">

//           {/* Resume download link (separate, not inside AnchorLink) */}
//           <a
//             href="/MyResume.pdf" // File should be inside public folder
//             download="Jayant-Resume.pdf"
//             className="px-8 py-3 border-2 border-blue-500 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-indigo-400/40 transition font-semibold text-white"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Download Resume
//           </a>
//           {/* Portfolio button */}
//           <AnchorLink
//             className="anchor-link"
//             offset={50}
//             href="#portfolio"
//           >
//             <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition font-semibold text-white">
//               View My Work
//             </button>
//           </AnchorLink>

//           {/* Contact button */}
//           <AnchorLink
//             className="anchor-link"
//             offset={50}
//             href="#contact"
//           >
//             <button className="px-8 py-3 border-2 border-blue-500 rounded-lg hover:bg-blue-500/10 transition font-semibold text-white">
//               Get In Touch
//             </button>
//           </AnchorLink>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <svg
//           className="w-6 h-6 text-blue-400"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 14l-7 7m0 0l-7-7m7 7V3"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
// Removed external smooth scroll dependency for compatibility
import { Download, Mail, MousePointer2, ArrowDown } from "lucide-react"; 
import jayant from '../../assets/jayant.jpg'

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Glass Card Container */}
      <div className="relative z-10 max-w-5xl mx-auto bg-gray-900/60 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-gray-800 shadow-lg text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm text-blue-300 font-medium tracking-wide">Available for Work</span>
        </div>

        {/* Profile Image with Glow */}
        {/* <div className="mb-8 relative  inline-block">
           <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30"></div>
           <img
             src={jayant} // Placeholder image
             alt="Jayant Kumar"
             className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-800"
           />
           
        </div> */}
        {/* Profile + Status Row */}
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">

  {/* Profile Image with Glow */}
  <div className="relative inline-block">
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30"></div>
    <img
      src={jayant}
      alt="Jayant Kumar"
      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-800"
    />
  </div>

  {/* Status Badge */}
  {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
    <span className="text-sm text-blue-300 font-medium tracking-wide">
      Available for Work
    </span>
  </div> */}

</div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
          Hi, I'm <br className="md:hidden" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Jayant Kumar
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-light mb-6">
          Fullstack Developer & AI/ML Enthusiast
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I bridge the gap between complex **AI models** and intuitive **user interfaces**. 
          Currently focused on building intelligent, human-centered web applications 
          that solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Resume Button */}
          {/* <a
            href="/MyResume.pdf" 
            download="Jayant-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-1"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </a> */}

          {/* Portfolio Button */}
          <a href="#portfolio">
            <button className="flex items-center gap-2 px-8 py-3.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-semibold rounded-xl transition-all hover:text-white">
              <MousePointer2 className="w-5 h-5" />
              View Work
            </button>
          </a>

           {/* Contact Button */}
           <a href="#contact">
            <button className="flex items-center gap-2 px-8 py-3.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-semibold rounded-xl transition-all hover:text-white">
              <Mail className="w-5 h-5" />
              Contact
            </button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-blue-400" />
      </div>
    </section>
  );
};

export default HeroSection;