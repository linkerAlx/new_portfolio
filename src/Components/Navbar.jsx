import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Socials } from '../constants'; // Importing Socials from constants.js

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 z-[40] w-full h-[60px] bg-white flex justify-between items-center px-5 md:px-20 shadow-md">
      {/* Left: Logo and Name */}
      <div className="flex items-center gap-2">
        <img
          src="https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg"
          alt="logo"
          className="object-cover rounded-full w-10 h-10"
        />
        <h1 className="font-semibold bg-gradient-to-br from-gray-300 to-[#5F8184] bg-clip-text text-transparent">
          linker_arlene
        </h1>
      </div>

      {/* Right: Links or Menu Icon */}
      <div className="flex items-center">
        {/* Links for Large Screens */}
        <div className="hidden md:flex gap-5">
          {Socials.map((social, index) => (
            <NavLink
              key={index}
              to={social.path}
              className="font-bold hover:text-[#5F8184] transition-transform transform hover:scale-105"
            >
              {social.name}
            </NavLink>
          ))}
        </div>

        {/* Menu Icon for Small Screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[60px] right-0 bg-white w-full shadow-md p-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {Socials.map((social, index) => (
              <li key={index}>
                <NavLink
                  to={social.path}
                  className="font-bold hover:text-[#5F8184] transition-transform transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {social.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
