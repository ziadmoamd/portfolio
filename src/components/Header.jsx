 import React from "react";
import { motion } from "framer-motion";

function Home() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="home"
      className="w-full py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          custom={0}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 drop-shadow-lg"
        >
          Hi, I'm Ziad
        </motion.h2>

        <motion.p
          custom={1}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto drop-shadow-md"
        >
          I'm a <span className="font-bold text-cyan-400">Frontend Developer</span> 
          specializing in <span className="font-bold text-blue-400">React</span>. 
          I create modern, responsive web applications with clean code and stunning user experiences.
        </motion.p>

        <motion.div
          custom={2}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="flex justify-center flex-wrap gap-6"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            View Portfolio
          </button>
          <button className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:bg-gray-600 transition duration-300">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
