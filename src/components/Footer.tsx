import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logoSH1.png";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img
                  src={logo}
                  alt="Song Huong Imex Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Song Huong Imex
                </h3>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Your trusted partner for premium garment manufacturing with
              international quality standards.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("production")}
                  className="hover:text-white transition-colors"
                >
                  Production Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("certificates")}
                  className="hover:text-white transition-colors"
                >
                  Certifications
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="hover:text-white transition-colors cursor-pointer">
                OEM Manufacturing
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Custom Design
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Private Label
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Quality Control
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Logistics Support
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span>Industrial Zone, Binh Duong Province, Vietnam</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <a
                  href="tel:+84123456789"
                  className="hover:text-white transition-colors"
                >
                  +84 123 456 789
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <a
                  href="mailto:sales@vietnamtextile.com"
                  className="hover:text-white transition-colors"
                >
                  sales@vietnamtextile.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              &copy; 2024 Vietnam Textile Co. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
