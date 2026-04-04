import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logosonghuong.jpeg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="Song Huong Imex Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Song Huong Imex
              </h1>
              <p className="text-xs text-slate-600">
                Premium Garment Manufacturer
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("production")}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Production
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection("quote")}
              className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-900 transition-colors font-medium"
            >
              Request Quote
            </button>
            <button className="flex items-center space-x-1 text-slate-600 hover:text-slate-900 transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm">EN</span>
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("production")}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Production
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection("quote")}
              className="block w-full text-left bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-900 transition-colors font-medium"
            >
              Request Quote
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
