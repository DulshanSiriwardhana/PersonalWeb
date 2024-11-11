import React from 'react';
import { FaReact, FaNode, FaDatabase, FaGithub, FaCloud, FaCss3Alt } from 'react-icons/fa';

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading Section */}
        <h2 className="text-5xl font-bold text-center mb-6 text-blue-500">About Me</h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-300">
          I am a passionate full-stack developer focused on building high-performance web applications. With experience in the MERN stack (MongoDB, Express, React, Node), I have a deep understanding of both frontend and backend technologies. I aim to create applications that are not only functional but also provide an exceptional user experience.
        </p>

        {/* Skills Section */}
        <h3 className="text-3xl font-semibold text-gray-100 mb-4">My Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center space-x-3">
            <FaReact className="text-blue-500 text-3xl" />
            <span className="text-xl">React</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaNode className="text-green-500 text-3xl" />
            <span className="text-xl">Node.js</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaDatabase className="text-green-700 text-3xl" />
            <span className="text-xl">MongoDB</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub className="text-gray-400 text-3xl" />
            <span className="text-xl">Git & Version Control</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaCloud className="text-indigo-500 text-3xl" />
            <span className="text-xl">Cloud Platforms</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaCss3Alt className="text-teal-400 text-3xl" />
            <span className="text-xl">CSS / Tailwind CSS</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 text-center">
          <img
            src="https://via.placeholder.com/300x300"
            alt="About Me"
            className="rounded-full w-48 h-48 object-cover mx-auto shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl"
          />
        </div>
        
        {/* Additional Section for More Info */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-400 mb-4">
            I'm always excited to learn new technologies and collaborate on interesting projects. Feel free to reach out if you'd like to work together or have any questions!
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg transform transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
