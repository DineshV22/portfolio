import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaDiscord, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500 blur-[150px] opacity-30 rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-500 blur-[120px] opacity-30 rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg p-8 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl text-white border border-gray-600 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Let's Connect 🚀</h2>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-2xl mb-6">
          <a href="https://www.linkedin.com/in/dinesh-v-49757b162/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110 transition">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/its_dv360?igsh=MThlYzdqdjU5M2J1bQ==" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:scale-110 transition">
            <FaInstagram />
          </a>
          <a href="https://github.com/DineshV22?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:scale-110 transition">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:scale-110 transition">
            <FaTwitter />
          </a>
          <a href="https://discord.com/yourserver" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:scale-110 transition">
            <FaDiscord />
          </a>
        </div>

        {/* Gmail & Contact Number Buttons */}
        <div className="flex flex-col space-y-4 mb-6">
          <a href="mailto:your-email@example.com" className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-4 rounded-lg font-medium shadow-md">
            <FaEnvelope />
            <span>dineshv2212@gmail.com</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 transition text-white py-2 px-4 rounded-lg font-medium shadow-md">
            <FaPhone />
            <span>+91 6379621936</span>
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block font-medium text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/10 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300 text-sm"
              placeholder="Your Name"
            />
          </motion.div>
          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block font-medium text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/10 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300 text-sm"
              placeholder="Your Email"
            />
          </motion.div>
          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block font-medium text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 bg-white/10 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300 text-sm"
              placeholder="Your Message"
            ></textarea>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition duration-300 text-white py-2 rounded-lg font-semibold shadow-md text-sm"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
