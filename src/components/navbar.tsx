import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-500">Dulshan</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink label="Home" path="/" currentPath={location.pathname} />
              <NavLink label="About Me" path="/about" currentPath={location.pathname} />
              <NavLink label="Projects" path="/projects" currentPath={location.pathname} />
              <NavLink label="Contact" path="/contact" currentPath={location.pathname} />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={toggleMenu}
                className="group flex flex-col items-center justify-center w-10 h-10 focus:outline-none"
              >
                {/* Hamburger Icon */}
                <div className="relative w-6 h-6 flex flex-col justify-between items-center">
                  <span
                    className={`block h-1 w-full bg-white transition-transform duration-300 ease-in-out ${
                      isOpen ? 'rotate-45 translate-y-2' : 'rotate-0'
                    }`}
                  />
                  <span
                    className={`block h-1 w-full bg-white transition-opacity duration-300 ease-in-out ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`block h-1 w-full bg-white transition-transform duration-300 ease-in-out ${
                      isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar and Overlay */}
      <div className={`fixed inset-0 z-40 ${isOpen ? 'block' : 'hidden'}`}>
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>

        {/* Sidebar */}
        <motion.div
          className="fixed top-0 right-0 bg-gray-900 w-64 h-full z-50"
          initial={{ x: '100%' }} // Start off-screen to the right
          animate={{ x: isOpen ? 0 : '100%' }} // Slide in or out
          exit={{ x: '100%' }} // Exit by sliding out
          transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Smooth spring animation
        >
          <div className="flex justify-between items-center px-4 py-4">
            <span className="text-2xl font-bold text-white">Menu</span>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="px-4 py-2 space-y-4">
            <MobileNavLink label="Home" path="/" currentPath={location.pathname} toggleMenu={toggleMenu} />
            <MobileNavLink label="About Me" path="/about" currentPath={location.pathname} toggleMenu={toggleMenu} />
            <MobileNavLink label="Projects" path="/projects" currentPath={location.pathname} toggleMenu={toggleMenu} />
            <MobileNavLink label="Contact" path="/contact" currentPath={location.pathname} toggleMenu={toggleMenu} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

// NavLink Component for desktop menu
const NavLink: React.FC<{ label: string; path: string; currentPath: string }> = ({ label, path, currentPath }) => {
  const isActive = currentPath === path;
  return (
    <Link
      to={path}
      className={`text-lg font-semibold ${
        isActive ? 'text-blue-500' : 'text-gray-300'
      } hover:text-blue-400 transition duration-300`}
    >
      {label}
    </Link>
  );
};

// MobileNavLink Component for mobile sidebar
const MobileNavLink: React.FC<{ label: string; path: string; currentPath: string; toggleMenu: () => void }> = ({ label, path, currentPath, toggleMenu }) => {
  const isActive = currentPath === path;
  return (
    <Link
      to={path}
      className={`block px-4 py-2 rounded-md text-base font-medium ${
        isActive ? 'text-blue-500' : 'text-gray-300'
      } hover:text-blue-400 hover:bg-gray-800 transition duration-300`}
      onClick={() => { toggleMenu(); }}
    >
      {label}
    </Link>
  );
};

export default NavBar;
