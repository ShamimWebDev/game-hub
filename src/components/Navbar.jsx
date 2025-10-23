import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

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

      {/* Middle navigation links */}
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-[#00FFFF]">
          Home
        </Link>
        <Link to="/allgames" className="hover:text-[#00FFFF]">
          All Games
        </Link>
        <Link to="/about-us" className="hover:text-[#00FFFF]">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-[#00FFFF]">
          Contact
        </Link>
        <Link to="/faq" className="hover:text-[#00FFFF]">
          FAQ
        </Link>
      </div>

      {/* Right side user/auth section */}
      <div className="flex items-center gap-4 relative">
        {user ? (
          <>
            {/* Profile Picture */}
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
            <Link
              to="/signin"
              className="flex items-center gap-1 px-4 py-2 hover:text-[#00FFFF]"
            >
              <FaSignInAlt /> Signin
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-1 px-4 py-2 hover:text-[#00FFFF]"
            >
              <FaUserPlus /> Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
