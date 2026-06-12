import React from "react";
import { motion } from "framer-motion";
import video from "../assets/Untitled design.mp4";

function Hero_Section() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
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
          className="text-lg md:text-2xl text-gray-300 mb-6 max-w-3xl drop-shadow-md"
        >
          I'm a <span className="font-bold text-cyan-400">Frontend Developer</span>{" "}
          specializing in <span className="font-bold text-blue-400">React</span>. 
          I create modern, responsive web applications with clean code and stunning user experiences.
        </motion.p>

        <motion.button
          custom={3}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-cyan-400 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-500 transition duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}

export default Hero_Section;


