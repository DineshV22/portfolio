import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "SAP ABAP", "SQL"],
    color: "from-blue-500 to-blue-700",
    glow: "shadow-blue-500",
  },
  {
    category: "Tools & Technologies",
    skills: ["Power BI", "Flask", "Docker", "AWS", "Kubernetes","Git","Vs Code","SAP"],
    color: "from-purple-500 to-purple-700",
    glow: "shadow-purple-500",
  },
  {
    category: "Operating Systems",
    skills: ["Windows", "Linux"],
    color: "from-green-500 to-green-700",
    glow: "shadow-green-500",
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Communication", "Problem-Solving"," Multitasking"],
    color: "from-yellow-500 to-yellow-700",
    glow: "shadow-yellow-500",
  },
  {
    category: "Sports & Management",
    skills: ["Event Coordination", "Athlete Engagement","Event Management","Business Operations","Strategic Planning"],
    color: "from-red-500 to-red-700",
    glow: "shadow-red-500",
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-40"
          animate={{ x: [0, 200, -200, 0], y: [0, 100, -100, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-40"
          animate={{ x: [0, -150, 150, 0], y: [0, -80, 80, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        />
        <motion.div
          className="absolute left-10 top-20 w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-30"
          animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        />
      </div>

      <motion.h2
        className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 drop-shadow-lg animate-pulse"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {skillsData.map((skillSet, index) => (
          <motion.div
            key={index}
            className={`p-5 rounded-xl shadow-lg bg-gradient-to-br ${skillSet.color} transform transition duration-300 hover:scale-105 hover:shadow-xl ${skillSet.glow}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-3 text-center tracking-wide">
              {skillSet.category}
            </h3>
            <ul className="space-y-2">
              {skillSet.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  className="text-sm bg-black/20 p-2 rounded-md text-center transition duration-300 hover:bg-white hover:text-black"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;7