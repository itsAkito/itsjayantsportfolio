// import React from "react";
// import "./Contact.css"
// import theme_pattern from '../../assets/theme_pattern.svg'
// import location_icon from '../../assets/location_icon.svg'
// import call_icon from '../../assets/call_icon.svg'
// import mail_icon from '../../assets/mail_icon.svg'
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const Contact=()=>{
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "a019c8d1-61d3-4721-ac74-a9774c1c4883");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//     alert(res.message)
//     }
// };

//     return(
//       <div id="contact" className="contact">
//         <div className="contact-title">
//             <h1>Get in touch </h1>
//             <img src={theme_pattern}alt=""/>
//         </div>
//         <div className="contact-section">
//             <div className="contact-left">
//                 <h1>Let's talk</h1>
//                 <p>I'm currently avaliable to take new projects , so feel free to ask anything that you want me to work on. you can contact anytime.</p>
//                 <div className="contact-details">
//                     <div className="contact- detail">
//                       <img src={call_icon} alt=""/>
//                      <p className="contact-detail">+918954904479</p>                </div>
//                     <div className="contact- detail">
//                      {/* <FontAwesomeIcon icon="fa-regular fa-envelope" /> */}
//                      <img src={mail_icon} alt=""/>

//                      <p className="contact-detail">jayantkumar40146@gmail.com</p>
                     
//                     </div>
//                     <div className="contact- detail">
//                       <img src={location_icon} alt=""/>
//                         <p className="contact-detail">UP, India</p>
                        
//                     </div>
//                 </div>
//             </div>
//             <form onSubmit={onSubmit} className="contact-right">
//                 <label htmlFor="">Your Name:</label>
//                 <input type="text" placeholder="Enter your name" name="name"/>
//                 <label htmlFor="">Your Email:</label>
//                 <input type="email" placeholder="Enter your email"name="email"/>
//                 <label htmlFor="">Write your message here</label>
//                 <textarea name="message" row="8" placeholder="Enter your message"/>
//                 <button type="submit" className="contact-submit">Sumbit now</button>
//              </form>
//         </div>
//       </div>   
//     )
// }
// export default Contact

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("message", formData.message);
    formDataObj.append(
      "access_key",
      "a019c8d1-61d3-4721-ac74-a9774c1c4883"
    );

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "📞",
      label: "Phone",
      value: "+91 8954904479",
      href: "tel:+918954904479",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "jayantkumar40146@gmail.com",
      href: "mailto:jayantkumar40146@gmail.com",
    },
    {
      icon: "📍",
      label: "Location",
      value: "UP, India",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Have a project in mind? Let's talk about it!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Let's talk about everything!
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm currently available to take new projects, so feel free to ask
              anything that you want me to work on. You can contact me anytime.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition group"
                >
                  <span className="text-3xl group-hover:scale-110 transition">
                    {info.icon}
                  </span>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-semibold group-hover:text-blue-400 transition">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4">Follow me on:</p>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", icon: "💻" },
                  { name: "LinkedIn", icon: "💼" },
                  { name: "Twitter", icon: "🐦" },
                  { name: "Discord", icon: "💬" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-xl hover:border-blue-500 hover:bg-gray-700 transition"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={onSubmit}
              className="space-y-6 p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-blue-500/50 transition"
            >
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-3">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300">
                  ✗ Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;