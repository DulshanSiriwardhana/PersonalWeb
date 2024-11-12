import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Home: React.FC = () => {
  useEffect(() => {
    // GSAP Animation for the page load
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
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
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
    </div>
  );
};

export default Home;
