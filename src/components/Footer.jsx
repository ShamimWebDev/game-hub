import React from "react";

const Footer = () => {
  return (
    <div>
        <footer className="bg-black pt-12 pb-6 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold mb-2 text-[#00FFFF]">GameHub</h1>
          <p className="text-[#4D524C]">
            Your ultimate destination for discovering amazing indie games and
            supporting talented developers.
          </p>
        </div>

        {/* Games Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#00FFFF]">Games</h3>
          <ul className="space-y-2 text-[#4D524C]">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Popular Games
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                New Releases
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Categories
              </a>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#00FFFF]">Community</h3>
          <ul className="space-y-2 text-[#4D524C]">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Forums
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#00FFFF]">Support</h3>
          <ul className="space-y-2 text-[#4D524C]">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-[#4D524C] text-sm">
        © 2025 GameHub. All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Footer;
