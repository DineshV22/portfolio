import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Khelo India Youth Games 2023",
    role: "Accreditation Team Core Member",
    description: "Managed athlete and staff accreditation, ensuring smooth event operations.",
    year: "2023",
  },
  {
    title: "CM Trophy 2024",
    role: "Venue Management Assistant",
    description: "Assisted in coordinating logistics and event execution.",
    year: "2024",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 px-6 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent)] pointer-events-none"></div>
      
      <motion.h2 
        className="text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg animate-pulse"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Experience
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/50 transition duration-500 transform hover:scale-105 hover:bg-white/20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-4xl font-bold text-cyan-300 mb-4">{exp.title}</h3>
            <p className="text-xl text-gray-300 mb-3 font-semibold">{exp.role}</p>
            <p className="text-md text-gray-400 leading-relaxed">{exp.description}</p>
            <span className="absolute top-4 right-5 text-lg font-bold text-cyan-300 bg-cyan-900/60 px-4 py-2 rounded-full shadow-md animate-glow">{exp.year}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
