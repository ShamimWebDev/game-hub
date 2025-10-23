import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { motion } from "motion/react";

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
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-[#00FFFF]">
        GameHub
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-[#00FFFF]">Home</Link>
        <Link to="/allgames" className="hover:text-[#00FFFF]">All Games</Link>
        <Link to="/about-us" className="hover:text-[#00FFFF]">About Us</Link>
        <Link to="/contact" className="hover:text-[#00FFFF]">Contact</Link>
        <Link to="/faq" className="hover:text-[#00FFFF]">FAQ</Link>
      </div>

      <div className="flex items-center gap-4 relative">
        {user ? (
          <>
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
            <motion.div
              className="relative flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full cursor-pointer overflow-hidden"
              whileHover={{ width: 120, borderRadius: 999 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/signin"
                className="flex items-center justify-center w-full h-full text-white px-2"
              >
                <FaSignInAlt />
                <motion.span
                  className="ml-2 whitespace-nowrap text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Signin
                </motion.span>
              </Link>
            </motion.div>

            {/* Register Button */}
            <motion.div
              className="relative flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full cursor-pointer overflow-hidden"
              whileHover={{ width: 140, borderRadius: 999 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/register"
                className="flex items-center justify-center w-full h-full text-white px-2"
              >
                <FaUserPlus />
                <motion.span
                  className="ml-2 whitespace-nowrap text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Register
                </motion.span>
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
