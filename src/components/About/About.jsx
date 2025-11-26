// import React from "react";
// import './About.css'



// const About=()=>{
//     return(
//         <div id="about me" className="about">
//             <div className="about-title">
               
//                     <h1>About me</h1>
                     
//             </div>
//             <div className="about-sections">

//                 <div className="about-para">
                    
//                 <p>I am an motivated Fullstack Developer with hands on projects exprience .</p>
//                 <p>My passion for fullstack developer is not only reflected in my project but also it is helpful to others.</p>

//                 </div>
//                 <div className="about-skills">
//                     <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"50%"}}/></div>
//                      <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"65%"}}/></div>
//                       <div className="about-skill"><p>REACT JS</p><hr style={{width:"60%"}}/></div>
//                        <div className="about-skill"><p>TAILWIND CSS</p><hr style={{width:"56%"}}/></div>
//                        <div className="about-skill"><p>PYTHON</p><hr style={{width:"58%"}}/></div>

//                 </div>
    
//           </div>
//           <div className="about-achievements">
//             <div className="about-achievement">
//                 <h1>8+</h1>
//                 <p>Project Completed</p> 

//             </div>

//           </div>
    
//         </div>
//     ) 
// }
// export default About


import React from "react";

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React JS", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "Python", level: 75 },
    { name: "Three.js", level: 70 },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-20 px-6 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              I'm a passionate Fullstack Developer
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I'm an motivated Fullstack Developer with hands-on project experience
              in building scalable web applications. My passion for fullstack
              development is not only reflected in my projects but also in my desire
              to help others learn and grow.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I love turning complex problems into simple, beautiful, and intuitive
              designs. I take pride in my work and always strive to deliver the best
              possible solution to my clients and stakeholders.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg border border-blue-500/30">
                <h4 className="text-2xl font-bold text-blue-400">8+</h4>
                <p className="text-sm text-gray-400">Projects Done</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg border border-purple-500/30">
                <h4 className="text-2xl font-bold text-purple-400">50+</h4>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-pink-500/20 to-pink-500/10 rounded-lg border border-pink-500/30">
                <h4 className="text-2xl font-bold text-pink-400">3+</h4>
                <p className="text-sm text-gray-400">Years Active</p>
              </div>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000"
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