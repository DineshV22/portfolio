import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-800 to-black">
      {/* Dynamic Background Elements */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500 blur-[150px] opacity-30 rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-500 blur-[120px] opacity-30 rounded-full bottom-10 right-10 animate-pulse"></div>
      
      {/* Animated Name Text */}
      <motion.h1
        className="text-7xl font-extrabold drop-shadow-2xl text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Dinesh</span>
      </motion.h1>
      
      {/* Subtitle with a Glow Effect */}
      <motion.p
  className="text-xl mt-4 text-gray-300 tracking-wide drop-shadow-md text-center max-w-2xl"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  As a tech enthusiast, I am passionate about exploring and building innovative solutions. 
  I thrive on staying updated with emerging technologies and continuously enhancing my skills 
  to develop efficient and scalable applications. Whether it’s solving complex problems, 
  learning new frameworks, or pushing the boundaries of technology, I am always eager to innovate and grow.
</motion.p>
      
      {/* Call-to-Action Buttons */}
      <div className="mt-8 flex gap-6">
        <motion.a
          href="projects"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          View My Work 🚀  
        </motion.a>

        <motion.a
          href="contact"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Contact Me 📩
        </motion.a>
      </div>

    </div>
  );
};

export default Home;
