import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode } from "react-icons/fa";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React JS",
  "Firebase",
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "Next JS",
  "Node JS",
  "Express JS",
  "MongoDB",
  "Daisyui",
  "Shadcn",
  "GitHub",
  "JWT",
  "Cloudinary",
  "Netlify",
  "Vercel",
  "Render"
];

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-blue-400"
        >
          About Me
        </motion.h2>

        <div className="items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm a passionate **MERN Stack Developer** focused on building modern and scalable web applications. I love turning ideas into reality with clean code and user-friendly interfaces.
            </p>

            {/* Skills List Without Progress Bars */}
            <div className="grid max-[360px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-300">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-900 px-4 py-2 rounded-lg text-center shadow-md hover:shadow-lg hover:bg-gray-800 transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex max-sm:flex-col gap-2 justify-between"
          >
            <div className="flex items-center space-x-4 bg-gray-900 p-6 rounded-lg shadow-lg">
              <FaBriefcase className="text-4xl text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Under 1</h3>
                <p className="text-gray-300">Year Experience</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-900 p-6 rounded-lg shadow-lg">
              <FaCode className="text-4xl text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold text-blue-400">3+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
