import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
          I am a passionate full-stack developer with a focus on building high-performance web applications. With experience in the MERN stack (MongoDB, Express, React, Node), I have a deep understanding of both frontend and backend technologies.
        </p>
        <h3 className="text-3xl font-semibold mb-4">My Skills</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>JavaScript (ES6+)</li>
          <li>React, Node.js, Express</li>
          <li>MongoDB, SQL Databases</li>
          <li>RESTful APIs & GraphQL</li>
          <li>CSS, Tailwind CSS, Bootstrap</li>
          <li>Git & Version Control</li>
        </ul>
        <div className="mt-8">
          <img src="https://via.placeholder.com/600x400" alt="About Me" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
