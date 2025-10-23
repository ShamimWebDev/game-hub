import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { motion } from "motion/react";

// Wrap Link with motion for hover animations
const MotionLink = motion(Link);

const Navbar = () => {
  const { user, signOutFunc } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOutFunc();
      navigate("/signin");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-[#00FFFF]">
        GameHub
      </Link>

      {/* Middle navigation links */}
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-[#00FFFF] transition">Home</Link>
        <Link to="/allgames" className="hover:text-[#00FFFF] transition">All Games</Link>
        <Link to="/about-us" className="hover:text-[#00FFFF] transition">About Us</Link>
        <Link to="/contact" className="hover:text-[#00FFFF] transition">Contact</Link>
        <Link to="/faq" className="hover:text-[#00FFFF] transition">FAQ</Link>
      </div>

      {/* Right side: User/auth section */}
      <div className="flex items-center gap-4 relative">
        {user ? (
          <>
            {/* Profile Image */}
            <div
              className="relative w-12 h-12 cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              onClick={handleProfileClick}
            >
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt={user.displayName || "Profile"}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#00FFFF]"
              />
              {showDropdown && (
                <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-gray-800 p-2 rounded shadow-lg text-center z-50 w-max min-w-[120px]">
                  <p className="text-white font-semibold text-sm">
                    {user.displayName || "N/A"}
                  </p>
                  <p className="text-white text-xs">{user.email}</p>
                </div>
              )}
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition text-white font-semibold"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Signin Button */}
            <MotionLink
              to="/signin"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition text-white font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <FaSignInAlt /> Signin
            </MotionLink>

            {/* Register Button */}
            <MotionLink
              to="/register"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition text-white font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <FaUserPlus /> Register
            </MotionLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
