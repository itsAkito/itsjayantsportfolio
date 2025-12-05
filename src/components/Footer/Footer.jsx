import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black/50 border-t border-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 mb-2">
              JK
            </h3>
            <p className="text-gray-400 text-sm">
              Fullstack Developer crafting beautiful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["home", "about", "portfolio", "contact"].map((link) => (
                <li key={link}>
                  <AnchorLink
                    href={`#${link}`}
                    offset={50}
                    className="text-gray-400 hover:text-blue-400 transition text-sm"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "UI/UX Design",
                "Data Analytics",
                "AI/ML",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                Email:{" "}
                <a
                  href="mailto:jayantkumar40146@gmail.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  jayantkumar40146@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+918954904479"
                  className="text-blue-400 hover:text-blue-300"
                >
                  +91 8954904479
                </a>
              </p>
              <p>Location: UP, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © {currentYear} Jayant Kumar. All rights reserved. Designed with{" "}
            <span className="text-red-500">❤️</span> by Jayant Kumar.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-blue-400 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/50 transition opacity-0 hover:opacity-100 z-40"
          style={{
            opacity:
              typeof window !== "undefined" && window.scrollY > 300 ? 1 : 0,
          }}
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;