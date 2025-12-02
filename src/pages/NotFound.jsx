import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hook/useDocumentTitle";

const NotFound = () => {
    useDocumentTitle("404 - Page Not Found");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#00FFFF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#BE21E0] rounded-full blur-3xl"></div>
      </div>

      <div className="z-10 text-center">
          <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#BE21E0] mb-4 animate-pulse">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Oops! Level Not Found
          </h2>
          <p className="text-gray-400 mb-8 text-lg max-w-md mx-auto">
            The game level you are looking for seems to be missing or under maintenance. 
            Let's get you back to the main lobby.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-3 bg-[#00FFFF] text-gray-900 font-bold rounded-full hover:bg-[#00cccc] transition transform hover:scale-105 shadow-lg"
              >
                Go Home
              </Link>
              <Link
                to="/allgames"
                className="px-8 py-3 bg-gray-800 text-white font-bold rounded-full border border-gray-600 hover:bg-gray-700 transition transform hover:scale-105"
              >
                Browse Games
              </Link>
          </div>
      </div>
    </div>
  );
};

export default NotFound;
