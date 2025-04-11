import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav className="bg-gradient-to-r from-blue-50 to-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">BRAINNEXT</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                    activeLink === link.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'
                  }`}
                  onClick={() => setActiveLink(link.id)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-100 focus:outline-none transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FiX size={28} className="text-blue-600" />
                ) : (
                  <FiMenu size={28} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Only shows when toggle is clicked */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                    activeLink === link.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                  onClick={() => {
                    setActiveLink(link.id);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;