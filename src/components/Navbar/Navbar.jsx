
import React, { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";

import menu_close from "../../assets/menu_close.svg";
import nav_underline from "../../assets/nav_underline.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "350px";
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          JK
        </div>

        {/* Mobile Menu Button */}
        <img
          src={menu_open}
          onClick={openMenu}
          alt="menu"
          className="md:hidden w-6 h-6 cursor-pointer"
        />

        {/* Navigation Menu */}
        <ul
          ref={menuRef}
          className="hidden md:flex gap-8 items-center absolute md:relative right-0 top-16 md:top-0 flex-col md:flex-row bg-gray-900 md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none w-full md:w-auto"
        >
          <img
            src={menu_close}
            onClick={closeMenu}
            alt="close"
            className="md:hidden w-6 h-6 cursor-pointer absolute top-4 right-4"
          />

          {[
            { name: "Home", href: "#home", key: "home" },
            { name: "About Me", href: "#about", key: "about" },
            { name: "Portfolio", href: "#portfolio", key: "portfolio" },
            { name: "Contact", href: "#contact", key: "contact" },
          ].map((item) => (
            <li key={item.key} className="mt-4 md:mt-0">
              <AnchorLink
                className="anchor-link flex items-center gap-2 hover:text-blue-400 transition"
                offset={50}
                href={item.href}
              >
                <p onClick={() => setMenu(item.key)}>{item.name}</p>
                {menu === item.key && (
                  <img src={nav_underline} alt="underline" className="h-1" />
                )}
              </AnchorLink>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
          >
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition font-semibold">
              Contact Me
            </button>
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;