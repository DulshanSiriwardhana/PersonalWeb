import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-fledged e-commerce platform built with React, Node.js, and MongoDB.',
    link: '#',
    image: 'https://via.placeholder.com/400x300',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Social Media App',
    description: 'A real-time social media application using the MERN stack.',
    link: '#',
    image: 'https://via.placeholder.com/400x300',
    tech: ['React', 'Express', 'MongoDB', 'Socket.io']
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio website built using React and Tailwind CSS.',
    link: '#',
    image: 'https://via.placeholder.com/400x300',
    tech: ['React', 'Tailwind CSS']
  },
  {
    title: 'Weather App',
    description: 'A weather app using React and an external API to show real-time data.',
    link: '#',
    image: 'https://via.placeholder.com/400x300',
    tech: ['React', 'API', 'CSS']
  },
  {
    title: 'Task Manager',
    description: 'A task management app built with React and Firebase.',
    link: '#',
    image: 'https://via.placeholder.com/400x300',
    tech: ['React', 'Firebase']
  },
  {
    title: 'Blog Platform',
    description: 'A blogging platform with features to create and publish posts, built with Node.js and MongoDB.',
    link: '#',
    image: 'https://via.placeholder.com/400x300',
    tech: ['Node.js', 'MongoDB', 'Express']
  },
];

const techColors: { [key: string]: string } = {
  'React': 'bg-blue-500',
  'Node.js': 'bg-green-500',
  'MongoDB': 'bg-green-700',
  'Express': 'bg-gray-600',
  'Socket.io': 'bg-purple-600',
  'Tailwind CSS': 'bg-teal-400',
  'Firebase': 'bg-yellow-500',
  'API': 'bg-orange-500',
};

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10 text-blue-500">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-gray-700 via-gray-800 to-purple-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-purple-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100, damping: 25 }}
            >
              {/* Golden star */}
              <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-500 rounded-full opacity-0 transition-all duration-300 transform hover:top-4 hover:left-4 hover:opacity-100"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
              <p className="text-lg mt-2 text-gray-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-300">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`${techColors[tech]} px-2 py-1 rounded-full text-white`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="block mt-6 text-blue-400 hover:text-blue-600 font-semibold"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
