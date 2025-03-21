import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0D1B2A] text-white fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#0D1B2A] lg:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <ul className="lg:flex space-y-4 lg:space-y-0 lg:space-x-6 text-lg p-4 lg:p-0">
            {["Home", "About","Skills", "Projects", "Freelancing", "Contact"].map(
              (item, index) => (
                <li key={index} onClick={() => setIsOpen(false)}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
                        : "hover:text-yellow-300 transition-all duration-300"
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
