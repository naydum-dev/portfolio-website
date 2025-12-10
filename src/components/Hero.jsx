import React from "react";
import { motion } from "framer-motion";

const Hero = ({ name, role, bio }) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-bold text-white mb-4"
        >
          {name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-purple-500 font-semibold mb-6"
        >
          {role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-400 leading-relaxed mb-8"
        >
          {bio}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-purple-600 text-purple-500 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
