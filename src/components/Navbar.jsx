import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = ({ isActive }) =>
    `hover:text-green-400 cursor-pointer ${
      isActive ? "text-green-400 font-bold" : ""
    }`;

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold text-green-400">
        GamesHub
      </NavLink>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/games" className={linkClasses}>
            Games
          </NavLink>
        </li>
        <li>
          <NavLink to="/developers" className={linkClasses}>
            Developers
          </NavLink>
        </li>
        <li>
          <NavLink to="/community" className={linkClasses}>
            Community
          </NavLink>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <NavLink to="/login">
          <button className="px-4 py-2 border border-green-400 rounded hover:bg-green-400 hover:text-black">
            Login
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="px-4 py-2 bg-green-400 text-black rounded hover:bg-green-500">
            Register
          </button>
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-green-400 text-2xl" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-center md:hidden space-y-4 py-4">
          <NavLink to="/" onClick={toggleMenu} className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/games" onClick={toggleMenu} className={linkClasses}>
            Games
          </NavLink>
          <NavLink
            to="/developers"
            onClick={toggleMenu}
            className={linkClasses}
          >
            Developers
          </NavLink>
          <NavLink to="/community" onClick={toggleMenu} className={linkClasses}>
            Community
          </NavLink>
          <NavLink to="/login" onClick={toggleMenu}>
            <button className="px-4 py-2 border border-green-400 rounded hover:bg-green-400 hover:text-black w-full">
              Login
            </button>
          </NavLink>
          <NavLink to="/register" onClick={toggleMenu}>
            <button className="px-4 py-2 bg-green-400 text-black rounded hover:bg-green-500 w-full">
              Register
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
