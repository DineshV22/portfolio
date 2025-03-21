import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 px-6 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent)] pointer-events-none"></div>
      
      <motion.h2 
        className="text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg animate-pulse"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <p className="text-lg text-gray-300 text-center max-w-3xl mb-8 leading-relaxed">
      Hi, I'm Dinesh, a tech enthusiast passionate about innovation, problem-solving, and building impactful solutions. My journey started with a strong interest in data analytics, development, and cloud technologies, and over time, I have explored multiple domains, always eager to learn and adapt.

With experience in data analytics, I love uncovering insights that drive smarter decisions. In development, I focus on writing clean, scalable, and efficient code. And with cloud technologies, I explore ways to enhance performance and reliability.

Beyond coding, I thrive on exploring emerging tech, optimizing workflows, and crafting solutions that push boundaries. My approach is a blend of creativity and logic, ensuring that every project I work on is both innovative and functional.

I am always open to collaborations, freelancing opportunities, and exciting challenges. If you have a project in mind or just want to chat about tech, feel free to connect!

🚀 Let’s build something amazing together!
      </p>

      <p className="text-lg text-gray-400 text-center max-w-3xl mb-10 italic">
        "Driven by curiosity, powered by technology, and inspired by creativity."
      </p>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        {["Tech Enthusiast", "Problem Solver", "Creative Thinker", "Innovative Coder"].map((tag, index) => (
          <motion.span 
            key={index}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-full shadow-lg text-white font-semibold text-sm md:text-base cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default About;
