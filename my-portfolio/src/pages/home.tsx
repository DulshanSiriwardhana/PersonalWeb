import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Home: React.FC = () => {
  useEffect(() => {
    // GSAP Animation for page elements on load
    gsap.from('.hero-text', {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: 'ease-out',
    });

    gsap.from('.hero-button', {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      delay: 1,
      ease: 'back.out(1.7)',
    });

    // GSAP animation for scrolling elements
    gsap.from('.scrolling-element', {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'ease-out',
      scrollTrigger: '.scrolling-element', // Trigger when the element comes into view
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="flex items-center justify-center h-full px-6 sm:px-12 lg:px-24">
        <div className="text-center max-w-2xl w-full">
          {/* Hero Title with Framer Motion */}
          <motion.h1
            className="hero-text text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Dulshan Siriwardhana
          </motion.h1>

          {/* Subtitle with Framer Motion */}
          <motion.p
            className="hero-subtitle mt-4 text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Full Stack Developer | MERN Stack Expert
          </motion.p>

          {/* Description with GSAP animation */}
          <motion.p
            className="hero-description mt-6 text-lg max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            Welcome to my portfolio! I am a passionate developer, skilled in creating dynamic and responsive web applications. I specialize in building with the MERN stack, creating intuitive user experiences, and developing scalable applications.
          </motion.p>

          {/* Animated Button with GSAP */}
          <motion.a
            href="/projects"
            className="hero-button mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            whileHover={{ scale: 1.05 }} // Hover effect with GSAP
          >
            View My Projects
          </motion.a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="scrolling-element py-16 bg-gray-800">
        <div className="text-center text-3xl font-semibold text-white">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Skills
          </motion.h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-white">
            <motion.div
              className="skill-item p-4 bg-gray-700 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold">React</h3>
            </motion.div>
            <motion.div
              className="skill-item p-4 bg-gray-700 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h3 className="text-xl font-semibold">Node.js</h3>
            </motion.div>
            <motion.div
              className="skill-item p-4 bg-gray-700 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <h3 className="text-xl font-semibold">MongoDB</h3>
            </motion.div>
            <motion.div
              className="skill-item p-4 bg-gray-700 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <h3 className="text-xl font-semibold">Express</h3>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="scrolling-element py-16 bg-gray-900">
        <div className="text-center text-3xl font-semibold text-white">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Connect with Me
          </motion.h2>
          <div className="mt-8 flex justify-center space-x-6">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-blue-500 hover:text-blue-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-500 hover:text-gray-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-blue-400 hover:text-blue-300 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
