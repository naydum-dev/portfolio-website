import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ name }) => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">{name}</h1>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-purple-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="block text-gray-300 hover:text-purple-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
