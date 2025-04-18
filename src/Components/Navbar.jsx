import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-md' 
          : 'bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-heading">
                BRAINNEXT
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 group font-skill ${
                    activeLink === link.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setActiveLink(link.id)}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
                    activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block ml-6">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-button"
                onClick={() => setActiveLink('contact')}
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 focus:outline-none transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FiX size={28} className="text-blue-600 dark:text-blue-400" />
                ) : (
                  <FiMenu size={28} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Only shows when toggle is clicked */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-xl animate-fadeIn">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`block px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 font-skill ${
                    activeLink === link.id
                      ? 'bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={() => {
                    setActiveLink(link.id);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-6 py-3 mt-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-medium shadow-md hover:shadow-lg transition-all duration-300 font-button"
                onClick={() => {
                  setActiveLink('contact');
                  setIsOpen(false);
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;