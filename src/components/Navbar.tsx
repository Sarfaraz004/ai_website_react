import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import codepupLogo from "../assets/codepup-logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // current path

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    if (location.pathname === "/auth") {
      navigate("/"); // go home
    } else {
      navigate("/auth"); // go auth
    }
    setIsMobileMenuOpen(false);
  };

  // Show links only on home page
  const showLinks = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-xl">
                <img
                  src={codepupLogo}
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            <span className="text-2xl font-bold text-blue-800">
              Code<span className="text-blue-400">Pup</span>
            </span>
          </div>

          {/* DESKTOP LINKS */}
          {showLinks && (
            <div className="hidden md:flex items-center gap-8">
              <a href="#gallery" className="text-blue-800 hover:text-white transition-colors duration-200 font-medium">Gallery</a>
              <a href="#pricing" className="text-blue-800 hover:text-white transition-colors duration-200 font-medium">Pricing</a>
              <a href="#faq" className="text-blue-800 hover:text-white transition-colors duration-200 font-medium">FAQ</a>
              <a href="#demo" className="text-blue-800 hover:text-white transition-colors duration-200 font-medium">Demo</a>
            </div>
          )}

          {/* BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleButtonClick}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              {location.pathname === "/auth" ? "Go Home" : "Get Started"}
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-lg border-t border-gray-800 animate-slide-down">
          <div className="container mx-auto px-4 py-6 space-y-3">
            {showLinks && (
              <>
                <a href="#gallery" className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
                <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                <a href="#faq" className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                <a href="#demo" className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Demo</a>
              </>
            )}
            <button
              onClick={handleButtonClick}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              {location.pathname === "/auth" ? "Go Home" : "Get Started"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
