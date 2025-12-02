import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaSignInAlt, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

// Wrap Link with motion for hover animations
const MotionLink = motion(Link);

/**
 * Navbar Component
 * 
 * The main navigation bar for the application.
 * Features:
 * - Sticky positioning with backdrop blur on scroll.
 * - Responsive mobile menu with hamburger toggle.
 * - User authentication status display (Login/Register vs Profile/Logout).
 * - Navigation links to all main pages.
 */
const Navbar = () => {
  const { user, signOutFunc } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Items", path: "/allgames" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg py-2" : "bg-gray-900 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#00FFFF] flex items-center gap-2">
           <span className="text-3xl">🎮</span> GameHub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-[#00FFFF]"
                  : "text-gray-300 hover:text-[#00FFFF]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side: User/auth section */}
        <div className="hidden md:flex items-center gap-4 relative">
          {user ? (
            <>
              {/* Profile Image */}
              <div
                className="relative cursor-pointer group"
                onClick={handleProfileClick}
              >
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt={user.displayName || "Profile"}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#00FFFF] transition-transform group-hover:scale-105"
                />
                
                {/* Dropdown on hover */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-md shadow-xl py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                   <div className="px-4 py-2 border-b border-gray-700">
                    <p className="text-white font-semibold text-sm truncate">
                      {user.displayName || "User"}
                    </p>
                    <p className="text-gray-400 text-xs truncate">{user.email}</p>
                  </div>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                    Profile
                  </Link>
                   <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <MotionLink
                to="/signin"
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <FaSignInAlt /> Login
              </MotionLink>

              <MotionLink
                to="/register"
                className="flex items-center gap-2 px-4 py-2 bg-[#00FFFF] text-gray-900 rounded-full hover:bg-[#00cccc] transition font-bold shadow-lg shadow-[#00FFFF]/20"
                whileHover={{ scale: 1.05 }}
              >
                <FaUserPlus /> Register
              </MotionLink>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 border-t border-gray-700 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? "bg-gray-900 text-[#00FFFF]"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="border-t border-gray-700 my-2 pt-2">
                 {user ? (
                    <>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <img
                          src={user.photoURL || "https://via.placeholder.com/150"}
                          alt="Profile"
                          className="w-8 h-8 rounded-full border border-[#00FFFF]"
                        />
                        <div>
                           <p className="text-white text-sm font-medium">{user.displayName}</p>
                           <p className="text-gray-400 text-xs">{user.email}</p>
                        </div>
                      </div>
                      <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-400 hover:bg-gray-700 hover:text-red-300"
                      >
                        Logout
                      </button>
                    </>
                 ) : (
                   <div className="flex flex-col gap-2 px-3">
                      <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)} className="block text-center py-2 text-gray-300 hover:text-white border border-gray-600 rounded-md">
                        Login
                      </Link>
                      <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="block text-center py-2 bg-[#00FFFF] text-gray-900 font-bold rounded-md">
                        Register
                      </Link>
                   </div>
                 )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
