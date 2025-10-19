import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CodeXml, LogOut, Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/dashboard"
          className="font-extrabold text-2xl flex items-center gap-2"
        >
          <CodeXml className="text-[tomato] w-7 h-7" />
          <span className="font-serif tracking-wide">
            Ezzy<span className="text-[tomato]">Codes</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          <HashLink
            smooth
            to="/dashboard#about"
            className="hover:text-[tomato] transition-colors"
          >
            About
          </HashLink>
          <HashLink
            smooth
            to="/dashboard#services"
            className="hover:text-[tomato] transition-colors"
          >
            Services
          </HashLink>
          <HashLink
            smooth
            to="/dashboard#reviews"
            className="hover:text-[tomato] transition-colors"
          >
            Reviews
          </HashLink>
          <HashLink
            smooth
            to="/dashboard#contact"
            className="hover:text-[tomato] transition-colors"
          >
            Contact
          </HashLink>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/profile"
            className="hover:text-[tomato] font-medium transition-colors"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="bg-[tomato] text-black px-3 py-2 rounded-md hover:bg-white transition-all flex items-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 text-gray-200 border-t border-gray-800">
          <div className="flex flex-col items-center py-4 space-y-4">
            <HashLink
              smooth
              to="/dashboard#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[tomato]"
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="/dashboard#services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[tomato]"
            >
              Services
            </HashLink>
            <HashLink
              smooth
              to="/dashboard#reviews"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[tomato]"
            >
              Reviews
            </HashLink>
            <HashLink
              smooth
              to="/dashboard#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[tomato]"
            >
              Contact
            </HashLink>
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[tomato]"
            >
              Profile
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="bg-[tomato] text-black px-4 py-2 rounded-md hover:bg-white transition-all flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
