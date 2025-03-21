import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Monitoring App",
    description: "A real-time CPU & RAM monitoring application built using Flask, Docker, and CI/CD deployment. The application is containerized and deployed on AWS EKS for efficient monitoring and scalability.",
    github: "https://github.com/DineshV22/cloud-native-monitoring-app",
    live: "https://github.com/DineshV22/cloud-native-monitoring-app",
  },
  {
    title: "Walmart Sales Analysis",
    description: "I analyzed Walmart sales data using Python and Pandas to uncover sales trends, customer behavior, and the impact of discounts. The project helped identify revenue patterns, best-selling categories, and spending habits through data visualization.",
    github: "https://github.com/DineshV22/Data-analysis/tree/main/Walmart-Sales-Analysis",
    live: "https://github.com/DineshV22/Data-analysis/tree/main/Walmart-Sales-Analysis",
  },
  {
    title: "Portfolio Website",
    description: "A dynamic and responsive portfolio website built using React and Tailwind CSS to showcase my projects, skills, and experience. The site features smooth animations, a modern UI, and a well-structured layout for easy navigation. It highlights my work through interactive elements and provides a seamless user experience.",
    github: "https://github.com/DineshV22/portfolio",
    live: "https://portfolio-pink-nine-76.vercel.app/",
  },
  {
    title: "ICC Champions Trophy Analysis",
    description: "I analyzed ICC Champions Trophy data (1998-2025) using Power BI to explore key insights like top-performing teams, Player of the Match awards, toss impact, and winning margins. The project includes visualizations like bar charts, pie charts, and line graphs to present the findings effectively.",
    github: "https://github.com/DineshV22/Data-analysis/tree/main/Champions%20Trophy",
    live: "https://github.com/DineshV22/Data-analysis/tree/main/Champions%20Trophy",
  }
];


const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-extrabold mb-10 drop-shadow-lg text-gray-200">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-3 text-center text-yellow-400">{project.title}</h2>
            <p className="text-lg text-center mb-4 text-gray-300">{project.description}</p>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-all flex items-center gap-2">
                <FaGithub /> GitHub
              </a>
               <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-teal-600 transition-all flex items-center gap-2">
                <FaExternalLinkAlt /> Live Demo
              </a> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
