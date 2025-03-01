import Card from "../components/common/card";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center ">
        {/* Animated Heading */}
        <motion.h2
          className="text-5xl font-bold text-transparent bg-clip-text bg-blue-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
