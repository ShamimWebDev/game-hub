import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black pt-12 pb-6 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="text-2xl font-bold mb-4 text-[#00FFFF] flex items-center gap-2">
            <span className="text-3xl">🎮</span> GameHub
          </Link>
          <p className="text-gray-400 mb-6">
            Your ultimate destination for discovering amazing indie games and
            supporting talented developers.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#00FFFF]">Games</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/allgames" className="hover:text-white transition-colors">
                All Games
              </Link>
            </li>
            <li>
              <Link to="/allgames?sort=newest" className="hover:text-white transition-colors">
                New Releases
              </Link>
            </li>
            <li>
              <Link to="/allgames?sort=popular" className="hover:text-white transition-colors">
                Popular Games
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#00FFFF]">
            Community
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/about-us" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Discord Server
              </a>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#00FFFF]">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-white transition-colors">
                Support Center
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} GameHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
